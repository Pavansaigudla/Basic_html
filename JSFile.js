
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
        alert("Entered details are valid ");
        var usrid= (InputElement.value).substr(7,5) 
        //passing user and account objects:
        aptrinsic("identify",
            {
                //User Fields
                "id": "usrid", // Required for logged in app users
                "email": mailusername.value,
            },
            {
                //Account Fields
                "id": "GS2556", //Required
                "name": "International Business Machine",
               
            });
            alert("Entered details are valid ");
            form.action="Home.html"
        //window.location = "Home.html";
    }
    else {
        alert("Please Enter Valid Details");
    }

}