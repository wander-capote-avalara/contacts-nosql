import {
	CONTACT_FORM_LOADING,
	CONTACT_FORM_SUCCESS,
	CONTACT_FORM_SUCCESS_WITH_CONTACT,
	CONTACT_FORM_ERROR,
	CONTACT_LOADING,
	CONTACT_REGISTER_COMPLETED,
	CONTACT_REGISTER_ERROR,
	CONTACT_REMOVE_COMPLETED
} from './form.types';

const INITIAL_STATE = {
	error: '',
	loading: false,
	is_editing: false,
	contact: null
};

export function ContactFormReducer(state = INITIAL_STATE, action) {

	switch (action.type) {

		case CONTACT_FORM_LOADING:

			return {
				...state,
				loading: true,
				contact: null
			};

		case CONTACT_FORM_SUCCESS:

			return {
				...state,
				loading: false,
				contact: null
			};

		case CONTACT_FORM_SUCCESS_WITH_CONTACT:

			return {
				...state,
				loading: false,
				contact: action.contact
			};

		case CONTACT_FORM_ERROR:

			return {
				...state,
				loading: false,
				error: action.error
			};

		case CONTACT_LOADING:

			return {
				...state,
				loading: true,
				contact: null
			};

		case CONTACT_REGISTER_COMPLETED:

			return {
				...state,
				loading: false,
				contact: action.contact,
				is_editing: true
			};

		case CONTACT_REGISTER_ERROR:

			return {
				...state,
				loading: false,
				contact: null,
				error: action.error
			};

		case CONTACT_REMOVE_COMPLETED:

			return {
				...state,
				loading: false,
				contact: null
			};

		default:

			return state;
	}
}