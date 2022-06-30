const storedPlants = []

export const addPlant = (seedObject) => {

    if (Array.isArray(seedObject) === true) {
        for (const object of seedObject) {
            storedPlants.push(object)
        }
    }
    else {storedPlants.push(seedObject)}

    // need to .push to storedPlants
    // storedPlants.push()
    // need forloop to add corn
    
    
}


export const usePlants = () => {


    return storedPlants.map(art => ({...art}))
}