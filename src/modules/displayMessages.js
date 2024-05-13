function displayMessages() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  const messagesGrid = document.querySelector('.messages-grid');
  messagesGrid.innerHTML = '';
  messages.forEach(function(message, index) {
    const messageCard = `
      <div class="col-md-4">
        <div class="message-container text-center mb-3">
          <img src="${message.imageUrl}" class="message-img img-fluid" alt="...">
          <p class="message-text mt-3">${message.text}</p>
        </div>
      </div>
    `;
    messagesGrid.innerHTML += messageCard;
  });
}
export default displayMessages