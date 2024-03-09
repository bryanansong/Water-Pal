import {
	View,
	Text,
	TextInput,
	ActivityIndicator,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db, firebaseAuth } from "../../../configurations/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const SignUp = ({ navigation }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const [defaultDailyGoal, setDefaultDailyGoal] = useState(2000);
	const [currentDate, setCurrentDate] = useState("1-1-2024");
	const auth = firebaseAuth;

	const signUp = async () => {
		setLoading(true);
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			createUserInDatabase(user);
			createHistoryDocument(user);
		} catch (error) {
			console.log(error);
			alert(
				"There was an error creating your account. Please check your information and try again 😊"
			);
		} finally {
			setLoading(false);
		}
	};

	const createUserInDatabase = async (user) => {
		try {
			const userDocRef = doc(db, "users", user.user.uid);

			const data = {
				userInfo: {
					uid: user.user.uid,
					username: username,
					name: {
						first: firstName,
						last: lastName,
					},
					email: email,
				},
				goals: {
					unit: "milliliters",
					daily: defaultDailyGoal,
					weekly: 14000,
				},
				history: doc(db, "history", user.user.uid),
			};

			await setDoc(userDocRef, data);
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	};

	const createHistoryDocument = async (user) => {
		try {
			const userDocRef = doc(db, "history", user.user.uid);

			const data = {
				[currentDate]: {
					goal: defaultDailyGoal,
					progress: 0,
				},
			};

			await setDoc(userDocRef, data);
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	};

	const getCurrentDate = async () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		const currentDate = `${month}-${day}-${year}`;
		setCurrentDate(currentDate);
	};

	useEffect(() => {
		getCurrentDate();
	}, []);

	return (
		<View className="flex flex-1 justify-center px-6">
			<KeyboardAvoidingView behavior="padding">
				<Text className="text-center font-light text-6xl tracking-widest mb-16">
					Sign Up
				</Text>
				<View className="flex-row gap-3 w-full">
					<View className="bg-black/5 p-5 rounded-2xl flex-1 mb-5">
						<TextInput
							value={firstName}
							onChangeText={setFirstName}
							placeholder="First Name"
							autoCapitalize="words"
							onChange={(text) => setFirstName(text)}
							className=""
						/>
					</View>
					<View className="bg-black/5 p-5 rounded-2xl flex-1 mb-5">
						<TextInput
							value={lastName}
							onChangeText={setLastName}
							placeholder="Last Name"
							autoCapitalize="words"
							onChange={(text) => setLastName(text)}
							className=""
						/>
					</View>
				</View>
				<View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
					<TextInput
						value={username}
						onChangeText={setUsername}
						placeholder="User Name"
						autoCapitalize="none"
						onChange={(text) => setUsername(text)}
						className=""
					/>
				</View>
				<View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
					<TextInput
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
						autoCapitalize="none"
						onChange={(text) => setEmail(text)}
						className=""
					/>
				</View>
				<View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
					<TextInput
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						secureTextEntry={true}
						autoCapitalize="none"
						onChange={(text) => setPassword(text)}
						className=""
					/>
				</View>

				{loading ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
					/>
				) : (
					<>
						<TouchableOpacity
							onPress={signUp}
							title=""
							className="w-full bg-sky-400 p-3 mb-5 rounded-2xl"
						>
							<Text className="text-xl font-bold text-white text-center">
								Create Account
							</Text>
						</TouchableOpacity>
					</>
				)}
				<View className="flex-row justify-center">
					<Text className="text-lg font-light">
						Already have an account?{"  "}
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Login")}>
						<Text className="text-blue-600 text-lg font-light">
							Sign In
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default SignUp;
