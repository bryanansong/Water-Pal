import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const margin = "m-2";
const PresetToggleButton = ({
	canAddIntake,
	operation,
	updateCanAddIntake,
}) => {
	return (
		<TouchableOpacity
			className={`border-4 rounded-xl py-3 px-6 ${
				operation == "add"
					? "border-green-400 bg-green-400"
					: "border-red-400 bg-red-400"
			} ${canAddIntake ? "bg-transparent" : ""} `}
			onPress={() => updateCanAddIntake()}
		>
			<Text>
				{operation == "add" ? "Add Log" : "Delete Log"}
			</Text>
		</TouchableOpacity>
	);
};

export default PresetToggleButton;
