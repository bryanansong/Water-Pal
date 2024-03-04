import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../home/home";
import Settings from "../../settings/Settings";
import Profile from "../../profile/Profile";
import ProfilePlaceHolder from "../../profile/ProfilePlaceHolder";

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
				options={{
					headerBlurEffect: "systemUltraThinMaterialLight",
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					headerBlurEffect: "systemUltraThinMaterialLight",
					headerTransparent: true,
				}}
			/>
			{/** TODO: Delete the placeholder Screen when ready */}
			<Stack.Screen
				name="Profile_placeholder"
				component={ProfilePlaceHolder}
				options={{
					headerBlurEffect: "systemUltraThinMaterialLight",
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default InsideNavigation;
