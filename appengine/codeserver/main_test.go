package codeserver

import (
	"testing"
)

func TestExtractBeginEnd(t *testing.T) {
	tests := []struct {
		path, begin, end string
	}{
		{"/code/1234/4321/nightnight.js", "1234", "4321"},
		{"/code/1234/4321/nightnight.js/1234/4321", "", ""},
	}

	for i, tt := range tests {
		begin, end := extractBeginEnd(tt.path)
		if begin != tt.begin {
			t.Errorf("[%d] begin: want %q, got %q", i, tt.begin, begin)
		}

		if end != tt.end {
			t.Errorf("[%d] end: want %q, got %q", i, tt.end, end)
		}
	}
}

func TestExtractHoursMinutes(t *testing.T) {
	tests := []struct {
		s    string
		h, m int
	}{
		{"0601", 6, 1},
		{"1234", 12, 34},
		{"2574", 1, 14},
	}

	for i, tt := range tests {
		h, m := extractHoursMinutes(tt.s)
		if h != tt.h {
			t.Errorf("[%d] h: want %d, got %d", i, tt.h, h)
		}

		if m != tt.m {
			t.Errorf("[%d] m: want %d, got %d", i, tt.m, m)
		}
	}
}
