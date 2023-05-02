
function printPattern(){
    // debugger;
    let rows=parseInt(document.getElementById("rows").value);
    let space=document.getElementById("space");
    console.log(typeof(rows));
    console.log(rows);
    space.innerText="";
    for (let i = 0; i < rows; i++) {
        for(let j=0;j<rows-i;j++){
            space.innerText=space.innerText+"*";
        }
        space.innerText=space.innerText+"<br>"
    }
}