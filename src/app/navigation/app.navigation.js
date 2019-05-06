
import { StackNavigator } from 'react-navigation';
import { MainDrawerStack } from './sidebar.navigation';

export const mainNavigation = {
	mainDrawer: {
		screen: MainDrawerStack
	}
};

export const mainSettings = {
	headerMode: 'none',
	title: 'Main',
	initialRouteName: 'mainDrawer'
};

export const AppNavigation = StackNavigator(mainNavigation, mainSettings);