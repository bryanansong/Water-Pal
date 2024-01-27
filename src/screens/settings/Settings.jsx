import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Settings = () => {
	return (
		<TouchableOpacity>
			<View>
				<View>
					<Text>Picture</Text>
				</View>
				<View>
					<Text>User Name</Text>
					<Text>Text about user</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Settings;
