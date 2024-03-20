document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader
    const preloader = document.querySelector('.preloader');
    preloader.innerHTML = '<div class="loader"></div>';

    // Hide the preloader after 5 seconds and show the content
    setTimeout(function () {
        preloader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000); // Adjust duration in milliseconds (5 seconds)
});


// Search weather data hereb Dummy weather data
// var dummyWeatherData = [
//     {
//         name: "New York",
//         country: "US",
//         temperature: 20,
//         description: "Cloudy",
//         humidity: 70,
//         windSpeed: 5
//     },
//     {
//         name: "London",
//         country: "UK",
//         temperature: 15,
//         description: "Rainy",
//         humidity: 80,
//         windSpeed: 10
//     },
//     {
//         name: "Paris",
//         country: "France",
//         temperature: 18,
//         description: "Partly cloudy",
//         humidity: 65,
//         windSpeed: 7
//     }
// ];

// function searchWeather() {
//     var location = document.getElementById("searchInput").value;

//     // Search for the location in the dummy data
//     var foundData = dummyWeatherData.find(data => data.name.toLowerCase() === location.toLowerCase());
//     if (foundData) {
//         displayWeather(foundData);
//     } else {
//         alert("Location not found in dummy data.");
//     }
// }

// function displayWeather(data) {
//     var weatherData = document.getElementById("weatherData");
//     weatherData.innerHTML = `
//         <h2>${data.name}, ${data.country}</h2>
//         <p>Temperature: ${data.temperature}°C</p>
//         <p>Description: ${data.description}</p>
//         <p>Humidity: ${data.humidity}%</p>
//         <p>Wind Speed: ${data.windSpeed} m/s</p>
//     `;
// }

// Dummy data (replace this with your actual data)
const dummyData = [
    {
        city: "Jaunpur", state: "Uttar Pradesh", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
            { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
            { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
            { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
        ]
    },
    {
        city: "Patna", state: "Bihar", sunrise: "5:40am", sunset: "6:40pm", temperature: "30°C", humidity: "50%", windspeed: "15km/h", dayData: [
            { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
            { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
            { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
        ]
    },
    {
        city: "Shimla", state: "Himachal Pradesh", sunrise: "6:00am", sunset: "7:00pm", temperature: "20°C", humidity: "80%", windspeed: "5km/h", dayData: [
            { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
            { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
            { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
        ]
    }
];

function search() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResults = dummyData.filter(item => {
        // Perform a simple search by checking if the search term is included in the data
        return item.city.toLowerCase().includes(searchTerm) ||
            item.state.toLowerCase().includes(searchTerm) ||
            item.dayData.some(day => day.day.toLowerCase().includes(searchTerm));
    });

    // Display search results
    displayResults(searchResults);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    // Create HTML for each result
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('Getdatacards');
        resultElement.innerHTML = `
      <div class="SectionFiest">
        <div class="GetSearchData">
          <div class="middileSection">
            <div>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p>${result.city}</p>
              <p>${result.state}</p>
            </div>
          </div>
          <div class="middileSection">
            <p>Temperature</p>
            <p>${result.temperature}</p>
          </div>
        </div>
        <hr>
        <div class="middleFlex">
          <div class="GetSearchData">
            <div class="middileSection">
              <div>
                <i class="fas fa-sun"></i>
              </div>
              <div>
                <p>Sunrise</p>
                <p>${result.sunrise}</p>
              </div>
            </div>
            <div class="middileSection">
              <div>
                <i class="fa-solid fa-cloud-sun"></i>
              </div>
              <div>
                <p>Sunset</p>
                <p>${result.sunset}</p>
              </div>
            </div>
          </div>
          <div class="GetSearchData">
            <div class="middileSection">
              <div>
                <i class="fa-solid fa-cloud-rain"></i>
              </div>
              <div>
                <p>Humidity</p>
                <p>${result.humidity}</p>
              </div>
            </div>
            <div class="middileSection">
              <div>
                <i class="fa-solid fa-wind"></i>
              </div>
              <div>
                <p>Windspeed</p>
                <p>${result.windspeed}</p>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="DayDummyData">
          ${result.dayData.map(day => `
            <div class="Days">
              <p>${day.day}</p>
              <img src="${day.weatherIcon}" alt="${day.day}-weather">
              <p>${day.temperature}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
        resultsContainer.appendChild(resultElement);
    });
}