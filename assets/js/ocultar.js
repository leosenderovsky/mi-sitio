document.getElementById("ocultarAudiovisual").onclick = function() {
    var audiovisual = document.getElementById("web");
    if (audiovisual.style.display === "none") {
        audiovisual.style.display = "block";
    } else {
        audiovisual.style.display = "none";
    }
}