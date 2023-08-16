let inputSentence = "This is the boy i cought last night"

function reverseSentence(inputtedString){
    let splittedString = inputtedString.split(" ");
    let reverse = "";
    for(let index = splittedString.length - 1; index >= 0; index--){
        reverse += splittedString[index] + " ";
    }
    return reverse;
}

console.log(reverseSentence(inputSentence))
