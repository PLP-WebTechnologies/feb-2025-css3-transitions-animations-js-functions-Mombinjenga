// Select elements
const animateButton = document.getElementById('animateButton');
const animatedImage = document.getElementById('animatedImage');

// Function to store user preferences in localStorage
function storeUserPreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preferences from localStorage
function getUserPreference(key) {
    return localStorage.getItem(key);
}

// Function to trigger the bounce animation
function triggerBounceAnimation() {
    animatedImage.style.animation = 'bounce 1s ease-in-out';
    storeUserPreference('lastAnimation', 'bounce');

    // Reset animation after it completes
    setTimeout(() => {
        animatedImage.style.animation = '';
    }, 1000);
}

// Event listener for button click
animateButton.addEventListener('click', () => {
    triggerBounceAnimation();
});

// Retrieve and log the last animation preference
const lastAnimation = getUserPreference('lastAnimation');
if (lastAnimation) {
    console.log(`Last animation played: ${lastAnimation}`);
}