import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Redirect, Route, Routes, Switch } from "react-router-native";
import LoginPage from "../pages/Login.jsx";

const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path="/" exact element={<RepositoryList />} />
				<Route path="/signin" exact element={<LoginPage />} />
			</Routes>
		</View>
	);
};

export default Main;
