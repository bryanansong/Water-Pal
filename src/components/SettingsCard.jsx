import { View, Text } from "react-native";
import React from "react";

const SettingsCard = ({ label, statistic }) => {
	return (
		<TouchableOpacity className="px-3 py-2 rounded-lg border-b-[1px] border-slate-400/40">
			<View className="flex flex-row justify-between">
				<Text>{label ? label : "Placeholder Text"}</Text>
				<Text>
					{statistic ? statistic : "Stat Placeholder"}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SettingsCard;
