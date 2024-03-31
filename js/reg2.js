// Registration functionality
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    
    // Perform validation
    const res = true;
    if (res===true) {
        document.getElementById("registration-message").style.color = "green";
        document.getElementById("registration-message").innerText = "Registered Successfully. Kindly Login.";
        showMessage('Registration successful. Please login.', 'green');
        var userData = {
            password: newPassword,
        };
        localStorage.setItem(`${newUsername}`, JSON.stringify(userData));
        window.location.href = '../login.html';

    } else {
        document.getElementById("registration-message").innerText = res;
        document.getElementById("registration-message").style.color = "red";
        document.getElementById("registration-message").style.fontWeight = "bold";
        showMessage('Registration not successful. Please login.', 'green');
    }
});

// Function to validate registration
function validateRegistration(username, password) {
    console.log("registraion validation", password, username);
    // Validate username
    if (username.length < 8) {
        return "Email ID must be atleast 8 chars long";
    }
    
    // Validate password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return "Please Choose a strong password";
    }
    
    return true;
}