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

database.ref().set({
  name: 'GC', 
  age:27,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Amsterdam',
    country: 'Netherlands'
  }
}).then(() => {
  console.log('Data is saved')
}).catch((e) => [
  console.log('error:', e)
])

// change the streslevel to 9
//job.company to amazon
// city to seattle

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})

// database.ref()
// .remove()
// .then(() => {
//   console.log('Data has been removed')
// }).catch((e) => {
//   console.log('Data could not be removed',e)
// })
