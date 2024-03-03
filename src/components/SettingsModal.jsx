import { View, Modal, KeyboardAvoidingView, Platform } from "react-native";

const SettingsModal = ({ isOpen, hasInput, children, ...rest }) => {
	return (
		<Modal
			visible={isOpen}
			transparent
			animationType="fade"
			statusBarTranslucent
			{...rest}
		>
			{hasInput ? (
				<KeyboardAvoidingView
					className="items-center justify-center flex-1 px-3 bg-zinc-900/40"
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					{children}
				</KeyboardAvoidingView>
			) : (
				<View className="items-center justify-center flex-1 px-3 bg-zinc-900/60">
					{children}
				</View>
			)}
		</Modal>
	);
};

export default SettingsModal;
