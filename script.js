const numbers=document.getElementById("numbers");
const result=document.getElementById("results");



let a=prompt("ingrese el primer numero");
let b=prompt("ingrese el segundo numero");
let c=prompt("ingrese el tercer numero");

numbers.textContent=`los numeros introducidos son ${a},${b},${c}`
result.textContent


if (a>b && a>c){
    if(b>c){
        result.textContent=`el orden mayor a menor es: ${a},${b};${c}`
    }else{
        result.textContent=`el orden mayor a menor es: ${a},${c};${b}`
    }
}
else if (b>=a && b>=c){
    if (a>c){
        result.textContent=`el orden mayor a menor es: ${b},${a};${c}`
    }else{
        result.textContent=`el orden mayor a menor es: ${b},${c};${a}`
    }
}
else if (c>=a && c>=b){
    if (a>b){
        result.textContent=`el orden mayor a menor es: ${c},${a};${b}`
    }
    else {
        result.textContent=`el orden mayor a menor es: ${c},${b};${a}`
    }
}
