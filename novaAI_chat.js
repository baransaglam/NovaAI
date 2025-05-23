   const form = document.getElementById("chatForm");
    const chatWindow = document.getElementById("chatWindow");
    const userInput = document.getElementById("userInput");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const message = userInput.value.trim();
      if (message) {
        addMessage("user", message);
        setTimeout(() => {
          addMessage("ai", fakeResponse(message));
        }, 800);
      }
      userInput.value = "";
    });

    function addMessage(sender, text) {
      const msgDiv = document.createElement("div");
      msgDiv.className = `message ${sender}`;
      msgDiv.innerHTML = `<div class="bubble">${text}</div>`;
      chatWindow.appendChild(msgDiv);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function fakeResponse(input) {
      return `You said: "${input}". I'm Nova, here to assist you!`;
    }

    function clearChat() {
      chatWindow.innerHTML = "";
    }