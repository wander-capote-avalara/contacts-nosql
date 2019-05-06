import * as Service from './contact.service';
import {
	CONTACT_LIST_FAILED,
	CONTACT_LIST_LOADING,
	CONTACT_LIST_SUCCESS
} from './contact.types';

export function read() {

	return dispatch => {

		dispatch({
			type: CONTACT_LIST_LOADING
		});

		return Service.read().then(response => {

			dispatch({
				type: CONTACT_LIST_SUCCESS,
				payload: {
					rows: response,
					count: response.length
				}
			});
		}).catch(err => {

			dispatch({
				type: CONTACT_LIST_FAILED,
				payload: `Não foi possível carregar os contatos! ${err}`
			});
		});
	};
}