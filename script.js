// Dom Element Declarations
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Theme Toggle Behavioral Logic
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.innerText = '☀️ Light Mode';
    } else {
        themeToggle.innerText = '🌙 Dark Mode';
    }
});

// Category Content Active Filters
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class style from previous click references
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const targetFilter = button.getAttribute('data-filter');
        
        // Loop structural project cards and apply hidden display states
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (targetFilter === 'all' || cardCategory === targetFilter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});
