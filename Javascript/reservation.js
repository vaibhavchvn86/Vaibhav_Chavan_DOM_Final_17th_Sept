// Sample reservation data (dummy data for testing)
const reservations = [
    { date: '2023-09-20', time: '18:00' },
    { date: '2023-09-21', time: '19:30' },
    { date: '2023-09-22', time: '20:15' },
];

// Function to display existing reservations
function displayReservations() {
    const reservationList = document.getElementById('reservation-list');
    reservationList.innerHTML = ''; // Clear the list before re-populating

    reservations.forEach((reservation, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Reservation ${index + 1}: Date - ${reservation.date}, Time - ${reservation.time}`;
        reservationList.appendChild(listItem);
    });
}

// Display existing reservations on page load
window.addEventListener('load', displayReservations);

// Reservation form submission
const reservationForm = document.getElementById('reservation-form');
reservationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Check availability (sample logic, adjust as needed)
    const isAvailable = checkAvailability(date, time);

    if (isAvailable) {
        // Create a reservation object
        const reservation = {
            date,
            time,
        };

        // Store the reservation in the dummy data
        reservations.push(reservation);

        // Display the updated list of reservations
        displayReservations();

        // Clear the form
        reservationForm.reset();

        // Display a success message
        document.getElementById('availability-result').textContent = 'Table booked successfully!';
    } else {
        // Display a message if not available
        document.getElementById('availability-result').textContent = 'This time slot is not available. Please choose another.';
    }
});

// Check availability (updated function)
function checkAvailability(date, time) {
    // Combine date and time to create a reservation timestamp
    const reservationTimestamp = new Date(`${date}T${time}:00`);

    // Check if the reservation time conflicts with existing reservations
    for (const reservation of reservations) {
        const existingTimestamp = new Date(`${reservation.date}T${reservation.time}:00`);

        // Check if the time difference is less than the allowed gap (e.g., 1 hour)
        const timeDiff = Math.abs(reservationTimestamp - existingTimestamp) / 60000; // in minutes
        if (timeDiff < 60) {
            return false; // Time slot is not available
        }
    }

    return true; // Time slot is available
}
