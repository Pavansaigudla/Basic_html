
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-G5ZGRTCG3N81-2");


function login(form) {
    let mailusername = document.getElementById("mailusername");
    if ((mailusername.value == "demouser@gmail.com") || (mailusername.value == "abc@gmail.com") || (mailusername.value == "admin@gmail.com")) {
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
            window.location = "home.html";
    }
    else {
        alert("Please Enter Valid Details");
    }

}
//function login(){
    //window.location="https://pavansaigudla.github.io/Basic_html/loginpage.html";
//}
