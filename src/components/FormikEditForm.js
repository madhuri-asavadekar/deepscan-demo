import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import toastr from "toastr";

const CreateForm = ({ values, errors, isSubmitting }) => (
	<Form className="pt-5 pb-5">
		<div className="form-group">
			<Field className="form-control" type="text" name="name" placeholder="Name"  />
		</div>
		<div className="form-group">
			<Field className="form-control" type="email" name="email" placeholder="Email Id" />
		</div>
		<div className="form-group">
			<Field className="form-control" type="file" name="profile_picture" />
		</div>
		<div className="form-group text-center">
			<button className="btn btn-primary pl-5 pr-5">Submit</button>
		</div>
	</Form>
);

const FormikCreateForm = withFormik({
	mapPropsToValues({ name, email }) {
		return {
			name: "" || ,
			email: "",
			profile_picture: "",
		};
	},
	// validationSchema: Yup.object().shape({
	// 	email: Yup.string()
	// 		.email("Email not valid")
	// 		.required("Email is required"),
	// 	password: Yup.string()
	// 		.min(9, "Password must be 9 characters or longer")
	// 		.required("Password is required"),
	// }),
	handleSubmit(values) {
		axios({
			method: "post",
			url: "http://localhost:8000/users",
			data: values,
		}).then(response => {
			toastr.remove();
			toastr.options = {
				positionClass: "toast-bottom-right",
			};
			toastr.success("User added successfully.");
		});
	},
})(CreateForm);

export default FormikCreateForm;
