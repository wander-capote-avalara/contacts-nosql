import React from 'react';
import { shallow } from 'enzyme';
import { ContactsApp } from './ContactsApp';

jest.mock('react-native-dropdownalert');

describe('ContactsApp test', () => {

	it('should render correctly', () => {

		expect(shallow(<ContactsApp />)).toMatchSnapshot();
	});
});