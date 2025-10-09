function playvideo(element) {
    element.play();
    element.currentTime = 0;
}
function pausevideo(elemento){
    elemento.pause();
    elemento.currentTime = 0;
}

function cambioVideo(elemeto){
    const videoGrande = document.getElementById("mainVideo");
    let sourceVideoGrande = videoGrande.src;
    videoGrande.src = elemeto.src;
    elemeto.src = sourceVideoGrande;

    const textoGrande = document.getElementById("texto");
    let textoGrandeContent = textoGrande.textContent;
    const textoPequeño = elemeto.nextElementSibling;
    let textoPequeñoContent = textoPequeño.textContent;
    textoGrande.textContent = textoPequeñoContent;
    textoPequeño.textContent = textoGrandeContent
}