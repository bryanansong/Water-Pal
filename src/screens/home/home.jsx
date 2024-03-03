import { View } from "react-native";
import React, { useEffect, useState } from "react";
import RingProgress from "../../components/RingProgress";
import Stats from "../../components/Stats";
import IntakePresets from "../../components/IntakePresets";
import Nav from "../../components/Nav";
import { SafeAreaView } from "react-native-safe-area-context";
import PresetToggleButton from "../../components/PresetToggleButton";
import { db, firebaseAuth } from "../../../configurations/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Home = ({ navigation }) => {
	const [currentIntake, setCurrentIntake] = useState(0);
	const [canAddIntake, setCanAddIntake] = useState(true);
	const [userInformation, setUserInformation] = useState(null);
	const [currentGoal, setCurrentGoal] = useState(0);
	const auth = firebaseAuth;

	useEffect(() => {
		getUserInformation();
		updateIntakes();
	}, [currentIntake, userInformation, currentGoal, auth, canAddIntake]);

	const updateIntakes = () => {
		setCurrentGoal(userInformation?.goals.daily ?? 0);
	};

	const getUserInformation = async () => {
		try {
			const receivedInformation = await getDoc(
				doc(db, "users", auth.currentUser.uid)
			);

			setUserInformation(receivedInformation.data());
		} catch (e) {
			console.error(e);
		}
	};

	const incrementIntake = (incrementValue) => {
		setCurrentIntake(
			currentIntake + incrementValue > currentGoal
				? currentGoal
				: currentIntake + incrementValue
		);
	};

	const decrementIntake = (decrementValue) => {
		setCurrentIntake(
			currentIntake - decrementValue < 0 ? 0 : currentIntake - decrementValue
		);
	};

	const updateCanAddIntake = () => setCanAddIntake(!canAddIntake);

	return (
		<SafeAreaView className="flex flex-col h-screen bg-sky-200 pt-5">
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
					progress={currentIntake / currentGoal}
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
