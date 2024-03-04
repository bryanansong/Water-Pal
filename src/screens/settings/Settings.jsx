import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import SignOutCard from "../../components/SignOutCard";
import { db, firebaseAuth } from "../../../configurations/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import SettingsModal from "../../components/SettingsModal";
import {
	DailyGoal,
	IntakeHistory,
	Reminder,
	Unit,
	NotificationPreference,
	Feedback,
} from "../../components/settings";
import { SafeAreaView } from "react-native-safe-area-context";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

// TODO: Add intake presets editing
const Settings = ({ navigation }) => {
	const [userInformation, setUserInformation] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [unit, setUnit] = useState("");
	const [dailyGoal, setDailyGoal] = useState(0);
	const auth = firebaseAuth;
	// const [intakePresets, setIntakePresets] = useState([]);

	// Settings Modals
	const [unitsModalOpen, setUnitsModalOpen] = useState(false);
	const [dailyGoalModalOpen, setDailyGoalModalOpen] = useState(false);
	const [remindersModalOpen, setRemindersModalOpen] = useState(false);
	const [notificationPreferenceModalOpen, setNotificationPreferenceModalOpen] =
		useState(false);
	const [intakeHistoryModalOpen, setIntakeHistoryModalOpen] = useState(false);
	const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

	// Settings Sections
	const settings = [
		{
			sectionName: "Measurement & Goals",
			sectionOptions: [
				{
					label: "Units of Measurement",
					value: unit,
					action: () => setUnitsModalOpen(true),
				},
				{
					label: "Daily Goal",
					value: `${dailyGoal.toLocaleString("en-US")} ml`,
					action: () => setDailyGoalModalOpen(true),
				},
			],
		},
		{
			sectionName: "Reminders",
			sectionOptions: [
				{
					label: "Custom Reminders",
					action: () => setRemindersModalOpen(true),
				},
				{
					label: "Notification Preferences",
					action: () => setNotificationPreferenceModalOpen(true),
				},
			],
		},
		{
			sectionName: "Progress & Tracking",
			sectionOptions: [
				{
					label: "Water Intake History",
					action: () => setIntakeHistoryModalOpen(true),
				},
				{ label: "Achievement Badges" },
			],
		},
		{
			sectionName: "Submit Feedback",
			sectionOptions: [
				{ label: "Send Feedback", action: () => setFeedbackModalOpen(true) },
			],
		},
		// {
		// 	sectionName: "Intake Presets",
		// 	sectionOptions: intakePresets,
		// },
	];

	useEffect(() => {
		getUserInformation();
		updatePreferences();
	}, [userInformation]);

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
		<SafeAreaView className="flex-1 bg-sky-200 pt-10">
			<ScrollView
				scrollEnabled={true}
				className="bg-sky-200"
			>
				<View className="flex flex-col justify-between px-8 py-4 ">
					<TouchableOpacity
						className="flex-row px-5 py-5 rounded-2xl bg-sky-100"
						// TODO: Change the navigation to the profile page when it is ready
						onPress={() => navigation.navigate("Profile_placeholder")}
					>
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
								Please send feedback to bryanansong2003@gmail.com
							</Text>
						</View>
					</TouchableOpacity>

					<View className="flex flex-col">
						{settings.map((setting) => (
							<View
								key={setting.sectionName}
								className="mt-5"
							>
								<Text className="text-xl mb-3">
									{setting.sectionName}
								</Text>
								<View className="flex-col px-5 py-3 rounded-2xl bg-sky-100">
									{setting.sectionOptions.map(
										(option, index, array) => (
											<TouchableOpacity
												key={option.label}
												className={`px-3 py-2 rounded-lg ${
													index === array.length - 1
														? ""
														: "border-b-[1px] border-slate-400/40"
												}`}
												onPress={
													option.action
														? option.action
														: () => {}
												}
											>
												<View className="flex-row justify-between">
													<Text className="">
														{option.label}
													</Text>
													<Text className="text-blue-800">
														{option.value
															? option.value
															: "Coming Soon"}
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

				<>
					<SettingsModal
						id="Unit of Measurement"
						isOpen={unitsModalOpen}
					>
						<Unit setUnitsModalOpen={setUnitsModalOpen} />
					</SettingsModal>
					<SettingsModal
						id="Daily Goal"
						isOpen={dailyGoalModalOpen}
					>
						<DailyGoal setDailyGoalModalOpen={setDailyGoalModalOpen} />
					</SettingsModal>
					<SettingsModal
						id="Reminder"
						isOpen={remindersModalOpen}
					>
						<Reminder setRemindersModalOpen={setRemindersModalOpen} />
					</SettingsModal>
					<SettingsModal
						id="Notification Preferences"
						isOpen={notificationPreferenceModalOpen}
					>
						<NotificationPreference
							setNotificationPreferenceModalOpen={
								setNotificationPreferenceModalOpen
							}
						/>
					</SettingsModal>
					<SettingsModal
						id="Intake history"
						isOpen={intakeHistoryModalOpen}
					>
						<IntakeHistory
							setIntakeHistoryModalOpen={setIntakeHistoryModalOpen}
						/>
					</SettingsModal>
					<SettingsModal
						id="Feeback & Support"
						isOpen={feedbackModalOpen}
					>
						<Feedback setFeedbackModalOpen={setFeedbackModalOpen} />
					</SettingsModal>
				</>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Settings;
