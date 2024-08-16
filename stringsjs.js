// Function to handle Enter key press for moving between inputs
    function handleKeyDown(event, nextElementId) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission on Enter key
            document.getElementById(nextElementId).focus(); // Focus on the next input field or button
        }
    }

// Function to validate user inputs (name and zip code)
    function validateInputs() {
// Get the user input for first and last names
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

// Combine first name and last name into one variable
    let fullName = firstName + ' ' + lastName;

// Check if the combined name is more than 20 characters
    if (fullName.length > 20) {
        alert("Your full name cannot exceed 20 characters. Please try again.");
    return; // Stop execution if the name is too long
    }

// Get the user input for the zip code
    let zipCode = document.getElementById('zipCode').value;

// Check if the zip code is exactly 5 digits long
    if (!/^\d{5}$/.test(zipCode)) {
        alert("Please enter a valid 5-digit zip code.");
    return; // Stop execution if the zip code is invalid
}

// If inputs are valid, display the secret message and reveal the image
    document.getElementById('result').innerText = "Congratulations! Here is your secret message: The treasure is buried under the old oak tree!";
    document.getElementById('secretImage').style.display = 'block'; // Show the image
}