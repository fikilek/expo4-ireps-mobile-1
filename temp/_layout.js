import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const _layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "iREPS",
					headerRight: (props) => {
						return (
							<View style={styles.authBtns}>
								<Button title="Signup" onPress={() => router.push("/signup")} />
								<Button title="Signin" onPress={() => router.push("/signin")} />
							</View>
						);
					},
				}}
			/>
			<Stack.Screen name="[missing]" options={{ title: "404" }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="signup"
				options={{ title: "Signup Form", presentation: "modal" }}
			/>
			<Stack.Screen
				name="signin"
				options={{ title: "Signin Form", presentation: "modal" }}
			/>
		</Stack>
	);
};

export default _layout;

const styles = StyleSheet.create({
  authBtns: {
    flexDirection: 'row',
    gap: 10,
    margin: 10,
  }
});
