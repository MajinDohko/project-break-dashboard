
const apiUrl = "https://api.weatherapi.com/v1/forecast.json?key=400f4a6fdaa14e73ae3170545240612&q=Badajoz&days=1&aqi=yes&alerts=yes";
console.log(apiUrl);

const estacionMeteo = async () => {
    try {
        const response = await fetch (apiUrl);
        if(!response.ok){
            throw new Error("Ha surgido un problema", response.status);
        }
        const data = await response.json();
        const estacion = document.getElementById('estacion');
        const estacionMeteo = document.getElementById('datos-meteo')
        estacionMeteo.innerHTML = `
        ${data.location.name}
        ${data.location.country}
        ${data.current.condition.text}<img src="//cdn.weatherapi.com/weather/64x64/night/248.png"/>
        <div>${data.current.temp_c}<img class="imagen-estacion" src="/img/celsius.png"/></div>
        <ul>
        <li>Precipitaciones: ${data.current.precip_in}%</li>
        </ul> 
        `;
        estacion.appendChild(estacionMeteo);
    } catch (error) {
        console.log('error al obtener los datos', error)
    }
}

estacionMeteo();
