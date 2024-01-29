// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC11HCWYnvHwebeE7h9DWYKiO-hMnHT7PQ",
	authDomain: "water-pal-app.firebaseapp.com",
	projectId: "water-pal-app",
	storageBucket: "water-pal-app.appspot.com",
	messagingSenderId: "35726380964",
	appId: "1:35726380964:web:67427947d6acc751e6bb31",
	measurementId: "G-5VFZNDE4YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
