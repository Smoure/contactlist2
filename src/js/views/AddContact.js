import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AddContact = () => {
	const [contacts, setContacts] = useState([]);
	const { store, actions } = useContext(Context);

	// useEffect (() => {
	// 	fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure", { method: "POST" })
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			// console.log(data);
	// 			setContacts(data);
	// 		});
	// }, []);

	function addContact(contactObject) {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(contactObject)
		})
			.then(resp => resp.json())
			.then(singleContact => {
				console.log("addContact", singleContact);
			});
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" />
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							this.addContact({
								full_name: fullname,
								email: email,
								agenda_slug: "smoure",
								address: address,
								phone: phone
							});
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
