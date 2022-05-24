import _ from 'lodash';
import './index.css';
import {InitializeApp} from "./importFirebase.js";
import profilePicture from "./profile.jpg";

var app;

InitializeApp(app);

var backgroundProfile = document.getElementById("profilePicture");
backgroundProfile.src = profilePicture;

