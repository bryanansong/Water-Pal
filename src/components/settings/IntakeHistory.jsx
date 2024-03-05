import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Table, Row } from "react-native-reanimated-table";

const IntakeHistory = ({ setIntakeHistoryModalOpen, userHistory }) => {
	const [tableHead] = useState(["Date", "Goal", "Progress", "Percentage"]);
	const [loading, setLoading] = useState(true);
	const [intakeHistory, setIntakeHistory] = useState([]);

	const convertDataToArray = (inputData) => {
		const result = Object.entries(inputData)
			.map(([date, { goal, progress }]) => {
				const percentage = goal > 0 ? (progress / goal) * 100 : 0;
				return [
					date,
					goal.toLocaleString(),
					progress.toLocaleString(),
					`${Math.round(percentage)}%`,
				];
			})
			.sort((a, b) => new Date(b[0]) - new Date(a[0]));

		return result;
	};

	useEffect(() => {
		const formattedResult = convertDataToArray(userHistory);
		setIntakeHistory(formattedResult);
		setLoading(false);
	}, [userHistory]);

	return (
		<View className="bg-white w-full p-4 rounded-xl">
			<View className="flex-row justify-between">
				<Text className="text-xl font-semibold">Your history</Text>
				<Button
					title="X"
					onPress={() => {
						setIntakeHistoryModalOpen(false);
					}}
				></Button>
			</View>
			{loading ? (
				<>
					<ActivityIndicator
						size="large"
						color="#0000ff"
					/>
				</>
			) : (
				<View className="max-w-md">
					<ScrollView>
						<Table
							borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}
						>
							<Row
								data={tableHead}
								className="text-gray-700 uppercase dark:text-gray-400"
							/>
						</Table>
						<Table className="">
							{intakeHistory.map((intake) => {
								return (
									<Row
										key={intake[0]}
										data={[
											intake[0],
											intake[1],
											intake[2],
											intake[3],
										]}
										className="text-gray-700 uppercase dark:text-gray-400"
									/>
								);
							})}
						</Table>
					</ScrollView>
				</View>
			)}
		</View>
	);
};

export default IntakeHistory;
