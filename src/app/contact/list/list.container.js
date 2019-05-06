import { connect } from 'react-redux';
import { read } from '../contact.actions';
import { ContactListComponent } from './list.component';

const mapStateToProps = state => {

	const {
		items,
		count,
		error,
		loading,
		loadingMore,
	} = state.contactList;

	return {
		items,
		count,
		error,
		loading,
		loadingMore
	};
};

const mapDispatchToProps = dispatch => {

	return {
		getList: data => dispatch(read(data)),
	};
};

export const ContactList = connect(mapStateToProps, mapDispatchToProps)(ContactListComponent);