import React from "react";
import { Button, Text, View } from "react-native";

const DailyGoal = ({ setDailyGoalModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<Text>Set your daily goal</Text>
			<Button
				title="Close"
				onPress={() => {
					setDailyGoalModalOpen(false);
				}}
			></Button>
		</View>
	);
};

export default DailyGoal;
