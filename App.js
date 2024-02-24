import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import Login from "./src/screens/login/login";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import InsideNavigation from "./src/screens/navigation/insideNavigation/insideNavigation";
import { onAuthStateChanged } from "@firebase/auth";
import { firebaseAuth } from "./configurations/firebase/firebaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {
	const [user, setUser] = useState(null);
	const auth = firebaseAuth;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				{user ? (
					<Stack.Screen
						name="InsideNavigation"
						component={InsideNavigation}
						options={{ headerShown: false }}
					/>
				) : (
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
				)}
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
