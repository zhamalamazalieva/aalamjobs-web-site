import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import RedirectComponent from "../components/redirectComponent/Redirectcomponent"
const PrivateRoute = ({ children, ...remainingProps }) => {

  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isAuth ? (
                <div className="c-body">
                  { children }
                </div>
        ) : (
          <RedirectComponent/>
        )
      }
    />
  )
}

export default PrivateRoute
