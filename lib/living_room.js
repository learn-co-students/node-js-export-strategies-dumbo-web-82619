// const Lamp = require('./lamp')
// const myLamp = new Lamp(10)

// console.log(myLamp.currentBrightness)

// myLamp.turnOn()

// console.log(myLamp.currentBrightness)

const Lamp = require('./lamp')
const powerEvents = require('./power')
const powerLimits = require('./power_limits')

const myLamp = new Lamp(powerLimits.maxbrightness)

myLamp.turnOn()

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`)

powerEvents.surge(myLamp)
powerEvents.outage(myLamp)

myLamp.turnOn()

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`)
