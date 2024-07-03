//search button from home page
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for search button
    document.getElementById('btnSearch').addEventListener('click', function() {
        window.location.href = 'popular-categories.html';
    });

});

//registration page js
  document.addEventListener('DOMContentLoaded', function() {
      // Event listener for candidate sign-up button
      document.getElementById('candidateSignup').addEventListener('click', function() {
          window.location.href = 'candicomplete-profile.html'; 
      });
  
      // Event listener for employer sign-up button
      document.getElementById('employerSignup').addEventListener('click', function() {
          window.location.href = 'empcomplete-profile.html'; 
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



  registerForm.addEventListener('candidateSignup', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://home/execugetco/test/create.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Registration successful.');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error', error);
        }
    });

   