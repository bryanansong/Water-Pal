import React from "react";
import { Button, Text, View } from "react-native";

const Reminder = ({ setRemindersModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<View className="flex-row justify-between">
				<Text className="text-xl font-semibold">Set your Reminder</Text>
				<Button
					title="X"
					onPress={() => {
						setRemindersModalOpen(false);
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

export default Reminder;
