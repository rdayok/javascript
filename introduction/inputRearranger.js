

function stringRearanger(word, array){
    var newString = ""
    for (let element of array){
        newString += word[element]
    }
    return newString
}

var firstWord = "codeleet";
var indicesOne = [4, 5, 6, 7, 0, 2, 1, 3];
var secondtWord = "abc";
var indicesTwo = [0, 1, 2];

console.log(stringRearanger(firstWord, indicesOne))
console.log(stringRearanger(secondtWord, indicesTwo))
