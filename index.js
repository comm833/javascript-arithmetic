
const Num1 = parseInt(prompt("Enter First Number"));
const arithmetic = prompt(`Pick an arithmetic operator(+ - / *):`);
const Num2 = parseInt(prompt("Enter Second Number"));

if(arithmetic == "+"){
    const solution = Num1 + Num2;
    const result = alert(`Answer: ${Num1} + ${Num2} = ${solution}`);   

}else if(arithmetic == "-"){
    const solution = Num1 - Num2;
    const result = alert(`Answer: ${Num1} - ${Num2} = ${solution}`);

}else if(arithmetic == "*"){
    const solution = Num1 * Num2;
    const result = alert(`Answer: ${Num1} * ${Num2} = ${solution}`);

}else if(arithmetic == "/"){
    const solution = Num1 / Num2;
    const result = alert(`Answer: ${Num1} / ${Num2} = ${solution}`);
}