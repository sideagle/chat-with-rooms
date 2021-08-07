//append users
function appendUser(user) {
    const userElement = document.createElement('div');
    userElement.innerHTML = user;
    userContainer.append(userElement);
}

//append chat
function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = message;


    messageContainer.append(messageElement);

    linkify(messageElement.innerHTML, messageElement);
    console.log(messageInput.value.length);
    for(let i = 0; i < 1 + Math.ceil(messageInput.value.length/70); i++) {
        console.log('hi');
        messageContainer.append(document.createElement('br'));
    }

    // messageContainer.append(document.createElement('br'));

    messageContainer.scrollTop = messageContainer.scrollHeight;

}


//append functions
function appendAlert(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('alert');
    messageElement.innerHTML = message;
    messageContainer.append(document.createElement('br'));
    messageContainer.append(messageElement);
    messageContainer.append(document.createElement('br'));

    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function appendName(name, type, time) {
    const nameElement = document.createElement('p');
    nameElement.innerText = `${name}, ${time}`;

    nameElement.classList.add("name", type);

    messageContainer.append(nameElement);
    messageContainer.append(document.createElement('br'));
        messageContainer.append(document.createElement('br'));
        messageContainer.append(document.createElement('br'));
        messageContainer.append(document.createElement('br'));

}