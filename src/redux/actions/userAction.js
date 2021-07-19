import { GET_USER_INFO } from "../types/userTypes"


export const getUserInfo = (obj) => {
    return {
        type:GET_USER_INFO,
        payload:obj
    }
}