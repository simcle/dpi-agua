import store from '../store'
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDSc1RElvFdOfMcC4V2fLQd8w-J5EzjPSY",
    authDomain: "iot-dutapersada.firebaseapp.com",
    databaseURL: "https://iot-dutapersada-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iot-dutapersada",
    storageBucket: "iot-dutapersada.appspot.com",
    messagingSenderId: "517108830920",
    appId: "1:517108830920:web:574a317d9445c69da54bfd",
    measurementId: "G-W0Z8238LVM"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

let toServer = false
let logger = {
    ph: 0.00,
    do: 0.00,
    ec: 0.00,
    createdAt: '',
}
store.subscribe((mutations) => {
    switch(mutations.type) {
        case 'auth/SET_TOKEN' :
            if(mutations.payload) {
                toServer = true
                axios.defaults.headers.common['Authorization'] = `Beare ${mutations.payload}`
                localStorage.setItem('token', mutations.payload)
            } else {
                toServer = false
                axios.defaults.headers.common['Authorization'] = `Beare ${mutations.payload}`
                localStorage.setItem('token', mutations.payload)   
            }
            break
        case 'SET_DATA':
            // untuk firebase
            logger = {
                ph: mutations.payload.ph,
                do: mutations.payload.do,
                ec: mutations.payload.ec,
                createdAt: Date.now()
            }
            if(toServer) {
                set(ref(db, 'sensor/user_id'), logger)
            }
            break
    }
})

setInterval(() => {
    if(toServer) {
        axios.post('/logger/create', logger)
    }
}, 120000)