import React, { useState, useEffect, useCallback } from "react"
import { Row, Col, Image, FormControl, Button, Form } from "react-bootstrap"
import logo from "../assets/img/logo-green.png"
import { useTranslation } from "react-i18next"
import ForgotPasswordModal from './ForgotPasswordModal'
import { Link } from 'react-router-dom'


const SignUpPage = () => {
	const {t} = useTranslation()


	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])
	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	return (
		<div className="c-main container-fluid pt-5">
			<Row className="login__wrapper d-flex mx-auto flex-column align-items-center justify-content-center col-md-6">
				<Col className="mb-md-5 d-center">
					<Image src={logo} alt="logo" size="sm" className="login__logo" />
				</Col>
                <Col className="mb-5">
                    <span className="myText--large d-center color-text text-center">For more experience, Sign Up for AalamJobs </span>
                </Col>
				<Col  className="md-6" >
				<Form className="flex-column">
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder={t("login.emailOrUsername")} />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder={t("login.createPassword")} />
					</Form.Group>
				
                <Col className="d-center">
					<Button variant="success" className="myBtn myBtn--green myText--large text-center" type="submit">
						{t("login.signUp")}
					</Button></Col>
					<span  className="myText--small color-text d-center mt-5">Already a member?<Link className="login__link" to="/login">Login</Link> </span>
					</Form>
				</Col>
			</Row>

			{ isModalOpen && <ForgotPasswordModal
				closeModal={closeModal}
				isModalOpen={isModalOpen}			
				/>
				}
		</div>
	
	)
}

export default SignUpPage
