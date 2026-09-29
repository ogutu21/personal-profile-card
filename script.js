// ========================================
// PERSONAL PROFILE CARD
// ========================================


// Get the profile card
const card = document.querySelector(".profile-card");


// ========================================
// CREATE DARK MODE BUTTON
// ========================================

const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";

themeButton.className = "theme-button";


// Add button to the page
document.body.insertBefore(themeButton, card);


// ========================================
// DARK MODE FUNCTION
// ========================================

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    // Change button text
    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

});


// ========================================
// PAGE LOADED MESSAGE
// ========================================

console.log(
    "Personal Profile Card loaded successfully!"
);