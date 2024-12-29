document.addEventListener("DOMContentLoaded", function () {
        const loginForm = document.getElementById("login-form");
        const errorMessage = document.getElementById("error-message");
    
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
    
            // You can add your authentication logic here
            // For this example, any username and password combination is accepted
            if (username && password) {
                // Successful login
                window.location.href = "sidebar1.html"; // Redirect to the dashboard page
            } else {
                // Display an error message for empty fields
                errorMessage.style.display = "block";
                errorMessage.textContent = "Please enter both username and password";
            }
        });
    });
