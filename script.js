document.getElementById("botao").addEventListener("click", function () {
  alert('Botão "Fale Conosco" clicado!');
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    const hiddenText = this.querySelector(".texto-oculto");
    hiddenText.style.display =
      hiddenText.style.display === "none" ? "block" : "none";
  });
});
