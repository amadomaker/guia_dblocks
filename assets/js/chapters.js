const IMAGE_PATH = "../assets/images";
const DATA_URL = "../data/cards.json";

const currentChapterUrl = window.location.pathname.substring(1);

const loadDomChapters = async () => {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Erro ao carregar os dados.");

    const chaptersData = await response.json();
    const containerChapters = document.getElementById("chapters-list");

    if (!containerChapters) {
      console.error("Elemento #chapters-list não encontrado.");
      return;
    }

    containerChapters.innerHTML = "";

    chaptersData.forEach((cardData, index) => {
      const chapterNumber = index + 1;
      
      const cardLink = document.createElement("a");
      cardLink.href = window.location.origin + "/" + cardData.url;
      cardLink.classList.add("chapter");

      if (cardData.url && cardData.url === currentChapterUrl) {
        cardLink.classList.add("selected");
      }

      cardLink.innerHTML = `
        <img src="${IMAGE_PATH}/${cardData.image}" alt="Capítulo ${chapterNumber}" class="card-image" />
        <div class="chapter-content">
          <h3 class="chapter-title">${cardData.title}</h3>
        </div>
      `;

      containerChapters.appendChild(cardLink);
    });
  } catch (error) {
    console.error("Erro ao carregar os capítulos:", error);
  }
};

window.addEventListener("DOMContentLoaded", loadDomChapters);
