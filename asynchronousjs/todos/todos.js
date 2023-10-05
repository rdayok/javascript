

const getUserTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener("readystatechange", () => {
            if(request.readyState  === 4 && request.status === 200 ){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4){
                reject('Could not fetch data');
            }
        });
    
        request.open("GET", resource);
        request.send();
    })
}

// promise example
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch some data

        resolve('some data resovled');
        reject('some error');
    })
}

// so we use the then method to show what so ever result for resolved or rejected promise
getSomething().then((data) => {
    console.log(data)
}, (err) => {
    console.log(err);
});

// this above can be written in a neater way
getSomething().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})


// // the style of fetching data below causes what is called callback hell

// getUserTodos("luigi.json", (err, data) =>{
//     console.log(data)
//     getUserTodos('mario.json', (err, data) =>{
//         console.log(data)
//         getUserTodos('shuan.json', (err, data) =>{
//             console.log(data)
//         })
//     })
// });

// here we use a without using a callback 
getUserTodos("mario.json").then(data => {
    console.log("promise resovled: ", data)
}).catch(err => {
    console.log("promise rejected: ", err)
});

// now to chain promise we do this way
getUserTodos("mario.json").then(data => {
    console.log("promise resovled 1: ", data);
    return getUserTodos("shuan.json");
}).then(data => {
    console.log("promise resovled 2: ", data);
    return getUserTodos("luigi.json");
}).then(data => {
    console.log("promise resovled 3: ", data)
}).catch(err => {
    console.log("promise rejected: ", err)
});