
//Config del proy firebase
var firebaseConfig = {
    apiKey: "AIzaSyB_qe3M-tJZ5TwhLPuDi1lm6XnBwFUxu4k",
    authDomain: "my-tuto.firebaseapp.com",
    databaseURL: "https://my-tuto.firebaseio.com",
    projectId: "my-tuto",
    storageBucket: "my-tuto.appspot.com",
    messagingSenderId: "438538558872",
    appId: "1:438538558872:web:8bddf5c6677442e5105fed",
    measurementId: "G-M0G210T20M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();


var provider = new firebase.auth.GoogleAuthProvider();
var providerT = new firebase.auth.TwitterAuthProvider();

console.log("oooo");
  console.log(firebase.auth().currentUser.displayName);

document.onload = function(){

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var userName = result.user.getDisplayName();
  var userEmail = result.getEmail();
  var userPhot = result.getPhotoUrl();
  // ...
  document.getElementById("nombreUsua").innerHTML = "Tu usuario es: "+userName;
  document.getElementById("emailUsua").innerHTML = "Tu email es: "+userEmail;
  document.getElementById("imgUsua").src = userPhot;
  console.log(userEmail);

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};
  

