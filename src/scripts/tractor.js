// import { usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"


export const plantSeeds = (plantingPlan) => {    //why is this not iterable?
// iterate each item
// add seeds to addPlant
    for (const list of plantingPlan) {

        for (const seedObject of list) {

            if (seedObject === 'Asparagus') {
                let asparagusPlant = createAsparagus()
                addPlant(asparagusPlant)

            } else if (seedObject === 'Corn') {
                let cornPlant = createCorn()
                addPlant(cornPlant)

            } else if (seedObject === 'Potato'){
                let potatoPlant = createPotato()
                addPlant(potatoPlant)

            } else if (seedObject === 'Soybean') {
                let soybeanPlant = createSoybean()
                addPlant(soybeanPlant)

            } else if (seedObject === 'Sunflower') {
                let sunflowerPlant = createSunflower()
                addPlant(sunflowerPlant)

            } else if (seedObject === 'Wheat') {
                let wheatPlant = createWheat()
                addPlant(wheatPlant)

            }
            

        }
        
    }
    

    
}