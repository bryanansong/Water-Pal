import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../login/login";
import SignUp from "../../signup/SignUp";
import InsideNavigation from "../insideNavigation/insideNavigation";

const OutsideNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
			<Stack.Screen
				name="Signup"
				component={SignUp}
			/>
			<Stack.Screen
				name="InsideNavigation"
				component={InsideNavigation}
			/>
		</Stack.Navigator>
	);
};

export default OutsideNavigation;
