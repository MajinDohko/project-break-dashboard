//Traigo elementos del DOM y creo otro mediante js.
let reloj = document.getElementById('reloj');
let fechaActual = document.createElement('div');
reloj.appendChild(fechaActual);

//Creo una función que me devuelva el tiempo en horas, minutos y segundos
function actualizarReloj(){
    const now = new Date();
    let horas = now.getHours();
    let minutos = now.getUTCMinutes();
    let segundos = now.getUTCSeconds();
    //Date hace referencia al día del 1 al 31 y day al día de la semana.
    let dias = now.getDate();
    // Hay que sumar +1 para imprimir el mes ya que en js van del 0 al 11 los meses
    let meses = now.getMonth() + 1;
    let years = now.getFullYear();
    //Mediante una comparación le digo a la variable horas, minutos y segundos que si es menor a 10 
    //me añada el 0 delante y si no me devuelva la variable horas
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    //Hago lo mismos con los meses y días para añadir el 0 delante
    dias = dias < 10 ? '0' + dias : dias;
    meses = meses <10 ? '0' + meses : meses;
    
    //Creamos la variable frases y las condiciones para las que se imprimirá cada una
    let frases = "";
    if (horas < 7 || (horas === 7 && minutos === 0)) {
        frases = "¡Es hora de dormir, deja de teclear y acuéstate!";
    } else if ((horas === 7 && minutos > 0) || (horas < 9 && minutos === 0)) {
        frases = "Prepárate, saca a la perra y tómate un café";
    } else if ((horas === 9 && minutos > 0) || (horas < 12 && minutos === 0)) {
        frases = "Es hora de hacer código";
    } else if ((horas === 12 && minutos > 0) || (horas < 14 && minutos === 0)) {
        frases = "Queda poco para el primer descanso, ¡ánimo!";
    } else if ((horas === 14 && minutos > 0) || (horas < 16 && minutos === 0)) {
        frases = "Descansa, prepara algo de comer y coge energía";
    } else if ((horas === 16 && minutos > 0) || (horas <= 18 && minutos > 0)) {
        frases = "Buenas tardes, es hora del último empujón";
    } else if ((horas === 18 && minutos > 0) || (horas < 21 && minutos > 0)) {
        frases = "Ya has hecho mucho por hoy, descansa y aprovecha la tarde.";
    } else if ((horas === 21 && minutos > 0) || (horas < 23 && minutos > 0)) {
        frases = "No olvides cenar antes de irte a dormir.";
    } else {
        frases = "Es hora de irse a dormir, apaga todo y descansa";
    }
   
    //Creo una variable que me imprimirá fecha y hora en pantalla y la frase según la hora que sea
    const tiempoActual = `<p>${horas}:${minutos}:${segundos}</p>
    <p>${dias}/${meses}/${years}</p>
    ${frases}`;
    fechaActual.innerHTML = tiempoActual;

}

//Marcamos a la función que tiene que actualizar el contador cada segundo
setInterval(actualizarReloj, 1000);

//Llamo a la función o si no no funciona nada 😆
actualizarReloj();