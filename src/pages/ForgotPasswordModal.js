import React, { useCallback, useState, useContext } from "react"
import { Modal, Row, Col, Button, Form } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import CheckEmail from "./CheckEmail"
import { toastify } from '../helpers/toast'
import ServerServiceContext from "../contexts/ServerServiceContext";

const ForgotPasswordModal = ({ closeModal, isModalOpen }) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext);

	//STATES
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("")

	const [checkEmail, setCheckEmail] = useState(true)
	const openCheckEmail = useCallback(() => {
		setCheckEmail(true)
	})


	const onSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const { hasError, data } = await ServerService.resetPassword({email:email});
		if (hasError) {
		  console.log("Ошибка с сервером");
		  toastify("error", t("Ошибка с сервером"));
		} else {
		  toastify("success", t("successfullySent"));
		  openCheckEmail();
		}
		setIsLoading(false);
	  };


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
						<Form className="p-5" onSubmit={onSubmit}>
							<Form.Group controlId="formBasicEmail">
								<Form.Control value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder={t("login.email")} />
							</Form.Group>

							<Button variant="success" type="submit" className="m-width" type="submit">
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
