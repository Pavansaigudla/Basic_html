
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