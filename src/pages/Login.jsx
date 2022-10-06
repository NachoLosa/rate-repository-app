import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import { loginValidationSchema } from "../validationSchema/login";
import StyledText from "../components/StyledText";

const initialValues = {
	email: "",
	password: "",
};
const styles = StyleSheet.create({
	form: {
		margin: 12,
	},
	error: {
		color: "red",
		fontSize: 12,
		marginBottom: 20,
		marginTop: -5,
	},
});

const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name);

	return (
		<>
			<StyledTextInput
				value={field.value}
				onChangeText={(value) => helpers.setValue(value)}
				error={meta.error}
				{...props}
			/>
			{meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
		</>
	);
};

export default function LoginPage() {
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={loginValidationSchema}
			>
				{({ handleChange, handleSubmit, values }) => {
					return (
						<View style={styles.form}>
							<FormikInputValue name="email" placeholder="E-mail" />
							<FormikInputValue
								name="password"
								placeholder="password"
								secureTextEntry
							/>
							<Button onPress={handleSubmit} title="Log In" />
						</View>
					);
				}}
			</Formik>
		</>
	);
}
