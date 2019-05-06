import { StyleSheet } from 'react-native';

export const main = StyleSheet.create({
	container: {
		backgroundColor: '#f2f2f2',
	},
	listStyle: {
		backgroundColor: 'rgba(0,0,0,0)',
		borderTopWidth: 0,
		borderBottomWidth: 0,
		elevation: 0,
		borderColor: 'rgba(0,0,0,0)'
	},
	listItemContainerStyle: {
		borderTopWidth: 0,
		borderColor: '#999',
		borderBottomWidth: 1,
		marginBottom: 5,
		backgroundColor: '#fff'
	},
	titleStyle: {
		fontSize: 18,
		color: '#3F4144',
		marginLeft: 8
	},
	header: {
		flex: 1,
		padding: 20,
		flexDirection: 'row',
		backgroundColor: '#3F4144'
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#f2f2f2'
	}
});