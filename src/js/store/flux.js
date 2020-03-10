const getState = ({ getStore, setStore }) => {
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
			}
		},
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
