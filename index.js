// hamburguer icon
const hamburguer = document.getElementById("burger-menu");
const navMenu = document.querySelector(".list-nav-bar");
const navLinks = document.querySelectorAll(".list-item a");

// Toggle the hamburger menu
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close the hamburger menu when a list item is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

 // Ensure menu is hidden on page load
 document.addEventListener("DOMContentLoaded", function() {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
});

// ..................hamburguer icon End Here

// Dummy data for searching 
const dummyData = [
  {city: "Jaunpur", state: "Uttar Pradesh", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
          { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
          { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
          { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
      ]
  },
  {city: "Patna", state: "Bihar", sunrise: "5:40am", sunset: "6:40pm", temperature: "30°C", humidity: "50%", windspeed: "15km/h", dayData: [
          { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
          { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
          { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
      ]
  },
  {city: "Shimla", state: "Himachal Pradesh", sunrise: "6:00am", sunset: "7:00pm", temperature: "20°C", humidity: "80%", windspeed: "5km/h", dayData: [
          { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
          { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
          { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
      ]
  }
];

function search() {
  // const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  if (searchTerm === "") {
    // If input is empty, do nothing
    return;
  }

  const searchResults = dummyData.filter(item => {
      // Check if both city and state match exactly
      return item.city.toLowerCase() === searchTerm ||
             item.state.toLowerCase() === searchTerm;
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
        <div>
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

//............................................................. Login Model Js
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("loginModal");
  var loginButton = document.getElementById("loginButton");
  var closeButtons = document.getElementsByClassName("close");

  // Open login modal when clicking the login button
  loginButton.onclick = function () {
    modal.style.display = "block";
  };

  // Close the modal when clicking on the close button or outside the modal
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// ........................................................... Signup Model Js
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("signupModal");
  var loginButton = document.getElementById("signupButton");
  var closeButtons = document.getElementsByClassName("closeSignup");

  // Open signup modal when clicking the signup button
  loginButton.onclick = function () {
    modal.style.display = "block";
  };

  // Close the modal when clicking on the close button or outside the modal
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// .......................... Move login to signup, sogimup to login page
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
function openLoginModal() {
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
}

function closeLoginModal() {
  loginModal.style.display = 'none';
}

function openSignupModal() {
  loginModal.style.display = 'none';
  signupModal.style.display = 'block';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
}