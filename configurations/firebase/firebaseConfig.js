import { initializeApp } from "firebase/app";
import {
	initializeAuth,
	getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = initializeAuth(firebaseApp, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(firebaseApp);
