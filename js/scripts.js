document.body.style.backgroundImage = "url(./img/imagen-1.jpg)";
setInterval(imagenRandom, 15000);
function imagenRandom(){
    const imagenes = ["url(./img/imagen-1.jpg)", "url(./img/imagen-2.jpg)", "url(./img/imagen-3.jpg)", "url(./img/imagen-4.jpg)", "url(./img/imagen-5.jpg)", "url(./img/imagen-6.jpg)", "url(./img/imagen-7.jpg)", "url(./img/imagen-8.jpg)", "url(./img/imagen-9.jpg)", "url(./img/imagen-10.jpg)"]
    const imagenAleatoria = Math.floor((Math.random()*imagenes.length));
    document.body.style.backgroundImage = imagenes[imagenAleatoria];
}
