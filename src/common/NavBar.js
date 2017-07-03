import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
	return (
		<div className='navbar'>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/register">Register</Link></li>
				<li><Link to="/users">Users</Link></li>
				<li><Link to="/submit">Submit</Link></li>
      		</ul>
		</div>
	);
}

export default NavBar;