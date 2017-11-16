//Object Destructuuring

// const person = {
//   name: 'GC',
//   age: 27,
//   location: {
//     city: 'Amsterdam',
//     temp: 6
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if(city && temperature){
//   console.log(`It's ${temperature} in ${city}`)
// }

//

// const book = {
//   title: 'Some book',
//   author: 'Random Author',
//   publisher : {
//     name: 'GC'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher 

// console.log(publisherName) // GC, Self-Published

//Array destructuring

const address = ['address 12', 'Amsterdam','2342dx', 'netherlands']

const [street, city ='Aruba', country] = address

console.log(`You are in ${country} ${city}`)

const item = ['Coffee', '$2', '$2.5','$2.75']

const [drink , , medium] = item

console.log(` A medium ${drink} costs ${medium}`  )