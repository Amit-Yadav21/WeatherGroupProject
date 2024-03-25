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
document.addEventListener("DOMContentLoaded", function () {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
});

// ..................hamburguer icon End Here

// Dummy data for searching 
const dummyData = [
  {
    location: "Agra", sunrise: "06:16am", sunset: "6:31pm", temperature: "12°C", humidity: "3%", windspeed: "5km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "15°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "3°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "10°" }
    ]
  },
  {
    location: "Ahmedabad", sunrise: "06:38am", sunset: "6:52pm", temperature: "22°C", humidity: "17%", windspeed: "11km/h", dayData: [
      { day: "Wed", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "20°" },
      { day: "Thu", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "16°" },
      { day: "Fri", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "18°" }
    ]
  },
  {
    location: "Bengaluru", sunrise: "06:20am", sunset: "6:30pm", temperature: "28°C", humidity: "25%", windspeed: "29km/h", dayData: [
      { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "35°" },
      { day: "Sum", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "40°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "29°" }
    ]
  },
  {
    location: "Bhopal", sunrise: "06:19am", sunset: "06:33pm", temperature: "33°C", humidity: "2%", windspeed: "50km/h", dayData: [
      { day: "Tus", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "22°" },
      { day: "Wed", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "16°" },
      { day: "Thu", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "33°" }
    ]
  },
  {
    location: "Chennai", sunrise: "06:09am", sunset: "06:20pm", temperature: "38°C", humidity: "35%", windspeed: "33km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "11°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "19°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "22°" }
    ]
  },
  {
    location: "Delhi", sunrise: "6:19am", sunset: "06:35pm", temperature: "30°C", humidity: "5%", windspeed: "15km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Dharamshala", sunrise: "06:21am", sunset: "06:39pm", temperature: "25°C", humidity: "3%", windspeed: "4km/h", dayData: [
      { day: "Wed", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "25°" },
      { day: "Thu", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "28°" },
      { day: "Fri", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "32°" }
    ]
  },
  {
    location: "Ghaziabad", sunrise: "06:18am", sunset: "06:34pm", temperature: "35°C", humidity: "7%", windspeed: "10km/h", dayData: [
      { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "33°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "29°" }
    ]
  },
  {
    location: "Gorakhpur", sunrise: "5:54am", sunset: "06:10pm", temperature: "40°C", humidity: "11%", windspeed: "15km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "38°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "40°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Hyderabad", sunrise: "06:16am", sunset: "06:28pm", temperature: "30°C", humidity: "15%", windspeed: "11km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Indore", sunrise: "06:25am", sunset: "06:39pm", temperature: "28°C", humidity: "12%", windspeed: "19km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Jaipur", sunrise: "06:09am", sunset: "06:23pm", temperature: "25°C", humidity: "35%", windspeed: "30km/h", dayData: [
      { day: "Wed", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Thu", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Fri", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Kanpur", sunrise: "06:07am", sunset: "06:22pm", temperature: "10°C", humidity: "50%", windspeed: "30km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "15°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "19°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "25°" }
    ]
  },
  {
    location: "Kolkata", sunrise: "05:25am", sunset: "5:49pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Lucknow", sunrise: "06:04am", sunset: "06:20pm", temperature: "30°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "29°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "21°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "25°" }
    ]
  },
  {
    location: "Ludhiana", sunrise: "06:34am", sunset: "06:48pm", temperature: "45°C", humidity: "1%", windspeed: "20km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Jaunpur", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Patna", sunrise: "5:40am", sunset: "6:40pm", temperature: "30°C", humidity: "50%", windspeed: "15km/h", dayData: [
      { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Shimla", sunrise: "6:00am", sunset: "7:00pm", temperature: "20°C", humidity: "80%", windspeed: "5km/h", dayData: [
      { day: "Sat", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Mumbai", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Nagpur", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Pune", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Surat", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Vadodara", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
  {
    location: "Varanasi", sunrise: "5:50am", sunset: "6:50pm", temperature: "28°C", humidity: "35%", windspeed: "10km/h", dayData: [
      { day: "Sun", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/1.png", temperature: "30°" },
      { day: "Mon", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/2.png", temperature: "30°" },
      { day: "Tue", weatherIcon: "https://themesfamily.com/2024/mugni/assets/img/icon/3.png", temperature: "30°" }
    ]
  },
];

function search() {
  // const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
  if (searchTerm === "") {
    // If input is empty, do nothing
    return;
  }

  const searchResults = dummyData.filter(item => {
    // Check if both location and state match exactly
    return item.location.toLowerCase() === searchTerm
  });

  // Display search results
  displayResults(searchResults);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
resultsContainer.innerHTML = ''; // Clear previous results

if (results.length === 0) {
  // Add class to body
  document.body.classList.add('no-data-found');

  // Create card container
  const card = document.createElement('div');
  card.classList.add('card');

  // Create paragraph element with text
  const paragraph = document.createElement('p');
  paragraph.textContent = 'No Data Found';

  // Append paragraph to card
  card.appendChild(paragraph);

  // Add emoji
  const emoji = document.createElement('span');
  emoji.textContent = '😞'; // Change this to any emoji you like
  card.appendChild(emoji);

  // Append card to results container
  resultsContainer.appendChild(card);
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
            <p>${result.location}</p>
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