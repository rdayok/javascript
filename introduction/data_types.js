const prompt = require('prompt-sync')();

let ID = prompt('enter ID: ');
let available = prompt('is it available: ');
let count = prompt('enter cout: ');
let name = prompt('Enter name: ');
let author = prompt('enter author: ');

ID = Number.parseFloat(ID);
available = Boolean(available);
count = Number.parseFloat(count);

let Library = {
    ID: ID,
    available: available,
    count: count,
    name: name,
    author: author
}
console.log(Library)


