
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {
    getDatabase,
    ref,
    child,
    get,
    onValue
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBqyeQViN9k35sh4hyT-ygCQBfAnkc17H8",
    authDomain: "tst-firebase-9e92f.firebaseapp.com",
    projectId: "tst-firebase-9e92f",
    storageBucket: "tst-firebase-9e92f.appspot.com",
    messagingSenderId: "1080712818075",
    appId: "1:1080712818075:web:2a6580812b6a994270853e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();
  const messages = ref(database, '/messages');

  onValue(
    messages,
    (snapshot) => {
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });

    // console.log(snapshot)
  }, 
  {
    onlyOnce: false,

  });