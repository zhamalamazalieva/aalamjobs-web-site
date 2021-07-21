import { GET_USER_INFO } from "../types/userTypes";
import Cookies from "js-cookie"


const initialState = {
	loggedUser: Cookies.get('user') || '',

}

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER_INFO:
			Cookies.set('user', action.payload)
			return {
				...state,
				loggedUser: action.payload,
			}
		default:
			return state
	}
}
