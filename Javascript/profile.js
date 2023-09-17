// Function to fetch user data from the API
async function fetchUserData() {
    try {
        const response = await fetch('https://reqres.in/api/users/2');
        const data = await response.json();
        const user = data.data;

        // Populate user information
        const userAvatar = document.querySelector('.avatar img');
        userAvatar.src = user.avatar;
        userAvatar.alt = 'User Avatar';

        const userName = document.querySelector('.user-name h3');
        userName.textContent = `${user.first_name} ${user.last_name}`;

        const userEmail = document.querySelector('.user-name p:nth-child(2)');
        userEmail.textContent = `Email: ${user.email}`;

        // Fetch and populate past reservations (You can add your logic here)
        const reservationList = document.querySelector('.reservation-list');
        reservationList.innerHTML = 'No past reservations available'; // Change this line with your logic
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call the fetchUserData function when the page loads
window.addEventListener('load', fetchUserData);
