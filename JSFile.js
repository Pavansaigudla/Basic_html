
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-G5ZGRTCG3N81-2");


function login(form){
    let mailusername = document.getElementById("mailusername");
    if((mailusername.value == "demouser@gmail.com") || (mailusername.value=="abc@gmail.com") ||(mailusername.value=="admin@gmail.com")){
        alert("Entered details are valid ");
        window.location="Home.html";
    }
    else{
        alert("Please Enter Valid Details");
    }
    
}