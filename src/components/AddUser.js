import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import FormikCreateForm from "../components/FormikCreateForm";

class AddUser extends Component {
	render() {
		return (
			<div className="main-wrapper">
				<div className="container">
					<PageHeader heading="Create User" url="" urlText="" />
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<FormikCreateForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddUser;
