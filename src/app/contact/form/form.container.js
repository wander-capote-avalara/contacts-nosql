import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { FormRender } from '../../ui/form.render.component';
import { styles } from './form.container.style';
import { upsert, getOne } from './form.actions';

export class ContactFormComponent extends React.Component {

	state = {
		payload: {
			name: null,
			last_name: null,
			phone: null,
			street: null,
			neighborhood: null,
			city: null,
			district: null,
			number: null,
			mail: null
		},
		is_edit: false
	}

	async onButtonPress() {

		const { payload } = this.state;

		await this.props.upsert({ payload });
	}

	async componentDidMount() {

		if (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.id) {

			await this.props.getOne(this.props.navigation.state.params.id);

			this.setState({ payload: { ...this.props.contact }, is_edit: true });
		}
	}

	render() {

		if (this.props.loading) {

			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<FormRender>
				<ScrollView keyboardShouldPersistTaps="handled">
					<View style={styles.formContainer}>
						<FormLabel>Nome</FormLabel>
						<FormInput onChangeText={name => this.setState({ payload: { ...this.state.payload, name } })} value={this.state.payload.name} />
						<FormValidationMessage>{this.state.payload.name ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Sobrenome</FormLabel>
						<FormInput onChangeText={last_name => this.setState({ payload: { ...this.state.payload, last_name } })} value={this.state.payload.last_name} />
						<FormValidationMessage>{this.state.payload.last_name ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Telefone</FormLabel>
						<FormInput keyboardType={'phone-pad'} onChangeText={phone => this.setState({ payload: { ...this.state.payload, phone } })} value={this.state.payload.phone} />
						<FormValidationMessage>{this.state.payload.phone ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Rua</FormLabel>
						<FormInput onChangeText={street => this.setState({ payload: { ...this.state.payload, street } })} value={this.state.payload.street} />
						<FormValidationMessage>{this.state.payload.street ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Bairro</FormLabel>
						<FormInput onChangeText={neighborhood => this.setState({ payload: { ...this.state.payload, neighborhood } })} value={this.state.payload.neighborhood} />
						<FormValidationMessage>{this.state.payload.neighborhood ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Cidade</FormLabel>
						<FormInput onChangeText={city => this.setState({ payload: { ...this.state.payload, city } })} value={this.state.payload.city} />
						<FormValidationMessage>{this.state.payload.city ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>UF</FormLabel>
						<FormInput
							onChangeText={district => this.setState({ payload: { ...this.state.payload, district } })}
							value={this.state.payload.district} />
						<FormValidationMessage>{this.state.payload.district ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>Número</FormLabel>
						<FormInput
							keyboardType={'numeric'}
							onChangeText={number => this.setState({ payload: { ...this.state.payload, number } })}
							value={this.state.is_edit ? `${this.state.payload.number}` : this.state.payload.number} />
						<FormValidationMessage>{this.state.payload.number ? '' : 'Campo necessário'}</FormValidationMessage>

						<FormLabel>E-mail</FormLabel>
						<FormInput
							keyboardType={'email-address'}
							onChangeText={mail => this.setState({ payload: { ...this.state.payload, mail } })}
							value={this.state.payload.mail} />
						<FormValidationMessage>{this.state.payload.mail ? '' : 'Campo necessário'}</FormValidationMessage>

						<View style={styles.buttonContainer}>
							<Button
								backgroundColor={'#1AB494'}
								borderRadius={5}
								title={this.state.is_edit ? 'EDITAR' : 'CADASTRAR'}
								disabled={
									!this.state.payload.name ||
									!this.state.payload.last_name ||
									!this.state.payload.phone ||
									!this.state.payload.street ||
									!this.state.payload.neighborhood ||
									!this.state.payload.city ||
									!this.state.payload.district ||
									!this.state.payload.number ||
									!this.state.payload.mail
								}
								loading={this.props.loading}
								onPress={this.onButtonPress.bind(this)} />
						</View>
					</View>
				</ScrollView>
			</FormRender>
		);
	}
}

function mapStateToProps(state) {

	const { loading, error, contact } = state.contactForm;

	return { loading, error, contact };
}

export const ContactForm = connect(mapStateToProps, { upsert, getOne })(ContactFormComponent);