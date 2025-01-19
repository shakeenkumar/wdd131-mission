// Select the theme selector dropdown
const themeSelector = document.getElementById('themeSelector');

// Add a change event listener to the theme selector
themeSelector.addEventListener('change', changeTheme);

// Function to change the theme based on user selection
function changeTheme() {
    const currentTheme = themeSelector.value;

    // If dark theme is selected
    if (currentTheme === "dark") {
        document.body.classList.add('dark'); // Add the dark class to body
        document.getElementById('logo').src = 'byui-logo-white.png'; // Change logo to white
    } else {
        document.body.classList.remove('dark'); // Remove the dark class
        document.getElementById('logo').src = 'byui-logo-blue.png'; // Change logo back to blue
    }
}