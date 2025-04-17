/*const changeText = document.querySelector("#btn-experiencia");

  changeText.addEventListener("click", function() {
  changeText.textContent = "Ver mi experiencia última";
});


if (changeText.textContent == "Ver mi experiencia última") {
  changeText.addEventListener ("click", function() {
  changeText.textContent = "Ver mi experiencia anterior";
});
}*/

/*
let changeText = document.querySelector("#btn-experiencia");
changeText.addEventListener("click", function () {
  if (changeText.textContent === "Ver mi experiencia anterior") {
    changeText.textContent = "Ver mi experiencia última";
  } else {
    changeText.textContent = "Ver mi experiencia anterior";
  }
});
*/

let changeText = document.querySelector("#btn-experiencia");
const originalText = changeText.textContent; // Store original text
changeText.addEventListener("click", function () {
  if (changeText.textContent === originalText) {
    changeText.textContent = "Ver mi experiencia última";
  } else {
    changeText.textContent = originalText;
  }
});

/*
let changeTextPortfolio = document.querySelector("#btn-ver-mas-portfolio");
const originalTextPortfolio = changeTextPortfolio.textContent;
changeTextPortfolio.addEventListener("click", function () {
  if (changeTextPortfolio.textContent === originalTextPortfolio) {
    changeTextPortfolio.textContent = "Ver menos trabajos";
  } else {
    changeTextPortfolio.textContent = originalTextPortfolio;
  }
});
*/
