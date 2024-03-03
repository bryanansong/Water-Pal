import React from "react";
import { Button, Text, View } from "react-native";

const Unit = ({ setUnitsModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<Text>Change your Unit</Text>
			<Button
				title="Close"
				onPress={() => {
					setUnitsModalOpen(false);
				}}
			></Button>
		</View>
	);
};

export default Unit;
