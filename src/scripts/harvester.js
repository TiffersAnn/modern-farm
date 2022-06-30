export const harvestPlants = (plantedSeeds) => {

    let seedArray = []

    for (const taco of plantedSeeds) {

        if (taco.type === "Corn") {
            for (let i=0; i< taco.output /2; i++)  {
                seedArray.push(taco)}
        }

        else { for(let i=0; i< taco.output; i++)
            seedArray.push(taco)
        }
        
    }

    return seedArray
}