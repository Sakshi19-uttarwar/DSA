let output = "";
let num = 1;


for(i=0; i<5; i++){
    for(j=0; j<i; j++){
        output += num;
    } 
    output += "\n";
    num++;        
}
document.getElementById("pattern").textContent = output;