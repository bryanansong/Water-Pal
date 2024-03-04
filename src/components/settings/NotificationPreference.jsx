import React from "react";
import { Button, Text, View } from "react-native";

const NotificationPreference = ({ setNotificationPreferenceModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<View className="flex-row justify-between">
				<Text className="text-xl font-semibold">
					Set Your Notification Preference
				</Text>
				<Button
					title="X"
					onPress={() => {
						setNotificationPreferenceModalOpen(false);
					}}
				></Button>
			</View>
			<View className=" max-w-md">
				<Text className="self-center text-3xl m-5 tracking-widest">
					Coming Soon!
				</Text>
			</View>
		</View>
	);
};

export default NotificationPreference;
