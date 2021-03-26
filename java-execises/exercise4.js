'use strict'

const FarhCel = function (Far) {
  return (Far - 32) * 5 / 9
}
const far = 100
console.log(`how many Celcius is ${far} Fahrenheit`)
console.log(`= ${FarhCel(far)} Celcius`)
