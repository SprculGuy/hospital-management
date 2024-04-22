function validateRegistration(username, password, event) {
	// Validate username
	const usernameRegex = /^[a-zA-Z0-9]{8,}$/;
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
	if (!usernameRegex.test(username)) {
		alert(
			"Username must be alphanumeric and have a minimum of 8 characters"
		);
		return false;
	} else if (!passwordRegex.test(password)) {
		alert(
			"Password must contain 10 characters including one special character, one upper case, and one numeric"
		);
		return false;
	} else return true;
}

// document.getElementById("btn").addEventListener("click", (e) => login(e));
function reg(event) {
	// event.preventDefault();
	var username = document.getElementById("newUsername").value;
	var password = document.getElementById("newPassword").value;

	if (validateRegistration(username, password, event)) {
		localStorage.setItem(username, password);
		alert("Registered Successfully. Kindly Login.");
	}
}
