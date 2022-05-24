import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getStorage, connectStorageEmulator } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCea_feR6gOs-YscoGa5AxVivOgzS_v4mA",
  authDomain: "allenchew-s-playground.firebaseapp.com",
  databaseURL: "https://allenchew-s-playground-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "allenchew-s-playground",
  storageBucket: "allenchew-s-playground.appspot.com",
  messagingSenderId: "622892395775",
  appId: "1:622892395775:web:6e0837fd42769eadb0f0ca",
  measurementId: "G-38P5E4RX4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function InitializeApp(newApp){
    newApp = app;
}