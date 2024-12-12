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

function imprimirEnlace(){
    const enlace = document.createElement('li')
    enlace.innerHTML = `<a href="${urlEnlace.value}">${nombreEnlace.value}</a>`;
    listadoEnlaces.appendChild(enlace);
}

//Creo una función para guardar los enlaces en el localStorage
function guardarEnlaces (enlaces) {
    //Uso stringify para convertir enlaces en una cadena
    localStorage.setItem("listadoEnlaces", JSON.stringify(enlaces));
}

//Creo otra función que me devolverá los enlaces guardados
function obtenerEnlaces() {
    const enlacesGuardados = JSON.parse(localStorage.getItem("listadoEnlaces")) || [];
    return enlacesGuardados;
}


botonEnlace.addEventListener('click', ()=>{
    const nombre = nombreEnlace.value;
    const url = urlEnlace.value;

    if(nombre && url) {
        const miEnlace = {nombre, url};

        const enlaces = obtenerEnlaces();
        
        guardarEnlaces(enlaces);
        
        imprimirEnlace(nombre,url);

    nombreEnlace.value = "";
    urlEnlace.value = "";
} else {
    alert("por favor introduce un enlace");
}
});

document.addEventListener('DOMContentLoaded', () => {
    const enlaces = obtenerEnlaces();
    enlaces.forEach(enlace => imprimirEnlace(enlace.nombre, enlace.url));
});