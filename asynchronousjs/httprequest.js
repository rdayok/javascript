
// This is a request object I am declaring here that we can use to 
// send a request to an endpoint
const requestOject = new XMLHttpRequest();


// Here is to help us see any state change of the request object on the browser console
requestOject.addEventListener(`readystatechange`, () => {
    console.log(requestOject, requestOject.readyState)
    // This is where we want to display what our request response is when our request is fully met
    if(requestOject.readyState === 4 && requestOject.status === 200){
        console.log(requestOject, requestOject.responseText)
    } else{
        console.log("Could not fetch")
    }
})

const url = "https://jsonplaceholder.typicode.com/todos/";
requestOject.open("GET", url)
requestOject.send(); 