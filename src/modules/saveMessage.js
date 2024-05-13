function saveMessage(imageUrl, text) {
  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push({ imageUrl, text });
  localStorage.setItem('messages', JSON.stringify(messages));
}
export default saveMessage