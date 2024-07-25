  /*const changeText = document.querySelector("#btn-experiencia");

  changeText.addEventListener("click", function() {
  changeText.textContent = "Ver mi experiencia última";
});


if (changeText.textContent == "Ver mi experiencia última") {
  changeText.addEventListener ("click", function() {
  changeText.textContent = "Ver mi experiencia anterior";
});
}*/


const changeText = document.querySelector("#btn-experiencia");
changeText.addEventListener("click", function() {
  if (changeText.textContent === "Ver mi experiencia anterior") {
    changeText.textContent = "Ver mi experiencia última";
  } else {
    changeText.textContent = "Ver mi experiencia anterior";
  }
});

const changeTextPortfolio = document.querySelector("#btn-ver-mas-portfolio");
changeTextPortfolio.addEventListener("click", function() {
  if (changeTextPortfolio.textContent === "Ver más trabajos") {
    changeTextPortfolio.textContent = "Ver menos trabajos";
  } else {
    changeTextPortfolio.textContent = "Ver más trabajos";
  }
});