import React from 'react'
import FavouritesContent from '../components/favourites/FavouritesContent'
import SearchField from '../components/searchField/SearchField'
import SearchSideBar from '../components/searchSideBar/SearchSideBar'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


const FavouritesPage = () => {
    return (
        <>
        <div className="bg-color--darkGreen">
            <Header />
        </div>
        <Row className="myContainer mt-5 mb-5">
            <Col md="3" xs="12">
                <SearchSideBar />
            </Col>
            <Col md="9" xs="12">
                <SearchField />
                <FavouritesContent />
            </Col>
        </Row>
        <Footer />
    </>
    )
}

export default FavouritesPage
