const WEATHERURL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const key = 'a352db877902bafba7d0ed23e7660331';
    const response = await fetch('${WEATHERURL}?q=${city}&appid=${key}&units=metric');
    const data     = await response.json();
    loadScreen(data);
}

function loadScreen(weer){
    let desc = weer.weather.description;
    document.getElementById('place').innerText = `${weer['name']}`;
    document.getElementById('desc').innerText = desc;
    console.log(weer.description);
    console.log(weer);
}

window.onload = function () {
    getWeather('Dordrecht');
}