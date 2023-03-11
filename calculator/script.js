function calculate(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    let op=document.getElementById("op");
    let message=document.getElementById("error");
    switch (op) {
        case '+':
            document.getElementById("result").value=n1+n2;
            break;
            case '+':
                document.getElementById("result").value=n1+n2;
                break;
            case '-':
                document.getElementById("result").value=n1-n2;
            break;
            case '*':
                document.getElementById("result").value=n1*n2;
            break;
            case '/':
                // if(n2===0)
                // {
                //     message.innerHTML="**Result cannot be calculated for Number2=0**";
                //     message.style.color=red;
                //     return false;
                // }
                // else{
                //     document.getElementById("result").value=n1/n2;
                // }
                
            break;
        default:
            break;
    }
}