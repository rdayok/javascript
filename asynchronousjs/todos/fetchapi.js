
fetch("mario.json").then((response) => {
    console.log("resoved ", response)
    return response.json();
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log("rejected request ", err)
}); 