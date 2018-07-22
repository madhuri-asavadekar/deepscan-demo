import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableRow extends Component {
	deleteUser = e => {
		console.log(e.target.id);
		this.props.deleteUser(e.target.id);
	};

	render() {
		const user = this.props.user;

		return (
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>
					<img
						height="40px"
						className="img-responsive"
						src={user.profile_picture}
						alt="profile picture"
					/>
				</td>
				<td>
					<Link className="btn btn-info btn-sm" to={`/users/show/${user.id}`}>
						Show
					</Link>
				</td>
				<td>
					<a className="btn btn-primary btn-sm" href="#">
						Edit
					</a>
				</td>
				<td>
					<a
						id={user.id}
						className="btn btn-danger btn-sm"
						href="#"
						onClick={this.deleteUser}
					>
						Delete
					</a>
				</td>
			</tr>
		);
	}
}

export default TableRow;
