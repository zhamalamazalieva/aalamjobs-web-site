import { UPDATE_CITY, UPDATE_COUNTRY, UPDATE_SECTOR , UPDATE_EMPLOYMENTYPE, UPDATE_SALARY_MIN, UPDATE_SALARY_MAX, UPDATE_CURRENCY } from "../types/filterTypes";


const initialState = {
	selectedCity: {label:"Select a city"},
	selectedCountry: {label:"Select a country"},
	selectedSector: {label:"Select a sector"},
	selectedEmploymentType: {label:"Select a employment type"},
	selectedCurrency: { label:"Select a currency "},
	selectedSalaryMin:null,
	selectedSalaryMax:null,
}

export default function filterReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_CITY:
			return {
				...state,
				selectedCity: action.payload,
			}
		case UPDATE_COUNTRY: {
			return {
				...state,
				selectedCountry: action.payload,
			}
		}
		case UPDATE_SECTOR: {
			return {
				...state,
				selectedSector: action.payload,
			}
		}
		case UPDATE_EMPLOYMENTYPE: {
			return {
				...state,
				selectedEmploymentType: action.payload,
			}
		}
		case UPDATE_CURRENCY: {
			return {
				...state,
				selectedCurrency: action.payload,
			}
		}
		case UPDATE_SALARY_MAX: {
			return {
				...state,
				selectedSalaryMax: action.payload,
			}
		}
		case UPDATE_SALARY_MIN: {
			return {
				...state,
				selectedSalaryMin: action.payload,
			}
		}
		default:
			return state
	}
}
