import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, ScrollView, Text, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { FormRender } from '../../ui/form.render.component';
import { styles } from './detail.container.style';
import { getOne, remove } from './detail.actions';

export class ContactDetailComponent extends React.Component {

	onEditButtonPress() {

		const { navigation, contact } = this.props;

		return navigation.navigate('contactForm', {
			id: contact.id,
			title: `Editar contato ${contact.name}`
		});
	}

	onDeleteButtonPress() {

		return Alert.alert(
			null,
			`Excluir contato ${this.props.contact.name}?`,
			[{
				text: 'Não',
				style: 'cancel'
			}, {
				text: 'Sim, excluir',
				onPress: () => this.props.remove(this.props.contact.id)
			}],
			{
				cancelable: true
			}
		);
	}

	async componentDidMount() {

		await this.props.getOne(this.props.navigation.state.params.id);
	}

	render() {

		if (this.props.loading) {

			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		if (!this.props.contact) {

			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text> Contato não encontrado</Text>
				</View>
			);
		}

		return (
			<FormRender>
				<ScrollView keyboardShouldPersistTaps="handled">
					<View style={styles.formContainer}>
						<FormLabel>Nome</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.name} />

						<FormLabel>Sobrenome</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.last_name} />

						<FormLabel>Telefone</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.phone} />

						<FormLabel>Rua</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.street} />

						<FormLabel>Bairro</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.neighborhood} />

						<FormLabel>Cidade</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.city} />

						<FormLabel>UF</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.district} />

						<FormLabel>Número</FormLabel>
						<FormInput
							disabled={true}
							value={`${this.props.contact.number}`} />

						<FormLabel>E-mail</FormLabel>
						<FormInput
							disabled={true}
							value={this.props.contact.mail} />

						<View style={styles.editButtonContainer}>
							<Button
								backgroundColor={'#6b70ce'}
								borderRadius={5}
								title={'EDITAR'}
								loading={this.props.loading}
								onPress={this.onEditButtonPress.bind(this)}
							/>
						</View>

						<View style={styles.deleteButtonContainer}>
							<Button
								backgroundColor={'#db2323'}
								borderRadius={5}
								title={'APAGAR'}
								loading={this.props.loading}
								onPress={this.onDeleteButtonPress.bind(this)}
							/>
						</View>
					</View>

				</ScrollView>
			</FormRender>
		);
	}
}

function mapStateToProps(state) {

	const { loading, error, contact } = state.contactDetail;

	return { loading, error, contact };
}

export const ContactDetail = connect(mapStateToProps, { getOne, remove })(ContactDetailComponent);