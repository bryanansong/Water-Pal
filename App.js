import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState } from "react";
import Nav from "./src/components/Nav";
import { dailyGoal } from "./src/constants";
import RingProgress from "./src/components/RingProgress";
import IntakePresets from "./src/components/IntakePresets";
import Stats from "./src/components/Stats";

export default function App() {
	const [currentIntake, setCurrentIntake] = useState(0);
	const currentGoal = dailyGoal;

	const incrementIntake = (incrementValue) => {
		setCurrentIntake(currentIntake + incrementValue);
	};

	return (
		<View className="flex flex-col flex-1 items-center justify-center bg-sky-200">
			<Nav />

			<RingProgress
				radius={150}
				strokeWidth={50}
				progress={currentIntake / dailyGoal}
			/>

			<Stats
				goal={currentGoal}
				progress={currentIntake}
				remaining={currentGoal - currentIntake}
			/>

			<Text className=" mt-10 text-3xl tracking-widest">
				{currentIntake} ml
			</Text>

			<IntakePresets incrementIntake={incrementIntake} />

			<StatusBar style="auto" />
		</View>
	);
}
