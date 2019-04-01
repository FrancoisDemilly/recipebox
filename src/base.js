//import Rebase from 're-base';
var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');

var app = firebase.initializeApp({
    apiKey: "AIzaSyC0jAPAFVN-bmkXmBgzgj7fk8U7yLD6Cw0",
    authDomain: "recipeboxfrancoisdemilly.firebaseapp.com",
    databaseURL: "https://recipeboxfrancoisdemilly.firebaseio.com",
    projectId: "recipeboxfrancoisdemilly",
    storageBucket: "recipeboxfrancoisdemilly.appspot.com",
    messagingSenderId: "904773175401"
  });

var db = firebase.database(app);
var base = Rebase.createClass(db);


export default base;
