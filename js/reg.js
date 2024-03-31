// Function to validate registration
function validateRegistration(username, password) {
    // Validate username
    const usernameRegex = /^[a-zA-Z0-9]{8,}$/;
    if (!usernameRegex.test(username)) {
        return "Username must be alphanumeric and have a minimum of 8 characters";
    }
    
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if (!passwordRegex.test(password)) {
        return "Password must contain 10 characters including one special character, one upper case, and one numeric";
    }
    
    return true;
}

// Registration functionality
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    
    // Perform validation
    const validation = validateRegistration(newUsername, newPassword);
    if (validation === true) {
        // Registration successful
        const userData = {
            password: newPassword,
        };
        localStorage.setItem(newUsername, JSON.stringify(userData));
        document.getElementById("registration-message").innerText = "Registered Successfully. Kindly Login.";
        document.getElementById("registration-message").style.color = "green";
        window.location.href = '../login.html'; // Redirect to login page
    } else {
        // Registration failed
        document.getElementById("registration-message").innerText = validation;
        document.getElementById("registration-message").style.color = "red";
        document.getElementById("registration-message").style.fontWeight = "bold";
    }
});
