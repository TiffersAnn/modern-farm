
export const Catalog = (listOfPlants) => {
    //invoke function from created array
    // const plants = harvestPlants()

    //start building HTML string
    let htmlString = `<main class= "container">`

    for (const names of listOfPlants) {
        htmlString +=
            `<section class= "plant_type">${names.type}</section>`
    }        
        htmlString += `</main>`
     


    return htmlString
}