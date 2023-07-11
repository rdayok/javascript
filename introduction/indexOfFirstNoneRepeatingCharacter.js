const prompt = require('prompt-sync')();


let word = prompt("Please enter a word: ");

function indexOfFirstNoneRepeatingCharacter(word){
    for(let index = 0; index < word.length; index++){
        let countOfRepeatition = 0;
        for(let index2 = 0; index2 < word.length; index2++){
            if(word[index] == word[index2] && index != index2)countOfRepeatition++;
        }
        if(countOfRepeatition == 0){
            return index;
        };
    }
    return -1;
}

console.log(indexOfFirstNoneRepeatingCharacter(word));