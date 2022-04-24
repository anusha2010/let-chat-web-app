const firebaseConfig = {
    apiKey: "AIzaSyCO2nzd6wyoUndMOR8Tt43g7UNzA-iJK7g",
    authDomain: "let-chat-web-app-53606.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-53606-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-53606",
    storageBucket: "let-chat-web-app-53606.appspot.com",
    messagingSenderId: "263628650897",
    appId: "1:263628650897:web:b56861c5d040683ed64230"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
