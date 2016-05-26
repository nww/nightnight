package codeserver

import (
	"io/ioutil"
	"net/http"
	"regexp"
	"strconv"
	"strings"
	"text/template"
)

var codeURLPattern = regexp.MustCompile(`^/js/(\d{4,})/(\d{4,})/nightnight.js$`)

var codeTmpl *template.Template

func init() {
	http.HandleFunc("/js/", codeHandler)

	b, err := ioutil.ReadFile("nightnight.js")
	if err != nil {
		panic(err)
	}

	codeTmpl, err = template.New("*").Parse(string(b))
	if err != nil {
		panic(err)
	}

	http.HandleFunc("/test", testHandler)
}

func codeHandler(w http.ResponseWriter, r *http.Request) {
	begin, end := extractBeginEnd(r.URL.Path)
	if begin == "" || end == "" {
		http.NotFound(w, r)
		return
	}

	bh, bm := extractHoursMinutes(begin)
	eh, em := extractHoursMinutes(end)

	header := w.Header()
	header.Set("Content-Type", "application/javascript; charset=utf-8")
	header.Set("X-Robots-Tag", "noindex")

	header.Set("Cache-Control", "max-age=3600")
	header.Add("Cache-Control", "must-revalidate")

	codeTmpl.Execute(w, struct {
		BeginHours, BeginMinutes, EndHours, EndMinutes int
	}{
		bh, bm, eh, em,
	})
}

func extractBeginEnd(path string) (string, string) {
	matches := codeURLPattern.FindAllStringSubmatch(path, 1)
	if matches == nil {
		return "", ""
	}

	return matches[0][1], matches[0][2]
}

func extractHoursMinutes(s string) (int, int) {
	h, _ := strconv.Atoi(s[:2])
	m, _ := strconv.Atoi(s[2:])

	return h % 24, m % 60
}

var cspDirectives = strings.Join([]string{
	"default-src 'none'",
	"script-src https://code.nightnight.xn--q9jyb4c/js/",
}, "; ")

func testHandler(w http.ResponseWriter, r *http.Request) {
	// w.Header().Set("Content-Security-Policy", cspDirectives)

	w.Write([]byte(
		`<!DOCTYPE html>
		<html>
		<head>
			<title></title>
		</head>
		<body>
			<p>These are the page contents. Go <a href="https://code-dot-night-night.appspot.com/test">here</a> to test.</p>
			<script async src="https://code.nightnight.xn--q9jyb4c/js/0900/0600/nightnight.js"></script>
		</body>
		</html>`,
	))
}
