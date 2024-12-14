//Traigo del DOM lo que voy a manipular
const botonEnlace = document.getElementById('boton-enlace');
let nombreEnlace = document.getElementById('nombre-enlace');
let urlEnlace = document.getElementById('url-enlace');
let listadoEnlaces = document.getElementById('listado-enlaces');


//Creo la función para imprimir los enlaces en pantalla
function imprimirEnlace(nombre, url, eliminar) {
    const enlace = document.createElement('li');
    enlace.innerHTML = `<a href="${url}" target="_blank">${nombre}</a>
    <button class="eliminar-enlace" data-eliminar="${eliminar}">Eliminar</button>`;
    listadoEnlaces.appendChild(enlace);

    //Se crea el evento que nos permita eliminar el enlace al darle click
    enlace.querySelector('.eliminar-enlace').addEventListener('click', (event) => {
        const eliminar = event.target.dataset.eliminar;
        eliminarEnlace(eliminar);
    });
}

// Función para guardar los enlaces en el localStorage
function guardarEnlaces(enlaces) {
    localStorage.setItem("listadoEnlaces", JSON.stringify(enlaces));
}

// Función para obtener los enlaces del localStorage
function obtenerEnlaces() {
    return JSON.parse(localStorage.getItem("listadoEnlaces")) || [];
}

//Creo una función para poder eliminar los enlaces
function eliminarEnlace(eliminar) {
    const enlaces = obtenerEnlaces();
    enlaces.splice(eliminar, 1);
    guardarEnlaces(enlaces);
    actualizarListaEnlaces();
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
        imprimirEnlace(nombre,url);

        // Se vacían los campos para escribir los enlaces
        nombreEnlace.value = '';
        urlEnlace.value = '';
    } else {
        alert("Por favor introduce un enlace");
    }
});

//Creo función para actualizar la lista de enlaces
function actualizarListaEnlaces() {
    listadoEnlaces.innerHTML = '';
    const enlaces = obtenerEnlaces();
    enlaces.forEach((enlace, eliminar) => imprimirEnlace(enlace.nombre, enlace.url, eliminar));
}

// Cargo los enlaces que están  guardados en el localstorage al recargar o acceder a la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaEnlaces();
});
