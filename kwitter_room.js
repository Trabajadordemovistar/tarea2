
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
    document.getElementById("user_name").innerHTML = "!Hola" + user_name + "!";

    function addRoom()
    {
room_name = document.getElementById("room_name").value;


firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name "
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

    }









function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
   
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName{this.id}'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;





      });});}
getData();

function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}








