import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { AppNavigation } from './app.navigation';
import { setContainer } from './navigation.service';

export class AppNavigationComponent extends React.Component {

	navigation: ReactNavigation.NavigationScreenProp;

	componentDidMount() {

		BackHandler.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
	}

	componentWillUnmount() {

		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress.bind(this));
	}

	static canExitApp(nav) {

		const mainDrawer = nav.routes.find(j => j.routeName === 'mainDrawer');

		if (mainDrawer) {

			const drawerStack = mainDrawer.routes[mainDrawer.index];

			if (drawerStack.routeName === 'DrawerClose' && drawerStack.routes[drawerStack.index].routeName === 'contactList') {

				const contactStack = drawerStack.routes[drawerStack.index];

				if (contactStack.routes.length === 1 && contactStack.routes[contactStack.index].routeName === 'contactList') {

					return true;
				}
			}
		}

		if (nav.routes.length === 1 && nav.routes.find(j => j.routeName === 'login')) {

			return true;
		}

		return false;
	}

	onBackPress() {

		const { dispatch, nav } = this.props;

		if (AppNavigationComponent.canExitApp(nav)) {

			return false;
		}

		dispatch(ReactNavigation.NavigationActions.back());

		return true;
	}

	render() {

		const { dispatch, nav } = this.props;

		const navigation = ReactNavigation.addNavigationHelpers({
			dispatch,
			state: nav
		});

		this.navigation = navigation;

		return (<AppNavigation navigation={navigation} ref={setContainer} />);
	}
}

const mapStateToProps = state => ({ nav: state.nav });

export const ReduxAppNavigation = connect(mapStateToProps)(AppNavigationComponent);