document.getElementById("mostrar-cv-editor-es").onclick = function() {
    var audiovisual = document.getElementById("cv-audiovisual-es");
    if (audiovisual.style.display === "none") {
        audiovisual.style.display = "flex";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-audiovisual-en");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-web-en");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }
}

document.getElementById("mostrar-cv-editor-en").onclick = function() {
    var audiovisual = document.getElementById("cv-audiovisual-en");
    if (audiovisual.style.display === "none") {
        audiovisual.style.display = "flex";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-audiovisual-es");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-web-en");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }
}

document.getElementById("mostrar-cv-web-en").onclick = function() {
    var audiovisual = document.getElementById("cv-web-en");
    if (audiovisual.style.display === "none") {
        audiovisual.style.display = "flex";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-audiovisual-en");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }

    var audiovisual = document.getElementById("cv-audiovisual-es");
    if (audiovisual.style.display === "flex") {
        audiovisual.style.display = "none";
    } else {
        audiovisual.style.display = "none";
    }
}

document.getElementById("btn-ver-mas-portfolio").onclick = function() {
    var portfolioRemain = document.getElementById("portfolio-remain");
    if (portfolioRemain.style.display === "none") {
        portfolioRemain.style.display = "block";
    } else {
        portfolioRemain.style.display = "none";
    }
}