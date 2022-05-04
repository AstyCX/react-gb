import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAjmB2nmyTmBv2XYDtvdlUo255RLd9img0",
    authDomain: "reactapp-bf888.firebaseapp.com",
    databaseURL: "https://reactapp-bf888-default-rtdb.firebaseio.com",
    projectId: "reactapp-bf888",
    storageBucket: "reactapp-bf888.appspot.com",
    messagingSenderId: "485749176013",
    appId: "1:485749176013:web:dceb0a2ed089f0420cdb84"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;