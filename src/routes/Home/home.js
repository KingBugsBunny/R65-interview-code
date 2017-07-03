import React from 'react';

function Instructions() {
	return (
		<div>
			<div className="jumbotron text-center">
				<h1>Hello</h1>
				<p className="instructions">
					See below instructions for completing the user dashboard.
				</p>
			</div>
			<div>
				<ol>
					<li>
						Get your environment ready
						<ul>
							<li>npm</li>
							<li>yarn (Streamlined dependency management)</li>
						</ul>
					</li>
					<li>
						Create a new Component for the registration page. 
						<ul>
							<li>It should have the following fields: Username, Email, Phone #, and Password</li>
							<li>Validation is not required</li>
							<li>Password field should be secure</li>
						</ul>
					</li>
					<li>
						In UserForm.js add your new component under the FormNameSection component. 
						<ul>
							<li>Ensure on form submission the new fields are saved as part of the User.</li>
						</ul>
					</li>
					<li>
						UserTable.js bug
						<ul>
							<li>There is a small bug in the UserTable.js file that's prevent the page from loading.</li>
							<li>Check out the browser console for the error and address the issue</li>
							<li><b>Note</b> It is a small fix and should not require more than a one line fix</li>
						</ul>
					</li>
					<li>
						Create a new Route to view user details from the Users page. 
						<ul>
							<li>Look at UserTable.js, each row represents a user and has a 'details' button</li>
							<li>Update the button so it navigates to the new Route with the user's data</li>
							<li>We recommend using {'<Link />'} <a>http://easyreactbook.com/blog/stylizing-a-react-router-link-with-bootstrap</a></li>
							<li>Display all the fields from the user except their password</li>
						</ul>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Instructions;