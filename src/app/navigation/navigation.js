import React from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { ContactList } from '../contact/list/list.container';
import { ContactForm } from '../contact/form/form.container';
import { ContactDetail } from '../contact/detail/detail.container';

// Contact

const contactList = {
	screen: ContactList,
	navigationOptions: ({ navigation }) => ({
		title: 'Contatos',
		headerLeft: (
			<Icon
				underlayColor="rgba(0,0,0,0)"
				iconStyle={{ marginLeft: 20, fontSize: 30, color: '#fff' }}
				onPress={() => navigation.navigate('DrawerOpen')}
				name="menu"
			/>
		),
		headerBackTitle: 'Voltar',
		headerTruncatedBackTitle: 'Voltar',
	})
};

const contactForm = {
	screen: ContactForm,
	navigationOptions: ({ navigation }) => ({
		title: `${navigation.state && navigation.state.params ? navigation.state.params.title : 'Novo contato'}`,
		headerLeft: (
			<Icon
				underlayColor="rgba(0,0,0,0)"
				iconStyle={{ marginLeft: 20, fontSize: 30, color: '#fff' }}
				onPress={() => navigation.navigate('DrawerOpen')}
				name="menu"
			/>
		),
		headerBackTitle: 'Voltar',
		headerTruncatedBackTitle: 'Voltar',
	})
};

const contactDetail = {
	screen: ContactDetail,
	navigationOptions: () => ({
		title: 'Detalhes',
	})
};

// Contact

export const navigation = {
	contactList,
	contactForm,
	contactDetail
};

export const navigationSettings = {
	initialRouteName: 'contactList',
	headerMode: 'screen',
	navigationOptions: () => ({ // {navigation}
		headerStyle: {
			backgroundColor: '#5f6062'
		},
		headerTintColor: '#fff'
	})
};

export const Navigation = StackNavigator(navigation, navigationSettings);