function max(){
    let student= new Array(5);
    //  debugger;
    let message=document.getElementById("message");
   
     student[0]=parseFloat(document.getElementById("1").value);
     student[1]=parseFloat(document.getElementById("2").value);
     student[2]=parseFloat(document.getElementById("3").value);
     student[3]=parseFloat(document.getElementById("4").value);
     student[4]=parseFloat(document.getElementById("5").value);
    let max=-1;
    let index;
    for (let i = 0; i < 5; i++) {
      (student[i]>max)?max=student[i]:max=max;  
    }
    for (let i = 0; i < 5; i++) {
        (student[i]==max)?index=i:max=max;  
    }
        message.innerHTML="The max marks is "+max+" and it is obtained by Student "+(index+1);
}