
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-6WAJA3OATHHI-2"); 


  /*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="vRmUzgIIyRp5r4vS6bZWeLCVwkVsaK5M";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("vRmUzgIIyRp5r4vS6bZWeLCVwkVsaK5M");
  analytics.page();
  }}();*/

/*window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-1K7FAP-na1';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');*/



function login(form) {
    let a = document.getElementById("mailusername").value;
    var b ="";
    if (a ==="admin@gmail.com" || a ==="admin1234@gmail.com" || a === "demouser@gmail.com" || a === "pgudla@gmail.com" || a === "gudla@gmail.com" || a === "gudla1@gmail.com" || a === "gudlasai@gmail.com") {
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
