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

var nameText = "Allen Chew";
var nameTextIndex = 0;

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
    }

}

