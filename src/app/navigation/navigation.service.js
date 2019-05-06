import { NavigationParams, NavigationRoute, NavigationActions } from 'react-navigation';

let _container; // eslint-disable-line

export function setContainer(container: Object) {

	_container = container;
}

export function reset(routeName: string, params?: NavigationParams) {

	_container.dispatch(NavigationActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({
				type: 'Navigation/NAVIGATE',
				routeName,
				params
			})
		]
	}));
}

export function navigate(routeName: string, params?: NavigationParams) {

	_container.dispatch(NavigationActions.navigate({
		type: 'Navigation/NAVIGATE',
		routeName,
		params
	}));
}

export function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {

	_container.dispatch(actions.reduceRight(
		(prevAction, action): any => NavigationActions.navigate({
			type: 'Navigation/NAVIGATE',
			routeName: action.routeName,
			params: action.params,
			action: prevAction,
		}),
		undefined
	));
}

export function navigateReset(actions, index = 1) {

	_container.props.navigation.dispatch(NavigationActions.reset({
		index,
		actions: actions.map(action => {

			return NavigationActions.navigate(action);
		})
	}));
}

export function navigateTo(action) {

	const navigateAction = NavigationActions.navigate({
		routeName: action.routeName,
		params: action.params,
		action: NavigationActions.navigate(action)
	});

	_container.props.navigation.dispatch(navigateAction);
}

export function getCurrentRoute(): NavigationRoute | null {

	if (!_container || !_container.state.nav) {

		return null;
	}

	return _container.state.nav.routes[_container.state.nav.index] || null;
}