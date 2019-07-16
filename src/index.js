import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCczfxTn0wq_NxxEzvrRugflwxwk6CDX3c",
    authDomain: "portfolio-blog-5fb65.firebaseapp.com",
    databaseURL: "https://portfolio-blog-5fb65.firebaseio.com",
    projectId: "portfolio-blog-5fb65",
    storageBucket: "",
    messagingSenderId: "976326987735",
    appId: "1:976326987735:web:05f1900b0141ad9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
