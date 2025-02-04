
console.log("JS carregado com sucesso!");


window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM carregado. Podemos iniciar scripts mais elaborados aqui.");
});



document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="text"]');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    // Aqui você pode adicionar a lógica para buscar e exibir os resultados
    searchResults.innerHTML = `<p>Resultados para: ${query}</p>`;
  });
});

