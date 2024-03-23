// -------------- JS FOR LOGIN PAGE ------------------------//
// JavaScript for handling modal functionality
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
  
  // -------------- JS FOR LOGIN PAGE  END------------------------//