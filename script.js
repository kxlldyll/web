// Grab the elements from the HTML
const panicButton = document.getElementById('panicButton');
const errorCode = document.getElementById('errorCode');

// Add a click event listener to the button
panicButton.addEventListener('click', () => {
    // Show a popup message
    alert('Calm down! Redirecting your space shuttle back to safety...');
    
    // Change the 404 text to a rocket emoji
    errorCode.innerText = '🚀';
    
    // Spin the rocket using CSS inline styles
    errorCode.style.transform = 'rotate(45deg) scale(1.2)';
});
