import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { useState } from "react";
import {
	useFonts,
	SpaceMono_400Regular,
	SpaceMono_700Bold,
} from "@expo-google-fonts/space-mono";
import Home from "./src/screens/home/home";
import Settings from "./src/screens/settings/Settings";

export default function App() {
	return (
		<SafeAreaView>
			{/* <Home /> */}
			<Settings />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
