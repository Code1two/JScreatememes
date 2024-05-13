import saveMessage from './modules/saveMessage';
import displayMessages from './modules/displayMessages';


document.addEventListener('DOMContentLoaded', function() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  function updateMessagesGrid() {
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

  function saveMessage(imageUrl, text) {
    messages.push({ imageUrl, text });
    localStorage.setItem('messages', JSON.stringify(messages));
    updateMessagesGrid();
  }

  function clearMessages() {
    localStorage.removeItem('messages');
    messages.length = 0;
    updateMessagesGrid();
  }

  const messageForm = document.querySelector('.message-form');
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const imageUrl = document.getElementById('imageUrl').value;
    const text = document.getElementById('messageText').value;
    saveMessage(imageUrl, text);
    document.getElementById('newMessageModal').classList.remove('show');
    document.getElementById('newMessageModal').style.display = 'none';
    document.querySelector('.modal-backdrop').remove();
    messageForm.reset();
  });

  updateMessagesGrid();

  document.getElementById('newMessageBtn').addEventListener('click', function() {
    document.getElementById('newMessageModal').classList.add('show');
    document.getElementById('newMessageModal').style.display = 'block';
    const backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(backdrop);
  });

  document.getElementById('clearMessagesBtn').addEventListener('click', function() {
    if (confirm("Ar tikrai norite išvalyti visus įrašus?")) {
      clearMessages();
    }
  });
});
