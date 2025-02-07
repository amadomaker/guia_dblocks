function showContent(page) {
  console.log("Mudando para:", page); // Debug para verificar no console
  document.getElementById("contentFrame").src = "chapters/" + page + ".html?nocache=" + new Date().getTime();
}
