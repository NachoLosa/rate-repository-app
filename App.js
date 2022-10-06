import React from "react";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main.jsx";
import { StatusBar } from "expo-status-bar";

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NativeRouter>
				<Main />
			</NativeRouter>
		</>
	);
}
