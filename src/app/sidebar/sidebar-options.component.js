import * as React from 'react';
import { List, ListItem, Icon } from 'react-native-elements';
import { main } from './sidebar.style';

export class SidebarOptions extends React.Component {

	render() {

		return (
			<List containerStyle={main.listStyle}>
				<ListItem
					underlayColor="#747679"
					containerStyle={main.listItemContainerStyle}
					hideChevron
					titleStyle={main.titleStyle}
					leftIcon={<Icon name="add" size={30} />}
					title="Adicionar Contato"
					onPress={() => this.props.goTo('contactForm')}
				/>
				<ListItem
					underlayColor="#747679"
					containerStyle={main.listItemContainerStyle}
					hideChevron
					titleStyle={main.titleStyle}
					leftIcon={<Icon name="list" size={30} />}
					title="Lista de Contatos"
					onPress={() => this.props.goTo('contactList')}
				/>
			</List>
		);
	}
}