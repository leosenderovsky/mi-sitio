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
