import React, { useState, useEffect, useCallback } from "react"
import { Row, Col, Image, FormControl, Button, Form } from "react-bootstrap"
import logo from "../assets/img/logo-green.png"
import { useTranslation } from "react-i18next"
import ForgotPasswordModal from './ForgotPasswordModal'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authActions";
import { useHistory} from "react-router-dom";
import { Formik } from 'formik'

const SignUpPage = () => {
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const history = useHistory()
	const error = useSelector(state => state.auth.error)

	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])
	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	//ONSUBMIT
	const onSubmit = async (user) => {
		user.role = "E"
		dispatch(register(user, toLogin));
	};
	function toLogin() {
		history.push("/login");
	}

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
				<Formik
                  initialValues={{ username: "", email: "", password: "" }}
                  validate={values => {
                    const errors = {}
                    !values.username && (errors.username = "Обязательное поле")
                    !values.password && (errors.password = "Обязательное поле")
                    if (!values.email) {
                      errors.email = 'Обязательное поле';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                      errors.email = 'Неверный адрес электронной почты';
                    }
                    return errors
                  }}
                  onSubmit={onSubmit}
                >
                  {({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    errors,
                    values,
                    touched
                  }) => (
				<Form className="flex-column" onSubmit={handleSubmit}>
				
					<Form.Group controlId="formBasicEmail">
						<Form.Control
						
						id="email"
						value={values.email}
						type="email"
						onChange={handleChange}
						placeholder={t("email")}
						onBlur={handleBlur}
						autoComplete="username"
						className={errors.email && touched.email ? "border-danger" : ""}
						
						/>
						<div className="myText--xsmall mb-3 myText--danger">
                          {errors.email && touched.email && errors.email}
                        </div>
					</Form.Group>
					
						<Form.Group controlId="formBasicEmail">
						<Form.Control
						
						id="username"
						value={values.username}
						onChange={handleChange}
						onBlur={handleBlur}
						type="text"
						placeholder={t("username")}
						className={errors.username && touched.username ? "border-danger" : ""}
						
						/>
							<div className="myText--xsmall mb-3  myText--danger">
                          {errors.username && touched.username && errors.username}
                        </div>
					</Form.Group>
				
					<Form.Group controlId="formBasicPassword">
						<Form.Control 
						 id="password"
						 value={values.password}
						 onChange={handleChange}
						 onBLur={handleBlur}
						 type="password"
						 placeholder={t("password")}
						 className={` ${errors.password && touched.password ? "border-danger" : ""} login__input`}
						
						/>
						  <div className="myText--xsmall mb-3 myText--danger">
                          {errors.password && touched.password && errors.password}
                        </div>
					</Form.Group>
				
                <Col className="d-center">
					<Button variant="success" className="myBtn myBtn--green myText--large text-center" type="submit">
						{t("login.signUp")}
					</Button></Col>
					<span  className="myText--small color-text d-center mt-5">Already a member?<Link className="login__link" to="/login">Login</Link> </span>
					</Form>
					    )}
						</Formik>
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
