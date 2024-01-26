import { View, Text } from "react-native";
import React from "react";

const Stats = ({ goal, progress, remaining }) => {
	return (
		<View className="">
			<View className="flex flex-row gap-8 justify-center items-center">
				<View>
					<Text className="text-xl font-semibold">
						Goal:
					</Text>
					<Text className="text-3xl tracking-widest">
						{goal}
					</Text>
				</View>
				<View className="">
					<Text className="text-xl font-semibold">
						Remaining:
					</Text>
					<Text className="text-3xl tracking-widest">
						{remaining}
					</Text>
				</View>
			</View>

			<View className="mt-10 justify-center items-center">
				<Text className="text-xl font-semibold">
					Progress:
				</Text>
				<Text className="text-3xl tracking-widest">
					{progress}
				</Text>
			</View>
		</View>
	);
};

export default Stats;
