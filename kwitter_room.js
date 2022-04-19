function addRoom(){
    auser_name = document.getElementById("room_name").ariaValueMax;
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div>
redirectToRoomName(){
       auser_name = document.getElementById("room_name").ariaValueMax;
       localStorage.setItem("room_name", room_name); 
       window.location = "kwitter_page.html";
}
  
</div>
//End code
});});}
getData();

