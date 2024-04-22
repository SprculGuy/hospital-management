document.getElementById("btn").addEventListener("click", (e) => login(e));

function login(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var storedPassword = localStorage.getItem(`${username}`);
	if (!storedPassword) {
		alert("User not found, please regiter first...");
		window.location.href = "../admin/admin-reg.html";
	} else if (password == storedPassword) {
		alert("Login successful");
		window.location.href = "../admin/admin-dashboard.html";
	} else {
		alert("Password is wrong...");
	}
}
