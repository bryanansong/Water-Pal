import { View, Text } from "react-native";
import React from "react";
import { currentStreak, userName } from "../constants";

const Nav = () => {
	return (
		<View className="flex flex-row items-baseline justify-between px-6 bg-sky-500 py-2">
			<View className="flex flex-col">
				<Text className="text-xl text-white font-bold">
					Streak:
				</Text>
				<Text className="text-2xl text-white font-bold">
					🔥 {currentStreak}
				</Text>
			</View>
			<View className="flex flex-col items-end">
				<Text className="text-white text-xl font-semi-bold">
					Welcome
				</Text>
				<Text className="text-white text-2xl font-bold">
					{userName ? userName : "User"}!
				</Text>
			</View>
		</View>
	);
};

export default Nav;
