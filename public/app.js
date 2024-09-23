document.getElementById('send-btn').addEventListener('click', async () => {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage.trim()) {
      displayMessage('You', userMessage);
      document.getElementById('user-input').value = '';
  
      try {
        const response = await fetch('/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userMessage }),
        });
        const data = await response.json();
        displayMessage('AI', data.aiMessage);
      } catch (error) {
        displayMessage('Error', 'Something went wrong with the chat.');
      }
    }
  });
  
  document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('image-prompt').value;
    if (prompt.trim()) {
      try {
        const response = await fetch('/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        displayImage(data.imageUrl);
      } catch (error) {
        displayMessage('Error', 'Something went wrong with image generation.');
      }
    }
  });
  
  function displayMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function displayImage(imageUrl) {
    const imageResult = document.getElementById('image-result');
    imageResult.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
  }
  