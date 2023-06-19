const prompt = require('prompt-sync')();

let left_operand = Number (prompt('Enter the left operand: \t'));
let right_operand = Number (prompt('Enter the right operand:\t'));
let operator = prompt('Enter the operator to be used for operation:\t');

console.log(mathematical_operation(left_operand, operator, right_operand))


function mathematical_operation (left_operand, operator, right_operand){
    let result;
    (operator === '+')?
    result = 'Sum of operands is: '+ (left_operand + right_operand)
    : (operator === '-')?
    result = 'The difference of left operand to right operand is: '+ (left_operand - right_operand)
    : (operator === '*')?
    result = 'The product of operands is: '+ (left_operand * right_operand)
    : (operator === '/')?
    result = 'The division of left operand by right operand is: '+ (left_operand / right_operand)
    : (operator === '%')?
    result = 'The mod of left operand by right operand is: '+ (left_operand % right_operand)
    : (operator === "**")?
    result = 'The power of left operand to right operand is: '+ (left_operand ** right_operand)
    : console.log('Please enter an operator');

    return(result);

}
