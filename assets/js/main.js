"use strict";

const cards = [
  {
    title: "Introdução ao Dblocks",
    image: "inicialdblocks.png",
    description:
      "Nesta parte do livro, vamos entender os conceitos básicos de programação em blocos e por que ela pode ser uma ótima forma de aprender a programar.",
  },
  {
    title: "Variáveis e Atribuições",
    image: "christmas-background-1864718_1280.jpg",
    description:
      "Veja como criar e manipular variáveis dentro de uma abordagem de programação em blocos, entendendo as estruturas básicas para armazenamento de dados.",
  },
  {
    title: "Estruturas de Controle",
    image: "cap3.jpg",
    description:
      "Aprenda sobre blocos condicionais e loops que permitem criar fluxos de execução mais complexos, tornando seu programa inteligente.",
  },
];

const IMAGE_PATH = "assets/images";

const loadDOMCards = () => {
  const containerCards = document.getElementById("container-cards");

  if (!containerCards) {
    console.error("Elemento #container-cards não encontrado.");
    return;
  }

  containerCards.innerHTML = "";

  cards.forEach((cardData, index) => {
    const chapterNumber = index + 1;

    const card = document.createElement("div");
    card.classList.add("modern-card");
    card.setAttribute("data-title", cardData.title.toLowerCase());
    card.setAttribute("data-chapter", chapterNumber.toString());

    card.innerHTML = `
      <img src="${IMAGE_PATH}/${cardData.image}" alt="Capítulo ${chapterNumber}" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">Capítulo ${chapterNumber}: ${cardData.title}</h3>
        <p class="card-text">${cardData.description}</p>
        <a href="subchapters.html" class="card-link">Ler mais &rarr;</a>
      </div>
    `;

    containerCards.appendChild(card);
  });
};

const filterCards = (query) => {
  const allCards = document.querySelectorAll(".modern-card");
  const lowerCaseQuery = query.toLowerCase().trim();

  allCards.forEach((card) => {
    const title = card.getAttribute("data-title");
    const chapter = card.getAttribute("data-chapter");

    card.style.display = title.includes(lowerCaseQuery) || chapter.includes(lowerCaseQuery) ? "block" : "none";
  });
};

const setupMobileMenu = () => {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuButton || !mobileMenu) {
    console.error("Menu mobile não encontrado.");
    return;
  }

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
};

const setupSearchFilter = () => {
  const searchInput = document.querySelector('input[type="text"]');

  if (!searchInput) {
    console.error("Campo de busca não encontrado.");
    return;
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    filterCards(query);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  loadDOMCards();
  setupMobileMenu();
  setupSearchFilter();
});
