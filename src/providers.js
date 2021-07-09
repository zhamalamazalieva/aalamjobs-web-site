import React from "react"
import {BrowserRouter} from "react-router-dom"
import ServerServiceContext from "./contexts/ServerServiceContext"
import ServerService from "./services/ServerService"

export default function Providers({children}){
  return (
    <BrowserRouter>
      <ServerServiceContext.Provider value={new ServerService()}>
       
          { children }
       
      </ServerServiceContext.Provider>
    </BrowserRouter>
  )
}
