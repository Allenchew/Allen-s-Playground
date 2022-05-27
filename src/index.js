import _ from 'lodash';
import './index.css';
import {InitializeConfigApp} from "./importFirebase.js";
import profilePicture from "./profile.jpg";

var app;

InitializeConfigApp(app);

var backgroundProfile = document.getElementsByClassName("profilePicture");
backgroundProfile[0].src = profilePicture;
backgroundProfile[0].style.opacity = "100%";
backgroundProfile[0].style.transition = "1s";

setTimeout(typeText, 1000);

var nameField = document.getElementById("name");
var positionField = document.getElementById("position");
var profileButton = document.getElementById("profile");
var developerBlogButton = document.getElementById("developerblog");

var leftSpacebar = document.getElementsByClassName("leftspacebar");
var rightSidebar = document.getElementsByClassName("rightsidebar");

var nameText = "Allen Chew";
var nameTextIndex = 0;

profileButton.addEventListener("click",function(){
  console.log("clicked");
  leftSpacebar[0].classList.toggle("shrink");
  rightSidebar[0].classList.toggle("shrink");
});

developerBlogButton.addEventListener("click",function(){
  window.location.assign("developerblog.html");
});


function typeText()
{
  if(nameTextIndex< nameText.length)
  {
    nameField.innerHTML += nameText.charAt(nameTextIndex);
    nameTextIndex++;
    setTimeout(typeText,50);
  }else{
    positionField.style.height = "40px";
    positionField.style.transition = "0.5s";
    setTimeout(showMenu,1000);
  }

}

function showMenu()
{
  var sidebar = document.getElementsByClassName("sidebar");
  sidebar[0].style.width = "15%";
  sidebar[0].style.transition = "1.0s";
}


