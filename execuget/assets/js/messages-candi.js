document.addEventListener('DOMContentLoaded', function() {
    const conversationListItems = document.querySelectorAll('.conversation-list ul li');
    const conversationBody = document.querySelector('.conversation-body');
    const conversationFooter = document.querySelector('.conversation-footer');
    const textarea = conversationFooter.querySelector('textarea');
    const sendButton = conversationFooter.querySelector('button');

    // Object to store messages for each conversation
    const conversations = {};

    // Function to save the current conversation's messages
    function saveCurrentConversation() {
        const activeItem = document.querySelector('.conversation-list ul li.active');
        if (activeItem) {
            const id = activeItem.textContent.trim();
            conversations[id] = conversationBody.innerHTML;
        }
    }

    // Function to load messages for a given conversation
    function loadConversation(id) {
        conversationBody.innerHTML = conversations[id] || '';
    }

    conversationListItems.forEach(item => {
        item.addEventListener('click', function() {
            // Save the current conversation's messages
            saveCurrentConversation();

            // Remove 'active' class from all list items
            conversationListItems.forEach(li => li.classList.remove('active'));

            // Add 'active' class to the clicked list item
            this.classList.add('active');

            // Load the messages for the clicked conversation
            const id = this.textContent.trim();
            loadConversation(id);

            // Optionally, add a placeholder message if no messages exist
            if (!conversationBody.innerHTML) {
                const placeholderMessage = document.createElement('div');
                placeholderMessage.classList.add('message', 'other');
                placeholderMessage.innerHTML = `
                    <div class="user-profile">
                        <img src="${this.querySelector('img').src}" alt="${this.textContent.trim()}" class="profile-pic">
                        <div class="sender">${this.textContent.trim()}</div>
                    </div>
                    <div class="text">Start a new conversation...</div>
                    <div class="timestamp">${new Date().toLocaleString()}</div>
                `;
                conversationBody.appendChild(placeholderMessage);
            }
        });
    });

    // Event listener to send messages
    sendButton.addEventListener('click', function() {
        const activeItem = document.querySelector('.conversation-list ul li.active');
        if (activeItem) {
            const message = textarea.value.trim();
            if (message) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', 'self');
                messageDiv.innerHTML = `
                    <div class="user-profile">
                        <img src="assets/img/images/pic2.jpg" alt="Profile Pic." class="profile-pic">
                        <div class="sender">You</div>
                    </div>
                    <div class="text">${message}</div>
                    <div class="timestamp">${new Date().toLocaleString()}</div>
                `;
                conversationBody.appendChild(messageDiv);
                textarea.value = '';
                saveCurrentConversation(); // Save the updated conversation
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
            const emojiButton = new EmojiButton();
            const trigger = document.querySelector('#emoji-picker-label');
            const textarea = document.querySelector('#message-input');

            emojiButton.on('emoji', emoji => {
                textarea.value += emoji;
            });

            trigger.addEventListener('click', () => {
                emojiButton.togglePicker(trigger);
            });
        });