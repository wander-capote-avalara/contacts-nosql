import React from 'react';
import { ListItem } from 'react-native-elements';

export class ContactListItem extends React.Component {

	state = {
		url: 'https://image.flaticon.com/icons/png/512/16/16480.png'
	}

	render() {

		return (
			<ListItem
				containerStyle={{ borderBottomColor: '#f1f1f1', backgroundColor: '#fff' }}
				roundAvatar
				title={`${this.props.item.name} ${this.props.item.last_name || ''}`}
				avatar={{ uri: this.state.url }}
				onPress={() => this.props.showDetails(this.props.item.id)}
			/>
		);
	}
}