import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB15eOCOxR5jMtGznFlQ0E3hC2Nj8IInmE",
  authDomain: "realtor-clone-react-7e606.firebaseapp.com",
  projectId: "realtor-clone-react-7e606",
  storageBucket: "realtor-clone-react-7e606.appspot.com",
  messagingSenderId: "939578091605",
  appId: "1:939578091605:web:9d17eadc56e3d293a44cdc"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
