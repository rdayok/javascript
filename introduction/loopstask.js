var data = [
    [
    null, 
    { name: "JayCity", population: 15000, temperature: 5, currency: "naira"}, 
    { name: "Columbia", population: 15000, temperature: 5, currency: "naira"}, 
    { name: "Katsina", population: 15000, temperature: 5, currency: "naira"}
    ], [
    { name: "Rivers", population: 20000, temperature: 9, currency: "naira"},
    { name: "Kano", population: 35000, temperature: 20, currency: "naira" }, 
    { name: "JayCity", population: 15000, temperature: 5, currency: "naira"},
    null
    ], [
    { name: "Lagos", population: 50000, temperature: 14, currency: "naira"}, 
    null, 
    { name: "JayCity", population: 15000, temperature: 5, currency: "naira"}, 
    { name: "JayCity", population: 15000, temperature: 5, currency: "naira"}
    ]
]


console.table(data)

function sumOfPopulation(dataOfPopulation){

    let totalPopulationOfRegions = 0;

    for(let row = 0; row < dataOfPopulation.length; row++){
        for(let column = 0; column < dataOfPopulation[row].length; column++ ){
            if( dataOfPopulation[row][column] != null && dataOfPopulation[row][column].temperature >= 10){
                totalPopulationOfRegions += dataOfPopulation[row][column].population;
            }
        }
    }
    return totalPopulationOfRegions;
}

console.log(sumOfPopulation(data))


