import {combineReducers} from "redux"
import authReducer from "./authReducer"
import filterReducer from './filterReducers'


export default combineReducers({
  auth: authReducer,
  filter:filterReducer
})
