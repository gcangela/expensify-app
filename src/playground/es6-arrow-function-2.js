// Arguments object -  no longer bound with arrow functions

// const add = (a,b) => {
//   // console.log(arguments)
//   return a + b
// }
// console.log(55,1)

// this keyword - no longer bound

const user = {
  name: 'GC Angela',
  cities: ['Amsterdam','Breda', 'Barcelona'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived())

const multiplier = {
  // array of numbers
  numbers: [2,3,4],
  // single number multiplyBy - single number
  multiplyBy: 3,
  // multiply - return new array with multiplied numbers
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }

}
console.log(multiplier.multiply())