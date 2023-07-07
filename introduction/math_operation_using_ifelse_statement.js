const prompt = require('prompt-sync')();

let left_operand = Number.parseFloat(prompt('Please enter left operand:\t'));
let operator = prompt('Please enter an operator: \t');
let right_operand = Number.parseFloat(prompt('Please enter right operand: \t'));

function calculate(left_operand, operator, right_operand){
    

    if (operator ==='+'){
        result = 'The sum of operands is: '+ (left_operand + right_operand)
    }else if (operator === '-'){
        result = 'The difference of operands is: '+ (left_operand - right_operand)
    }else if (operator === '*'){
        result = 'The product of operands is: '+ (left_operand * right_operand)
    }else if (operator === '/'){
        result = 'The division of operands is: '+ (left_operand / right_operand)
    }else if (operator === '%'){
        result = 'The mod of operands is: '+ (left_operand % right_operand)
    }else if (operator === '**'){
        result = 'The exponential of operands is: '+ (left_operand ** right_operand)
    }else result = 'Please enter an operand next time. '

    return result;
}

console.log(calculate(left_operand, operator, right_operand));
