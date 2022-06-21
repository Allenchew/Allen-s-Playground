import _ from 'lodash';
import './index.css';
import {InitializeConfigApp} from "./importFirebase.js";
import profilePicture from "./profile.jpg";
import emailLogo from "./asset/mail-fill.png";
import githubLogo from "./asset/github-fill.png";

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
var portfolioButton = document.getElementById("portfolio");
var developerBlogButton = document.getElementById("developerblog");
var contactButton = document.getElementById("contact");
var emailButton = document.getElementById("email");
var githubButton = document.getElementById("github");

var footer = document.getElementsByClassName("footer");
var leftSpacebar = document.getElementsByClassName("leftspacebar");
var rightSidebar = document.getElementsByClassName("rightsidebar");

var nameText = "Allen Chew";
var nameTextIndex = 0;

emailButton.src = emailLogo;
githubButton.src = githubLogo;

profileButton.addEventListener("click",function(){
  console.log("clicked");
  leftSpacebar[0].classList.toggle("shrink");
  rightSidebar[0].classList.toggle("shrink");
});

profileButton.addEventListener("onmouseenter",function(){
    var children = Array.from(profileButton.children);
    children.forEach(startAnimation);
});

profileButton.addEventListener("onmouseleave",function(){
     var children = Array.from(profileButton.children);
    children.forEach(stopAnimation);
});

function startAnimation(item){
    item.style.animation = "vibrate 0.2s infinite";
}

function stopAnimation(item){
    item.style.animation = "";
}

portfolioButton.addEventListener("click",function(){
    
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

/*function comingSoonAnimation(paragraph){
    var getText = paragraph.innerHTML;
}*/

