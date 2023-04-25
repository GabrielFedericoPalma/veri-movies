// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

export default defineNuxtPlugin(nuxtApp => {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCWTPBKK5i6FDJUOh7XdigjbcIHDjQc9Ec",
    authDomain: "veri-movies.firebaseapp.com",
    projectId: "veri-movies",
    storageBucket: "veri-movies.appspot.com",
    messagingSenderId: "323935604849",
    appId: "1:323935604849:web:5bb4615ffd8913a8c5cbd0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
    
})