import React from 'react'
import { Col, Row, Image, Container} from 'react-bootstrap'
import logo from '../../assets/img/logo-white.png'
import HeaderRight from './HeaderRight'
import HeaderCenter from './HeaderCenter'


const Header = () => {
    return(
    <div className="myContainer">
        <Row className="justify-content-between align-items-center">
            <div className="col-md-3 d-flex justify-content-center">
                <Image src={logo} alt="logo" size="sm" className="header__logo"/>
            </div>
            <div className="col-md-6  d-flex justify-content-center"> 
                <HeaderCenter/>
            </div>
            <div className="col-md-3  d-flex justify-content-end">
               <HeaderRight/>
            </div>
        </Row>
    </div>
    )
}
export default Header