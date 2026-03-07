;

(function(){
	var scriptSrc = document.currentScript.src;
	var params = new URL(scriptSrc).searchParams;
	var sleep = params.get('sleep') || '2200';
	var wake = params.get('wake') || '0600';
	var bh = parseInt(sleep.substring(0,2), 10) % 24;
	var bm = parseInt(sleep.substring(2), 10) % 60;
	var eh = parseInt(wake.substring(0,2), 10) % 24;
	var em = parseInt(wake.substring(2), 10) % 60;

	var scriptOrigin = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);

	// Translations
	var translations = {
		en: {
			late: "It\u2019s late\u2026",
			important: "Nothing we can offer you is more important than your sleep.",
			dreams: "Sleep well, sweet dreams, and we will catch you in the morning.",
			wakeup: "This site will wake up at ",
			skip: "I\u2019ll sleep later, I really need to use this site right now \u2192"
		},
		es: {
			late: "Es tarde\u2026",
			important: "Nada de lo que podemos ofrecerte es m\u00e1s importante que tu sue\u00f1o.",
			dreams: "Duerme bien, dulces sue\u00f1os, y nos vemos por la ma\u00f1ana.",
			wakeup: "Este sitio se despertar\u00e1 a las ",
			skip: "Dormir\u00e9 despu\u00e9s, necesito usar este sitio ahora \u2192"
		},
		fr: {
			late: "Il est tard\u2026",
			important: "Rien de ce que nous pouvons vous offrir n\u2019est plus important que votre sommeil.",
			dreams: "Dormez bien, faites de beaux r\u00eaves, et \u00e0 demain matin.",
			wakeup: "Ce site se r\u00e9veillera \u00e0 ",
			skip: "Je dormirai plus tard, j\u2019ai vraiment besoin de ce site maintenant \u2192"
		},
		de: {
			late: "Es ist sp\u00e4t\u2026",
			important: "Nichts, was wir dir bieten k\u00f6nnen, ist wichtiger als dein Schlaf.",
			dreams: "Schlaf gut, tr\u00e4um sch\u00f6n, und wir sehen uns morgen fr\u00fch.",
			wakeup: "Diese Seite wacht auf um ",
			skip: "Ich schlafe sp\u00e4ter, ich muss diese Seite jetzt nutzen \u2192"
		},
		pt: {
			late: "\u00c9 tarde\u2026",
			important: "Nada que possamos te oferecer \u00e9 mais importante que o seu sono.",
			dreams: "Durma bem, bons sonhos, e nos vemos pela manh\u00e3.",
			wakeup: "Este site vai acordar \u00e0s ",
			skip: "Vou dormir depois, preciso usar este site agora \u2192"
		},
		ja: {
			late: "\u3082\u3046\u9045\u3044\u6642\u9593\u3067\u3059\u2026",
			important: "\u79c1\u305f\u3061\u304c\u63d0\u4f9b\u3067\u304d\u308b\u3082\u306e\u306e\u4e2d\u3067\u3001\u3042\u306a\u305f\u306e\u7761\u7720\u3088\u308a\u5927\u5207\u306a\u3082\u306e\u306f\u3042\u308a\u307e\u305b\u3093\u3002",
			dreams: "\u304a\u3084\u3059\u307f\u306a\u3055\u3044\u3002\u826f\u3044\u5922\u3092\u3002\u307e\u305f\u660e\u65e5\u3002",
			wakeup: "\u3053\u306e\u30b5\u30a4\u30c8\u306e\u8d77\u5e8a\u6642\u9593: ",
			skip: "\u5f8c\u3067\u5bdd\u307e\u3059\u3002\u4eca\u3059\u3050\u3053\u306e\u30b5\u30a4\u30c8\u3092\u4f7f\u3044\u305f\u3044\u3067\u3059 \u2192"
		},
		zh: {
			late: "\u5f88\u665a\u4e86\u2026",
			important: "\u6211\u4eec\u80fd\u63d0\u4f9b\u7ed9\u4f60\u7684\u4e00\u5207\uff0c\u90fd\u6bd4\u4e0d\u4e0a\u4f60\u7684\u7761\u7720\u91cd\u8981\u3002",
			dreams: "\u665a\u5b89\uff0c\u597d\u68a6\uff0c\u660e\u65e9\u89c1\u3002",
			wakeup: "\u672c\u7ad9\u6062\u590d\u65f6\u95f4: ",
			skip: "\u6211\u7a0d\u540e\u518d\u7761\uff0c\u6211\u73b0\u5728\u771f\u7684\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u7f51\u7ad9 \u2192"
		},
		ko: {
			late: "\ub2a6\uc740 \uc2dc\uac04\uc774\uc5d0\uc694\u2026",
			important: "\uc6b0\ub9ac\uac00 \ub4dc\ub9b4 \uc218 \uc788\ub294 \uadf8 \uc5b4\ub5a4 \uac83\ub3c4 \ub2f9\uc2e0\uc758 \uc218\uba74\ubcf4\ub2e4 \uc18c\uc911\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
			dreams: "\ud478\uc6b1 \uc8fc\ubb34\uc138\uc694. \uc88b\uc740 \uafc8 \uafb8\uc138\uc694. \ub0b4\uc77c \uc544\uce68\uc5d0 \ub9cc\ub098\uc694.",
			wakeup: "\uc0ac\uc774\ud2b8 \uae30\uc0c1 \uc2dc\uac04: ",
			skip: "\ub098\uc911\uc5d0 \uc7a0\uc790\uaca0\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \uc774 \uc0ac\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4 \u2192"
		},
		hi: {
			late: "\u092c\u0939\u0941\u0924 \u0930\u093e\u0924 \u0939\u094b \u0917\u0908 \u0939\u0948\u2026",
			important: "\u0939\u092e \u0906\u092a\u0915\u094b \u091c\u094b \u0915\u0941\u091b \u092d\u0940 \u0926\u0947 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0909\u0938\u092e\u0947\u0902 \u0938\u0947 \u0915\u0941\u091b \u092d\u0940 \u0906\u092a\u0915\u0940 \u0928\u0940\u0902\u0926 \u0938\u0947 \u091c\u093c\u094d\u092f\u093e\u0926\u093e \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",
			dreams: "\u0905\u091a\u094d\u091b\u0940 \u0928\u0940\u0902\u0926 \u0932\u0940\u091c\u093f\u090f\u0964 \u092e\u0940\u0920\u0947 \u0938\u092a\u0928\u0947\u0964 \u0938\u0941\u092c\u0939 \u092e\u093f\u0932\u0924\u0947 \u0939\u0948\u0902\u0964",
			wakeup: "\u0938\u093e\u0907\u091f \u091c\u093e\u0917\u0928\u0947 \u0915\u093e \u0938\u092e\u092f: ",
			skip: "\u092e\u0948\u0902 \u092c\u093e\u0926 \u092e\u0947\u0902 \u0938\u094b\u090a\u0901\u0917\u093e, \u092e\u0941\u091d\u0947 \u0905\u092d\u0940 \u092f\u0939 \u0938\u093e\u0907\u091f \u0926\u0947\u0916\u0928\u0940 \u0939\u0948 \u2192"
		},
		ar: {
			late: "\u0627\u0644\u0648\u0642\u062a \u0645\u062a\u0623\u062e\u0631\u2026",
			important: "\u0644\u0627 \u0634\u064a\u0621 \u064a\u0645\u0643\u0646\u0646\u0627 \u062a\u0642\u062f\u064a\u0645\u0647 \u0644\u0643 \u0623\u0647\u0645 \u0645\u0646 \u0646\u0648\u0645\u0643.",
			dreams: "\u0646\u0645 \u062c\u064a\u062f\u064b\u0627\u060c \u0623\u062d\u0644\u0627\u0645\u064b\u0627 \u0633\u0639\u064a\u062f\u0629\u060c \u0648\u0646\u0631\u0627\u0643 \u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d.",
			wakeup: "\u0633\u064a\u0633\u062a\u064a\u0642\u0638 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0633\u0627\u0639\u0629 ",
			skip: "\u0633\u0623\u0646\u0627\u0645 \u0644\u0627\u062d\u0642\u064b\u0627\u060c \u0623\u062d\u062a\u0627\u062c \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0622\u0646 \u2190"
		}
	};

	// Language detection: param override > browser language > English
	var lang = params.get('lang');
	if (!lang) {
		var browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
		lang = translations[browserLang] ? browserLang : 'en';
	} else {
		lang = translations[lang] ? lang : 'en';
	}
	var t = translations[lang];
	var isRTL = (lang === 'ar');

	window.nightnightHide = function() {
		var banners = document.getElementsByClassName('nightnight');

		for (var i = 0; i < banners.length; i++) {
			banners[i].style.display = 'none';
		}

		try {
			var now = new Date();
			var wakeTime = new Date(now);
			wakeTime.setHours(eh, em, 0, 0);
			if (wakeTime <= now) {
				wakeTime.setDate(wakeTime.getDate() + 1);
			}
			localStorage.setItem('nightnight_bypass', wakeTime.getTime());
		} catch(ignore) {}
	};

	var d = new Date();
	var m = d.getHours() * 60 + d.getMinutes();

	var use12HourClock = true;

	var b = bh * 60 + bm;
	var e = eh * 60 + em;

	if (b < e) {
		console.log("WARNING: NightNight: invalid time interval: sleep time is earlier in the day than wakeup time");
		return
	}

	// Check for a valid bypass
	try {
		var bypass = localStorage.getItem('nightnight_bypass');
		if (bypass && Number(bypass) > Date.now()) {
			return;
		}
		localStorage.removeItem('nightnight_bypass');
	} catch(ignore) {}

	if (m >= b || m <= e) {
		console.log('NightNight activated')

		// Inject CSS
		var css = '.nightnight {background: #000; font-family: Arial, sans-serif; color: #fff; font-size: 12px; padding: 10%; position: fixed; margin: 0; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; box-sizing: border-box; } .nightnight-skip a {padding: 10px 0; } .nightnight a:link {color: #555; } .nightnight a:visited {color: #555; } .nightnight a:hover {color: #FFF; } .nightnight-timing {font-size: 15px; font-weight: 900; margin-top: 20px; } .nightnight-skip {font-style: italic; font-size: 14px; margin-top: 40px; } .nightnight-credits {position: fixed; bottom: 20px; right: 20px; margin-top: 40px; font-size:9px; } [dir="rtl"] .nightnight {text-align: right; } [dir="rtl"] .nightnight-credits {right: auto; left: 20px; }';
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);

		// Format time
		var time = ''
		if (use12HourClock) {
			var suffix = eh < 12 ? "AM" : "PM"
			time = (eh % 13) + ":" + ("0"+em).slice(-2) + " " + suffix;
		} else {
			time = ("0"+eh).slice(-2) + ":" + ("0"+em).slice(-2)
		}

		// Inject DIV
		var wrapper = document.createElement('div');
		if (isRTL) wrapper.setAttribute('dir', 'rtl');
		wrapper.innerHTML = '<div class="nightnight"><div>' + t.late + '</div><div> ' + t.important + '</div> <div> ' + t.dreams + '</div> <div class="nightnight-timing">' + t.wakeup + time + '</div> <div class="nightnight-skip"> <a href="javascript:nightnightHide()">' + t.skip + '</a> </div> <div class="nightnight-credits"> <a href="https://www.nightnight.xn--q9jyb4c"><img src="' + scriptOrigin + 'static/night_night_everyone_white.png" alt="night night" height="32" width="161"></a></div> </div>';
		document.body.appendChild(wrapper);
	}
})();
