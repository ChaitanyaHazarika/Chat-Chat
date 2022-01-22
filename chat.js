// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpNWaydgi1Dt3n3HnNf6egNHtVCZPy7IM",
    authDomain: "chat-website-de5a4.firebaseapp.com",
    databaseURL: "https://chat-website-de5a4-default-rtdb.firebaseio.com",
    projectId: "chat-website-de5a4",
    storageBucket: "chat-website-de5a4.appspot.com",
    messagingSenderId: "1061491721281",
    appId: "1:1061491721281:web:c26306f17528563f9ef2c0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//important things
function bo() {
    var room_code = localStorage.getItem("room_code")
    document.getElementById("roomcode").innerHTML = "RoomCode: " + room_code;
    firebase.database().ref("/").child(room_code).update({
        purpose: "add user"
    })
    console.log(room_code);
}
//getting message
function getData() {
    var room_code = localStorage.getItem("room_code")
    var username= localStorage.getItem("username");
    firebase.database().ref("/"+room_code).on('value',function(snapshot){
        document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot){
            childKey= childSnapshot.key;childData= childSnapshot.val(); if(childKey != "purpose") {
                msg_id= childKey
                msg_data= childData;
                //main
                var name= msg_data["username"];
                var msg=  msg_data["message"];
                console.log(msg_data);
                
                username_tag= "<h4>"+name+" :</h4>";
                msg_tag= "<h5>"+msg+"</h5><hr>";
                row=username_tag+msg_tag;
                document.getElementById("output").innerHTML+=row
            }
        });
    });
}
getData()
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_code");
    window.location = "index.html"

}

//sending msg
function send() {
    var room_code = localStorage.getItem("room_code")
    var username= localStorage.getItem("username")
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_code).push({
        message: msg,
        username: username
    });
    document.getElementById("msg").value=""
}
window.addEventListener("keypress" , keydown)
function keydown(e) {
    keycode= e.keyCode;
    
    if (keycode== 13) {
        send()
    }
    console.log(keycode);
}