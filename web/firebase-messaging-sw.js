importScripts('https://www.gstatic.com/firebasejs/7.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.0/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/7.9.0/firebase-analytics.js");

firebase.initializeApp({
    apiKey: "AIzaSyByJlNuPKr9mQ_MmW0xw1_AQYfMDZ3rXwg",
    authDomain: "instamaterial-2eb76.firebaseapp.com",
    projectId: "instamaterial-2eb76",
    storageBucket: "instamaterial-2eb76.appspot.com",
    messagingSenderId: "193172152804",
    appId: "1:193172152804:web:72f74e5f7ac226d409a7f1",
    measurementId: "G-5KJ4F2NMQC"
});

const messaging = firebase.messaging();
