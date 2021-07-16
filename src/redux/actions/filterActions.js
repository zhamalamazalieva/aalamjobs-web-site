import { UPDATE_CITY  } from "../types/filterTypes";
import { UPDATE_COUNTRY  } from "../types/filterTypes";
import { UPDATE_SECTOR  } from "../types/filterTypes";
import { UPDATE_EMPLOYMENTYPE  } from "../types/filterTypes";
import { UPDATE_SALARY  } from "../types/filterTypes";

export const updateCity = (id) => {
    return {
        type:UPDATE_CITY,
        payload:id
    }
}
export const updateCountry= (id) => {
    return {
        type:UPDATE_COUNTRY,
        payload:id
    }
}
export const updateSector = (id) => {
    return {
        type:UPDATE_SECTOR,
        payload:id
    }
}
export const updateEmploymentType = (id) => {
    return {
        type:UPDATE_EMPLOYMENTYPE,
        payload:id
    }
}