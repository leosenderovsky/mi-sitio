  const changeText = document.querySelector("#btn-experiencia");

  changeText.addEventListener("click", function() {
  changeText.textContent = "Ver mi experiencia última";
});

function textRevert() {
  var textRevert = document.querySelector("#btn-experiencia");
  if (textRevert.textContent = "Ver mi experiencia última") {
    textRevert.addEventListener("click", function() {
      textRevert.textContent = "Ver mi experiencia anterior";
  });
}
}