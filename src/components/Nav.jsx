import { View, Text } from "react-native";
import React from "react";
import { currentStreak } from "../constants";

const Nav = () => {
	return (
		<View className="flex flex-row items-baseline justify-between px-5 bg-sky-700 py-2">
			<View>
				<Text className="text-xl text-white font-bold">
					Current Streak:
				</Text>
				<Text className="text-2xl text-white font-bold">
					🔥 {currentStreak}
				</Text>
			</View>
			<Text>Welcome User!</Text>
		</View>
	);
};

export default Nav;
