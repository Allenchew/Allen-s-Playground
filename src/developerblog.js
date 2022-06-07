import "./developerblog.css";
import {getAuth , onAuthStateChanged} from "firebase/auth";
import {getDatabase,ref as databaseRef,child,get,set,push} from "firebase/database";
import {InitializeConfigApp} from "./importFirebase.js";

var app;
InitializeConfigApp(app);
const database = getDatabase();
const dbref = databaseRef(database);
const auth = getAuth();

var loginButton = document.getElementById("loginbutton");
var contentContainer = document.getElementsByClassName("contentcontainer");

var textIndex = 0;
var paragraphIndex = 0;
var notOwner = "You Are Not Owner";
var getAllParagraph = document.getElementsByTagName("p");

var codeBlockHead = "<br><pre class='line-numbers'><code>";
var codeBlockTail = "</code></pre><br>";


onAuthStateChanged(auth,(user)=>{
  loadPosts();
  if(user){
    loadOwnerFunction();
  }else{
    checkLoginFailed();
  }
});

loginButton.addEventListener("click",function(){
  window.location.assign("login.html");
});

function loadPosts()
{
    var numberOfPostLoaded = 5;
    get(databaseRef(database,"post")).then((snapshot)=>{
        if(snapshot.exists()){
            var allPost = snapshot.val();
            var keys = Object.keys(allPost);
            if(keys.length >= numberOfPostLoaded){
                for(var i=keys.length-1;i>keys.length-6;i--){
                    generatePost(allPost[keys[i]]);
                }
            }else{
                for(var i=keys.length-1;i>-1;i--){
                    generatePost(allPost[keys[i]]);
                }
            }
        }else{
            loadEmptyPost();
        }
    });
}

function generatePost(postData)
{
  var postDiv = document.createElement("div");
  postDiv.className = "post";
  var postTitle = document.createElement("div");
  postTitle.className = "title";
  var postContent = document.createElement("div");
  postContent.className = "content";
  var titleText = document.createElement("h1");
  titleText.innerHTML = postData["title"];
  var dateText = document.createElement("h3");
  dateText.innerHTML = postData["date"];
  var contentText = document.createElement("p");
  processTextContent(contentText,postData["content"]);
  postDiv.appendChild(postTitle);
  postDiv.appendChild(postContent);
  postTitle.appendChild(titleText);
  postTitle.appendChild(dateText);
  postContent.appendChild(contentText);
  contentContainer[0].appendChild(postDiv);
}

function processTextContent(contentText,postContent)
{
    var separatedContent = postContent.split("<br>");
    var newPre = document.createElement("pre");
    newPre.className = "line-numbers";
    var newCodeBlock = document.createElement("code");
    newPre.appendChild(newCodeBlock);
    var insertedHead = false;
   console.log(separatedContent);
    for(var i =0;i<separatedContent.length;i++)
    {
        if(insertedHead)
        {
            
        }else
        {
            if(i > 0){
                if(separatedContent[i-1].trim() == "" && separatedContent[i].search("    ") == 0)
                {
                    insertedHead = true;
                    newCodeBlock.innerHTML += separatedContent[i] + "<br>";
                }
            }else{
                
            }
        }
        
        
        if(i>0 && !insertedHead){
            
        }else{
            
        }
        
        if(insertedHead && separatedContent[i].search("    ") != 0)
        {
            //contentText.innerHTML += codeBlockTail + separatedContent[i] + "<br>";
            contentText.innerHTML += "<pre>"+newPre.innerHTML+"</pre><br>" + separatedContent[i] + "<br>";
            newCodeBlock.innerHTML = "";
            
            insertedHead = false;
        }else if(insertedHead && separatedContent[i].search("    ") == 0){
            
            //contentText.innerHTML += separatedContent[i] + codeBlockTail;
        }
        else{
            contentText.innerHTML += separatedContent[i] + "<br>";
        }
        
        
    }
}

function loadEmptyPost(){
    var emptyPost = {
        "title":"No Post Yet",
        "date":" ",
        "content":"There is no post yet, stay tune for something new"
    }
    generatePost(emptyPost);
}

function loadOwnerFunction()
{
  var composeContainer = document.getElementById("composecontainer");
  var composeTitle = document.createElement("input");
  var composeTextfield = document.createElement("textarea");
  var composeButton = document.createElement("Button");
  composeContainer.appendChild(composeTitle);
  composeContainer.appendChild(composeTextfield);
  composeContainer.appendChild(composeButton);
  composeTitle.setAttribute("type","text");
  composeTitle.className = "composetitle";
  composeTitle.setAttribute("placeholder","Title");
  composeTextfield.className = "composetextfield";
  composeButton.innerHTML = "Compose";
  composeButton.className = "composebutton";
  const todayDate = new Date();
  var todayDatetoString = todayDate.getDate()+"-"+(todayDate.getMonth()+1)+"-"+todayDate.getFullYear();
  
  composeButton.addEventListener("click",function(){
      if(composeTitle.value != "" && composeTextfield.value != ""){
        var convertedComposeContent = composeTextfield.value.replace(/\n\r?/g, '<br>');
        var postData = {
            "title":composeTitle.value,
            "date":todayDatetoString,
            "content":convertedComposeContent
        }
        uploadPost(postData);
      }else{
        alert("Please fill in both title and content.");
      }
  });
}

function checkLoginFailed()
{
  var params = window.location.href.split("?");
  if(params.length > 1)
  {
    youAreNotOwner();
  }
}

function youAreNotOwner()
{
  textIndex = 0;
  getAllParagraph[paragraphIndex].innerHTML = "";
  typeText();
}

function typeText()
{
  if(textIndex < notOwner.length)
  {
    getAllParagraph[paragraphIndex].innerHTML += notOwner.charAt(textIndex);
    textIndex++;
    setTimeout(typeText,50);
  }else if(paragraphIndex < getAllParagraph.length-1){
    paragraphIndex++;
    getAllParagraph[paragraphIndex].innerHTML = "";
    textIndex = 0;
    setTimeout(typeText,50);
  }
}

function uploadPost(postData){
  const postKey = push(child(dbref,"post")).key;
  set(databaseRef(database,"post/"+postKey),postData).then(()=>{
      window.location.reload();
  }).catch((error)=>{
      alert(error.toString);
  })
}





