import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
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
		<SafeAreaView className="flex flex-1 bg-sky-700">
			<Nav />

			<View className="flex flex-col flex-1 items-center justify-center bg-sky-200">
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

				<IntakePresets incrementIntake={incrementIntake} />
			</View>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
