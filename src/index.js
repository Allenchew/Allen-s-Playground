import _ from 'lodash';
import './index.css';
import {InitializeApp} from "./importFirebase.js";
import profilePicture from "./profile.jpg";

var app;

InitializeApp(app);

var backgroundProfile = document.getElementsByClassName("profilePicture");
backgroundProfile[0].src = profilePicture;
backgroundProfile[0].style.opacity = "100%";
backgroundProfile[0].style.transition = "1s";

setTimeout(typeText, 1000);

var nameField = document.getElementById("name");
var positionField = document.getElementById("position");
var profilebutton = document.getElementById("profile");

var leftspacebar = document.getElementsByClassName("leftspacebar");
var rightsidebar = document.getElementsByClassName("rightsidebar");

var nameText = "Allen Chew";
var nameTextIndex = 0;

profilebutton.addEventListener("click",function(){
    console.log("clicked");
    leftspacebar[0].classList.toggle("shrink");
    rightsidebar[0].classList.toggle("shrink");
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


