
// Please use your own Api Key
var config = {
    apiKey: "Your own Api Key",
    authDomain: "Your.firebaseapp.com",
    databaseURL: "https://Your.firebaseio.com",
    projectId: "Your porject name",
    storageBucket: "Your porject name.appspot.com",
    messagingSenderId: "Your sender id"
};
firebase.initializeApp(config);

var refMsg = firebase.database().ref('messages');

document.getElementById('feedback-form').addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    var name = getValue('name');
    var phone = getValue('phone');
    var email = getValue('email');
    var message = getValue('message');
    saveMsg(name, phone, email, message);

    document.querySelector('.alrt').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.alrt').style.display = 'none';
    }, 1000);
}

function getValue(id) {
    return document.getElementById(id).value;
}


function saveMsg(name, phone, email, message) {
    var msgRef = refMsg.push();
    msgRef.set({
        name: name,
        phone: phone,
        email: email,
        message: message
    });
}
/* BS-4WithFirebase */
