
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-OM2DTW6NF8A7-2-1"); 



var config={kcAllowedFuncNames:["zendeskchat"]};
function zendeskchat () {

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.id = "ze-snippet";
script.src="https://static.zdassets.com/ekr/snippet.js?key=71664cab-93af-4dac-a95e-c779f43b72aa"
script.onreadystatechange = handler1;
script.onload = handler1;
head.appendChild(script);
function handler1(){
}
console.log("chatbot added");
}



function login(form) {
    let a = document.getElementById("mailusername").value;
    var b ="";
    if (a ==="admin@gmail.com" || a ==="admin1234@gmail.com" || a === "demouser@gmail.com" || a === "pgudla@gmail.com" || a === "gudla@gmail.com" || a === "gudla1@gmail.com" || a === "gudlasai@gmail.com" || a === "hemanth@demo1.com") {
        b= a.substr(7,5);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": id, 
                "email": a,
                "userrole": "Admin",
            },
            {
                //Account Fields
                "id": "GSID-12345", //Required
                "name": "International Business Machine"
            });
           alert("Valid User");
            window.location = "Home.html";
           alert("Logged in user id :"+b);
        
    }
    else {
        alert("Please enter a valid username");
    }
    return b;
}

//function login(){
    //window.location="https://pavansaigudla.github.io/Basic_html/loginpage.html";
//}

//function deleteAllCookies() {
  //console.log("deleting cookies...");
  //aptrinsic('reset');
  // counter = 0;
//}

function paynow(){
    var Amount = document.getElementById("inpamt").value;
    var transactionAmount = Number(Amount);
    console.log(typeof transactionAmount);
    let Result= document.querySelector("#type");
    let Output= Result.value
    console.log(typeof Output);
    document.querySelector(".res1").textContent = transactionAmount
    document.querySelector(".result").textContent = Output
    aptrinsic('track','transaction',{"TransactionStatus":Output, "transactionAmount" :transactionAmount});
    alert("Transaction Done");
}

function gender(){
let Gender= document.querySelector("#gentype");
let Op=Gender.value
aptrinsic('track','gender',{"Gender":Op});
alert("Gender selected....");
}

function hmpg(){
aptrinsic('set', 'globalContext', {"page":"home","id":"pg1"});
    
aptrinsic('bot', 'search', {labels: ['px']});
}
function aspg(){
aptrinsic('set', 'globalContext', {"page":"AboutUS","id":"pg2"});
    
aptrinsic('bot', 'search', {labels: ['px']});
}
function conpg(){
aptrinsic('set', 'globalContext', {"page":"Contact","id":"pg3"});
    
aptrinsic('bot', 'search', {labels: ['px']});
}
function paypg(){
aptrinsic('set', 'globalContext', {"page":"Payment","id":"pg4"});
    
aptrinsic('bot', 'search', {labels: ['px']});
}
function widpg(){
aptrinsic('set', 'globalContext', {"page":"Widget","id":"pg5"});
    
aptrinsic('bot', 'search', {labels: ['px']});
}

function clkhre(){
aptrinsic('set', 'globalContext', {"page":"home","Version":3.0});
}
