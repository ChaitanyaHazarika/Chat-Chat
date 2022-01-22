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
firebase.initializeApp(firebaseConfig);


function createroom() {
  if (document.getElementById("username").value != "") {
    var room_code = Math.floor((Math.random()*100000000000000000000)+1 );
  
    console.log(room_code);
    localStorage.setItem("room_code", room_code);
    window.location="chat.html"
   
  }else{
    alert("Please Write Username")
  }
}
function addname() {
  var username= document.getElementById("username").value;
  if (username != "") {
    localStorage.setItem("username", username);
  }else{
    alert("Please write username")
  }
}
function submitroomcode () {
  if (document.getElementById("username").value == ""){
    alert("Please write username");
  }else if(document.getElementById("roomcode").value == ""){
    alert("Please Write Roomcode");
  } else {
    var room_code= document.getElementById("roomcode").value;
    localStorage.setItem("room_code", room_code);
    window.location= "chat.html"
  }
   
}

