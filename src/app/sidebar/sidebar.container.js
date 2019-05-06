import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import { main } from './sidebar.style';
import { SidebarOptions } from './sidebar-options.component';

export class SideBarComponent extends React.Component {

	goTo(routeName) {

		this.props.navigation.dispatch(NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName })
			]
		}));
	}

	render() {

		return (
			<ScrollView style={main.container}>
				<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
					<View style={main.header}>
						<Text style={main.headerText}>
							Contatos
						</Text>
					</View>
					<SidebarOptions goTo={this.goTo.bind(this)} />
				</SafeAreaView>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {

	return state;
};

export const SideBar = connect(mapStateToProps)(SideBarComponent);