const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const successAlert = document.getElementById('successAlert');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/;

    // Reset errors and success alert
    emailError.textContent = '';
    phoneError.textContent = '';
    successAlert.style.display = 'none';

    // Validate email
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        return; // Prevent form submission on error
    }

    // Validate phone number
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Invalid phone number (10 digits)';
        return; // Prevent form submission on error
    }

    // If all validation passes, show success alert
    successAlert.style.display = 'block';

    // You can also reset the form here if needed
    // form.reset();
});
