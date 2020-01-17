

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


const loginButton = document.querySelector("#logGoogLetras");
console.log("hhhh");
console.log(loginButton);

loginButton.addEventListener("click", function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  document.getElementById("textoAyudaLogin").style.display = "none";
  document.getElementById("outBt").style.display = "inline";
  document.getElementById("tablaProyectos").style.display = "inline";
  document.getElementById("userInfo").style.display = "inline";
  document.getElementById("contenedorBot").style.display = "none";


  console.log(firebase.auth().currentUser.email);
  console.log(firebase.auth().currentUser.displayName);

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

});


const outButton = document.querySelector("#outBt");
outButton.addEventListener("click", function(){
  firebase.auth().signOut().then(function() {
    document.getElementById("textoAyudaLogin").style.display = "inline";
    document.getElementById("tablaProyectos").style.display = "none";
    document.getElementById("contenedorBot").style.display = "inline";
    document.getElementById("userInfo").style.display = "none";
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
});


const loginButtonTwi = document.querySelector("#logTwittLetras");

loginButtonTwi.addEventListener("click", function(){
  firebase.auth().signInWithPopup(providerT).then(function(result) {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    var token = result.credential.accessToken;
    var secret = result.credential.secret;
    // The signed-in user info.
    var user = result.user;
    document.getElementById("textoAyudaLogin").style.display = "none";
    document.getElementById("outBt").style.display = "inline";
    document.getElementById("tablaProyectos").style.display = "inline";
    document.getElementById("userInfo").style.display = "inline";
    document.getElementById("contenedorBot").style.display = "none";



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
});
