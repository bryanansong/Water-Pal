import {
	View,
	Text,
	TextInput,
	ActivityIndicator,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { firebaseAuth } from "../../../configurations/firebase/firebaseConfig";

const Login = ({ navigation }) => {
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
			alert(
				"Hi there! There was an error signing in. Please check your information and try again! 😊"
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="flex flex-1 justify-center  mx-4">
			<KeyboardAvoidingView behavior="padding">
				<Image
					className="rounded-full h-40 w-40 mx-auto mb-5"
					source={require("../../../assets/Images/WaterPalLogo.jpeg")}
				/>
				<Text className="text-center font-light text-6xl tracking-widest mb-10">
					Sign In
				</Text>
				<View className="bg-black/5 p-5 rounded-2xl w-full mb-5">
					<TextInput
						value={email}
						onChangeText={setEmail}
						placeholder="Email"
						autoCapitalize="none"
						onChange={(text) => setEmail(text)}
						placeholderTextColor={"gray"}
						className="text-black"
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
						placeholderTextColor={"gray"}
						className="text-black"
					/>
				</View>

				<View className="flex gap-3 w-full">
					{loading ? (
						<ActivityIndicator
							size="large"
							color="#0000ff"
						/>
					) : (
						<>
							<TouchableOpacity
								onPress={signIn}
								title=""
								className="w-full bg-sky-400 p-3 mb-5 rounded-2xl"
							>
								<Text className="text-xl font-bold text-white text-center">
									Sign In
								</Text>
							</TouchableOpacity>
						</>
					)}
				</View>
				<View className="flex-row justify-center">
					<Text className="text-lg font-light">
						Don't have an account?{"  "}
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
						<Text className="text-blue-600 text-lg font-light">
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default Login;
