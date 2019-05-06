import { create, update, read, showDetail } from '../contact.service';
import { DropDownHolder } from '../../../common/drop-down-holder.service';
import {
	CONTACT_FORM_ERROR,
	CONTACT_FORM_SUCCESS,
	CONTACT_LOADING,
	CONTACT_REGISTER_COMPLETED,
	CONTACT_REGISTER_ERROR,
	CONTACT_FORM_SUCCESS_WITH_CONTACT
} from './form.types';

export function getOne(id) {

	return async function factory(dispatch) {

		dispatch({
			type: CONTACT_LOADING
		});

		try {

			if (id) {

				const contact = await read(id);

				dispatch({
					type: CONTACT_FORM_SUCCESS_WITH_CONTACT,
					contact
				});
			} else {

				dispatch({
					type: CONTACT_FORM_SUCCESS
				});
			}
		} catch (err) {

			const message = `Não foi possível encontrar o contato! ${err}`;

			DropDownHolder.get().alertWithType('error', 'Erro', message);

			dispatch({
				type: CONTACT_FORM_ERROR,
				error: message
			});
		}
	};
}

export function upsert({ payload }) {

	return async function factory(dispatch) {

		dispatch({
			type: CONTACT_LOADING
		});

		try {

			const contact = payload.id ? await update(payload, payload.id) : await create(payload);

			if (contact && contact.id) {

				dispatch({
					type: CONTACT_REGISTER_COMPLETED,
					contact
				});

				DropDownHolder.get().alertWithType('success', 'OK', `Usuário ${payload.id ? 'editado' : 'criado'} com sucesso!`);

				showDetail(contact.id);
			} else {

				const message = 'Erro ao criar contato';

				DropDownHolder.get().alertWithType('error', 'Erro', message);

				dispatch({
					type: CONTACT_REGISTER_ERROR,
					error: message
				});
			}
		} catch (err) {

			const message = `Não foi possível registrar o contato! ${err}`;

			DropDownHolder.get().alertWithType('error', 'Erro', message);

			dispatch({
				type: CONTACT_REGISTER_ERROR,
				error: message
			});
		}
	};
}