/*Notifications-Candi Functionality*/
document.getElementById('mark-all-read').addEventListener('click', function() {
    // Select all list items within the notifications-content-list
    var notifications = document.querySelectorAll('.notifications-content-list .list-style li a');
    
    // Iterate over each notification and change its background color
    notifications.forEach(function(notification) {
        notification.style.backgroundColor = 'white';
        
        // Add hover event listener to change styles on hover
        notification.addEventListener('mouseover', function() {
            notification.style.backgroundColor = '#193768';
            notification.style.borderColor = '#f4f7f7';
            notification.style.color = 'white';
        });
        
        // Add hover event listener to revert styles when not hovered
        notification.addEventListener('mouseout', function() {
            notification.style.backgroundColor = 'white';
            notification.style.borderColor = '';
            notification.style.color = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var notifications = document.querySelectorAll('.notifications-content-list .list-style li a');

    // Check if the page was reloaded
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Clear the clicked state in localStorage
        notifications.forEach(function(notification) {
            var notificationId = notification.getAttribute('data-id');
            localStorage.removeItem('notification-' + notificationId);
        });
    }

    // Check localStorage for previously clicked notifications and set their background color
    notifications.forEach(function(notification) {
        var notificationId = notification.getAttribute('data-id');
        if (localStorage.getItem('notification-' + notificationId) === 'clicked') {
            notification.classList.add('clicked');
        }

        notification.addEventListener('click', function(event) {
            // Prevent the default action to allow background color change
            event.preventDefault();

            // Change the background color of the clicked notification
            notification.classList.add('clicked');

            // Store the clicked state in localStorage
            localStorage.setItem('notification-' + notificationId, 'clicked');

            // Open the associated link
            window.location.href = notification.href;
        });
    });
});
