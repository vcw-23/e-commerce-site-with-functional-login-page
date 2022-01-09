function login() {
	var xmlhttp = new XMLHttpRequest();
	var data = new FormData(document.querySelector("form"));

	if (data.get('username') == '') {
		alert("Empty username");
		
	} else if (passwordValidator(data.get('password')) == true) {
		xmlhttp.open("POST", "php/login.php", true);
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				if (xmlhttp.responseText === "true") {
					window.location = "store.html";
				} else {
					alert("Incorrect username or password");
				}
			}
		};
		xmlhttp.send(data);
	}
}

function passwordValidator(password) {

	var result = false;

	if (password == '') {
		alert("Empty password");
		result = false;
	} else {

		result = true;
		// Validate lowercase letters
		var lowerCaseLetters = /[a-z]/g;
		if (password.match(lowerCaseLetters)) {
			result = true;

			// Validate capital letters
			var upperCaseLetters = /[A-Z]/g;
			if (password.match(upperCaseLetters)) {
				result = true;

				// Validate numbers
				var numbers = /[0-9]/g;
				if (password.match(numbers)) {
					result = true;

					// Validate length
					if (password.length >= 6) {
						result = true;

						// Validate special characters 
						var special = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
						if (special.test(password)) {
							result = true;
						} else {
							alert("Must have 1 special characters at least!");
							result = false;
						}
					} else {
						alert("Must have 6 characters at least!");
						result = false;
					}
				} else {
					alert("Must have numbers!");
					result = false;
				}
			} else {
				alert("Must have uperCase!");
				result = false;
			}
		} else {
			alert("Must have lowerCase!");
			result = false;
		}
	}

	return result;
}