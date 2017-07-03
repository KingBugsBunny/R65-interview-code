import React, { Component } from 'react';

class FormNameSection extends Component {

	render() {
		const user = this.props.user;
		const firstName = user.firstName ? user.firstName : '';
		const lastName = user.lastName ? user.lastName : '';

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					Basic Info
				</div>
				<div className="panel-body">
					<div className='formGroup'>
						<label className="col-sm-2 control-label">First Name</label>
	    				<div className="col-sm-10">
	      					<input type="text" className="form-control" name="firstName" onChange={this.props.onChange} value={firstName} />
	    				</div>
					</div>
					<div className='formGroup'>
						<label className="col-sm-2 control-label">Last Name</label>
	    				<div className="col-sm-10">
		      				<input type="text" className="form-control" name="lastName" onChange={this.props.onChange} value={lastName} />
	    				</div>
					</div>				
				</div>
			</div>
		);
	}
}

export default FormNameSection;