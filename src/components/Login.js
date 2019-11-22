import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/*
import firebase from "firebase"*/
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="Login">
           <h1>
            Bienvenido...
            </h1>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            
            <h1>Hola, {firebase.auth().currentUser.displayName}</h1>
            <img
              className="App-logo" alt="logo"
              src={firebase.auth().currentUser.photoURL}
            />
            <br></br>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          </span>
        ) : (
           
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Login;