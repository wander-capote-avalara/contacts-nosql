import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export class ErrorBlock extends React.Component {

	renderButton() {

		const { noButton, onPress } = this.props;

		if (noButton) {

			return;
		}

		return (
			<Button
					raised
					onPress={onPress}
					icon={{ name: 'refresh' }}
					buttonStyle={styles.buttonStyle}
					backgroundColor="#1Ab494"
					title="TENTAR NOVAMENTE" />
		);
	}

	render() {

		const { children, icon } = this.props;

		return (
			<View style={styles.containerStyle}>
				<Icon name={icon || 'error-outline'} iconStyle={styles.iconStyle} />
				<Text style={styles.textStyle}>{children}</Text>
				{this.renderButton()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	iconStyle: {
		fontSize: 60,
		color: '#888',
		marginBottom: 20
	},
	textStyle: {
		color: '#888',
		fontSize: 16,
		marginBottom: 25,
		textAlign: 'center'
	}
});