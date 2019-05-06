import 'react-native';
import React from 'react';
import { ErrorBlock } from '../error-block.component';

import renderer from 'react-test-renderer';
import { Text } from 'react-native-elements';

describe('ErrorBlock test', () => {

	it('renders correctly with specific icon', () => {

		const tree = renderer.create(<ErrorBlock icon={'android'}><Text>Teste</Text></ErrorBlock>).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders correctly without specific icon', () => {

		const tree = renderer.create(<ErrorBlock><Text>Teste</Text></ErrorBlock>).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders correctly with button', () => {

		const tree = renderer.create(<ErrorBlock noButton={true}><Text>Teste</Text></ErrorBlock>).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('renders correctly without button', () => {

		const tree = renderer.create(<ErrorBlock noButton={false}><Text>Teste</Text></ErrorBlock>).toJSON();

		expect(tree).toMatchSnapshot();
	});
});