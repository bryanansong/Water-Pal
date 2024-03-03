import React from "react";
import { Button, Text, View } from "react-native";

const NotificationPreference = ({ setNotificationPreferenceModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<View>
				<Text>Set Your Notification Preference</Text>
				<Button
					title="Close"
					onPress={() => {
						setNotificationPreferenceModalOpen(false);
					}}
				></Button>
			</View>
		</View>
	);
};

export default NotificationPreference;
