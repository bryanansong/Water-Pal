import React from "react";
import { Button, Text, View } from "react-native";

const IntakeHistory = ({ setIntakeHistoryModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<Text>Take a look at your history</Text>
			<Button
				title="Close"
				onPress={() => {
					setIntakeHistoryModalOpen(false);
				}}
			></Button>
		</View>
	);
};

export default IntakeHistory;
