// Check if user is already registered
const storedUser = localStorage.getItem("user");

// Only show alert once per session if already registered
if (storedUser && !sessionStorage.getItem("registerAlertShown")) {
  alert("User already registered. Redirecting to login...");
  sessionStorage.setItem("registerAlertShown", "true");
  window.location.href = "login.html";
}

// Registration form logic
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || password.length < 6) {
      alert("Username is required and password must be at least 6 characters.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registration successful!");
    window.location.href = "login.html";
  });

// Login form logic - corrected "submit" event
document.getElementById("loginForm").addEventListener("submit1", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No registered user found. Please register first.");
    return;
  }

  if (username === storedUser.username && password === storedUser.password) {
    // Successfully logged in, save the username to sessionStorage
    sessionStorage.setItem("loggedInUser", storedUser.username);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
});

// Open and Close Navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function myFunction(x) {
  x.classList.toggle("change");
}
