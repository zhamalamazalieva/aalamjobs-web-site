import React from "react"
import avatar from "../../assets/img/user.png"
const UserAvatar = ({ user }) => {
	return (
		<div className="user__wrapper--top mb-4">
			<div className="d-flex align-items-center">
				<div className="user__img mr-4">
					<img src={avatar} alt="avatar-photo" />
				</div>
				<div className="myText--xlarge color-blueGray">
					<span>Will Smith</span>
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
		</div>
	)
}

export default UserAvatar
