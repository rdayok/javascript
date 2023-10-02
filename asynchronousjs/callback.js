const getTodos = (myCalback) => {
const requestOject = new XMLHttpRequest();

requestOject.addEventListener(`readystatechange`, () => {
   if(requestOject.readyState === 4 && requestOject.status === 200){
       myCalback(undefined, requestOject.responseText);
   } else{
       myCalback("Could not fetch data", undefined);
   }
});

const url = "https://jsonplaceholder.typicode.com/todos/";
requestOject.open("GET", url)
requestOject.send(); 
}

console.log(1)
console.log(2)

getTodos((error, data) => {
    console.log("Callback fired");
    if(error){
        console.log(error);
    } else {
        console.log(data)
    }
});

console.log(3)
console.log(4)
