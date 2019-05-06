import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	formContainer: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 17,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		backgroundColor: '#fff'
	},
	labelContainer: {
		flexDirection: 'row',
		paddingTop: 10
	},
	required: {
		color: 'red'
	},
	leftText: {
		textAlign: 'left'
	},
	rightText: {
		textAlign: 'right'
	},
	text: {
		fontSize: 14
	},
	label: {
		color: '#666'
	},
	fieldContainer: {
		paddingTop: -35,
		marginTop: -25
	},
	containerField: {
		borderColor: '#999',
		borderBottomWidth: 2,
		paddingTop: 27,
		paddingBottom: 5,
		minHeight: 60
	},
	integerInput: {
		fontSize: 18,
		color: '#1E1E1F',
		textAlign: 'right'
	},
	buttonContainer: {
		marginTop: 30,
		borderRadius: 3,
		marginBottom: 15,
	},
	buttonStyle: {
		borderRadius: 5,
		backgroundColor: '#1AB494',
	},
	deleteButtonContainer: {
		marginBottom: 15,
		borderRadius: 3
	},
});