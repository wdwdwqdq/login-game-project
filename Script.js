let isLoggedIn = false;
let isAdminLoggedIn = false;
let loggedUsers = [];


const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  // Admin login logic
  if (email === "admin" && password === "admin") {
    isAdminLoggedIn = true;
    displayAdminSection();
    return;  // Stop further code execution if admin logs in
  }


  // Validate email
  const isGmail = email.includes("@gmail.com");
  const isCareyEmail = email.includes("@student.carey.wa.edu.au");


  // Check if the email is valid
  if ((isGmail || isCareyEmail) && password) {
    isLoggedIn = true;
    loggedUsers.push({ email, password }); // Store the user login details
    displayGames();
  } else {
    document.getElementById("error-msg").style.display = "block"; // Show error message
  }
};


const displayGames = () => {
  if (isLoggedIn) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("games-section").style.display = "block";
  }
};


const displayAdminSection = () => {
  document.getElementById("games-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("admin-section").style.display = "block";
  
  // Display all logged-in users (fake data)
  const userDataElement = document.getElementById("user-data");
  userDataElement.innerHTML = "<h4>Logged-in Users:</h4>";
  loggedUsers.forEach(user => {
    userDataElement.innerHTML += `<p>Email: ${user.email}, Password: ${user.password}</p>`;
  });
};


const logoutAdmin = () => {
  isAdminLoggedIn = false;
  loggedUsers = []; // Clear logged users
  document.getElementById("admin-section").style.display = "none";
  document.getElementById("login-section").style.display = "flex"; // Go back to login page
};


const toggleDarkMode = () => {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
};


const toggleLightMode = () => {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
};