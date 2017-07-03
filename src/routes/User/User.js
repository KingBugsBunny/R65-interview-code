import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './User.css';

class User extends Component {
	render() {
		const i = this.props.route.match.params.index.substr(1);
		const user = this.props.users[i];

		return (
			<div className="panel-body">
				<h3>{user.username}'s Details</h3>
				<div className="row">
					<div className="col-xs-4 title">Name: </div>
					<div className="col-xs-6">{ user.firstName + ' ' +  user.lastName }</div>
				</div>
				<div className="row">
					<div className="col-xs-4 title">
						Username:
					</div>
					<div className="col-xs-6">{ user.username }</div>
				</div>
				<div className="row">
					<div className="col-xs-4 title">
						Email:
					</div>
					<div className="col-xs-6">
						{ user.email }
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 title">
						phone:
					</div>
					<div className="col-xs-6">{ user.phone }</div>
				</div>
				<div className="row">
					<div className="col-xs-4">
						<button><Link to="/users">Return</Link></button>
					</div>
				</div>
			</div>
		)
	}
}

User.contextTypes = {
	router: PropTypes.object.isRequired,
	users: PropTypes.object,
	user: PropTypes.object
};

export default User;