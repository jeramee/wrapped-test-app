var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


function login() {
    console.log("SURPRISE BOO");
    
    
    if (sessionStorage.getItem("boo") === 'false'){
    
    sessionStorage.setItem("boo", "true");
    
    } else if (sessionStorage.getItem("boo") === 'true') {
    
    sessionStorage.setItem("boo", "false");
    }
    
    
        console.log(boo);
    
    }
    
    document.addEventListener("DOMContentLoaded", () => {
    
    
        if (sessionStorage.getItem("boo") === 'false') {
    
            console.log("helpsda");
            document.getElementById("mainnav").innerHTML = `
  
            <a href="browse.html">Browse For Items</a>
            <a href="friendLists.html">Manage Friend List</a>
            <a href="contactUs.html">Contact Us</a>
            <a href="about.html">About</a>
            <a href="howToUse.html">How to Use This Site</a>
            <a href="logIn.html" id="login">Log In</a>`;
        
        } else if (sessionStorage.getItem("boo") === 'true') {
    
            console.log("help");
       
            document.getElementById("mainnav").innerHTML = `
    
            <a href="browse.html">Browse For Items</a>
            <a href="friendLists.html">Manage Friend List</a>
            <a href="contactUs.html">Contact Us</a>
            <a href="about.html">About</a>
            <a href="howToUse.html">How to Use This Site</a>
            <a href="accountInfo.html" class="acct"><img src="acct.png" height="40px" width="40px"></a>`;
         
        }
    
    });
    
    document.getElementById("login").addEventListener("click",login);
