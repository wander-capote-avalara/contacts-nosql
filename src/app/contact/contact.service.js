import axios from 'axios';
import {
	navigateTo,
} from '../navigation/navigation.service';

function getData(res) {

	return res.data;
}

export function showList() {

	navigateTo({
		routeName: 'contactList'
	});
}

export function showDetail(id) {

	navigateTo({
		routeName: 'contactDetail',
		params: {
			id
		}
	});
}

export function create(payload) {

	return axios.post('/contacts', payload).then(getData);
}

export function update(payload, id) {

	return axios.put(`/contacts/${id}`, payload).then(getData);
}

export function read(id) {

	return axios.get(`${id ? `/contacts/${id}` : '/contacts'}`).then(getData);
}

export function del(id) {

	return axios.delete(`/contacts/${id}`).then(getData);
}