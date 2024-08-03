// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDU-ZJMJJ1PZCCvJiAdZV0LRImnuX61IAE",
  authDomain: "todopeter-22759.firebaseapp.com",
  projectId: "todopeter-22759",
  storageBucket: "todopeter-22759.appspot.com",
  messagingSenderId: "595315327731",
  appId: "1:595315327731:web:6ebd984fbec6ebbd792d86",
  measurementId: "G-HWZP4L6FT7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export necessary instances
export { app, analytics, db };
