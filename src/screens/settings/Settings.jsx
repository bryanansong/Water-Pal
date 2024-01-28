import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Settings = () => {
	return (
		<View className="h-screen bg-sky-200 pt-24">
			<View className="flex flex-row justify-between px-8 py-4 bg-sky-500">
				<TouchableOpacity className="flex-row flex-1 px-5 py-3 rounded-lg bg-sky-100">
					<View>
						<Text>Picture</Text>
					</View>
					<View>
						<Text>User Name</Text>
						<Text>Text about user</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Settings;
