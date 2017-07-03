import React, { Component } from 'react';  
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Instructions from './Home/home.js';
import Submit from './Submit/submit.js';
import UserForm from './Register/UserForm';
import UserTable from './Users/UserTable.js';
import User from './User/User';
import NavBar from './../common/NavBar.js';

import * as mockData from '../data/users.json';

class AppContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			users: [...mockData]
		};

		this.addUser = this.addUser.bind(this);
		this.removeUser = this.removeUser.bind(this);
	}

	addUser(user) {
		this.setState((prevState) => ({
			users: [...prevState.users, user]
		}));
	}

	removeUser(index) {
		this.setState((prevState) => ({
			users: [
				...prevState.users.slice(0, index),
				...prevState.users.slice(index+1)
				]
		}));
	}

	render() {
		return (
			<div className="col-md-6 col-md-offset-3">
				<Router>
					<div>
						<div>
							<NavBar />
						</div>
						<div>
							<Route exact path="/" component={Instructions} />
							<Route path="/register" render={() => (
								<UserForm onRegisterClicked={this.addUser} />
							)} />
							<Route path="/user/:index" render={match => (
								<User users={this.state.users} route={match} />
							)} />
							<Route path="/users" render={() => (
								<UserTable users={this.state.users} removeUser={this.removeUser} />
							)} />
							<Route path="/submit" component={Submit} />
						</div>
					</div>
				</Router>
			</div>
		);
	}
};

export default AppContainer;