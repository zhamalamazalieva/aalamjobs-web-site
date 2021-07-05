import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import logo from "../assets/img/logo-green.png"

const LoginPage = () => {
	return (
		<div className="c-main container-fluid">
			<Row className="login__wrapper">
				<Col>
					<Image src={logo} alt="logo" size="sm" className="login__logo" />
				</Col>
                <Col>
                    <span className="myText--small">To continue, Login to AalamJobs</span>
                </Col>
			</Row>
		</div>
	)
}

export default LoginPage
