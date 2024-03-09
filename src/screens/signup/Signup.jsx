import {
	View,
	Text,
	TextInput,
	ActivityIndicator,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { db, firebaseAuth } from "../../../configurations/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
	const [firstName, setFirstName] = useState("Bryan");
	const [lastName, setLastName] = useState("Ansong");
	const [username, setUsername] = useState("bryanansong");
	const [email, setEmail] = useState("bryansong2003@gmail.com");
	const [password, setPassword] = useState("ferwac-4Tofgu-cebjov");
	const [loading, setLoading] = useState(false);
	const [defaultDailyGoal, setDefaultDailyGoal] = useState(2000);
	const [currentDate, setCurrentDate] = useState("10-20-2024");
	const auth = firebaseAuth;

	const signUp = async () => {
		setLoading(true);
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			createUserInDatabase(user);
			createHistoryDocument(user);
		} catch (error) {
			console.log(error);
			alert("Registration Error: " + error.message);
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
				<Text>SignUp</Text>
				<View className="flex-row gap-3 w-full">
					<View className="flex-1">
						<Text>First Name</Text>
						<TextInput
							value={firstName}
							onChangeText={setFirstName}
							placeholder="User Name"
							autoCapitalize="none"
							onChange={(text) => setFirstName(text)}
							className="border border-gray-300 rounded-lg p-2"
						/>
					</View>
					<View className="flex-1">
						<Text>Last Name</Text>
						<TextInput
							value={lastName}
							onChangeText={setLastName}
							placeholder="User Name"
							autoCapitalize="none"
							onChange={(text) => setLastName(text)}
							className="border border-gray-300 rounded-lg p-2"
						/>
					</View>
				</View>
				<View>
					<Text>User Name</Text>
					<TextInput
						value={username}
						onChangeText={setUsername}
						placeholder="User Name"
						autoCapitalize="none"
						onChange={(text) => setUsername(text)}
						className="border border-gray-300 rounded-lg p-2"
					/>
				</View>
				<View>
					<Text>Email</Text>
					<TextInput
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
						autoCapitalize="none"
						onChange={(text) => setEmail(text)}
						className="border border-gray-300 rounded-lg p-2"
					/>
				</View>
				<View>
					<Text>Password</Text>
					<TextInput
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						secureTextEntry={true}
						autoCapitalize="none"
						onChange={(text) => setPassword(text)}
						className="border border-gray-300 rounded-lg p-2"
					/>
				</View>

				{loading ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
					/>
				) : (
					<>
						<Button
							onPress={signUp}
							title="Create Account"
						></Button>
					</>
				)}
			</KeyboardAvoidingView>
		</View>
	);
};

export default SignUp;
