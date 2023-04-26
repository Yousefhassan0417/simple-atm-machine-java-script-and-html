var balance = 50000;

function deposit() {
	var amount = parseInt(document.getElementById("amount").value);
	if (isNaN(amount)) {
		alert("Please enter a valid amount.");
		return;
	}
	balance += amount;
	document.getElementById("balance").innerHTML = balance;
}

function withdraw() {
	var amount = parseInt(document.getElementById("amount").value);
	if (isNaN(amount)) {
		alert("Please enter a valid amount.");
		return;
	}
	if (balance < amount) {
		alert("Insufficient balance.");
		return;
	}
	balance -= amount;
	document.getElementById("balance").innerHTML = balance;
}

function transfer() {
	var amount = parseInt(document.getElementById("amount").value);
	if (isNaN(amount)) {
		alert("Please enter a valid amount.");
		return;
	}
	if (balance < amount) {
		alert("Insufficient balance.");
		return;
	}
	var accountNumber = prompt("Enter account number:");
	if (accountNumber === null || accountNumber === "") {
		alert("Please enter a valid account number.");
		return;
	}
	alert("Transferred " + amount + " to account number " + accountNumber + ".");
	balance -= amount;
	document.getElementById("balance").innerHTML = balance;
}

function printBalance() {
	alert("Your account balance is " + balance + ".");
}

function logout() {
	window.location.href = "atm1.html";
}

document.getElementById("deposit-btn").addEventListener("click", deposit);
document.getElementById("withdraw-btn").addEventListener("click", withdraw);
document.getElementById("transfer-btn").addEventListener("click", transfer);
document.getElementById("balance-btn").addEventListener("click", printBalance);
document.getElementById("logout-btn").addEventListener("click", logout);
