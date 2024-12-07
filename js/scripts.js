document.body.style.backgroundImage = "url(./img/imagen-1.jpg)";
setInterval(imagenRandom, 15000);
function imagenRandom(){
    const imagenes = ["url(./img/imagen-1.jpg)", "url(./img/imagen-2.jpg)"]
    const imagenAleatoria = Math.floor((Math.random()*imagenes.length));
    document.body.style.backgroundImage = imagenes[imagenAleatoria];
}
