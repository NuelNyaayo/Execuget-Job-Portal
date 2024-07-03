/*Candidate-Profile Functionality*/
document.addEventListener('DOMContentLoaded', () => {
    const profilepicUploadInput = document.getElementById('profilepic-upload');
    const profilepic = document.getElementById('profile-pic');
    const defaultInitial = document.getElementById('default-initial');

    document.getElementById('profile-pic').addEventListener('click', function() {
        profilepicUploadInput.click();
    });

    document.getElementById('default-initial').addEventListener('click', function() {
        profilepicUploadInput.click();
    });

    document.getElementById('remove-profilepic-btn').addEventListener('click', function() {
        removeprofilepic();
    });

    document.getElementById('update-profilepic-btn').addEventListener('click', function() {
        profilepicUploadInput.click();
    });

    profilepicUploadInput.addEventListener('change', function(event) {
        updateprofilepic(event);
    });

    function updateprofilepic(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            profilepic.src = e.target.result;
            profilepic.classList.remove('hidden');
            defaultInitial.classList.add('hidden');
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        // Reset the file input value to allow the same file to be selected again
        profilepicUploadInput.value = '';
    }

    function removeprofilepic() {
        profilepic.src = '';  // Clear the profilepic image
        profilepic.classList.add('hidden'); // Hide the image element
        defaultInitial.classList.remove('hidden'); // Show the initial letter
    }

    function initializeDefaultLogo(candidateName) {
        if (!profilepic.src || profilepic.src === window.location.href) {
            defaultInitial.textContent = candidateName.charAt(0).toUpperCase();
            defaultInitial.classList.remove('hidden');
        } else {
            defaultInitial.classList.add('hidden');
        }
    }

    // Call this function with candidate's name
    initializeDefaultLogo('Lauran Benite'); // Replace 'Lauran Benite' with candidate's name
});

function editField(fieldId) {
    const field = document.getElementById(fieldId);
    const currentValue = field.innerText || field.textContent;
    
    if (fieldId === 'candidate-description'|| fieldId === 'candidate-location'  || fieldId === 'candidate-education' || fieldId === 'candidate-experience' || fieldId === 'candidate-license') {
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
    } else if (fieldId === 'candidate-industry') {
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
    } else if (fieldId === 'candidate-name' || fieldId === 'candidate-phone' || fieldId === 'candidate-mail' || fieldId === 'candidate-link' || fieldId === 'candidate-skill'|| fieldId === 'candidate-address') {
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

    function createAndSetupElement(elementType, placeholder, width, height) {
        const element = document.createElement(elementType);
        element.placeholder = placeholder;

        if (width) {
            element.style.width = width;
        }

        if (height) {
            element.style.height = height;
        }

        function saveValue() {
            const newValue = element.value.trim();
            if (newValue !== '') {
                const newDiv = document.createElement('div');
                newDiv.innerText = newValue;
                element.parentNode.insertBefore(newDiv, element);
            }
            element.value = '';
            element.style.display = 'none';
        }

        element.addEventListener('blur', saveValue);
        element.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                if (elementType === 'textarea') {
                    event.preventDefault();
                }
                saveValue();
            }
        });

        let referenceNode = field.nextSibling;
        while (referenceNode && referenceNode.nodeType === Node.ELEMENT_NODE && referenceNode.tagName !== 'BUTTON') {
            referenceNode = referenceNode.nextSibling;
        }

        const container = field.parentNode;
        container.insertBefore(element, referenceNode);
        element.focus();

        return element;
    }

    if (fieldId === 'candidate-phone') {
        createAndSetupElement('input', 'Enter new phone no.');
    } else if (fieldId === 'candidate-mail') {
        createAndSetupElement('input', 'Enter new email.');
    } else if (fieldId === 'candidate-link') {
        createAndSetupElement('input', 'Enter new link.');
    } else if (fieldId === 'candidate-skill') {
        createAndSetupElement('input', 'Enter new skill.');
    } else if (fieldId === 'candidate-education') {
        createAndSetupElement('textarea', 'Describe your Education here...', '1100px', '100px');
    } else if (fieldId === 'candidate-experience') {
        createAndSetupElement('textarea', 'Describe your work experience here...', '1100px', '100px');
    } else if (fieldId === 'candidate-license') {
        createAndSetupElement('textarea', 'Update your License here...', '1100px', '100px');
    }

    function saveValue() {
        const currentValue = field.innerText.trim();
        if (currentValue !== '') {
            const newDiv = document.createElement('div');
            newDiv.innerText = currentValue;
            field.parentNode.insertBefore(newDiv, field.nextSibling);
        }
        field.innerText = ''; // Clear the input field after saving
    }

    field.addEventListener('blur', saveValue);
    field.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            saveValue();
        }
    });
}

function editfileField(fieldId) {
        const field = document.getElementById(fieldId);
        const uploadInput = document.createElement('input');
        uploadInput.type = 'file';
        uploadInput.accept = '.pdf,.doc,.docx,.txt';
        uploadInput.style.display = 'none';

        uploadInput.onchange = function(event) {
            const file = event.target.files[0];
            if (file) {
                const uploadedResumesDiv = document.getElementById('candidate-resume');
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

let uploadedFiles = new Set(); // Store the names of uploaded files

function addfileField() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.txt';
    fileInput.style.display = 'none';
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            if (uploadedFiles.has(file.name)) {
                alert('This document has already been uploaded.');
                return;
            }
            
            const candidateDocDiv = document.getElementById('candidate-document');
            
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
                uploadedFiles.delete(file.name);
            };

            // Append elements to the file container
            fileContainer.appendChild(fileNameSpan);
            fileContainer.appendChild(downloadIcon);
            fileContainer.appendChild(removeIcon);

            // Append the file container to the company social div
            candidateDocDiv.appendChild(fileContainer);
            
            // Add the file name to the set of uploaded files
            uploadedFiles.add(file.name);
        }
    };

    // Append the file input to the body and trigger the click event
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
}
