import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export class FormRender extends Component {

	render() {

		if (Platform.OS === 'ios') {

			return (
				<KeyboardAwareScrollView>
					{this.props.children}
				</KeyboardAwareScrollView>
			);
		}

		return (
			<KeyboardAvoidingView>
				{this.props.children}
			</KeyboardAvoidingView>
		);
	}
}