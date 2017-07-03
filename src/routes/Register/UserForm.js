import React, { Component } from 'react';
import FormNameSection from './FormNameSection.js';
import FormInfoSection from './formInfoSection';

import './form.css';

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		const updatedUser = this.state.user;
		updatedUser[name] = value;

		this.setState({
			user: updatedUser
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onRegisterClicked(this.state.user);

		this.setState({
			user: {}
		});
	}

	render() {
		return (
			<form className="form-horizontal">
				<FormNameSection onChange={this.handleChange} user={this.state.user} />
				<FormInfoSection onChange={this.handleChange} user={this.state.user} />
				<button className="btn btn-default" onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		);
	}
}

export default UserForm;