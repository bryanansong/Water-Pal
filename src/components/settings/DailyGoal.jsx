import React from "react";
import { Button, Text, View } from "react-native";

const DailyGoal = ({ setDailyGoalModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<View className="flex-row justify-between">
				<Text className="text-xl font-semibold">Set your daily goal</Text>
				<Button
					title="X"
					onPress={() => {
						setDailyGoalModalOpen(false);
					}}
				></Button>
			</View>
			<View className=" max-w-md">
				<Text className="self-center text-3xl m-5 tracking-widest">
					Change Goal Here
				</Text>
			</View>
		</View>
	);
};

export default DailyGoal;
