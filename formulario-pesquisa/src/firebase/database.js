import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCkzGHtZ7VHA2XeiITm-CeawKnCu0Ott1c",
    // authDomain: "pesquisa-quel.firebaseapp.com",
    databaseURL: "https://pesquisa-quel.firebaseio.com",
    projectId: "pesquisa-quel",
    // storageBucket: "pesquisa-quel.appspot.com",
    // messagingSenderId: "55403129809"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
