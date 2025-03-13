const LANGUAGE_NAMES = {
  en: "EN",
  "pt-br": "PT",
  es: "ES",
};

const LANG_SELECTED = "pt-br";

const PATH_IMAGE_FLAGS = {
  en: "/assets/images/usa.svg",
  "pt-br": "/assets/images/brazil.svg",
  es: "/assets/images/spanish.svg",
};

function applyTranslations() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (MSG[key]) {
      element.innerHTML = MSG[key];
    }
  });
}

function changeLanguage() {
  var languageMenu = document.getElementById("languageMenu");
  var newLang = languageMenu.options[languageMenu.selectedIndex].value;

  var flagElement = document.getElementById("languageFlag");
  if (flagElement) {
    flagElement.src = PATH_IMAGE_FLAGS[newLang] || "landing/media/brazil.svg";
    flagElement.alt = LANGUAGE_NAMES[newLang] || "Language";
  }

  var search = window.location.search;
  if (search.length <= 1) {
    search = "?lang=" + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, "$1" + newLang);
  } else {
    search = search.replace(/\?/, "?lang=" + newLang + "&");
  }

  window.location =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    search;
}

function getLang() {
  var urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get("lang");

  if (paramLang) return paramLang;

  return LANG_SELECTED;
}

function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = callback || function () {};
  document.head.appendChild(script);
}

function initLanguage(callback) {
  const LANG = getLang();

  let flagElement = document.getElementById("languageFlag");
  if (flagElement) {
    flagElement.src = PATH_IMAGE_FLAGS[LANG] || "assets/images/brazil.svg";
    flagElement.alt = LANGUAGE_NAMES[LANG] || "Language";
  }

  loadScript("/assets/js/lang/" + LANG + ".js", function () {
    document.dir = "ltr";
    document.head.parentElement.setAttribute("lang", LANG);

    var languages = [];
    for (var lang in LANGUAGE_NAMES) {
      languages.push([LANGUAGE_NAMES[lang], lang]);
    }
    languages.sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });

    var languageMenu = document.getElementById("languageMenu");
    languageMenu.options.length = 0;
    languages.forEach(function (tuple) {
      var option = new Option(tuple[0], tuple[1]);
      if (tuple[1] === LANG) {
        option.selected = true;
      }
      languageMenu.options.add(option);
    });

    languageMenu.addEventListener("change", changeLanguage, true);

    if (callback) callback();
  });
}
