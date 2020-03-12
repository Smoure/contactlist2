const getState = ({ getStore, getActions, setStore }) => {
	return {
		actions: {
			loadContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ contacts: data });
					});
			},
			addContact(contactObject) {
				getActions().loadContacts();
				console.log("form submission data", contactObject);
			}

			// addContact(contactObject) {
			// fetch("https://assets.breatheco.de/apis/fake/contact/agenda/smoure", {
			// method: "POST",
			// headers: {
			// 	"Content-Type": "application/json"
			// },
			// body: JSON.stringify(contactObject)
			// })
			// .then(resp => resp.json())
			// .then(singleContact => {
			// 	console.log("addContact", singleContact);
			// 	getTodo();
			// });
			// }
		},
		store: {
			contacts: [
				{
					id: "751",
					agenda_slug: "smoure",
					full_name: "Steph M",
					email: "Steph@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-03-09 23:02:18"
				},
				{
					id: "752",
					agenda_slug: "smoure",
					full_name: "Annie G",
					email: "Annie@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-03-09 23:02:37"
				},
				{
					id: "753",
					agenda_slug: "smoure",
					full_name: "Xena C",
					email: "Xena@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-03-09 23:02:51"
				},
				{
					id: "754",
					agenda_slug: "smoure",
					full_name: "Basil O",
					email: "TRASH@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-03-09 23:03:02"
				}
			]
			//Your data structures, A.K.A Entities
		}
	};
};

export default getState;
