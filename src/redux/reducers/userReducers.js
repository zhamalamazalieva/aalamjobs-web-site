import { GET_USER_INFO } from "../types/userTypes";


const initialState = {
	loggedUser:"",
}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER_INFO:
			return {
				...state,
				loggedUser: action.payload,
			}
		default:
			return state
	}
}
