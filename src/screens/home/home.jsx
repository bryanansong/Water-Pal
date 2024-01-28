import { View } from "react-native";
import React, { useState } from "react";
import { dailyGoal } from "../../constants";
import RingProgress from "../../components/RingProgress";
import Stats from "../../components/Stats";
import IntakePresets from "../../components/IntakePresets";
import Nav from "../../components/Nav";
import { SafeAreaView } from "react-native-safe-area-context";
import PresetToggleButton from "../../components/PresetToggleButton";

const Home = ({ navigation }) => {
	const [currentIntake, setCurrentIntake] = useState(0);
	const [canAddIntake, setCanAddIntake] = useState(true);
	const currentGoal = dailyGoal;

	const incrementIntake = (incrementValue) => {
		setCurrentIntake(
			currentIntake + incrementValue > currentGoal
				? currentGoal
				: currentIntake + incrementValue
		);
	};

	const decrementIntake = (decrementValue) => {
		setCurrentIntake(
			currentIntake - decrementValue < 0
				? 0
				: currentIntake - decrementValue
		);
	};

	const updateCanAddIntake = () => setCanAddIntake(!canAddIntake);

	return (
		<SafeAreaView className="flex flex-col h-screen bg-sky-200">
			<Nav navigation={navigation} />

			<View className="flex flex-col flex-1 items-center mt-5 bg-sky-200">
				<Stats
					goal={currentGoal}
					progress={currentIntake}
					remaining={currentGoal - currentIntake}
				/>

				<RingProgress
					radius={150}
					strokeWidth={50}
					progress={currentIntake / dailyGoal}
					canAddIntake={canAddIntake}
				/>

				<IntakePresets
					incrementIntake={incrementIntake}
					decrementIntake={decrementIntake}
					canAddIntake={canAddIntake}
				/>

				<View className="flex flex-row mt-10 justify-center">
					<PresetToggleButton
						operation={"add"}
						canAddIntake={canAddIntake}
						updateCanAddIntake={updateCanAddIntake}
					/>
					<PresetToggleButton
						operation={"delete"}
						canAddIntake={!canAddIntake}
						updateCanAddIntake={updateCanAddIntake}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
