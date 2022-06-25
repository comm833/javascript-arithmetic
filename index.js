document.body.style.backgroundColor = 'blue';

const Num1 = parseInt(prompt("Enter First Number"));
const operation = prompt(`Pick an arithmetic operator(+ - / *):`);
const Num2 = parseInt(prompt("Enter Second Number"));

if(operation == "+"){

    const solution = Num1 + Num2;
    const answer = alert(`Answer: ${Num1} + ${Num2} = ${solution}`);   

}else if(operation == "-"){
    const solution = Num1 - Num2;
    const answer = alert(`Answer: ${Num1} - ${Num2} = ${solution}`);

}else if(operation == "*"){
    const solution = Num1 * Num2;
    const answer = alert(`Answer: ${Num1} * ${Num2} = ${solution}`);

}else if(operation == "/"){
    const solution = Num1 / Num2;
    const answer = alert(`Answer: ${Num1} / ${Num2} = ${solution}`);
}