import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD1hzCaCkMY0PihHXTtjOtBiNZ9xZMLSvI",
  authDomain: "panther-energy.firebaseapp.com",
  projectId: "panther-energy",
  storageBucket: "panther-energy.appspot.com",
  messagingSenderId: "79965316351",
  appId: "1:79965316351:web:9961ff4e32768d5ee0d8ca",
  measurementId: "G-F6G2KEM4FZ"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
