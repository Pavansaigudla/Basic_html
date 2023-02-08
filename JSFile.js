
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-G5ZGRTCG3N81-2"); 


  /*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="vRmUzgIIyRp5r4vS6bZWeLCVwkVsaK5M";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("vRmUzgIIyRp5r4vS6bZWeLCVwkVsaK5M");
  analytics.page();
  }}();*/



function login(form) {
    let a = document.getElementById("mailusername").value;
    var b ="";
    if (a ==="admin@gmail.com" || a === "demouser@gmail.com" || a === "pgudla@gmail.com" || a === "gudla@gmail.com") {
        b= a.substr(7,5);
        var id = b;

        
        aptrinsic("identify",
            {
                //User Fields
                "id": id, // Required for logged in app users
                "email": a,
                "userrole": "Admin"
            
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

