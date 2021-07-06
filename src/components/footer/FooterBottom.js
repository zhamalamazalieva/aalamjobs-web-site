import React from 'react'
import { Col, Row, Image, Container} from 'react-bootstrap'
import logo from '../../assets/img/logo-white.png'
import FooterTop from './FooterTop'


const FooterBottom= () => {
    return(
        <div className="text-center footer__bottom">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24C5.38332 24 0 18.6167 0 12C0 5.38332 5.38332 0 12 0C18.6167 0 24 5.38332 24 12C24 18.6167 18.6167 24 12 24ZM12 1.50001C6.2102 1.50001 1.50001 6.2102 1.50001 12C1.50001 17.7898 6.2102 22.5 12 22.5C17.7898 22.5 22.5 17.7898 22.5 12C22.5 6.2102 17.7898 1.50001 12 1.50001Z" fill="white"/>
            <path d="M12 18.0001C8.69169 18.0001 6 15.3084 6 12C6 8.69163 8.69163 6 12 6C13.6267 6 15.1487 6.64015 16.2869 7.80249L15.2147 8.85129C14.3614 7.97969 13.2203 7.49995 12 7.49995C9.51857 7.49995 7.50001 9.51851 7.50001 12C7.50001 14.4814 9.51857 16.5 12 16.5C13.2195 16.5 14.3606 16.0203 15.2147 15.1487L16.2854 16.199C15.148 17.3606 13.626 18 12 18.0001Z" fill="white"/>
        </svg>
        <span className="myText--small footer__copyright ml-2">2021 AalamJobs</span>
        </div>
    )
}
export default FooterBottom