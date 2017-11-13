var nameVar = 'GC'
nameVar = 'Dolois'
console.log('nameVar', nameVar)

let nameLet = 'Kaka'
nameLet = 'Jen'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst',nameConst)

// Block scoping 

const fullName = 'GC Angela'
let firstName
if(fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)