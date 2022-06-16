//TUS ANLACES DE FIREBASE

const firebaseConfig = {
      apiKey: "AIzaSyAdremEkPoANNH0m5H_gET5WUbEF3wZBF0",
      authDomain: "chino-f7348.firebaseapp.com",
      databaseURL: "https://chino-f7348-default-rtdb.firebaseio.com",
      projectId: "chino-f7348",
      storageBucket: "chino-f7348.appspot.com",
      messagingSenderId: "6465436488",
      appId: "1:6465436488:web:1596c9cdb9a97b4dad117d"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código


name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4 " + name +"<img class='user_tick' src='tick.png'></h4>"
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>"


row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//Termina código
      } });  }); }
getData();



function updateLike(message_id)
{
button_id = message_id

likes = document.getElementById(button_id).value;
update_likes = Number(likes) +1;

firebase.database().ref(room_name).child(message_id).update({
like : update_likes
});





}
//Termina código
 
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
      }
