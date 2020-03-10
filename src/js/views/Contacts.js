import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const [contacts, setContacts] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure")
			.then(resp => resp.json())
			.then(data => {
				// console.log(data);
				setContacts(data);
			});
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					{contacts.map((item, index) => {
						return (
							<ul className="list-group pull-down" id="contact-list" Key={index}>
								<ContactCard
									fullname={item.full_name}
									address={item.address}
									phone={item.phone}
									email={item.email}
									link={item.id}
									onDelete={() => setState({ showModal: true })}
								/>
								{/* <ContactCard
										fullname={item.full_name}
										address={item.address}
										phone={item.phone}
										email={item.email}
										onDelete={() => setState({ showModal: true })}
									/>
									<ContactCard
										fullname={item.full_name}
										address={item.address}
										phone={item.phone}
										email={item.email}
										onDelete={() => setState({ showModal: true })}
									/>
									<ContactCard
										fullname={item.full_name}
										address={item.address}
										phone={item.phone}
										email={item.email}
										onDelete={() => setState({ showModal: true })}
									/> */}
							</ul>
						);
					})}
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
