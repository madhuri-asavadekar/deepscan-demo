import React, { Component } from "react";
import { Link } from "react-router-dom";

const PageHeader = props => (
	<div className="page-header d-flex align-items-center justify-content-between">
		<h1 className="display-4">{props.heading}</h1>
		{props.url && (
			<Link className="btn btn-primary" to={props.url}>
				{props.urlText}
			</Link>
		)}
	</div>
);

export default PageHeader;
