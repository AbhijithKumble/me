// Add any interactivity here if needed
// For example, smooth scrolling for the buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
