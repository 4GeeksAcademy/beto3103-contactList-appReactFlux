const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			mainUrl: "https://playground.4geeks.com/apis/fake/contact/agenda/beto3103",
			putUrl: "https://playground.4geeks.com/apis/fake/contact/"
		},
		actions: {
			getContacts: async () => {
				let store = getStore()
				try {
					let response = await fetch(store.mainUrl)
					///apis/fake/contact/agenda/{agenda_slug}
					let data = await response.json()
					setStore({
						contacts: data
					})
				} catch (error) {
					console.log(error)
				}
			},

			addContact: async (data) => {
				let store = getStore()
				try {
					let response = await fetch(`${store.putUrl}`,
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(data)
						})

					if (response.ok) {
						getActions().getContacts()
					}

					return response.status

				} catch (error) {
					console.log(error)
				}
			},

			deleteContact: async (id) => {
				let store = getStore()
				let actions = getActions()
				try {
					let response = await fetch(`${store.putUrl}${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (response.ok) {
						actions.getContacts()
					}
				} catch (error) {
					console.log(error);
				}
			},

			editContact: async (id, contact) => {
				let store = getStore()
				let actions = getActions()
				try {
					let response = await fetch(`${store.putUrl}${id}`,
						{
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(contact)
						})

					if (response.ok) {
						actions.getContacts()
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
