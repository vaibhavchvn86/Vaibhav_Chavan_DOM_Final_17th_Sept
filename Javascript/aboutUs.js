// JavaScript to handle staff and chef details pop-ups
document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll('.view-details-button');
    const modals = document.querySelectorAll('.modal');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            modal.style.display = 'block';
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal || event.target.classList.contains('close-modal-button')) {
                modal.style.display = 'none';
            }
        });
    });

    // JavaScript for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
