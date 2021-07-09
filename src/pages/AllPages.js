import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Router from '../pages/Router'
import SearchSideBar from '../components/searchSideBar/SearchSideBar';
import SearchField from '../components/searchField/SearchField';




function AllPages() {
  return (
    <>
    <div className="bg-color-darkGreen">
    <Header/>
    </div>
    <Row className="myContainer mt-5 mb-5">
      <Col md="3" xs="12">
      <SearchSideBar/>
      </Col>
      <Col md="9" xs="12">
      <SearchField/>
      <Router/>
      </Col>
    </Row>
    <Footer/>
    </>
  );
}

export default AllPages;
