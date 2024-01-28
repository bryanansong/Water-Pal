import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Settings = () => {
	return (
		<View className="h-screen bg-sky-200 pt-24">
			<View className="flex flex-col justify-between gap-y-5 px-8 py-4 ">
				<View>
					<TouchableOpacity className="flex-row px-5 py-3 rounded-lg bg-sky-100">
						<View>
							<Text>Picture</Text>
						</View>
						<View className="ml-4">
							<Text>User Name</Text>
							<Text>Text about user</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View className="flex flex-col">
					<Text className="text-xl mb-3">
						Measurement & Goals
					</Text>
					<View className="flex-col px-5 py-3 rounded-lg bg-sky-100">
						<TouchableOpacity className="px-3 py-2 rounded-lg border-b-[1px] border-slate-400/40">
							<Text>Weight</Text>
						</TouchableOpacity>
						<TouchableOpacity className="px-3 py-2 rounded-lg ">
							<Text>Height</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Settings;
