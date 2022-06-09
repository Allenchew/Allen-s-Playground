import "./login.css";
import {setPersistence, getAuth,browserSessionPersistence,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {InitializeConfigApp} from "./importFirebase.js";

const auth = getAuth();
var app;
InitializeConfigApp(app);

var signinbutton = document.getElementById("signinbtn");


signinbutton.addEventListener("click",function(){
  var email = document.getElementById("usernamebox").value;
  var password = document.getElementById("passwordbox").value;
  setPersistence(auth,browserSessionPersistence);
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log("sign in success");
    const users = userCredential.user;
    onAuthStateChanged(auth,(user)=>{
      window.location.replace("developerblog.html");
    });
  }).catch((error) => {
    window.location.replace("developerblog.html?YouAreNotOwner");
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});