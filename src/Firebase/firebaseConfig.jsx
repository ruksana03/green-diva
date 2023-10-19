import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoFVdko2hMRn2m6tmtplwW3HInFfWyQoI",
  authDomain: "green-diva.firebaseapp.com",
  projectId: "green-diva",
  storageBucket: "green-diva.appspot.com",
  messagingSenderId: "57408971281",
  appId: "1:57408971281:web:bd0e5ef74abd768aefc7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

