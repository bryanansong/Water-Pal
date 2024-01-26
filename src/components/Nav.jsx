import { View, Text } from "react-native";
import React from "react";
import { currentStreak, userName } from "../constants";

const Nav = () => {
	return (
		<View className="flex flex-row items-baseline justify-between px-5 bg-sky-700 py-2">
			<View className="flex flex-row">
				<Text className="text-xl text-white font-bold">
					Streak:
				</Text>
				<Text className="text-2xl text-white font-bold">
					🔥 {currentStreak}
				</Text>
			</View>
			<View>
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
