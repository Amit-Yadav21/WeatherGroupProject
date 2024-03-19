var preloader = document.querySelector('#loading');
function myFunction() {
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 100); // Adjust the delay as needed
    }, 2000); // Adjust the delay as needed
}

// Search weather data hereb Dummy weather data
var dummyWeatherData = [
    {
        name: "New York",
        country: "US",
        temperature: 20,
        description: "Cloudy",
        humidity: 70,
        windSpeed: 5
    },
    {
        name: "London",
        country: "UK",
        temperature: 15,
        description: "Rainy",
        humidity: 80,
        windSpeed: 10
    },
    {
        name: "Paris",
        country: "France",
        temperature: 18,
        description: "Partly cloudy",
        humidity: 65,
        windSpeed: 7
    }
];

function searchWeather() {
    var location = document.getElementById("searchInput").value;

    // Search for the location in the dummy data
    var foundData = dummyWeatherData.find(data => data.name.toLowerCase() === location.toLowerCase());
    if (foundData) {
        displayWeather(foundData);
    } else {
        alert("Location not found in dummy data.");
    }
}

function displayWeather(data) {
    var weatherData = document.getElementById("weatherData");
    weatherData.innerHTML = `
        <h2>${data.name}, ${data.country}</h2>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Description: ${data.description}</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.windSpeed} m/s</p>
    `;
}
