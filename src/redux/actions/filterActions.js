import { UPDATE_CITY, UPDATE_COUNTRY, UPDATE_SECTOR , UPDATE_EMPLOYMENTYPE, UPDATE_SALARY_MIN, UPDATE_SALARY_MAX, UPDATE_CURRENCY } from "../types/filterTypes";


export const updateCity = (obj) => {
    return {
        type:UPDATE_CITY,
        payload:obj
    }
}
export const updateCountry= (obj) => {
    return {
        type:UPDATE_COUNTRY,
        payload:obj
    }
}
export const updateSector = (obj) => {
    return {
        type:UPDATE_SECTOR,
        payload:obj
    }
}
export const updateEmploymentType = (obj) => {
    return {
        type:UPDATE_EMPLOYMENTYPE,
        payload:obj
    }
}

export const updateCurrency = (obj) => {
    return {
        type:UPDATE_CURRENCY,
        payload:obj
    }
}
export const updateSalaryMin = (val) => {
    return {
        type:UPDATE_SALARY_MIN,
        payload:val
    }
}
export const updateSalaryMax = (val) => {
    return {
        type:UPDATE_SALARY_MAX,
        payload:val
    }
}