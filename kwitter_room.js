
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBSTj8NiXSYsU5ep18uhBinQB9DR9Enzq4",
      authDomain: "ray-rgan.firebaseapp.com",
      databaseURL: "https://ray-rgan-default-rtdb.firebaseio.com",
      projectId: "ray-rgan",
      storageBucket: "ray-rgan.appspot.com",
      messagingSenderId: "645327856232",
      appId: "1:645327856232:web:0a555b6c0a810a1ff951dd"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
