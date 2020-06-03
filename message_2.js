
//Chatfenster
//Message schreiben und schicken
const MessageList = document.querySelector(".message-list");
const MessageInput = document.querySelector(".message-input");
const addMessage = document.querySelector(".addMessage");

addMessage.addEventListener("click", function() {
const newLi = document.createElement("H4");
const liContent = document.createTextNode("Robert Hoffmann: " + MessageInput.value);
MessageInput.style.color = "white"
newLi.appendChild(liContent);
MessageList.appendChild(newLi);
});
