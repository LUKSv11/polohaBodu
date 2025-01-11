
function poloha(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    
    if(x>50 || y>50 || y<0 || x<0){
        document.getElementById("vysledek").innerHTML = "Leží mimo čtverec"
        document.getElementById("vysledek").style.color = "red"
    } else{
        document.getElementById("vysledek").innerHTML = "Neexistuje"
    } 
   if (x==50  || y==50 || y==0 || x==0){
    document.getElementById("vysledek").innerHTML = "Leží na hranici"
   }else{
    if(x<50 && y<50){
        document.getElementById("vysledek").innerHTML = "Leží uvnitř čtverce"
        document.getElementById("vysledek").style.color = "green"
    } 
    
    }
   
}