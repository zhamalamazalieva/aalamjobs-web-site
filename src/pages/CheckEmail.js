import React from 'react'
import { Modal, Row, Col,  FormControl, Button, Form } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

const ForgotPasswordModal = ({ closeModal, isModalOpen }) => {

  const {t} = useTranslation()

    return (
        <>
          <Modal className="p-3 " show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body className="p-3 " >

          <Row className="d-center flex-column">
            <Col className="d-center"><span className="myText--large text-center mb-5">Password Recovery</span></Col>
            <Col><p className="myText--xsmall text-center">Enter your email and we will send you a link to reset your password</p></Col>
          </Row>
          <Col>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.9997 0C22.43 0 0 22.4295 0 49.9997C0 77.57 22.43 100 49.9997 100C77.5694 100 99.9995 77.57 99.9995 49.9997C99.9995 22.4295 77.5699 0 49.9997 0ZM78.7105 41.5544L47.2982 72.9667C45.9625 74.3023 44.187 75.0374 42.2984 75.0374C40.4097 75.0374 38.6342 74.3023 37.2985 72.9667L21.289 56.9571C19.9534 55.6215 19.2177 53.846 19.2177 51.9573C19.2177 50.0681 19.9534 48.2926 21.289 46.957C22.6241 45.6213 24.3996 44.8857 26.2888 44.8857C28.1775 44.8857 29.9535 45.6213 31.2886 46.9575L42.2978 57.9662L68.7098 31.5542C70.0454 30.2186 71.8209 29.4834 73.7096 29.4834C75.5983 29.4834 77.3738 30.2186 78.7094 31.5542C81.4673 34.3121 81.4673 38.7975 78.7105 41.5544Z" fill="#3CAF48"/>
            </svg>

          </Col>
          <Col><span className="myText--small">{t("login.checkEmail")}</span></Col>
        </Modal.Body>
       
      </Modal>
        </>
    )
}

export default ForgotPasswordModal