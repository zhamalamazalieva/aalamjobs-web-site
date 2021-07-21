import React, { useContext, useState, useRef } from "react"
import { Modal } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import MiniSpinner from "../spinners/MiniSpinner"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import { toastify } from "../../helpers/toast"
import { updatePhoto } from "../../redux/actions/userAction"
import { useSelector } from "react-redux"


const UserAvaEditModal = ({ closeAvaEditModal, isAvaEditModalOpen }) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const { loggedUser } = useSelector(state => state.user)

	//STATES
	const [isLoading, setIsLoading] = useState(false)
	const [photo, setPhoto] = useState()

	//HANDLE_UPLOAD
	const hiddenFileInput = useRef(null)

	const handleClick = (e) => {
		hiddenFileInput.current.click()
	}

	const handleChange = (e) => {
		setPhoto(e.target.files[0])
	}

	//SUBMIT
	const onSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		const formData = new FormData()
		formData.append("photo", photo)

		const { hasError } = await ServerService.updateUserPhoto(formData)
		if (hasError) {
			console.log("Произошла ошибка ", hasError)
		} else {
			toastify("success", t("successfullyEdited"))
			closeAvaEditModal()
		}
	}
	return (
		<>
			<Modal
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="p-2 modal-dialog-centered"
				show={isAvaEditModalOpen}
				onHide={closeAvaEditModal}
			>
				<Modal.Body className="p-4 bg-color--darkGray">
					<div className="d-flex flex-column">
						<div className="d-flex justify-content-between mb-5">
							<span className="myText--xlarge color-white">
								{t("user.profilePhoto")}
							</span>
							<div>
								<svg
									onClick={onSubmit}
									className="mr-3"
									width="30"
									height="25"
									viewBox="0 0 40 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M39.4143 0.89832C38.6332 0.117227 37.367 0.117227 36.5858 0.89832L12.6246 24.8598L3.41426 15.6495C2.63324 14.8684 1.36699 14.8685 0.58582 15.6495C-0.195273 16.4305 -0.195273 17.6968 0.58582 18.4779L11.2104 29.1022C11.9911 29.8832 13.2583 29.8827 14.0388 29.1022L39.4143 3.72676C40.1954 2.94574 40.1953 1.67941 39.4143 0.89832Z"
										fill="white"
									/>
								</svg>
								<svg
									onClick={closeAvaEditModal}
									width="30"
									height="30"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M34.1421 5.85781C30.3646 2.08031 25.3421 0 20 0C14.6579 0 9.63539 2.08031 5.85789 5.85789C2.08039 9.63539 0 14.6578 0 20.0001C0 25.3423 2.08031 30.3648 5.85781 34.1423C9.63531 37.9196 14.6577 40 19.9999 40C25.3421 40 30.3646 37.9197 34.1421 34.1422C37.9196 30.3646 40 25.3422 40 20C40 14.6578 37.9196 9.63539 34.1421 5.85781ZM32.4848 32.4849C29.15 35.8197 24.7161 37.6562 19.9999 37.6562C15.2837 37.6562 10.8498 35.8197 7.51508 32.4849C4.18023 29.1501 2.34375 24.7163 2.34375 20.0001C2.34375 15.2839 4.18039 10.85 7.51516 7.51516C10.85 4.18031 15.2838 2.34375 20 2.34375C24.7162 2.34375 29.15 4.18031 32.4849 7.51508C39.3689 14.3993 39.3689 25.6007 32.4848 32.4849Z"
										fill="white"
									/>
									<path
										d="M28.8165 27.1597L21.6571 20.0003L28.8165 12.8408C29.2741 12.3832 29.2741 11.6412 28.8165 11.1837C28.3589 10.726 27.6169 10.726 27.1592 11.1837L19.9998 18.343L12.8404 11.1836C12.3828 10.7259 11.6407 10.7259 11.1831 11.1836C10.7254 11.6412 10.7254 12.3832 11.1831 12.8408L18.3426 20.0003L11.1831 27.1597C10.7254 27.6174 10.7254 28.3594 11.1831 28.817C11.4119 29.0458 11.7118 29.1602 12.0117 29.1602C12.3116 29.1602 12.6115 29.0458 12.8404 28.817L19.9998 21.6576L27.1593 28.817C27.3881 29.0458 27.688 29.1602 27.988 29.1602C28.2879 29.1602 28.5878 29.0458 28.8165 28.817C29.2742 28.3594 29.2742 27.6174 28.8165 27.1597Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<div className="mx-auto user__img mb-5">
							{ photo ? (
								<img
								src={photo && URL.createObjectURL(photo)}
								className="user__ava"
								alt="Profile Image"
							/>
							) : (
								<img
								src={loggedUser.photo}
								alt="Profile Image"
								className="user__ava"

							/>
							)}
						</div>
						<div className="d-flex justify-content-between">
							<div>
								<input
									type="file"
									ref={hiddenFileInput}
									onChange={handleChange}
									style={{ display: "none" }}
								/>
								<svg
									onClick={handleClick}
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M32.8906 25.8594C29.0073 25.8594 25.8594 29.0073 25.8594 32.8906C25.8594 36.774 29.0073 40 32.8906 40C36.774 40 40 36.774 40 32.8906C40 29.0073 36.774 25.8594 32.8906 25.8594ZM35.2344 34.0625H34.0625V35.2344C34.0625 35.882 33.5382 36.4062 32.8906 36.4062C32.243 36.4062 31.7188 35.882 31.7188 35.2344V34.0625H30.5469C29.8993 34.0625 29.375 33.5382 29.375 32.8906C29.375 32.243 29.8993 31.7188 30.5469 31.7188H31.7188V30.5469C31.7188 29.8993 32.243 29.375 32.8906 29.375C33.5382 29.375 34.0625 29.8993 34.0625 30.5469V31.7188H35.2344C35.882 31.7188 36.4062 32.243 36.4062 32.8906C36.4062 33.5382 35.882 34.0625 35.2344 34.0625Z"
										fill="white"
									/>
									<path
										d="M15.3125 11.7969C14.6658 11.7969 14.1406 12.3221 14.1406 12.9688C14.1406 13.6154 14.6658 14.1406 15.3125 14.1406C15.9592 14.1406 16.4844 13.6154 16.4844 12.9688C16.4844 12.3221 15.9592 11.7969 15.3125 11.7969Z"
										fill="white"
									/>
									<path
										d="M12.9688 23.5158H15.1535L11.7969 19.4875L7.10938 25.1131V28.2033H24.8199C25.9335 26.2935 27.6855 24.8259 29.7995 24.081L24.6875 17.2661L18.5934 25.3902C18.4149 25.6279 18.0154 25.8596 17.6575 25.8596C17.6572 25.8596 17.6572 25.8593 17.6569 25.8593C17.6569 25.8593 17.6566 25.8596 17.6562 25.8596H12.9688C12.3212 25.8596 11.7969 25.3353 11.7969 24.6877C11.7969 24.0401 12.3212 23.5158 12.9688 23.5158Z"
										fill="white"
									/>
									<path
										d="M1.17188 35.2344H23.8486C23.6526 34.4809 23.5156 33.7045 23.5156 32.8906C23.5156 32.0767 23.6526 31.3004 23.8486 30.5469H5.9375C5.28992 30.5469 4.76562 30.0226 4.76562 29.375V5.9375C4.76562 5.28992 5.28992 4.76562 5.9375 4.76562H31.7188C32.3663 4.76562 32.8906 5.28992 32.8906 5.9375V23.5156C34.6057 23.5156 36.1935 24.0121 37.5781 24.8199V1.17188C37.5781 0.524292 37.0538 0 36.4062 0H1.17188C0.524292 0 0 0.524292 0 1.17188V34.0625C0 34.7101 0.524292 35.2344 1.17188 35.2344Z"
										fill="white"
									/>
									<path
										d="M30.5469 7.10938H7.10938V21.4496L10.8963 16.9055C11.3425 16.3724 12.2513 16.3724 12.6974 16.9055L17.6083 22.7985L23.7503 14.61C24.1919 14.0192 25.1831 14.0192 25.6247 14.61L30.5469 21.1725V7.10938ZM15.3125 16.4844C13.374 16.4844 11.7969 14.9072 11.7969 12.9688C11.7969 11.0303 13.374 9.45312 15.3125 9.45312C17.251 9.45312 18.8281 11.0303 18.8281 12.9688C18.8281 14.9072 17.251 16.4844 15.3125 16.4844Z"
										fill="white"
									/>
								</svg>
							</div>
							<svg
								width="25"
								height="30"
								viewBox="0 0 32 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M30.5434 11.3281C31.3704 11.3281 31.9438 10.4921 31.6337 9.72547C30.5327 7.00352 27.8622 5.07812 24.7502 5.07812H23.3116C22.7751 2.2443 20.2905 0 17.2502 0H14.7502C11.7118 0 9.22555 2.24281 8.68876 5.07812H7.25016C4.13813 5.07812 1.46766 7.00352 0.366647 9.72547C0.0565684 10.4921 0.629928 11.3281 1.45688 11.3281H30.5434ZM14.7502 2.34375H17.2502C18.9611 2.34375 20.4134 3.49484 20.9023 5.07812H11.098C11.5869 3.49484 13.0392 2.34375 14.7502 2.34375Z"
									fill="white"
								/>
								<path
									d="M4.67652 36.7341C4.80691 38.5655 6.3473 40 8.18324 40H23.8177C25.6536 40 27.194 38.5655 27.3244 36.7341L28.9668 13.6719H3.03418L4.67652 36.7341ZM19.2051 19.9415C19.2375 19.2951 19.7886 18.7966 20.434 18.8296C21.0804 18.862 21.5782 19.4122 21.5459 20.0585L20.9209 32.5585C20.8896 33.185 20.3718 33.6719 19.7514 33.6719C19.0767 33.6719 18.5468 33.1076 18.58 32.4415L19.2051 19.9415ZM11.567 18.8296C12.2125 18.7972 12.7636 19.2952 12.7959 19.9415L13.4209 32.4415C13.4542 33.1079 12.9239 33.6719 12.2495 33.6719C11.6292 33.6719 11.1114 33.185 11.08 32.5585L10.455 20.0585C10.4228 19.4122 10.9206 18.862 11.567 18.8296Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default UserAvaEditModal
