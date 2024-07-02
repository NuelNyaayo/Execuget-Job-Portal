document.addEventListener('DOMContentLoaded', function() {
    
    const submitButton = document.querySelector('.submit-button');
    
    submitButton.addEventListener('click', function() {
        submitButton.classList.add('success'); /*error alt*/
        submitButton.innerHTML = ' Posted'; // Use innerHTML to insert the check mark icon and text
    });
});

//add section
document.addEventListener('DOMContentLoaded', () => {
    // Clear the additional benefits, responsibilities, and skills containers on page load
    document.getElementById('additional-benefits').innerHTML = '';
    document.getElementById('additional-responsibilities').innerHTML = '';
    document.getElementById('additional-skills').innerHTML = '';

    const addBenefitButton = document.getElementById('addBenefitButton');
    addBenefitButton.addEventListener('click', addBenefit);

    const addResponsibilityButton = document.getElementById('addResponsibilityButton');
    addResponsibilityButton.addEventListener('click', addResponsibility);

    const addSkillButton = document.getElementById('addSkillButton');
    addSkillButton.addEventListener('click', addSkill);
});

function addBenefit() {
    // Create a new div container for the benefit input and the remove icon
    const benefitContainer = document.createElement('div');
    benefitContainer.className = 'benefit-container';

    // Create another div to wrap the input and the remove icon
    const benefitWrapper = document.createElement('div');
    benefitWrapper.className = 'benefit-wrapper';

    // Create the new text input for the benefit
    const newBenefitInput = document.createElement('input');
    newBenefitInput.type = 'text';
    newBenefitInput.name = 'jobbenefits';
    newBenefitInput.placeholder = 'e.g., Health insurance';
    newBenefitInput.className = 'benefit-input';
    newBenefitInput.required = true;

    // Create the remove icon
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fas fa-times remove-icon';
    removeIcon.onclick = function() {
        benefitContainer.remove();
    };

    // Append the input and remove icon to the benefit wrapper
    benefitWrapper.appendChild(newBenefitInput);
    benefitWrapper.appendChild(removeIcon);

    // Append the benefit wrapper to the benefit container
    benefitContainer.appendChild(benefitWrapper);

    // Append the benefit container to the additional benefits div
    document.getElementById('additional-benefits').appendChild(benefitContainer);
}

function addResponsibility() {
    // Create a new div container for the responsibility input and the remove icon
    const responsibilityContainer = document.createElement('div');
    responsibilityContainer.className = 'responsibility-container';

    // Create another div to wrap the input and the remove icon
    const responsibilityWrapper = document.createElement('div');
    responsibilityWrapper.className = 'responsibility-wrapper';

    // Create the new text input for the responsibility
    const newResponsibilityInput = document.createElement('input');
    newResponsibilityInput.type = 'text';
    newResponsibilityInput.name = 'responsibilities';
    newResponsibilityInput.placeholder = 'e.g., Manage team projects';
    newResponsibilityInput.className = 'responsibility-input';
    newResponsibilityInput.required = true;

    // Create the remove icon
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fas fa-times remove-icon';
    removeIcon.onclick = function() {
        responsibilityContainer.remove();
    };

    // Append the input and remove icon to the responsibility wrapper
    responsibilityWrapper.appendChild(newResponsibilityInput);
    responsibilityWrapper.appendChild(removeIcon);

    // Append the responsibility wrapper to the responsibility container
    responsibilityContainer.appendChild(responsibilityWrapper);

    // Append the responsibility container to the additional responsibilities div
    document.getElementById('additional-responsibilities').appendChild(responsibilityContainer);
}

function addSkill() {
    // Create a new div container for the skill input and the remove icon
    const skillContainer = document.createElement('div');
    skillContainer.className = 'skill-container';

    // Create another div to wrap the input and the remove icon
    const skillWrapper = document.createElement('div');
    skillWrapper.className = 'skill-wrapper';

    // Create the new text input for the skill
    const newSkillInput = document.createElement('input');
    newSkillInput.type = 'text';
    newSkillInput.name = 'skills';
    newSkillInput.placeholder = 'e.g., JavaScript';
    newSkillInput.className = 'skill-input';
    newSkillInput.required = true;

    // Create the remove icon
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fas fa-times remove-icon';
    removeIcon.onclick = function() {
        skillContainer.remove();
    };

    // Append the input and remove icon to the skill wrapper
    skillWrapper.appendChild(newSkillInput);
    skillWrapper.appendChild(removeIcon);

    // Append the skill wrapper to the skill container
    skillContainer.appendChild(skillWrapper);

    // Append the skill container to the additional skills div
    document.getElementById('additional-skills').appendChild(skillContainer);
}


             
            document.addEventListener('DOMContentLoaded', () => {
    const postjobBtn = document.getElementById('postjob-btn');

    // Form submission handler
    postjobBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to the server
        alert('Posted job successfully!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
      // Event listener for post job button
      document.getElementById('postjob-btn').addEventListener('click', function() {
          window.location.href = 'employer-dashboard.html'; 
     });
  });