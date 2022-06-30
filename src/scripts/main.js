import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan) 

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)




console.log("Welcome to the main module")


console.log(addPlant())    // are double parentheses needed?


let fieldPlan = plantSeeds(yearlyPlan)
console.log(fieldPlan)

const fieldPlants = usePlants()
console.log(fieldPlants)

let foobar = harvestPlants(fieldPlants)
console.log(foobar)

let finalList = Catalog(foobar)
console.log(finalList)

const parentHTML= document.querySelector(".container")
parentHTML.innerHTML = finalList


// let catalogedPlants = Catalog(foobar)