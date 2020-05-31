
//Chatfenster
//Message schreiben und schicken
const MessageList = document.querySelector(".message-list");
const MessageInput = document.querySelector(".message-input");
const addMessage = document.querySelector(".addMessage");

addMessage.addEventListener("click", function() {
const newLi = document.createElement("H5");
const liContent = document.createTextNode(MessageInput.value);
newLi.appendChild(liContent);
MessageList.appendChild(newLi);
});
