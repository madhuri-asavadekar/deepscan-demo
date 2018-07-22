import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../components/PageHeader";

class ShowUser extends Component {
	state = {
		user: {},
	};

	showUser = userId => {
		axios
			.get("http://localhost:8000/users/" + userId)
			.then(response => {
				this.setState({ user: response.data });
			})
			.catch(error => {});
	};

	componentDidMount() {
		this.showUser(this.props.match.params.id);
	}

	render() {
		const { user } = this.state;
		return (
			<div className="main-wrapper">
				<div className="container">
					<PageHeader heading="Show User" url="/" urlText="< Back" />

					<div className="page-content pt-5">
						<div className="row form-group">
							<div className="col-sm-4 offset-sm-2">
								<label>
									<strong>User Id:</strong>
								</label>
							</div>
							<div className="col-sm-4">
								<span>{user.id}</span>
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4 offset-sm-2">
								<label>
									<strong>User Name:</strong>
								</label>
							</div>
							<div className="col-sm-4">
								<span>{user.name}</span>
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4 offset-sm-2">
								<label>
									<strong>Email Id:</strong>
								</label>
							</div>
							<div className="col-sm-4">
								<span>{user.email}</span>
							</div>
						</div>
						<div className="row form-group">
							<div className="col-sm-4 offset-sm-2">
								<label>
									<strong>Profile Picture:</strong>
								</label>
							</div>
							<div className="col-sm-4">
								<span>
									<img
										height="100px"
										className="img-responsive"
										src={user.profile_picture}
										alt="profile picture"
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowUser;
