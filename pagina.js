let calculation_1 = ("");
let operator = ("");
let calculation_2 = ("");
const display = document.getElementById("display")
const botones_numerales = [];
const botones_funcionales = {
    "multiplicar": document.getElementById("butx"),
    "dividir": document.getElementById("but/"),
    "sumar": document.getElementById("but+"),
    "restar": document.getElementById("but-"),
    "c": document.getElementById("butc"),
    "igual": document.getElementById("numigual"),
    "coma": document.getElementById("numcoma")
};
function calcular(nu_1,op,nu_2){
    switch (op) {
        case "*":
            return parseFloat(nu_1) * parseFloat(nu_2)        
        case "/":
            return parseFloat(nu_1) / parseFloat(nu_2)
        case "+":
            return parseFloat(nu_1) + parseFloat(nu_2)
        case "-":
            return parseFloat(nu_1) - parseFloat(nu_2) 
    }
};
           // numerales
for (let i = 0; i <=9;i++){
    botones_numerales.push(document.getElementById("num" + i))
    botones_numerales[i].addEventListener("click",function(){
        if (operator === ""){
            calculation_1 = calculation_1 + i;
            display.textContent = calculation_1;
        }else if (operator != ""){
            calculation_2 = calculation_2 + i;
            display.textContent = calculation_2
        };
    });
};

          // funcionales
botones_funcionales["coma"].addEventListener("click",function(){
    if(operator ==="" && calculation_1.includes(".")=== false){
        calculation_1 = calculation_1 + "."
        display.textContent = calculation_1
    };
    if(calculation_2.includes(".")=== false && operator !=""){
        calculation_2 = calculation_2 + "."
        display.textContent = calculation_2
    };
});

botones_funcionales["multiplicar"].addEventListener("click",function(){
    operator = "*"
    display.textContent = operator
});
botones_funcionales["dividir"].addEventListener("click",function(){
    operator = "/"
    display.textContent = operator
});
botones_funcionales["sumar"].addEventListener("click",function(){
    operator = "+"
    display.textContent = operator
});
botones_funcionales["restar"].addEventListener("click",function(){
    operator = "-"
    display.textContent = operator
});
botones_funcionales["c"].addEventListener("click",function(){
    calculation_1 = ""
    calculation_2 = ""
    operator = ""
    display.textContent = "0"
});
botones_funcionales["igual"].addEventListener("click",function(){
    display.textContent = calcular(calculation_1,operator,calculation_2)
});
