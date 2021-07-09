import React, { useCallback, useState } from "react"
import { Modal, Row, Col, FormControl, Button, Form } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import CheckEmail from "./CheckEmail"

const ForgotPasswordModal = ({ closeModal, isModalOpen }) => {
	const { t } = useTranslation()

	const [checkEmail, setCheckEmail] = useState(true)
	const openCheckEmail = useCallback(() => {
		setCheckEmail(true)
	})

	return (
		<>
			<Modal className="p-3 " show={isModalOpen} onHide={closeModal}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body className="p-3 ">
					<Row className="d-center flex-column">
						<Col className="d-center">
							<span className="myText--large text-center mb-5">
								Password Recovery
							</span>
						</Col>
						<Col>
							<p className="myText--xsmall text-center">
								Enter your email and we will send you a link to reset your
								password
							</p>
						</Col>
					</Row>
					<Col>
						<Form className="p-5">
							<Form.Group controlId="formBasicEmail">
								<Form.Control type="email" placeholder={t("login.email")} />
							</Form.Group>

							<Button variant="success" className="m-width" type="submit">
								{t("login.resetPassword")}
							</Button>
						</Form>
					</Col>
				</Modal.Body>
			</Modal>
			{checkEmail && <CheckEmail />}
		</>
	)
}

export default ForgotPasswordModal
