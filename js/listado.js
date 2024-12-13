//Traigo del DOM lo que voy a manipular
const botonEnlace = document.getElementById('boton-enlace');
let nombreEnlace = document.getElementById('nombre-enlace');
let urlEnlace = document.getElementById('url-enlace');
let listadoEnlaces = document.getElementById('listado-enlaces');


//Creo la función para imprimir los enlaces en pantalla
function imprimirEnlace(nombre, url) {
    const enlace = document.createElement('li');
    enlace.innerHTML = `<a href="${url}" target="_blank">${nombre}</a>`;
    listadoEnlaces.appendChild(enlace);
}

// Función para guardar los enlaces en el localStorage
function guardarEnlaces(enlaces) {
    localStorage.setItem("listadoEnlaces", JSON.stringify(enlaces));
}

// Función para obtener los enlaces del localStorage
function obtenerEnlaces() {
    return JSON.parse(localStorage.getItem("listadoEnlaces")) || [];
}

//Creo que el botón que me agregara los enlaces y me los guardara en localStorage
botonEnlace.addEventListener('click', () => {
    const nombre = nombreEnlace.value;
    const url = urlEnlace.value;

    if (nombre && url) {
        //creo un objeto con el nombre y la url para poder convertirlos a cadena de texto y guardarlos con localstorage
        const miEnlace = { nombre, url };
        //Proceso de obtener los enlaces guardados, añadirlos al array y seguir imprimiendo nuevos
        const enlaces = obtenerEnlaces();
        enlaces.push(miEnlace);
        guardarEnlaces(enlaces);
        imprimirEnlace(nombre, url);

        // Limpiar los campos de entrada
        nombreEnlace.value = '';
        urlEnlace.value = '';
    } else {
        alert("Por favor introduce un enlace");
    }
});

// Cargo los enlaces que están  guardados en el localstorage al recargar o acceder a la página
document.addEventListener('DOMContentLoaded', () => {
    const enlaces = obtenerEnlaces();
    enlaces.forEach(enlace => imprimirEnlace(enlace.nombre, enlace.url));
});


/* Si me da fallo el localstorage hay que borrar antes
localStorage.removeItem('listadoEnlaces') */