document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form.login");
    const signupForm = document.querySelector(".signup");
    const apiError = document.getElementById("apiError");
    const loginRadio = document.getElementById("login");
    const signupRadio = document.getElementById("signup");
    const loginText = document.querySelector(".title-text .login");
    const signupText = document.querySelector(".title-text .login");

    function handleFormVisibility() {
        if (loginRadio.checked) {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        } else {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        }
    }

    handleFormVisibility();

    // Add event listeners to handle form visibility and animation
    loginRadio.addEventListener("click", handleFormVisibility);
    signupRadio.addEventListener("click", handleFormVisibility);

    // Function to handle API errors
    function handleApiError(error) {
        apiError.textContent = error;
        apiError.style.display = "block";
    }

    // Function to handle successful API response
    function handleApiResponse(response) {
        if (response.status === 200) {
            // Successful response, proceed to a new page or perform other actions
            window.location.href = "newpage.html";
        } else if (response.status === 400) {
            // Bad request, handle error response from API
            response.json().then((data) => {
                handleApiError(data.error); // Assuming the API returns an "error" field in the response
            });
        } else {
            // Handle other response statuses as needed
            handleApiError("An error occurred.");
        }
    }

    // Function to submit login form
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        apiError.style.display = "none";

        const email = loginForm.querySelector(".email-input").value;
        const password = loginForm.querySelector(".password-input").value;

        // Make a POST request to the login API
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(handleApiResponse)
        .catch((error) => {
            handleApiError("An error occurred.");
        });
    });

    // Function to submit signup form
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        apiError.style.display = "none";

        const email = signupForm.querySelector(".email-input").value;
        const password = signupForm.querySelector(".password-input").value;
        const confirmPassword = signupForm.querySelector(".confirm-password-input")
            .value;

        // Make a POST request to the signup API
        fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            }),
        })
        .then(handleApiResponse)
        .catch((error) => {
            handleApiError("An error occurred.");
        });
    });
});
