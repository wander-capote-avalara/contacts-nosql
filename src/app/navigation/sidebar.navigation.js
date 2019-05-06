import { Platform } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { SideBar } from '../sidebar/sidebar.container';
import { Navigation } from './navigation';

export const app = {
	stacks: {
		screen: Navigation,
	}
};

export function sidebarSettings() {

	return {
		initialRouteName: 'stacks',
		contentComponent: SideBar,
		navigationOptions: Platform.select({
			ios: {
				drawerLockMode: 'locked-closed'
			},
			android: null
		})
	};
}

export const MainDrawerStack = DrawerNavigator(app, sidebarSettings());