import { View } from "react-native";
import React, { useState } from "react";
import { dailyGoal } from "../../constants";
import RingProgress from "../../components/RingProgress";
import Stats from "../../components/Stats";
import IntakePresets from "../../components/IntakePresets";
import Nav from "../../components/Nav";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
	const [currentIntake, setCurrentIntake] = useState(0);
	const currentGoal = dailyGoal;

	const incrementIntake = (incrementValue) => {
		setCurrentIntake(currentIntake + incrementValue);
	};

	return (
		<SafeAreaView className="flex flex-col h-screen bg-sky-200">
			<Nav navigation={navigation} />

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
		</SafeAreaView>
	);
};

export default Home;
