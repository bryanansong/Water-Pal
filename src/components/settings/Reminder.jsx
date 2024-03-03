import React from "react";
import { Button, Text, View } from "react-native";

const Reminder = ({ setReminderModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<Text>Set your Reminder</Text>
			<Button
				title="Close"
				onPress={() => {
					setReminderModalOpen(false);
				}}
			></Button>
		</View>
	);
};

export default Reminder;
