function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";

    
}


function logout(){
    window.location = "index.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyB-dDSzOnCjCJzpF_lVFKfpZjkE_yY1Tls",
    authDomain: "kwitter-project-a0df9.firebaseapp.com",
    projectId: "kwitter-project-a0df9",
    storageBucket: "kwitter-project-a0df9.appspot.com",
    messagingSenderId: "655825004667",
    appId: "1:655825004667:web:94fea93bd3b39e34d79ade"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);