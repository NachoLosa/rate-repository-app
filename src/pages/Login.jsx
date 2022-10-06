import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
	email: "",
	password: "",
};
const styles = StyleSheet.create({
	form: {
		margin: 12,
	},
});

export default function LoginPage() {
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
			>
				{({ handleChange, handleSubmit, values }) => {
					return (
						<View>
							<StyledTextInput
								placeholder="E-mail"
								value={values.email}
								onChangeText={handleChange("email")}
							/>
							<StyledTextInput
								placeholder="password"
								value={values.password}
								onChangeText={handleChange("password")}
							/>
							<Button onPress={handleSubmit} title="Log In" />
						</View>
					);
				}}
			</Formik>
		</>
	);
}
