
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-OM2DTW6NF8A7-2"); 

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NN2T3DZ2');


!function(m,n,e,t,l,o,g,y){var s,f,a=function(h){
return!(h in m)||(m.console&&m.console.log&&m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'),!1)}(e)
;function p(b){var h,d=[];function j(){h&&(d.forEach((function(b){var d;try{d=b[h[0]]&&b[h[0]](h[1])}catch(h){return void(b[3]&&b[3](h))}
d&&d.then?d.then(b[2],b[3]):b[2]&&b[2](d)})),d.length=0)}function r(b){return function(d){h||(h=[b,d],j())}}return b(r(0),r(1)),{
then:function(b,h){return p((function(r,i){d.push([b,h,r,i]),j()}))}}}a&&(g=m[e]=function(){var b=function(b,d,j,r){function i(i,c){
h(b,d,j,i,c,r)}r=r||2;var c,u=/Async$/;return u.test(b)?(b=b.replace(u,""),"function"==typeof Promise?new Promise(i):p(i)):h(b,d,j,c,c,r)}
;function h(h,d,j,r,i,c){return b._api?b._api(h,d,j,r,i,c):(b.q&&b.q.push([h,d,j,r,i,c]),null)}return b.q=[],b}(),y=function(b){function h(h){
"function"==typeof h[4]&&h[4](new Error(b))}var d=g.q;if(d){for(var j=0;j<d.length;j++)h(d[j]);d.length=0,d.push=h}},function(){
(o=n.createElement(t)).async=!0,o.crossOrigin="anonymous",o.src="https://"+l,o.onerror=function(){y("Error loading "+l)}
;var b=n.getElementsByTagName(t)[0];b&&b.parentNode?b.parentNode.insertBefore(o,b):n.head.appendChild(o)}(),function(){function b(){}
function h(b,h,d){g(b,h,d,1)}function d(b,d,j){h("setProperties",{type:b,properties:d},j)}function j(b,h){d("user",b,h)}function r(b,h,d){j({
uid:b},d),h&&j(h,d)}g.identify=r,g.setUserVars=j,g.identifyAccount=b,g.clearUserCookie=b,g.setVars=d,g.event=function(b,d,j){h("trackEvent",{
name:b,properties:d},j)},g.anonymize=function(){r(!1)},g.shutdown=function(){h("shutdown")},g.restart=function(){h("restart")},
g.log=function(b,d){h("log",{level:b,msg:d})},g.consent=function(b){h("setIdentity",{consent:!arguments.length||b})}}(),s="fetch",
f="XMLHttpRequest",g._w={},g._w[f]=m[f],g._w[s]=m[s],m[s]&&(m[s]=function(){return g._w[s].apply(this,arguments)}),g._v="2.0.0")
}(window,document,window._fs_namespace,"script",window._fs_script);


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
