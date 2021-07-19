import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import FullSpinner from "../spinners/FullSpinner"
import UserAvatar from "./UserAvatar"
import UserInfo from "./UserInfo"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from "../../redux/actions/userAction"

const UserContent = () => {
	const ServerService = useContext(ServerServiceContext)
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()

	const fetchUser = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getUser()
		if (hasError) {
			console.log("Ошибка с сервером", hasError)
		} else {
			dispatch(getUserInfo(data))
		}
		setIsLoading(false)
	}, [ServerService])

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<div className="col-9">
			<UserAvatar />
			<UserInfo />
		</div>
	)
}
export default UserContent
