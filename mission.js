// Select the theme dropdown and other elements
const themeSelector = document.querySelector("#theme-selector");
const body = document.body;
const logo = document.querySelector("#logo");

// Function to change the theme
function changeTheme() {
    if (themeSelector.value === "dark") {
        // Add the dark class to the body
        body.classList.add("dark");
        // Change the logo to the white version
        logo.src = "byui-logo-white.png";
    } else {
        // Remove the dark class from the body
        body.classList.remove("dark");
        // Change the logo back to the blue version
        logo.src = "byui-logo-blue.png";
    }
}

// Add an event listener for changes to the theme selector
themeSelector.addEventListener("change", changeTheme);
