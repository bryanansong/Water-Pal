import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyC11HCWYnvHwebeE7h9DWYKiO-hMnHT7PQ",
	authDomain: "water-pal-app.firebaseapp.com",
	databaseURL: "https://water-pal-app-default-rtdb.firebaseio.com",
	projectId: "water-pal-app",
	storageBucket: "water-pal-app.appspot.com",
	messagingSenderId: "35726380964",
	appId: "1:35726380964:web:67427947d6acc751e6bb31",
	measurementId: "G-5VFZNDE4YY",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
