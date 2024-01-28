import {
	View,
	Text,
	Button,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { currentStreak, userName } from "../constants";
import { Feather } from "@expo/vector-icons";

const Nav = ({ navigation }) => {
	return (
		<View className="flex flex-row items-center justify-between px-6 py-4 bg-sky-500">
			<View className="flex flex-row">
				<Text className="text-xl text-white font-bold">
					Streak:{" "}
				</Text>
				<Text className="text-2xl text-white font-bold">
					🔥 {currentStreak}
				</Text>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("Settings")}
				className="m"
			>
				<Feather
					name="settings"
					size={35}
					color="white"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Nav;
