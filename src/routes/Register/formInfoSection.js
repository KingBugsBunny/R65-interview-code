import React, { Component } from 'react';

class FormInfoSection extends Component {

	render() {
		const user = this.props.user;

		const username = user.username ? user.username : '';
		const email = user.email ? user.email : '';
		const phone = user.phone ? user.phone : '';

		const password = user.password ? user.password : '';

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					User info
				</div>
				<div className="panel-body">
					<div className='formGroup'>
						<label className="col-sm-2 control-label">Username</label>
	    				<div className="col-sm-10">
	      					<input type="text" className="form-control" name="username" onChange={this.props.onChange} value={username} />
	    				</div>
					</div>
					<div className='formGroup'>
						<label className="col-sm-2 control-label">Email</label>
	    				<div className="col-sm-10">
		      				<input type="email" className="form-control" name="email" onChange={this.props.onChange} value={email} />
	    				</div>
					</div>
					<div className='formGroup'>
						<label className="col-sm-2 control-label">Phone</label>
						<div className="col-sm-10">
							<input type="text" minLength="10" maxLength="11" className="form-control" name="phone" onChange={this.props.onChange} value={phone} />
						</div>
					</div>
					<div className='formGroup'>
						<label className="col-sm-2 control-label">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" name="password" onChange={this.props.onChange} value={password} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FormInfoSection;