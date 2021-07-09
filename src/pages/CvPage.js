import React from 'react'
import ApplicationContent from '../components/cv/ApplicationContent'
import SearchField from "../components/searchField/SearchField"
import SearchSideBar from "../components/searchSideBar/SearchSideBar"
import { Col, Row } from "react-bootstrap"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const CvPage = () => {
    return (
        <>
        <div className="bg-color-darkGreen">
            <Header />
        </div>
        <Row className="myContainer mt-5 mb-5">
            <Col md="3" xs="12">
                <SearchSideBar />
            </Col>
            <Col md="6" xs="12">
                <SearchField />
                <ApplicationContent />
            </Col>
        </Row>
        <Footer />
    </>
    )
}

export default CvPage
