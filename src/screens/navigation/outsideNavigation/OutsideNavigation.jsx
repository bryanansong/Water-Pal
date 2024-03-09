import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../login/login";
import InsideNavigation from "../insideNavigation/insideNavigation";
import Signup from "../../signup/SignUp.jsx";

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
				component={Signup}
			/>
			<Stack.Screen
				name="InsideNavigation"
				component={InsideNavigation}
			/>
		</Stack.Navigator>
	);
};

export default OutsideNavigation;
