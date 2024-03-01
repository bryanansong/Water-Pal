import { View, Button } from "react-native";
import { firebaseAuth } from "../../configurations/firebase/firebaseConfig";

const SignOutCard = () => {
	return (
		<View>
			<Button
				onPress={() => {
					firebaseAuth.signOut();
				}}
				title="Sign Out"
			/>
		</View>
	);
};

export default SignOutCard;
