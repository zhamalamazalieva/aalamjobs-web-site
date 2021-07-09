import React, { useState, useEffect, useCallback } from "react"
import { Row, Col, Image, FormControl, Button, Form } from "react-bootstrap"
import logo from "../assets/img/logo-green.png"
import { useTranslation } from "react-i18next"
import ForgotPasswordModal from './ForgotPasswordModal'
import { Link } from 'react-router-dom'


const LoginPage = () => {
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
                    <span className="myText--large d-center color-text text-center">To continue, Login to AalamJobs</span>
                </Col>
				<Col >
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder={t("login.emailOrUsername")} />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder={t("login.password")} />
					</Form.Group>
					<div className="d-flex justify-content-between align-items-center">
					<Form.Group controlId="formBasicCheckbox color-lightGreen">
						<Form.Check type="checkbox" label={t("login.rememberMe")} className="myText--small"/>
					</Form.Group>
					<Button variant="success" className="myBtn myBtn--green myText--large" type="submit">
						{t("login.login")}
					</Button>
					</div>
					<span className="myText--large color-lightGreen d-center mt-5" onClick={openModal}>{t("login.forgotPassword")}</span>
					<span  className="myText--small color-text d-center mt-5">Don’t have account?<Link to="/register" className="login__link"> Sign up</Link></span>
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

export default LoginPage
