import {
	CONTACT_DETAIL_ERROR,
	CONTACT_DETAIL_LOADING,
	CONTACT_DETAIL_SUCCESS,
	CONTACT_REMOVE_ERROR,
	CONTACT_REMOVE_SUCCESS
} from './detail.types';

const INITIAL_STATE = {
	error: '',
	loading: false,
	contact: null
};

export function ContactDetailReducer(state = INITIAL_STATE, action) {

	switch (action.type) {

		case CONTACT_DETAIL_LOADING:

			return {
				...state,
				loading: true
			};

		case CONTACT_DETAIL_SUCCESS:

			return {
				...state,
				loading: false,
				contact: action.contact
			};

		case CONTACT_DETAIL_ERROR:

			return {
				...state,
				loading: false,
				error: action.error
			};

		case CONTACT_REMOVE_SUCCESS:

			return {
				...state,
				loading: false,
			};

		case CONTACT_REMOVE_ERROR:

			return {
				...state,
				loading: false,
				error: action.error
			};

		default:

			return state;
	}
}