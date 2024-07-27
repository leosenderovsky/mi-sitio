document.getElementById("mostrar-cv-editor-es").onclick = function () {
  let audiovisualEs = document.getElementById("cv-audiovisual-es");
  if (audiovisualEs.style.display === "none") {
    audiovisualEs.style.display = "flex";
  } else {
    audiovisualEs.style.display = "none";
  }

  let audiovisualEn = document.getElementById("cv-audiovisual-en");
  if (audiovisualEn.style.display === "flex") {
    audiovisualEn.style.display = "none";
  } else {
    audiovisualEn.style.display = "none";
  }

  let webEn = document.getElementById("cv-web-en");
  if (webEn.style.display === "flex") {
    webEn.style.display = "none";
  } else {
    webEn.style.display = "none";
  }
};

document.getElementById("mostrar-cv-editor-en").onclick = function () {
  let audiovisualEn = document.getElementById("cv-audiovisual-en");
  if (audiovisualEn.style.display === "none") {
    audiovisualEn.style.display = "flex";
  } else {
    audiovisualEn.style.display = "none";
  }

  let audiovisualEs = document.getElementById("cv-audiovisual-es");
  if (audiovisualEs.style.display === "flex") {
    audiovisualEs.style.display = "none";
  } else {
    audiovisualEs.style.display = "none";
  }

  let webEn = document.getElementById("cv-web-en");
  if (webEn.style.display === "flex") {
    webEn.style.display = "none";
  } else {
    webEn.style.display = "none";
  }
};

document.getElementById("mostrar-cv-web-en").onclick = function () {
  let webEn = document.getElementById("cv-web-en");
  if (webEn.style.display === "none") {
    webEn.style.display = "flex";
  } else {
    webEn.style.display = "none";
  }

  let audiovisualEn = document.getElementById("cv-audiovisual-en");
  if (audiovisualEn.style.display === "flex") {
    audiovisualEn.style.display = "none";
  } else {
    audiovisualEn.style.display = "none";
  }

  let audiovisualEs = document.getElementById("cv-audiovisual-es");
  if (audiovisualEs.style.display === "flex") {
    audiovisualEs.style.display = "none";
  } else {
    audiovisualEs.style.display = "none";
  }
};

/*
document.getElementById("btn-ver-mas-portfolio").onclick = function () {
  let portfolioRemain = document.getElementById("portfolio-remain");
  if (portfolioRemain.style.display === "none") {
    portfolioRemain.style.display = "flex";
  } else {
    portfolioRemain.style.display = "none";
  }
};
*/

function toggleButtonPortfolioRemain() {
  let showPortfolio = document.querySelector("#portfolio-remain");
  if (showPortfolio.className == "hidden-mobile") {
    showPortfolio.className = "block";
  } else {
    showPortfolio.className = "hidden-mobile";
  }

  let changeTextPortfolio = document.querySelector("#btn-ver-mas-portfolio");
  if (changeTextPortfolio.textContent == "Ver más trabajos") {
    changeTextPortfolio.textContent = "Ver menos trabajos";
  } else {
    changeTextPortfolio.textContent = "Ver más trabajos";
  }
}
