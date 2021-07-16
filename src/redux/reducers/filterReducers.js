import {
	UPDATE_CITY,
	UPDATE_COUNTRY,
	UPDATE_EMPLOYMENTYPE,
	UPDATE_SECTOR,
	UPDATE_SALARY,
} from "../types/filterTypes"

const initialState = {
	city: "",
	country: "",
	sector: "",
	employmentType: "",
}

export default function filterReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_CITY:
			return {
				...state,
				city: action.payload,
			}
		case UPDATE_COUNTRY: {
			return {
				...state,
				country: action.payload,
			}
		}
		case UPDATE_SECTOR: {
			return {
				...state,
				sector: action.payload,
			}
		}
		case UPDATE_EMPLOYMENTYPE: {
			return {
				...state,
				employmentType: action.payload,
			}
		}
		default:
			return state
	}
}
