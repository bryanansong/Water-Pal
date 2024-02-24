import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../../login/login";
import Home from "../../home/home";
import Settings from "../../settings/Settings";

const InsideNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Login">
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
	);
};

export default InsideNavigation;
