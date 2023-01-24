
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-G5ZGRTCG3N81-2");


function login(form) {
    let mailusername = document.getElementById("mailusername");
    if ((mailusername.value == "demouser@gmail.com") || (mailusername.value == "abc@gmail.com") || (mailusername.value == "admin@gmail.com")|| (mailusername.value == "pgudla@gmail.com")|| (mailusername.value == "gudla@gmail.com")||(mailusername.value == "gudla1@gmail.com")) {
        //passing user and account objects:
        var usrid = (mailusername.value).substr(7,5);
        alert("Entered details are valid");
        aptrinsic("identify",
            {
                
                //User Fields
                "id": "usrid",// Required for logged in app users
                "email" : "userEmail@address.com",

            },
            {
                //Account Fields
                "id": "IBM", //Required
                "name": "International Business Machine",
               
            });
            alert("Valid User");
            window.location = "Home.html";
    }
    else {
        alert("Please Enter Valid Details");
    }

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

