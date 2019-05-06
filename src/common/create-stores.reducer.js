import ReduxThunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { AppNavigation } from '../app/navigation/app.navigation';
import { ContactListReducer } from '../app/contact/list/list.reducer';
import { ContactFormReducer } from '../app/contact/form/form.reducer';
import { ContactDetailReducer } from '../app/contact/detail/detail.reducer';

export function NavReducer(state, action) {

	return AppNavigation.router.getStateForAction(action, state);
}

export function getObjectReducers() {

	return {
		nav: NavReducer,
		contactList: ContactListReducer,
		contactForm: ContactFormReducer,
		contactDetail: ContactDetailReducer
	};
}

export function createStores() {

	const rootReducer = combineReducers(getObjectReducers());

	return createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
}