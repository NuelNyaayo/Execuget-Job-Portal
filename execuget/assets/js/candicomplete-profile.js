//Candicomplete-Profile functionality
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
initializeDefaultLogo('Lauran Benite'); // Replace 'MOOI Coop' with your company name

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
    initializeDefaultLogo('Lauran Benite'); // Ensure this matches your company name
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


//uploads section
document.addEventListener('DOMContentLoaded', () => {
    const uploadLabel = document.getElementById('uploadLabel');

    uploadLabel.addEventListener('click', addfileField);
});

function addfileField() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.txt';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const candidateDocDiv = document.getElementById('candidate-document');
            const existingFiles = candidateDocDiv.getElementsByClassName('uploaded-file');

            // Check if a file with the same name already exists
            for (let i = 0; i < existingFiles.length; i++) {
                const existingFileName = existingFiles[i].querySelector('span').innerText;
                if (existingFileName === file.name) {
                    alert('This file has already been uploaded.');
                    fileInput.remove();
                    return;
                }
            }

            // Create a container for the uploaded file
            const fileContainer = document.createElement('div');
            fileContainer.className = 'uploaded-file';

            // Create a span to show the file name
            const fileNameSpan = document.createElement('span');
            fileNameSpan.innerText = file.name;

            // Create a download icon
            const downloadIcon = document.createElement('span');
            downloadIcon.className = 'icon download';
            downloadIcon.innerHTML = '<i class="fas fa-download"></i>';
            downloadIcon.onclick = function() {
                const url = URL.createObjectURL(file);
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                a.click();
                URL.revokeObjectURL(url);
            };

            // Create a remove icon
            const removeIcon = document.createElement('span');
            removeIcon.className = 'icon remove';
            removeIcon.innerHTML = '<i class="fas fa-times"></i>';
            removeIcon.onclick = function() {
                fileContainer.remove();
            };

            // Append elements to the file container
            fileContainer.appendChild(fileNameSpan);
            fileContainer.appendChild(downloadIcon);
            fileContainer.appendChild(removeIcon);

            // Append the file container to the documents container
            candidateDocDiv.appendChild(fileContainer);
        }

        // Remove the file input element after handling the file
        fileInput.remove();
    });

    // Append the file input to the body, trigger the click event, then remove the input element
    document.body.appendChild(fileInput);
    fileInput.click();
}



document.addEventListener('DOMContentLoaded', () => {
    const uploadResumeLabel = document.getElementById('uploadResumeLabel');
    uploadResumeLabel.addEventListener('click', () => editfileField('candidate-resume'));
});

function editfileField(fieldId) {
    const field = document.getElementById(fieldId);
    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
    uploadInput.accept = '.pdf,.doc,.docx,.txt';
    uploadInput.style.display = 'none';

    uploadInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            
            const uploadedResumesDiv = document.getElementById(fieldId);
            uploadedResumesDiv.innerHTML = ''; // Clear the existing content

            const fileContainer = document.createElement('div');
            fileContainer.className = 'uploaded-file';

            const fileNameSpan = document.createElement('span');
            fileNameSpan.innerText = file.name;

            const downloadIcon = document.createElement('span');
            downloadIcon.className = 'icon download';
            downloadIcon.innerHTML = '<i class="fas fa-download"></i>';
            downloadIcon.onclick = function() {
                const url = URL.createObjectURL(file);
                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                a.click();
                URL.revokeObjectURL(url);
            };

            const removeIcon = document.createElement('span');
            removeIcon.className = 'icon remove';
            removeIcon.innerHTML = '<i class="fas fa-times"></i>';
            removeIcon.onclick = function() {
                fileContainer.remove();
            };

            fileContainer.appendChild(fileNameSpan);
            fileContainer.appendChild(downloadIcon);
            fileContainer.appendChild(removeIcon);

            uploadedResumesDiv.appendChild(fileContainer);
        }
    };

    document.body.appendChild(uploadInput);
    uploadInput.click();
    document.body.removeChild(uploadInput);
}



              //clone section
              document.addEventListener('DOMContentLoaded', () => {
    const addEducationButton = document.getElementById('addEducation');

    // Function to add a new education entry
    addEducationButton.addEventListener('click', () => {
        const educationSection = document.querySelector('.education-entry');
        const newEducationEntry = educationSection.cloneNode(true);
        newEducationEntry.querySelectorAll('input, select, textarea').forEach(input => input.value = '');

        // Add a class to identify cloned entries
        newEducationEntry.classList.add('cloned');

        // Add event listener to the remove icon
        newEducationEntry.querySelector('.remove-education').addEventListener('click', () => {
            newEducationEntry.remove();
        });

        educationSection.parentNode.insertBefore(newEducationEntry, addEducationButton);
    });
});

              document.addEventListener('DOMContentLoaded', () => {
    const addExperienceButton = document.getElementById('addExperience');

    // Function to add a new experience entry
    addExperienceButton.addEventListener('click', () => {
        const experienceSection = document.querySelector('.experience-entry');
        const newExperienceEntry = experienceSection.cloneNode(true);
        newExperienceEntry.querySelectorAll('input, select, textarea').forEach(input => input.value = '');

        // Add a class to identify cloned entries
        newExperienceEntry.classList.add('cloned');

        // Add event listener to the remove icon
        newExperienceEntry.querySelector('.remove-experience').addEventListener('click', () => {
            newExperienceEntry.remove();
        });

        experienceSection.parentNode.insertBefore(newExperienceEntry, addExperienceButton);
    });
});
              document.addEventListener('DOMContentLoaded', () => {
    const addLicenseButton = document.getElementById('addLicense');

    // Function to add a new license entry
    addLicenseButton.addEventListener('click', () => {
        const licenseSection = document.querySelector('.license-entry');
        const newLicenseEntry = licenseSection.cloneNode(true);
        newLicenseEntry.querySelectorAll('input, select, textarea').forEach(input => input.value = '');

        // Add a class to identify cloned entries
        newLicenseEntry.classList.add('cloned');

        // Add event listener to the remove icon
        newLicenseEntry.querySelector('.remove-license').addEventListener('click', () => {
            newLicenseEntry.remove();
        });

        licenseSection.parentNode.insertBefore(newLicenseEntry, addLicenseButton);
    });
});

            document.addEventListener('DOMContentLoaded', () => {
    const addLinkButton = document.getElementById('addLink');
    const candiprofileForm = document.getElementById('candicompleteProfile');

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
    candiprofileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to the server
        alert('Profile completed successfully!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
      // Event listener for candidate complete-profile button
      document.getElementById('candicompleteProfile').addEventListener('click', function() {
          window.location.href = 'candidate-dashboard.html'; 
     });
  });

 

