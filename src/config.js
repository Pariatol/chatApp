import * as firebase from "firebase/app";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "bestchatappever.firebaseapp.com",
    databaseURL: "https://bestchatappever.firebaseio.com",
    projectId: "bestchatappever",
    storageBucket: "bestchatappever.appspot.com",
    messagingSenderId: "1010887688364",
    appId: "1:1010887688364:web:591cdbdabf7507b0a19f09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);