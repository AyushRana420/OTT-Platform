function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = "block";
        return false;
    }

    // Add additional login logic here (like making a request to a server)
    
    return true; // Allow form submission
}
