import React, { useCallback, useState } from "react"
import avatar from "../../assets/img/user.png"
import UserAvaEditModal from "./UserAvaEditModal"

const UserAvatar = ({user}) => {
	const [isAvaEditModalOpen, setIsAvaEditModalOpen] = useState(false)

	//MODALS
	const openAvaEditModal = useCallback(async () => {
		setIsAvaEditModalOpen(true)
	}, [])
	const closeAvaEditModal = useCallback(async () => {
		setIsAvaEditModalOpen(false)
	}, [])

	return (
		<div className="user__wrapper--top mb-4">
			<div className="d-flex align-items-center">
				<div className="user__img mr-4" onClick={openAvaEditModal}>
					<img src={user.photo} alt="avatar-photo" />
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="user__add-photo"
					>
						<path
							d="M20 40C8.97156 40 0 31.0284 0 20C0 8.97156 8.97156 0 20 0C31.0284 0 40 8.97156 40 20C40 31.0284 31.0284 40 20 40ZM20 2.5C10.35 2.5 2.5 10.35 2.5 20C2.5 29.65 10.35 37.5 20 37.5C29.65 37.5 37.5 29.65 37.5 20C37.5 10.35 29.65 2.5 20 2.5Z"
							fill="#ABAABD"
						/>
						<path
							d="M28.75 21.25H11.25C10.56 21.25 10 20.69 10 20C10 19.31 10.56 18.75 11.25 18.75H28.75C29.44 18.75 30 19.31 30 20C30 20.69 29.44 21.25 28.75 21.25Z"
							fill="#5A5A67"
						/>
						<path
							d="M20 30C19.31 30 18.75 29.44 18.75 28.75V11.25C18.75 10.56 19.31 10 20 10C20.69 10 21.25 10.56 21.25 11.25V28.75C21.25 29.44 20.69 30 20 30Z"
							fill="#5A5A67"
						/>
					</svg>
				</div>
				<div className="myText--xlarge color-blueGray">
					<span>{user.fullname}</span>
					<div className="d-flex align-items-center">
						<svg
							className="mr-2"
							width="18"
							height="24"
							viewBox="0 0 18 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 0C4.20726 0 0.308105 3.89916 0.308105 8.69184C0.308105 14.6397 8.0865 23.3715 8.41767 23.7404C8.72873 24.0868 9.27182 24.0862 9.58232 23.7404C9.9135 23.3715 17.6919 14.6397 17.6919 8.69184C17.6918 3.89916 13.7927 0 9 0ZM9 13.065C6.58865 13.065 4.62693 11.1032 4.62693 8.69184C4.62693 6.2805 6.5887 4.31878 9 4.31878C11.4113 4.31878 13.373 6.28055 13.373 8.69189C13.373 11.1032 11.4113 13.065 9 13.065Z"
								fill="#5A5A67"
							/>
						</svg>

						<span className="myText--small">Bishkek, Kyrgyzstan</span>
					</div>
				</div>
			</div>
			{isAvaEditModalOpen && (
				<UserAvaEditModal
					closeAvaEditModal={closeAvaEditModal}
					isAvaEditModalOpen={isAvaEditModalOpen}
					user={user}
				/>
			)}
		</div>
	)
}

export default UserAvatar
