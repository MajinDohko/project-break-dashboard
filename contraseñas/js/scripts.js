document.body.style.backgroundImage = "url(../img/imagen-1.jpg)";
setInterval(imagenRandom, 15000);
function imagenRandom(){
    const imagenes = ["url(../img/imagen-1.jpg)", "url(../img/imagen-2.jpg)", "url(../img/imagen-3.jpg)", "url(../img/imagen-4.jpg)", "url(../img/imagen-5.jpg)", "url(../img/imagen-6.jpg)", "url(../img/imagen-7.jpg)", "url(../img/imagen-8.jpg)", "url(../img/imagen-9.jpg)", "url(../img/imagen-10.jpg)"]
    const imagenAleatoria = Math.floor((Math.random()*imagenes.length));
    document.body.style.backgroundImage = imagenes[imagenAleatoria];
}

//ME traigo los elementos del DOM que voy a manipular desde el js
const botonPass = document.getElementById('botonpass');
const imprimirPass = document.getElementById('resultado-contraseña');
let longitudPass = document.getElementById('length');

//Meto todos los datos en una variable para que sea más sencillo recorrerlos
const password = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";

//Creo la función que me generará las contraseñas aleatorias
function generarPassword(){
    let nuevoPass = "";
    for (let i = 0; i < longitudPass.value; i++) {
        nuevoPass += password.charAt(Math.floor(Math.random()*password.length))
    }
    
    imprimirPass.innerHTML = `<h2>Esta es tu contraseña segura
    </h2>
    <p>${nuevoPass}
    `;
    console.log(nuevoPass);
}

//Creo el evento que me generará la contraseña al clickear en el botón
botonPass.addEventListener('click', generarPassword)
