import React, {Suspense, lazy} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import FullSpinner from "../components/spinners/FullSpinner"

const LoginPage = lazy(() => import('./LoginPage'))
// const RegisterPage = lazy(() => import('./RegisterPage'))
const Page404 = lazy(() => import('./Page404'))
const HomePage = lazy(() => import('./HomePage'))
const CvPage = lazy(() => import('./CvPage'))
const MePage = lazy(() => import('./MePage'))
const FavouritesPage = lazy(() => import('./FavouritesPage'))
const AppliedPage = lazy(() => import('./AppliedPage'))

// const ForgotPasswordPage = lazy(() => import('./ForgotPasswordPage'))


export default function Router(){
  return (
    <Suspense fallback={<FullSpinner/>}>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        {/* <Route exact path="/register">
          <RegisterPage/>
        </Route>
        <Route exact path="/forgotpassword">
          <ForgotPasswordPage/>
        </Route> */}
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/applied">
          <AppliedPage/>
        </Route>
        <Route exact path="/me">
          <MePage/>
        </Route>
        <Route exact path="/favourites">
          <FavouritesPage/>
        </Route>
        <Route exact path="/mycv">
          <CvPage/>
        </Route>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </Suspense>
  )
}
