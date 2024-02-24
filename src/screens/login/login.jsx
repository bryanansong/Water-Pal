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
import { firebaseAuth } from "../../../configurations/firebase/firebaseConfig";

const Login = () => {
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
			await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			alert("Check your email for verification");
		} catch (error) {
			console.log(error);
			alert("Registration Error: " + error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="flex flex-1 justify-center px-6">
			<KeyboardAvoidingView behavior="padding">
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
