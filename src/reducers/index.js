import {
	RETURN_USERS,
	ADD_TO_PANELS,
	RETURN_PANELS

} from "../actions/index";

const initialState = {
	panels: [],
	users: [
		{
			"id": 1,
			"name": "Shawn",
			"description": "Bacon ipsum dolor amet turkey capicola doner chicken strip steak ham prosciutto. Corned beef chuck tail, filet mignon capicola shoulder jerky spare ribs meatloaf beef salami pig jowl short loin pastrami. Meatloaf chuck tenderloin, capicola corned beef tongue pastrami boudin pork. Beef ribs prosciutto spare ribs tail jerky.",
			"thumbnailId": "thumb1"
		},
		{
			"id": 2,
			"name": "Marnie",
			"description": "Bacon ipsum dolor amet turkey capicola doner chicken strip steak ham prosciutto. Corned beef chuck tail, filet mignon capicola shoulder jerky spare ribs meatloaf beef salami pig jowl short loin pastrami. Meatloaf chuck tenderloin, capicola corned beef tongue pastrami boudin pork. Beef ribs prosciutto spare ribs tail jerky.",
			"thumbnailId": "thumb2"
		},
		{
			"id": 3,
			"name": "River",
			"description": "Bacon ipsum dolor amet turkey capicola doner chicken strip steak ham prosciutto. Corned beef chuck tail, filet mignon capicola shoulder jerky spare ribs meatloaf beef salami pig jowl short loin pastrami. Meatloaf chuck tenderloin, capicola corned beef tongue pastrami boudin pork. Beef ribs prosciutto spare ribs tail jerky.",
			"thumbnailId": "thumb3"
		}
	]
}

const Users = (state = initialState, action) => {
	switch(action.type) {
		case RETURN_USERS:
			return {
				...state.users
			};

		case ADD_TO_PANELS:
			if (state.panels.length === 3) {
				state.panels.pop();
			}
			return {
				...state,
				panels: [action.payload, ...state.panels]
			};

		case RETURN_PANELS:
			return {
				...state.panels
			};

		default:
			return state;
	}
}

export default Users