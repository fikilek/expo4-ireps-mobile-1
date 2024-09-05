import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ExpoBarcodeScanner from "./ExpoBarcodeScanner.js";

const ModalIreps = (props) => {
	const { modalVisible, setModalVisible, meterNo, setMeterNo, asts } = props;
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.header}>
							<Text style={styles.headerText}>Barcode Scanner</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Hide Modal</Text>
							</Pressable>
						</View>
						<ExpoBarcodeScanner
							setModalVisible={setModalVisible}
							meterNo={meterNo}
              setMeterNo={setMeterNo}
              asts={asts}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		marginTop: 10,
	},
	modalView: {
		marginTop: 80,
		backgroundColor: "white",
		// borderRadius: 20,
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		borderRadius: 8,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		flex: 1,
	},
	button: {
		// borderRadius: 20,
		padding: 5,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 15,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#bbb",
		borderWidth: 2,
		borderStyle: "dashed",
		width: "100%",
	},
	headerText: {
		fontSize: 15,
		padding: 10,
	},
});

export default ModalIreps;
