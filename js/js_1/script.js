document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        var fullname = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (!validateFullName(fullname)) {
            alert("Please enter a valid full name.");
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (!validatePassword(password)) {
            alert("Please enter a valid password (at least 6 characters).");
            event.preventDefault();
            return;
        }

        alert("Registration successful!");
    });

    function validateFullName(fullname) {
        return fullname.trim() !== "";
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
