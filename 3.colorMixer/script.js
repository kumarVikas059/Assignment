let mix=document.getElementById("mix");
function print(){
    let message=document.getElementById("message");
    let box=document.querySelector(".box");
    let color1=document.getElementById("color1").value;
    let color2=document.getElementById("color2").value;
    if ((color1==="red" || color1==="blue") && (color2==="red" || color2==="blue")) {
        message.innerHTML="Purple";
        message.style.color= "purple";
        box.style.backgroundColor= "purple";
    }
    else if((color1==="red" || color1==="yellow") && (color2==="red" || color2==="yellow")){
        message.innerHTML="Orange";
        message.style.color= "orange";
        box.style.backgroundColor= "orange";
    }
    else if((color1==="blue" || color1==="yellow") && (color2==="blue" || color2==="yellow")){
        message.innerHTML="Green";
        message.style.color= "green";
        box.style.backgroundColor= "green";
    }
    else{
        message.innerHTML="Invalid color combination";
        message.style.color= "black";
        box.style.backgroundColor= "white";
    }
}
// mix.addEventListener("click",print);