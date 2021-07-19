import React, { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import UserEditModal from "./UserEditModal"
import { useSelector } from "react-redux"

const UserInfo = () => {
	const { t } = useTranslation()
	const { loggedUser } = useSelector((state) => state.user)

	//STATES
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	//MODALS
	const openEditModal = useCallback(async () => {
		setIsEditModalOpen(true)
	}, [])
	const closeEditModal = useCallback(async () => {
		setIsEditModalOpen(false)
	}, [])

	return (
		<div className="user__wrapper--top color-blueGray">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<span className="myText--large color-blueGray">
					{t("user.contactInformation")}
				</span>
				<svg
					onClick={openEditModal}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M20.7921 1.86301L22.115 3.18593C22.5567 3.62759 22.8 4.21522 22.8 4.84019C22.8 5.46516 22.5567 6.05279 22.115 6.49428L20.4945 8.11478L15.8633 3.48351L17.4838 1.86301C18.3669 0.979686 19.9079 0.97883 20.7921 1.86301ZM2.65447 16.6917L14.5389 4.80642L19.1703 9.43786L7.28488 21.3223C7.22509 21.3821 7.15022 21.4251 7.06782 21.4456L1.78057 22.7631C1.74322 22.7725 1.70484 22.7771 1.66732 22.7771C1.54483 22.7771 1.42508 22.7285 1.33719 22.6406C1.22104 22.5244 1.17427 22.3551 1.21367 22.196L2.53094 16.9087C2.5515 16.8274 2.59467 16.7516 2.65447 16.6917Z"
						fill="#3CAF48"
					/>
				</svg>
			</div>

			<div className="d-flex">
				<span className="user__label mr-3">{t("fullname")}:</span>
				<span className="myText--small">{loggedUser.fullname}</span>
			</div>
			<div className="d-flex">
				<span className="user__label mr-3">{t("email")}:</span>
				<span className="myText--small">{loggedUser.email}</span>
			</div>
			<div className="d-flex">
				<span className="user__label mr-3">{t("username")}:</span>
				<span className="myText--small">{loggedUser.username}</span>
			</div>
			<div className="d-flex">
				<span className="user__label mr-3">{t("phone")}:</span>
				<span className="myText--small">{loggedUser.phone}</span>
			</div>
			<div className="d-flex">
				<span className="user__label mr-3">{t("address")}:</span>
				<span className="myText--small">{loggedUser.address}</span>
			</div>
			{isEditModalOpen && (
				<UserEditModal
					closeEditModal={closeEditModal}
					isEditModalOpen={isEditModalOpen}
				/>
			)}
		</div>
	)
}

export default UserInfo
