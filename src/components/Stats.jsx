import { View, Text } from "react-native";
import React from "react";

const Stats = ({ goal, progress, remaining }) => {
	return (
		<View className="flex flex-row gap-8">
			<View>
				<Text>Goal:</Text>
				<Text>{goal}</Text>
			</View>
			<View>
				<Text>Progress:</Text>
				<Text>{progress}</Text>
			</View>
			<View>
				<Text>Remaining:</Text>
				<Text>{remaining}</Text>
			</View>
		</View>
	);
};

export default Stats;
