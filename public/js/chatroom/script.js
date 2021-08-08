const socket = io('https://socket-server123.herokuapp.com/');

const messageContainer = document.querySelector('#message-container');
const messageButton = document.querySelector('#send-button');
const messageInput = document.querySelector('#message-input');
const userContainer = document.querySelector('#user-container');

const inviteLink = `http://localhost:3000/invite/?room=${ROOMID}`;
document.querySelector('#inviteField').value = inviteLink;

username = titleCaps(username);

socket.emit('join-room', ROOMID);

appendAlert('You joined', 'alert');
socket.emit('new-user', username);

socket.on('users', users => {
    console.log(users);
})

socket.on('chat-message', data => {
    console.log(data);
    appendName(data.name, 'otherName', moment().format('LT'));
    appendMessage(data.message, 'other');
});

socket.on('user-connected', username => {
    appendAlert(`${username} has joined the chat`);
});

socket.on('user-disconnected', username => {
    appendAlert(`${username} has left the chat`);
});


//send message
messageButton.addEventListener('click', () => {
    if (messageInput.value != '') {
        const message = messageInput.value;
        appendName('You', 'myName', moment().format('LT'));
        appendMessage(message, "me")
        socket.emit('send-chat-message', message);
        messageInput.value = '';
    }
});

messageInput.addEventListener('keyup', e => {
    if (e.key == 'Enter' && messageInput.value != '') {
        const message = messageInput.value;
        appendName('You', 'myName', moment().format('LT'));
        appendMessage(message, "me")
        socket.emit('send-chat-message', message);
        messageInput.value = '';
    }
})




function titleCaps(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}


 function linkify(str, element) {
    var newStr = str.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=;]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*)))( >(.*)<\/a>)?/gi, function () {

        return '<a target="_blank" href="' + arguments[2] + '">' + (arguments[7] || arguments[2]) + '</a>'
    });
    console.log(newStr)
    element.innerHTML = (newStr); //fill output area
}

function copy() {
    inviteField.select();
    inviteField.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}
$('#inviteButton').on('click', function() {
    $('.ui.sidebar')
        .sidebar('toggle');
})
