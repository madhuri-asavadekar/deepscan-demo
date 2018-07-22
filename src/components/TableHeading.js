import React, { Component } from "react";

const tableHeadings = [
	{
		id: 1,
		name: "user_id",
		display_name: "User ID",
	},
	{
		id: 2,
		name: "name",
		display_name: "Name",
	},
	{
		id: 3,
		name: "email_id",
		display_name: "Email Id",
	},
	{
		id: 4,
		name: "profile_picture",
		display_name: "Profile Picture",
	},
	{
		id: 5,
		name: "show",
		display_name: "Show",
	},
	{
		id: 6,
		name: "edit",
		display_name: "Edit",
	},
	{
		id: 7,
		name: "delete",
		display_name: "Delete",
	},
];

const TableHeading = props => (
	<thead>
		<tr>
			{tableHeadings.map(({ id, display_name }, index) => (
				<th key={`th_${id}`} width={index > 3 ? "5%" : ""}>
					{display_name}
				</th>
			))}
		</tr>
	</thead>
);

export default TableHeading;
