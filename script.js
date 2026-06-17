// Monitor page scroll positions
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.borderBottom = '1px solid #202225';
    } else {
        navbar.style.borderBottom = 'none';
    }
});
