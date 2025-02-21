"use strict";

const IMAGE_PATH = "assets/images";
const DATA_URL = "data/cards.json";

const truncateText = (text, maxLength = 90) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

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

    cards.forEach((cardData, index) => {
      const chapterNumber = index + 1;
      const lowerCaseQuery = query.toLowerCase().trim();
      const titleMatch = cardData.title.toLowerCase().includes(lowerCaseQuery);
      const chapterMatch = chapterNumber.toString().includes(lowerCaseQuery);

      if (query && !titleMatch && !chapterMatch) return;

      const card = document.createElement("div");
      card.classList.add("modern-card");
      card.setAttribute("data-title", cardData.title.toLowerCase());
      card.setAttribute("data-chapter", chapterNumber.toString());

      card.innerHTML = `
        <img src="${IMAGE_PATH}/${cardData.image}" alt="Capítulo ${chapterNumber}" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">Capítulo ${chapterNumber}: ${cardData.title}</h3>
          <p class="card-text">${truncateText(cardData.description)}</p>
          <a href="./${cardData.url}" class="card-link">Ler mais &rarr;</a>
        </div>
      `;

      containerCards.appendChild(card);
    });
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
    if (searchInput.value.trim() === "") {
      loadDOMCards();
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  loadDOMCards();
  setupSearchTrigger();
});
