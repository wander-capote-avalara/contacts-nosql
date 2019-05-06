import { read, del, showList } from '../contact.service';
import { DropDownHolder } from '../../../common/drop-down-holder.service';
import {
	CONTACT_DETAIL_ERROR,
	CONTACT_DETAIL_LOADING,
	CONTACT_DETAIL_SUCCESS,
	CONTACT_REMOVE_SUCCESS,
	CONTACT_REMOVE_ERROR
} from './detail.types';

export function remove(id) {

	return async function factory(dispatch) {

		dispatch({
			type: CONTACT_DETAIL_LOADING
		});

		try {

			const ret = await del(id);

			dispatch({
				type: CONTACT_REMOVE_SUCCESS
			});

			DropDownHolder.get().alertWithType('success', 'OK', ret.message);

			showList();
		} catch (err) {

			const message = `Não foi possível remover o contato! ${err}`;

			DropDownHolder.get().alertWithType('error', 'Erro', message);

			dispatch({
				type: CONTACT_REMOVE_ERROR,
				error: message
			});
		}
	};
}

export function getOne(id) {

	return async function factory(dispatch) {

		dispatch({
			type: CONTACT_DETAIL_LOADING
		});

		try {

			const contact = await read(id);

			dispatch({
				type: CONTACT_DETAIL_SUCCESS,
				contact
			});
		} catch (err) {

			const message = `Não foi possível encontrar o contato! ${err}`;

			DropDownHolder.get().alertWithType('error', 'Erro', message);

			dispatch({
				type: CONTACT_DETAIL_ERROR,
				error: message
			});
		}
	};
}