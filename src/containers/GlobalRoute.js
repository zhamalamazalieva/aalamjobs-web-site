import React from "react"
import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import SearchField from "../components/searchField/SearchField"
import SearchSideBar from "../components/searchSideBar/SearchSideBar"
import { Col, Row } from "react-bootstrap"

const GlobalRoute = ({ children, ...remainingProps }) => {

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
      <>
      <div className="bg-color--darkGreen">
          <Header />
      </div>
      <Row className="myContainer mt-5 mb-5">
          <Col md="3" xs="12">
              <SearchSideBar />
          </Col>
          <Col md="9" xs="12">
              <div className="col-9">
                  <SearchField />
              </div>
              {children}
          </Col>
      </Row>
      <Footer />
  </>
       
      }
    />
  )
}

export default GlobalRoute
