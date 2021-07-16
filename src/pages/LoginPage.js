import React, { useState, useEffect, useCallback } from "react"
import { Row, Col, Image, FormControl, Button, Form } from "react-bootstrap"
import logo from "../assets/img/logo-green.png"
import { useTranslation } from "react-i18next"
import ForgotPasswordModal from './ForgotPasswordModal'
import { login } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


const LoginPage = () => {
	const {t} = useTranslation()

	const dispatch = useDispatch();
	const history = useHistory();
  
	//STATES
    const isAuth = useSelector((state) => state.auth.isAuth);
    const error = useSelector((state) => state.auth.error);
	const [isLoading, setIsLoading] = useState(false);

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")


	//SUBMIT
	const onSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault()
		dispatch(login({username:username, password:password}));
		setIsLoading(false);
	  };

	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])
	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])
	
  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);
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
				<Form onSubmit={onSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Control value={username} onChange={e => setUsername(e.target.value)} placeholder={t("login.username")} />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={t("login.password")} />
					</Form.Group>
					{ error && error.detail && (
						<span className="text-danger">
							{error.detail}
						</span>
					)}
					<div className="d-flex justify-content-between align-items-center">
					<Form.Group controlId="formBasicCheckbox color-lightGreen">
						<Form.Check type="checkbox" label={t("login.rememberMe")} className="myText--small d-flex align-items-center"/>
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
