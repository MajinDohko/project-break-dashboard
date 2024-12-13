document.body.style.backgroundImage = "url(../img/imagen-1.jpg)";
setInterval(imagenRandom, 15000);
function imagenRandom(){
    const imagenes = ["url(../img/imagen-1.jpg)", "url(../img/imagen-2.jpg)", "url(../img/imagen-3.jpg)", "url(../img/imagen-4.jpg)", "url(../img/imagen-5.jpg)", "url(../img/imagen-6.jpg)", "url(../img/imagen-7.jpg)", "url(../img/imagen-8.jpg)", "url(../img/imagen-9.jpg)", "url(../img/imagen-10.jpg)"];
    const imagenAleatoria = Math.floor((Math.random()*imagenes.length));
    document.body.style.backgroundImage = imagenes[imagenAleatoria];
}
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=400f4a6fdaa14e73ae3170545240612&q=Badajoz&days=1&aqi=yes&alerts=yes";
console.log(apiUrl);

//Genero la asincronia llamando a la api
const estacionMeteo = async () => {
    try {
        const response = await fetch (apiUrl);
        if(!response.ok){
            throw new Error("Ha surgido un problema", response.status);
        }
        const data = await response.json();
        //Una vez que todo funciona, me dispongo a crear lo que se imprimira en pantalla
        const estacion = document.getElementById('estacion');
        const estacionMeteo = document.getElementById('datos-meteo')
        estacionMeteo.innerHTML = `
        <div class="tiempo-actual">
            <h2>
                ${data.location.name} /
                ${data.location.country}
            </h2>
            <p>${data.current.condition.text}</p>
            <div class="informacion">
                <div class="informacion-dia">
                    <img src="${data.current.condition.icon}"/>
                    ${data.current.temp_c}<img class="imagen-estacion" src="/estacion/img/celsius.png"/>
                </div>
                <ul class="lista-grados">
                    <li>Precipitaciones: ${data.current.precip_in}%</li>
                    <li>Humedad: ${data.current.humidity}%</li>
                    <li>Viento: ${data.current.wind_kph}km/h</li>
                </ul>
            </div>
        </div>
        `;
        //Accedo al punto donde se encuentran las horas para poder imprimirlas en pantalla con sus parámetros
        const horas = data.forecast.forecastday[0].hour;
        const verTiempo = document.createElement('ul');
        verTiempo.classList.add('lista-horas')
            horas.forEach(hora => {
                const horaDia = document.createElement('li')
                horaDia.classList.add('datos-hora')
                horaDia.innerHTML = `
                <span>
                    ${hora.time.split(' ')[1]}
                </span>
                <span>
                    <img src="https:${hora.condition.icon}"
                </span>
                <span>
                    ${hora.temp_c}°C
                </span>
                `;
                verTiempo.appendChild(horaDia);
            });
            estacion.appendChild(estacionMeteo);
            estacion.appendChild(verTiempo);
    } catch (error) {
        console.log('error al obtener los datos', error)
    }
}

estacionMeteo();
