// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyARrgbRVOkXMMTG9f4d-hxsbRNoo8jQqOA",
      authDomain: "letschat-web-app-f80c6.firebaseapp.com",
      databaseURL: "https://letschat-web-app-f80c6-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-f80c6",
      storageBucket: "letschat-web-app-f80c6.appspot.com",
      messagingSenderId: "390938898561",
      appId: "1:390938898561:web:785687b2632167490a9d80",
      measurementId: "G-LZSPRQZ6KR"
    };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
     } });  }); }
getData();
function Logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}
function Send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}