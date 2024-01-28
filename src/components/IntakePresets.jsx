import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { intakePresets } from "../constants";

const IntakePresets = ({
	canAddIntake,
	incrementIntake,
	decrementIntake,
}) => {
	return (
		<View className="flex flex-row mx-5 mt-10">
			{intakePresets.map((preset) => (
				<TouchableOpacity
					key={preset.label}
					className=" flex flex-row rounded-md p-3 m-2 bg-sky-600 shadow-md  flex-wrap"
					onPress={() => {
						canAddIntake
							? incrementIntake(preset.volume)
							: decrementIntake(preset.volume);
					}}
				>
					<Text className="text-white font-bold">
						{preset.label}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default IntakePresets;
