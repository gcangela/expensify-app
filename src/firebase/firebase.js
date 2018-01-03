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
  isSingle: true,
  location: {
    city: 'Amsterdam',
    country: 'Netherlands'
  }
}).then(() => {
  console.log('Data is saved')
}).catch((e) => [
  console.log('error:', e)
])

database.set('isSingle').set(null)

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data has been removed')
// }).catch((e) => {
//   console.log('Data could not be removed',e)
// })
