import React, { useCallback, useContext, useState } from "react"
import { Modal, Row, Col, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import MiniSpinner from "../spinners/MiniSpinner"
import TextField from "@material-ui/core/TextField"
import useForm from "../../forms/useForm"
import validate from "../../forms/validateForm"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import { toastify } from "../../helpers/toast"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useSelector } from "react-redux"

const UserEditModal = ({ closeEditModal, isEditModalOpen }) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const { loggedUser } = useSelector((state) => state.user)

	//STATES
	const [isLoading, setIsLoading] = useState(false)
	const [phone, setPhone] = useState("")
	const [user, setUser] = useState("")

	const handleChange = (e) => {
		setUser((user) => ({ ...user, [e.target.name]: e.target.value }))
	}

	//SUBMIT
	const onSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		const { hasError } = await ServerService.updateUser(user)
		if (hasError) {
			console.log("Произошла ошибка ", hasError)
		} else {
			toastify("success", t("successfullyEdited"))
			closeEditModal()
		}
	}

	console.log(user)
	return (
		<>
			<Modal
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="p-2 modal-dialog-centered"
				show={isEditModalOpen}
				onHide={closeEditModal}
			>
				<Modal.Body className="p-4">
					<form onSubmit={onSubmit}>
						<Row className="mb-3">
							<span>{t("contactInformation")}</span>
						</Row>
						<Row className="">
							<Col className="col-6">
								<TextField
									fullWidth
									size="small"
									name="fullName"
									label={t("fullName")}
									variant="outlined"
									value={loggedUser.fullname}
									onChange={handleChange}
									className="mb-4"
								/>
							</Col>
							<Col className="col-6">
								<TextField
									fullWidth
									size="small"
									name="email"
									type="email"
									className="max-width"
									label={t("Email")}
									variant="outlined"
									value={loggedUser.email}
									onChange={handleChange}
									className="mb-4"
								/>
							</Col>
						</Row>
						<Row className="">
							<Col className="col-6">
								<TextField
									fullWidth
									name="phone"
									size="small"
									className="mb-4"
									label={t("phone")}
									variant="outlined"
									value={loggedUser.phone}
									onChange={handleChange}
								/>
							</Col>
							<Col className="col-6">
								<TextField
									fullWidth
									size="small"
									name="address"
									className="max-width"
									label={t("address")}
									variant="outlined"
									className="mb-4"
									value={loggedUser.address}
									onChange={handleChange}
									className="mb-4"
								/>
							</Col>
						</Row>

						<Row className="d-flex justify-content-end">
							{isLoading ? (
								<MiniSpinner />
							) : (
								<Button variant="success" type="submit">
									{t("save")}
								</Button>
							)}
							<Button
								variant="secondary"
								className="ml-2"
								onClick={() => closeEditModal()}
							>
								{t("cancel")}
							</Button>
						</Row>
					</form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default UserEditModal
