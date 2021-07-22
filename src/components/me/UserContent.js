import React  from "react"
import UserAvatar from "./UserAvatar"
import UserInfo from "./UserInfo"

const UserContent = () => {
	return (
		<div className="col-9">
			<UserAvatar />
			<UserInfo />
		</div>
	)
}
export default UserContent
