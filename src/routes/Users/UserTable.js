import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UserTable.css';

class UserTable extends Component {
	
	handleRemove(index) {
		//the index parameter is an object with an 'index' field
		//we need to only pass the index number value
		this.props.removeUser(index);
	}

	render() {
		let users = this.props.users;
		
		const rows = users.map((user, index) =>
			<tr key={index}>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.phone}</td>
				<td>{user.username}</td>
				<td>{user.email}</td>
				<td>
					<Link to={`user/:${ index }`} >
						<button>Details</button>
					</Link>
					<button onClick={() => {this.handleRemove(index)}}>Remove</button>
				</td>
			</tr>
		);

		return (
			<table className="col-md-12 ">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
						<th>User Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}

}

UserTable.contextTypes = {
    router: PropTypes.object.isRequired,
	users: PropTypes.object,
	user: PropTypes.object
};

export default UserTable;