import { Row, Col, Button } from "react-bootstrap"
import React from "react"
import { useTranslation } from "react-i18next"
import SearchField from "../searchField/SearchField"
import SearchSideBar from "../searchSideBar/SearchSideBar"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Link } from 'react-router-dom'

const RedirectComponent = () => {
    const {t} = useTranslation()

    return (
        <div>
	<div className="bg-color--darkGreen">
				<Header />
			</div>
			<Row className="myContainer mt-5 mb-5">
				<Col md="3" xs="12">
					<SearchSideBar />
				</Col>
				<Col md="6" xs="12">
					<SearchField/>
					<div className="myBorder--secondary m-width p-5 d-center flex-column">
                        <p className="myText--small mt-5 mb-5">Please sign up to get access to this page</p>
                        <Link to="/register" className="mb-5">
                        <Button variant="success" className="myBtn myBtn--green myText--large text-center" type="submit">
						{t("login.signUp")}
					</Button>
                    </Link>
                    </div>
				</Col>
			</Row>
			<Footer />
        </div>
    )
}

export default RedirectComponent