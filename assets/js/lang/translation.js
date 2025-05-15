const LANGUAGE_NAMES = {
  en: "EN",
  "pt-br": "PT",
  es: "ES",
};

const PATH_IMAGE_FLAGS = {
  en: "/assets/images/usa.svg",
  "pt-br": "/assets/images/brazil.svg",
  es: "/assets/images/spanish.svg",
};

const LANG_SELECTED = "pt-br";

function applyTranslations() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (MSG[key]) {
      element.innerHTML = MSG[key];
    }
  });
}

function getLang() {
  return localStorage.getItem("selectedLang") || detectBrowserLanguage();
}

function changeLanguage() {
  const languageMenu = document.getElementById("languageMenu");
  const newLang = languageMenu.options[languageMenu.selectedIndex].value;

  localStorage.setItem("selectedLang", newLang);

  location.reload();
}

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback || function () {};
  document.head.appendChild(script);
}

function initLanguage(callback) {
  const LANG = getLang();

  const flagElement = document.getElementById("languageFlag");
  if (flagElement) {
    flagElement.src = PATH_IMAGE_FLAGS[LANG] || "/assets/images/brazil.svg";
    flagElement.alt = LANGUAGE_NAMES[LANG] || "Language";
  }

  loadScript("/assets/js/lang/" + LANG + ".js", function () {
    document.dir = "ltr";
    document.head.parentElement.setAttribute("lang", LANG);

    const languageMenu = document.getElementById("languageMenu");
    languageMenu.options.length = 0;

    const sortedLanguages = Object.entries(LANGUAGE_NAMES).sort((a, b) =>
      a[1].localeCompare(b[1])
    );

    sortedLanguages.forEach(([langCode, label]) => {
      const option = new Option(label, langCode);
      if (langCode === LANG) option.selected = true;
      languageMenu.options.add(option);
    });

    languageMenu.addEventListener("change", changeLanguage, true);

    if (callback) callback();
  });
}

initLanguage(function () {
  applyTranslations();

  const key = "en_info_micropython_page";
  const el = document.querySelector(`[data-translate="${key}"]`);
  if (el && MSG[key]) {
    el.innerHTML = MSG[key];
  }
});

function detectBrowserLanguage() {
  const browserLang = navigator.language.toLowerCase();
  if (LANGUAGE_NAMES[browserLang]) return browserLang;
  return LANG_SELECTED;
}
