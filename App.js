import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import Home from "./src/screens/home/home";
import Settings from "./src/screens/settings/Settings";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Settings"
					component={Settings}
					options={{ headerTransparent: true }}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
