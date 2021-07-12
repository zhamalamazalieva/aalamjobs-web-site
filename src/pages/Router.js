import React, {Suspense, lazy} from "react"
import {Route, Switch, Redirect} from "react-router-dom"
import FullSpinner from "../components/spinners/FullSpinner"
import PrivateRoute from '../containers/PrivateRoute'


const LoginPage = lazy(() => import('./LoginPage'))
const Page404 = lazy(() => import('./Page404'))
const HomePage = lazy(() => import('./HomePage'))
const CvPage = lazy(() => import('./CvPage'))
const MePage = lazy(() => import('./MePage'))
const FavouritesPage = lazy(() => import('./FavouritesPage'))
const AppliedPage = lazy(() => import('./AppliedPage'))
const  SignUpPage = lazy(() => import ('./SignUpPage'))



export default function Router(){
  return (
    <Suspense fallback={<FullSpinner/>}>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/register">
          <SignUpPage/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <PrivateRoute exact path="/applied">
          <AppliedPage/>
        </PrivateRoute>
        <PrivateRoute exact path="/me">
          <MePage/>
        </PrivateRoute>
        <PrivateRoute exact path="/favourites">
          <FavouritesPage/>
        </PrivateRoute>
        <PrivateRoute exact path="/mycv">
          <CvPage/>
        </PrivateRoute>
        <Route>
          <Page404/>
        </Route>
      </Switch>
    </Suspense>
  )
}
