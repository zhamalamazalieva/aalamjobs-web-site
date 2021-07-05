import React from 'react'
import { Row } from 'react-bootstrap'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'


const Footer = () => {
    return(
    <div>
        <Row className="flex-column">          
                <FooterTop/>
               <FooterBottom/>
        </Row>
    </div>
    )
}
export default Footer