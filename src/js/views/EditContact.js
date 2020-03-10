import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const EditContact = () => {
	const [contacts, setContacts] = useState([]);
	const { store, actions } = useContext(Context);

	function putFetch(contactInfo) {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure")
			.then(resp => resp.json())
			.then(data => {
				// console.log(data);
				setContacts(data);
			});
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit an existing contact</h1>
				<form>
					{contacts.map((item, index) => {
						return (
							<>
								<div className="form-group" Key={index}>
									<label>{item.full_name}</label>
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
									//                 onClick={() => {
									//                     fetch()
									// .then()
									// .then()
									//                 }}
								>
									save
								</button>
								<Link className="mt-3 w-100 text-center" to="/">
									or get back to contacts
								</Link>
							</>
						);
					})}
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
