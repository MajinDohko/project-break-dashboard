//Función que me trae una imagen random cada 15 segundos de la carpeta imágenes
document.body.style.backgroundImage = "url(../img/imagen-1.jpg)";
setInterval(imagenRandom, 15000);
function imagenRandom(){
    const imagenes = ["url(../img/imagen-1.jpg)", "url(../img/imagen-2.jpg)", "url(../img/imagen-3.jpg)", "url(../img/imagen-4.jpg)"];
    const imagenAleatoria = Math.floor((Math.random()*imagenes.length));
    document.body.style.backgroundImage = imagenes[imagenAleatoria];
}


const botonEnlace = document.getElementById('boton-enlace');
let nombreEnlace = document.getElementById('nombre-enlace');
let urlEnlace = document.getElementById('url-enlace');
let listadoEnlaces = document.getElementById('listado-enlaces');
console.log(nombreEnlace);

function imprimirEnlace(){
    const enlace = document.createElement('li')
    enlace.innerHTML = `<a href="${urlEnlace.value}">${nombreEnlace.value}</a>`;
    listadoEnlaces.appendChild(enlace);
}


botonEnlace.addEventListener('click', ()=>{
    imprimirEnlace();
})