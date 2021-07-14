import React , {useState }from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions/authActions";
import MiniSpinner from '../spinners/MiniSpinner'

const ConfirmLogout = ({ closeLogoutModal, isLogoutModalOpen }) => {
  const {t} = useTranslation()
  
  const dispatch = useDispatch()
  const logoutHandler = () =>{ 
   dispatch(logout())
   closeLogoutModal()
  }

    //STATES
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
          <Modal  size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered  className="p-2 modal-dialog-centered" show={isLogoutModalOpen} onHide={closeLogoutModal}>
        <Modal.Header closeButton>
        <Col className="d-center"><span className="myText--large text-center mb-2">{t("Logout")}</span></Col>

        </Modal.Header>
        <Modal.Body className="p-2 " >

          <Row className="d-center flex-column">
            <Col><p className="myText--xsmall text-center">{t("logoutMessage")}</p></Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
        <Row className="d-flex justify-content-end">
            { isLoading ? (
                <MiniSpinner/>
            ) : (
                <Button variant="success" onClick={logoutHandler}>{t("logout")}</Button>
            )}
            <Button variant="secondary" className="ml-2" onClick={() => closeLogoutModal()}>{t("cancel")}</Button>
          </Row>
        </Modal.Footer>
       
      </Modal>
        </>
    )
}

export default ConfirmLogout