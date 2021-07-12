import React from "react"
import {BrowserRouter} from "react-router-dom"
import ServerServiceContext from "./contexts/ServerServiceContext"
import ServerService from "./services/ServerService"
import store from "./redux/store"
import {Provider} from "react-redux"

export default function Providers({children}){
  return (
    <BrowserRouter>
    <ServerServiceContext.Provider value={new ServerService()}>
      <Provider store={store}>
        { children }
      </Provider>
    </ServerServiceContext.Provider>
  </BrowserRouter>
  )
}
