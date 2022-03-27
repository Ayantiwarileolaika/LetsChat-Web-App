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
function getData() {
	firebase.database().ref("/").on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey;
			console.log("Room_Name - " + Room_names);
			row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
			document.getElementById("output").innerHTML += row;

		});
	});
}
getData();

function addroom()
{
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
		purpose : "adding room name"
	});

	  localStorage.setItem("room_name", room_name);


	  window.location = "kwitter_page.html";

	  
}

function redirectToRoomName(name)
{
	console.log(name);
	localStorage.setItem("room_name",name);
	window.location = "kwitter_page.html";
}

function Logout() {
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location = "index.html";
 }