"use strict";

const IMAGE_PATH = "assets/images";
const DATA_URL = "data/cards.json";

function stripHtml(html) {
  if (!html) return "";
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || "").trim();
}

const loadDOMCards = async (query = "") => {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Erro ao carregar os dados.");

    const cards = await response.json();
    const containerCards = document.getElementById("container-cards");

    if (!containerCards) {
      console.error("Elemento #container-cards não encontrado.");
      return;
    }

    containerCards.innerHTML = "";
    const lowerCaseQuery = query.toLowerCase().trim();

    cards.forEach((cardData, index) => {
      const chapterNumber = index + 1;
      let combinedSearchableText = "";

      if (MSG[cardData.title_key]) {
        combinedSearchableText +=
          stripHtml(MSG[cardData.title_key]).toLowerCase() + " ";
      }

      if (MSG[cardData.description_key]) {
        combinedSearchableText +=
          stripHtml(MSG[cardData.description_key]).toLowerCase() + " ";
      }

      if (cardData.keyword_keys && Array.isArray(cardData.keyword_keys)) {
        cardData.keyword_keys.forEach((key) => {
          if (MSG[key] && typeof MSG[key] === "string") {
            combinedSearchableText += MSG[key].toLowerCase() + " ";
          }
        });
      }

      combinedSearchableText += chapterNumber.toString() + " ";

      if (lowerCaseQuery && !combinedSearchableText.includes(lowerCaseQuery)) {
        return;
      }

      const card = document.createElement("div");
      card.classList.add("modern-card");
      card.setAttribute(
        "data-title",
        MSG[cardData.title_key]
          ? stripHtml(MSG[cardData.title_key]).toLowerCase()
          : ""
      );
      card.setAttribute("data-chapter", chapterNumber.toString());

      card.innerHTML = `
        <img src="${IMAGE_PATH}/${cardData.image}" alt="${
        MSG[cardData.title_key] || "Card Image"
      }" class="card-image" />
        <div class="card-content">
          <h3 data-translate="${cardData.title_key}" class="card-title"></h3>
          <p data-translate="${cardData.description_key}" class="card-text"></p>
          <a href="./${cardData.url}" class="card-link">Ler mais →</a>
        </div>
      `;

      card.addEventListener("click", () => {
        window.location.href = `./${cardData.url}`;
      });

      containerCards.appendChild(card);
    });

    applyTranslations();
  } catch (error) {
    console.error("Erro ao carregar os cards:", error);
  }
};

const setupSearchTrigger = () => {
  const searchInput = document.querySelector('input[type="text"]');
  const searchButton = document.getElementById("btn-search");

  if (!searchInput || !searchButton) {
    console.error("Campo de busca ou botão de busca não encontrado.");
    return;
  }

  const handleSearch = () => {
    const query = searchInput.value.trim();
    loadDOMCards(query);
  };
  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    loadDOMCards(query);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  initLanguage(() => {
    loadDOMCards();
    setupSearchTrigger();
  });
});
