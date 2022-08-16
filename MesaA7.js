//Exercicio 1
console.log("EXERCICIO 1")
console.log(!true); //false
console.log(!false); //true
console.log(!!false, true); //retornou erro, colocar virgula resolve e responde o mesmo resultado
console.log(!!true); //true
console.log(!1); //false
console.log(!!1); //true
console.log(!0); //true
console.log(!!0); //false
console.log(!!""); //false
let x = 5;  
let y = 9;
    console.log(x < 10 && x!==5); //false
    console.log(x > 9 || x===5); //true
    console.log(!(x===y)); //true

//EXERCICIO 2
    console.log("EXERCICIO 2")

let a=10;
let b ="a";
    console.log(b==="b" || a >= 10);

let c=3;
let d=8;
    console.log(!(c == "3" || c === d) && !(d !== 8 && c <= d));

let str = "";
let msg = "haha!";
let eBonito = "false";
    console.log(!((str || msg) && eBonito));

