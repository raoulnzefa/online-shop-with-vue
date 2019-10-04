import Firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyAhImqwtqpJTjQutpg5cV-aQdMTf2fes2I',
  authDomain: 'workshop2019-b84c0.firebaseapp.com',
  databaseURL: 'https://workshop2019-b84c0.firebaseio.com',
  projectId: 'workshop2019-b84c0',
  storageBucket: 'workshop2019-b84c0.appspot.com',
  messagingSenderId: '558445220477',
  appId: '1:558445220477:web:04931462b82073dd741714'
}

Firebase.initializeApp(config)

export const db = Firebase.firestore()
