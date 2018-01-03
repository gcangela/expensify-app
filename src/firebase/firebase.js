import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAXPFAeNC5sjJxecEVqszVs0Q8U2BFfYc4",
  authDomain: "expensify-app-ec894.firebaseapp.com",
  databaseURL: "https://expensify-app-ec894.firebaseio.com",
  projectId: "expensify-app-ec894",
  storageBucket: "expensify-app-ec894.appspot.com",
  messagingSenderId: "186365814293"
};

firebase.initializeApp(config)

const database = firebase.database()

database(ref).on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`${vasl.name} is a ${val.job.title} at ${val.job.company}`)
})

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, (e) => {
//     console.log('Error fetching data', e)
//   })

//   setTimeout(() => {
//     database.ref('age').set(29)
//   },3500)

//   setTimeout(() => {
//     database.ref().off(onValueChange)
//   },7000)

//   setTimeout(() => {
//     database.ref('age').set(30)
//   },10500)


// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val)
// })
// .catch((e) => {
//   console.log('Error fetching data:', e)
// })

// database.ref().set({
//   name: 'GC', 
//   age:27,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Amsterdam',
//     country: 'Netherlands'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => [
//   console.log('error:', e)
// ])

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
// .remove()
// .then(() => {
//   console.log('Data has been removed')
// }).catch((e) => {
//   console.log('Data could not be removed',e)
// })
