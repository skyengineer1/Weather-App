const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return;
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (data.cod !== 200) {
        document.getElementById("weatherResult").textContent = "City not found.";
        return;
    }
    
    document.getElementById("weatherResult").textContent = 
        `Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("getWeather").addEventListener("click", getWeather);
});
