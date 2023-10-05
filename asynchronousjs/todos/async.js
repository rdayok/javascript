// asynch adn await

const getMyTodos = async () => {
    const response = await fetch("luigi.json");
    if(response.status !== 200) throw new Error("Cannot fetch the data");
    return response.json();
};


getMyTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));