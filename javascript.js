/*let n= document.getElementById ("nombre");
let a=document.getElementById ("chiffre-arrive")
let b=document.getElementById ("chiffre-depart")
let p=document.getElementById ("text")
function Myfunction{
     let n= document.getElementById ("nombre").value
     let a=document.getElementById ("chiffre-arrive").value
     let b=document.getElementById ("chiffre-depart").value
}

for (i=1; i<=n;i++){
    if(i%n===0){
    p.innerText="result"
    }
}*/
/*
let n= document.getElementById ("diviseur").value;
let a=document.getElementById ("chiffre-arrive").value
let b=document.getElementById ("chiffre-depart").value
let result
let p=document.getElementById ("text").value
let btn=document.getElementById ("btn");

btn.onclick{
    for (i=a; i<=b;i++){
        if (i%n==0){
         p.innerText="Les nombres divisibles par"+n+ "sont" +i;
        }
        return
     }
}*/
/*let n = parseInt(document.getElementById("diviseur").value, 10);
let a = parseInt(document.getElementById("chiffre-depart").value, 10);
let b = parseInt(document.getElementById("chiffre-arrive").value, 10);
let result = '';
let p = document.getElementById("text");
let btn = document.getElementById("btn");

btn.onclick = function() {
    for (let i = a; i <= b; i++) { 
        if (i % n == 0) {
            result = "Les nombres divisibles par " + n + " sont " + i + "\n";
        }
    }
    p.innerText = result;
};*/

let btn = document.getElementById("btn");

btn.onclick = function() {

    let n = parseInt(document.getElementById("nombre").value, 10);
    let a = parseInt(document.getElementById("chiffre-depart").value, 10);
    let b = parseInt(document.getElementById("chiffre-arrive").value, 10);
    let p = document.getElementById("text"); 
    let result = '';


    if (isNaN(n) || isNaN(a) || isNaN(b)) {
        p.innerText = "Veuillez entrer des valeurs numériques valides.";
        return; 
    }

  
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            result += i + " est divisible par " + n + ".\n";
        }
    }

    p.innerText = result;

};







