import {
	View,
	Text,
	TextInput,
	ActivityIndicator,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "@firebase/auth";
import {
	db,
	firebaseAuth,
} from "../../../configurations/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const auth = firebaseAuth;

	const signIn = async () => {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error);
			alert("Invalid email or password");
		} finally {
			setLoading(false);
		}
	};

	const signUp = async () => {
		setLoading(true);
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			createUserInDatabase(user);
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
					daily: 2000,
					weekly: 14000,
				},
			};

			await setDoc(userDocRef, data);
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	};

	return (
		<View className="flex flex-1 justify-center px-6">
			<KeyboardAvoidingView behavior="padding">
				<View className="flex-row gap-3">
					<View>
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
					<View>
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
							onPress={signIn}
							title="Sign In"
						></Button>
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

export default Login;
