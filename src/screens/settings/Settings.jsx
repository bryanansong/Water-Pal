import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { settings } from "../../constants";
import SettingsCard from "../../components/SettingsCard";
import SignOutCard from "../../components/SignOutCard";
import {
	db,
	firebaseAuth,
} from "../../../configurations/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

// TODO: Add intake presets editing
// TODO: Add history of user's intake

const Settings = () => {
	const [userInformation, setUserInformation] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [unit, setUnit] = useState("");
	const [dailyGoal, setDailyGoal] = useState(0);
	// const [history, setHistory] = useState([]);
	// const [intakePresets, setIntakePresets] = useState([]);
	const auth = firebaseAuth;

	useEffect(() => {
		getUserInformation();
		updatePreferences();
	}, [auth, userInformation, , unit, dailyGoal]);

	const updatePreferences = () => {
		setDailyGoal(userInformation?.goals.daily ?? 0);
		setUnit(userInformation?.goals.unit);
		setFirstName(userInformation?.userInfo.name.first);
		setLastName(userInformation?.userInfo.name.last);
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

	return (
		<ScrollView className="h-screen bg-sky-200 pt-24">
			<View className="flex flex-col justify-between px-8 py-4 ">
				<View>
					<TouchableOpacity className="flex-row px-5 py-5 rounded-xl bg-sky-100">
						<View className="w-20 h-20">
							<Image
								source={require("../../../assets/Images/profile.jpeg")}
								placeholder={blurhash}
								className="rounded-full w-full h-full"
							/>
						</View>
						<View className="ml-5">
							<Text className="text-xl">
								{firstName} {lastName}
							</Text>
							<Text>
								Thank you for using Water Pal{"\n"}
								Please send feedback to
								bryanansong2003@gmail.com
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View className="flex flex-col">
					{settings.map((setting) => (
						<View
							key={setting.sectionName}
							className="mt-5"
						>
							<Text className="text-xl mb-3">
								{setting.sectionName}
							</Text>
							<View className="flex-col px-5 py-3 rounded-xl bg-sky-100">
								{setting.sectionOptions.map(
									(option, index, array) => (
										<TouchableOpacity
											key={option.label}
											className={`px-3 py-2 rounded-lg ${
												index ===
												array.length - 1
													? ""
													: "border-b-[1px] border-slate-400/40"
											}`}
										>
											<View className="flex-row justify-between">
												<Text className="">
													{option.label}
												</Text>
												<Text className="text-blue-800">
													{option.value
														? option.value
														: "Not set"}
												</Text>
											</View>
										</TouchableOpacity>
									)
								)}
							</View>
						</View>
					))}
				</View>
			</View>
			<SignOutCard />
		</ScrollView>
	);
};

export default Settings;
