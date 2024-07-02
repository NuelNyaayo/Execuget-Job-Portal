document.addEventListener('DOMContentLoaded', () => {
    const logoUploadInput = document.getElementById('logo-upload');
    const companyLogo = document.getElementById('company-logo');
    const defaultInitial = document.getElementById('default-initial');

    document.getElementById('company-logo').addEventListener('click', function() {
        logoUploadInput.click();
    });

    document.getElementById('default-initial').addEventListener('click', function() {
        logoUploadInput.click();
    });

    document.getElementById('remove-logo-btn').addEventListener('click', function() {
        removeLogo();
    });

    document.getElementById('update-logo-btn').addEventListener('click', function() {
        logoUploadInput.click();
    });

    logoUploadInput.addEventListener('change', function(event) {
        updateLogo(event);
    });

    function updateLogo(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            companyLogo.src = e.target.result;
            companyLogo.classList.remove('hidden');
            defaultInitial.classList.add('hidden');
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        // Reset the file input value to allow the same file to be selected again
        logoUploadInput.value = '';
    }

    function removeLogo() {
        companyLogo.src = '';  // Clear the logo image
        companyLogo.classList.add('hidden'); // Hide the image element
        defaultInitial.classList.remove('hidden'); // Show the initial letter
    }

    function initializeDefaultLogo(companyName) {
        if (!companyLogo.src || companyLogo.src === window.location.href) {
            defaultInitial.textContent = companyName.charAt(0).toUpperCase();
            defaultInitial.classList.remove('hidden');
        } else {
            defaultInitial.classList.add('hidden');
        }
    }

    // Call this function with your company name
    initializeDefaultLogo('MOOI Coop'); // Replace 'MOOI Coop' with your company name
});


function editField(fieldId) {
    const field = document.getElementById(fieldId);
    const currentValue = field.innerText || field.textContent;
    
    if (fieldId === 'company-description'|| fieldId === 'company-location' || fieldId === 'company-address') {
        // Create a textarea element
        const textarea = document.createElement('textarea');
        textarea.value = currentValue;
        textarea.style.width = '100%'; // Optional: Make the textarea take the full width
        textarea.style.height = '100px'; // Optional: Set the height of the textarea

        // Replace the field with the textarea element
        field.parentNode.replaceChild(textarea, field);
        
        // Focus the textarea
        textarea.focus();
        
        // Add an event listener to save changes on blur
        textarea.addEventListener('blur', function() {
            field.innerText = textarea.value;
            textarea.parentNode.replaceChild(field, textarea);
        });
        
        // Add an event listener to save changes on enter key press
        textarea.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                field.innerText = textarea.value;
                textarea.parentNode.replaceChild(field, textarea);
            }
        });
    } else if (fieldId === 'company-industry') {
        // Define industry categories
        const industryCategories = [
            'Engineer/Architects',
            'Technology',
            'Healthcare',
            'Finance',
            'Education',
            'Retail',
            'Manufacturing',
            'Real Estate',
            'Transportation',
            'Energy'
        ];

        // Create a select element
        const select = document.createElement('select');
        select.style.width = '100%'; // Optional: Make the select take the full width
        
        // Create options for the select element
        industryCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.text = category;
            if (category === currentValue) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Replace the field with the select element
        field.parentNode.replaceChild(select, field);
        
        // Focus the select element
        select.focus();
        
        // Add an event listener to save changes on blur
        select.addEventListener('blur', function() {
            field.innerText = select.value;
            select.parentNode.replaceChild(field, select);
        });

        // Add an event listener to save changes on enter key press
        select.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                field.innerText = select.value;
                select.parentNode.replaceChild(field, select);
            }
        });
    } else if (fieldId === 'company-name' || fieldId === 'company-phone' || fieldId === 'company-mail' || fieldId === 'company-social') {
            // Create an input element
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentValue;
    
    // Replace the field with the input element
    field.parentNode.replaceChild(input, field);
    
    // Focus the input field
    input.focus();
    
    // Add an event listener to save changes on blur
    input.addEventListener('blur', function() {
        field.innerText = input.value;
        input.parentNode.replaceChild(field, input);
    });
    
    // Add an event listener to save changes on enter key press
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            field.innerText = input.value;
            input.parentNode.replaceChild(field, input);
        }
    });
    }
}

