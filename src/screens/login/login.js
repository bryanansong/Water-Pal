import {
	View,
	Text,
	TextInput,
	ActivityIndicator,
} from "react-native";
import React from "react";
import { useState } from "react";
import firebaseAuth from "../../../configurations/firebase/firebaseConfig";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const auth = firebaseAuth;
	return (
		<View className="flex flex-1 justify-center px-6">
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
				<></>
			)}
		</View>
	);
};

export default Login;
