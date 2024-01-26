import { StatusBar } from "expo-status-bar";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Nav from "./components/Nav";
import { intakePresets } from "./constants";

export default function App() {
	const [currentIntake, setCurrentIntake] = useState(0);

	return (
		<View className="flex flex-1 items-center justify-center bg-sky-200">
			<Nav />
			<Text className="text-3xl tracking-widest">
				{currentIntake} ml
			</Text>

			<View className="flex flex-row">
				{intakePresets.map((preset) => (
					<TouchableOpacity
						className="flex flex-row ring-8 ring-black rounded-md p-2 m-2 bg-sky-700"
						onPress={() => {
							setCurrentIntake(
								currentIntake + preset.volume
							);
						}}
					>
						<Text>{preset.volume}ml</Text>
					</TouchableOpacity>
				))}
			</View>

			<StatusBar style="auto" />
		</View>
	);
}
