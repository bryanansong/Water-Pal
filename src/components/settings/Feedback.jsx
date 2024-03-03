import React from "react";
import { Button, Text, View } from "react-native";

const Feedback = ({ setFeedbackModalOpen }) => {
	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<Text>Send Feedback/Inquiries</Text>
			<Button
				title="Close"
				onPress={() => {
					setFeedbackModalOpen(false);
				}}
			></Button>
		</View>
	);
};

export default Feedback;
