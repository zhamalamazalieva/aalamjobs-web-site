import {combineReducers} from "redux"
import authReducer from "./authReducer"
import filterReducer from './filterReducers'
import userReducer from './userReducers'


export default combineReducers({
  auth: authReducer,
  filter:filterReducer,
  user:userReducer
})
