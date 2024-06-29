document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var profileLink = document.querySelector('.user-profile .account-settings');

    // Check if the current URL matches the profile link href
    if (profileLink && profileLink.href === currentUrl) {
        profileLink.classList.add('active');
    }
});









