function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username === "user" && password === "password") {
		window.location.href = "atm2.html";
	} else {
		alert("Invalid username or password.");
	}
}

document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();
	login();
});
