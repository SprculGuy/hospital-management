// Login functionality
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform validation
    document.getElementById("login-message").style.color = "red";
    document.getElementById("login-message").style.fontWeight = "bold";
    if (validateLogin(username, password)) {
        // Check if the user exists in localStorage
        var userData = JSON.parse(localStorage.getItem(`${username}`));
        if (userData && userData !== null) {
            // Check if the password matches
            if (userData.password === password) {
                document.getElementById("login-message").style.color = "green";
                document.getElementById("login-message").innerText = "Login successful!";
                window.location.href = "../home/home.html"
                return;
            } else {
                document.getElementById("login-message").innerText = "Invalid password.";
            }
        } else {
            document.getElementById("login-message").innerText = "User not found.";
        }
    } else {
        document.getElementById("login-message").innerText = "Invalid username or password format.";
    }
});

// Function to validate login
function validateLogin(username, password) {
    // Validation logic for username and password format
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    return passwordRegex.test(password);
}
