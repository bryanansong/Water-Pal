import { View, Text } from "react-native";
import React from "react";

const Stats = ({ goal, progress, remaining }) => {
	return (
		<View className="flex flex-row flex-wrap justify-around rounded-xl p-3 mb-12 bg-sky-100">
			<View>
				<Text className="text-xl font-semibold">Goal:</Text>
				<Text className="text-2xl tracking-widest">
					{goal}
				</Text>
			</View>
			<View className="mx-6">
				<Text className="text-xl font-semibold">
					Progress:
				</Text>
				<Text className="text-2xl tracking-widest">
					{progress}
				</Text>
			</View>
			<View className="">
				<Text className="text-xl font-semibold">
					Remaining:
				</Text>
				<Text className="text-2xl tracking-widest">
					{remaining}
				</Text>
			</View>
		</View>
	);
};

export default Stats;
