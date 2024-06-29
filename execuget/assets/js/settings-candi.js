/*Settings-Candi Functionality*/
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