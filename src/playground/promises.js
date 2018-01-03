import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name:'GC',
    //   age: 27
    // })
    reject('Something went wrong')
  }, 4000)
})
console.log('before')

promise.then((data) => {
  console.log('1',data)
}).catch((e) => {
  console.log('error:', e)
})

console.log('after')