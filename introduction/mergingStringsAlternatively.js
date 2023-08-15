let inputOne = "abc";
let inputTwo = "pqrst";

function mergeStringAlternatively(word1, word2){
    let mergedStrings = "";
    for(let index = 0; index < word1.length || index < word2.length; index++){
        if(index < word1.length) mergedStrings += word1[index];
        if(index < word2.length) mergedStrings += word2[index];
    }
    return mergedStrings;
}

console.log(mergeStringAlternatively(inputOne, inputTwo))