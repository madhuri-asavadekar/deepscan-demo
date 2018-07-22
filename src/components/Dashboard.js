import React, { Component } from "react";
import axios from "axios";
import toastr from "toastr";

import PageHeader from "../components/PageHeader";
import TableHeading from "../components/TableHeading";
import TableRow from "../components/TableRow";

class Dashboard extends Component {
	state = {
		users: [],
	};

	deleteUser = userId => {
		axios
			.delete("http://localhost:8000/users/" + userId)
			.then(response => {
				this.getUsers();
				toastr.remove();
				toastr.options = {
					positionClass: "toast-bottom-right",
				};
				toastr.success("User deleted successfully.");
			})
			.catch(error => {
				toastr.success("Error while deleting user.");
			});
	};

	getUsers = () => {
		axios
			.get("http://localhost:8000/users")
			.then(response => {
				this.setState({ users: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.getUsers();
	}

	render() {
		const { users } = this.state;

		return (
			<div className="main-wrapper">
				<div className="container">
					<PageHeader heading="Dashboard" url="/users/create" urlText="Create User" />

					<div className="page-content">
						<div className="table-responsive">
							<table className="table table-hover">
								<TableHeading />
								<tbody>
									{users.map(user => (
										<TableRow
											key={`u_${user.id}`}
											user={user}
											deleteUser={this.deleteUser}
										/>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