function addField(fieldId) {
    const field = document.getElementById(fieldId);

    // If fieldId is 'company-phone', handle adding a new input field for adding a phone number
    if (fieldId === 'company-phone') {
    // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter new phone no.';

    // Function to save the new phone number
    function savePhoneNumber() {
        const newPhoneNumber = input.value.trim();
        if (newPhoneNumber !== '') {
            const newPhoneDiv = document.createElement('div');
            newPhoneDiv.innerText = newPhoneNumber;

            // Insert the new phone number div before the input
            input.parentNode.insertBefore(newPhoneDiv, input);
        }

        // Clear the input field after saving
        input.value = '';

        // Make the input invisible
        input.style.display = 'none';
    }

    // Add event listener for the blur event
    input.addEventListener('blur', savePhoneNumber);

    // Add event listener for the Enter key
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            savePhoneNumber();
        }
    });

    // Find the reference node for positioning the new input
    let referenceNode = field.nextSibling;
    while (referenceNode && referenceNode.nodeType === Node.ELEMENT_NODE && referenceNode.tagName !== 'BUTTON') {
        referenceNode = referenceNode.nextSibling;
    }

    // Insert the input field before the reference node
    const container = field.parentNode;
    container.insertBefore(input, referenceNode);

    // Automatically focus on the input field when it's created
    input.focus();
}



    else if(fieldId === 'company-mail'){
        // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter new email.';

    // Function to save the new phone number
    function savePhoneNumber() {
        const newPhoneNumber = input.value.trim();
        if (newPhoneNumber !== '') {
            const newPhoneDiv = document.createElement('div');
            newPhoneDiv.innerText = newPhoneNumber;

            // Insert the new phone number div before the input
            input.parentNode.insertBefore(newPhoneDiv, input);
        }

        // Clear the input field after saving
        input.value = '';

        // Make the input invisible
        input.style.display = 'none';
    }

    // Add event listener for the blur event
    input.addEventListener('blur', savePhoneNumber);

    // Add event listener for the Enter key
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            savePhoneNumber();
        }
    });

    // Find the reference node for positioning the new input
    let referenceNode = field.nextSibling;
    while (referenceNode && referenceNode.nodeType === Node.ELEMENT_NODE && referenceNode.tagName !== 'BUTTON') {
        referenceNode = referenceNode.nextSibling;
    }

    // Insert the input field before the reference node
    const container = field.parentNode;
    container.insertBefore(input, referenceNode);

    // Automatically focus on the input field when it's created
    input.focus();
    }
    else if(fieldId === 'company-social'){
        // Create a new input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter new phone no.';

    // Function to save the new phone number
    function savePhoneNumber() {
        const newPhoneNumber = input.value.trim();
        if (newPhoneNumber !== '') {
            const newPhoneDiv = document.createElement('div');
            newPhoneDiv.innerText = newPhoneNumber;

            // Insert the new phone number div before the input
            input.parentNode.insertBefore(newPhoneDiv, input);
        }

        // Clear the input field after saving
        input.value = '';

        // Make the input invisible
        input.style.display = 'none';
    }

    // Add event listener for the blur event
    input.addEventListener('blur', savePhoneNumber);

    // Add event listener for the Enter key
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            savePhoneNumber();
        }
    });

    // Find the reference node for positioning the new input
    let referenceNode = field.nextSibling;
    while (referenceNode && referenceNode.nodeType === Node.ELEMENT_NODE && referenceNode.tagName !== 'BUTTON') {
        referenceNode = referenceNode.nextSibling;
    }

    // Insert the input field before the reference node
    const container = field.parentNode;
    container.insertBefore(input, referenceNode);

    // Automatically focus on the input field when it's created
    input.focus();
    }

    // Add event listeners to save changes on blur
    field.addEventListener('blur', function () {
        const currentValue = field.innerText.trim();
        if (currentValue !== '') {
            const newField = document.createElement('div');
            newField.innerText = currentValue;
            field.parentNode.insertBefore(newField, field.nextSibling);
        }
        field.innerText = ''; // Clear the input field after saving
        
    });

    // Add event listener to save changes on enter key press
    field.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const currentValue = field.innerText.trim();
            if (currentValue !== '') {
                const newField = document.createElement('div');
                newField.innerText = currentValue;
                field.parentNode.insertBefore(newField, field.nextSibling);
            }
            field.innerText = ''; // Clear the input field after saving
        }
    });
}




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