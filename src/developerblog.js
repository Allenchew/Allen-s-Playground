import "./developerblog.css";
import {getAuth , onAuthStateChanged} from "firebase/auth";
import {getDatabase,ref as databaseRef,child,get,set,push} from "firebase/database";
import {InitializeConfigApp} from "./importFirebase.js";

var app;
InitializeConfigApp(app);
const database = getDatabase();
const auth = getAuth();

var loginButton = document.getElementById("loginbutton");
var contentContainer = document.getElementsByClassName("contentcontainer");

onAuthStateChanged(auth,(user)=>{
  if(user){
    loadOwnerFunction();
  }else{
    checkLoginFailed();
  }
});



function checkLoginFailed(){
  var params = window.location.href.split("?");
  if(params.length > 1){
    youAreNotOwner();
  }
}

function youAreNotOwner(){
    
}

function loadOwnerFunction(){
    
}

function generatePost(){
  var postDiv = document.createElement("div");
  postDiv.className = "post";
  var postTitle = document.createElement("div");
  postTitle.className = "title";
  var postContent = document.createElement("div");
  postContent.className = "content";
  
}

loginButton.addEventListener("click",function(){
  window.location.assign("login.html");
});

