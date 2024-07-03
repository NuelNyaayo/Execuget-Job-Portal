document.addEventListener('DOMContentLoaded', function() {
    // Event listener for candidate sign-in button
    document.getElementById('candidateSignIn').addEventListener('click', function() {
        window.location.href = 'candidate-dashboard.html'; // Replace with the actual candidate dashboard URL
    });

    // Event listener for employer sign-in button
    document.getElementById('employerSignIn').addEventListener('click', function() {
        window.location.href = 'employer-dashboard.html'; // Replace with the actual employer dashboard URL
    });
});
function togglePassword(fieldId) {
var passwordField = document.getElementById(fieldId);
var icon = passwordField.nextElementSibling.firstElementChild;

if (passwordField.type === "password") {
passwordField.type = "text";
icon.classList.remove("fa-eye");
icon.classList.add("fa-eye-slash");
} else {
passwordField.type = "password";
icon.classList.remove("fa-eye-slash");
icon.classList.add("fa-eye");
}
}