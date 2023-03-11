function psd(){
    const password1=document.getElementById("password1").value;
    const password2=document.getElementById("password2").value;
    let Message=document.getElementById("message");
    // if(pasword1==="" || password2===""){
    //     Message.innerHTML="Please fill all the field";
    //     Message.style.color= "red";
    //     return false;
    // }
     if(password1.length<5 || password1.length>20){
        // Message.style.color= "red";
        Message.innerHTML="**Password length must be greater than 5 character and less than 20 characters**";
        Message.style.color= "red";
        return false;
    }
    else{
        if (password1===password2) {
            // Message.style.color= "Green";
            Message.innerHTML="**Successful**"
            Message.style.color= "Green";
            return false;
        }
        else{
            // Message.style.color= "red";
             Message.innerHTML="**Unsuccessful**";
             Message.style.color= "red";
             return false;
        }
       
    }
}