function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox.style.transform === 'translateY(0%)') {
        chatBox.style.transform = 'translateY(100%)';
    } else {
        chatBox.style.transform = 'translateY(0%)';
    }
}
