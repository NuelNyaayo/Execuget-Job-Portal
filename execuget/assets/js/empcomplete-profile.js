//Empcomplete-Profile functionality
function initializeDefaultLogo(companyName) {
    const logo = document.getElementById('company-logo');
    const defaultInitial = document.getElementById('default-initial');
    if (!logo.src || logo.src === window.location.href) {
        defaultInitial.textContent = companyName.charAt(0).toUpperCase();
        defaultInitial.classList.remove('hidden');
    } else {
        defaultInitial.classList.add('hidden');
    }
}

document.getElementById('default-initial').addEventListener('click', function() {
    document.getElementById('logo-upload').click();
});

document.getElementById('company-logo').addEventListener('click', function() {
    document.getElementById('logo-upload').click();
});

function updateLogo(event) {
    const logo = document.getElementById('company-logo');
    const defaultInitial = document.getElementById('default-initial');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        logo.src = e.target.result;
        logo.classList.remove('hidden');
        defaultInitial.classList.add('hidden');
    };

    if (file) {
        reader.readAsDataURL(file);
    }

    // Reset the file input value to allow the same file to be selected again
    document.getElementById('logo-upload').value = '';
}

// Call this function with your company name
initializeDefaultLogo('MOOI Coop'); // Replace 'MOOI Coop' with your company name

function showDefaultInitial(companyName) {
    const logo = document.getElementById('company-logo');
    const defaultInitial = document.getElementById('default-initial');
    if (!logo.src || logo.src === window.location.href) {
        defaultInitial.textContent = companyName.charAt(0).toUpperCase();
        defaultInitial.classList.remove('hidden');
    } else {
        defaultInitial.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultLogo('MOOI Coop'); // Ensure this matches your company name
});

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.btn-edit');
    const submitButton = document.querySelector('.submit-button');
    
    saveButton.addEventListener('click', function() {
        saveButton.classList.add('success'); /*error alt*/
        saveButton.textContent = 'Saved';
       
    });
    submitButton.addEventListener('click', function() {
        submitButton.classList.add('success'); /*error alt*/
        submitButton.innerHTML = ' Complete'; // Use innerHTML to insert the check mark icon and text
    });
});


              //clone section

              document.addEventListener('DOMContentLoaded', () => {
    const addLinkButton = document.getElementById('addLink');
    const empprofileForm = document.getElementById('empcompleteProfile');

    // Function to add a new link entry
    addLinkButton.addEventListener('click', () => {
        const linkSection = document.querySelector('.links-entry');
        const newLinksEntry = linkSection.cloneNode(true);
        newLinksEntry.querySelectorAll('input').forEach(input => input.value = '');

        // Add a class to identify cloned entries
        newLinksEntry.classList.add('cloned');

        // Add event listener to the remove icon
        newLinksEntry.querySelector('.remove-link').addEventListener('click', () => {
            newLinksEntry.remove();
        });

        linkSection.parentNode.insertBefore(newLinksEntry, addLinkButton);
    });

    // Form submission handler
    empprofileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to the server
        alert('Profile completed successfully!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
      // Event listener for candidate complete-profile button
      document.getElementById('empcompleteProfile').addEventListener('click', function() {
          window.location.href = 'employer-dashboard.html'; 
     });
  });


  document.addEventListener('DOMContentLoaded', () => {
      const addEducationButton = document.getElementById('addEducation');
      const addExperienceButton = document.getElementById('addExperience');
      const profileForm = document.getElementById('profileForm');
  
      addEducationButton.addEventListener('click', () => {
          const educationContainer = document.querySelector('.education-container');
          const educationEntry = educationContainer.querySelector('.education-entry');
          const newEducationEntry = educationEntry.cloneNode(true);
          newEducationEntry.querySelectorAll('input').forEach(input => input.value = '');
          educationContainer.insertBefore(newEducationEntry, addEducationButton);
      });
  
      addExperienceButton.addEventListener('click', () => {
          const experienceContainer = document.querySelector('.experience-container');
          const experienceEntry = experienceContainer.querySelector('.experience-entry');
          const newExperienceEntry = experienceEntry.cloneNode(true);
          newExperienceEntry.querySelectorAll('input, textarea').forEach(input => input.value = '');
          experienceContainer.insertBefore(newExperienceEntry, addExperienceButton);
      });
  
      profileForm.addEventListener('submit', (e) => {
          e.preventDefault();
          // Add logic to handle form submission, e.g., sending data to the server
          alert('Profile completed successfully!');
      });
  });

  document.querySelectorAll('.upload-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const inputId = this.getAttribute('for');
        document.getElementById(inputId).click();
    });
});
