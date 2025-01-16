const navLinks = document.querySelectorAll('.nav-links a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActive();
        link.classList.add('active');
    });
});

const mainLinks = document.querySelectorAll('.logo span')

mainLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActive();
    });
});

function removeActive() {
    navLinks.forEach(link => link.classList.remove('active'));
}