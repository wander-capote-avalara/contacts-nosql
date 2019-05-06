import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import environment from 'react-native-config';
import { StyleSheet, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { createStores } from './common/create-stores.reducer';
import { DropDownHolder } from './common/drop-down-holder.service';
import { ReduxAppNavigation } from './app/navigation/app.navigation.container';

axios.defaults.baseURL = environment.API_URL;

const store = createStores();

export class ContactsApp extends React.Component {

	render() {

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<ReduxAppNavigation />
					<DropdownAlert ref={DropDownHolder.set} />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});