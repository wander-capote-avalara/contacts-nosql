import {
	CONTACT_LIST_FAILED,
	CONTACT_LIST_LOADING,
	CONTACT_LIST_SUCCESS
} from '../contact.types';

export const INITIAL_STATE = {
	loading: false,
	error: '',
	items: [],
	count: 0
};

export function ContactListReducer(state = INITIAL_STATE, action) {

	switch (action.type) {

		case CONTACT_LIST_LOADING:
			{

				return {
					...state,
					loading: true,
					error: ''
				};
			}

		case CONTACT_LIST_SUCCESS:
			{

				const {
					rows,
					count
				} = action.payload;

				return {
					...state,
					...INITIAL_STATE,
					items: rows,
					count
				};
			}

		case CONTACT_LIST_FAILED:
			{

				return {
					...state,
					...INITIAL_STATE,
					error: action.payload
				};
			}

		default:
			{

				return state;
			}
	}
}