import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Platform } from 'react-native';
import { ErrorBlock } from '../../error-block/error-block.component';
import { ContactListItem } from './list-item.component';

export class ContactListComponent extends React.Component {

	page = 1;

	componentDidMount() {

		this.getList();
	}

	getList() {

		this.props.getList();
	}

	showDetails(id) {

		const { navigation } = this.props;

		navigation.navigate('contactDetail', { id });
	}

	handleEnd() {

		if (this.props.loadingMore || this.props.items.length >= this.props.count) {

			return;
		}

		this.page = this.page + 1;
		this.getList();
	}

	renderRow({ item }) {

		return (
			<ContactListItem item={item} showDetails={this.showDetails.bind(this)} />
		);
	}

	renderSpinner() {

		if (this.props.loadingMore) {

			return <ActivityIndicator size="large" />;
		}
	}

	render() {

		if (!this.props.items || !this.props.items.length) {

			return (
				<View style={{ flex: 1 }}>
					<ErrorBlock noButton icon="done-all">Nenhum contato até o momento</ErrorBlock>
				</View>
			);
		}

		if (this.props.error) {

			return <ErrorBlock onPress={this.getList.bind(this)}>{this.props.error}</ErrorBlock>;
		}

		if (this.props.loading) {

			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<View style={{ flex: 1 }}>

				<Text style={styles.subheadingStyle}>{this.props.count} {(this.props.count > 1 ? 'contatos' : 'contato')}</Text>
				<FlatList
					data={this.props.items}
					renderItem={this.renderRow.bind(this)}
					keyExtractor={(item, index) => index}
					onEndReached={this.handleEnd.bind(this)}
					onEndReachedThreshold={0.2}
				/>

				{this.renderSpinner()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	subheadingStyle: {
		fontSize: 14,
		color: '#999999',
		padding: 10,
		textAlign: Platform.select({ ios: 'center', android: 'left' })
	},
	iconStyle: {
		fontSize: 30,
		marginRight: 15
	},
	iconStyleCreditCard: {
		color: '#5f6062'
	},
	iconStyleCar: {
		color: '#1Ab494'
	},
	actionButtonIcon: {
		fontSize: 25,
		height: 27,
		color: 'white',
	}
});