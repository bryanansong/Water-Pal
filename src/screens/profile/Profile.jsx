import { View } from "react-native";
import React from "react";
import SignOutCard from "../../components/SignOutCard";

// Add navigation to this screen
const Profile = () => {
	return (
		<View className="bg-sky-200 flex-1 justify-center align-center">
			<SignOutCard />
		</View>
	);
};

export default Profile;
