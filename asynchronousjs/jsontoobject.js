const getTodos = (callBack) => {
    const requestOject = new XMLHttpRequest();

    const url = "https://jsonplaceholder.typicode.com/todos/";
    requestOject.open("GET", url);
    requestOject.send();

    requestOject.addEventListener(`readystatechange`, () => {
        if(requestOject.readyState === 4 && requestOject.status === 200){
            const data = JSON.parse(requestOject.responseText)
            callBack(undefined, data);
        } else if (requestOject.status !== 200){
            callBack("Could not fetch data", undefined);
        }
    })
}


getTodos((error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})


