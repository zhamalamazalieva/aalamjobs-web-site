import {  Row, Image} from 'react-bootstrap'
import logo from '../../assets/img/logo-white.png'
import HeaderRight from './HeaderRight'
import HeaderCenter from './HeaderCenter'
import { useDispatch } from "react-redux"
import { getUserInfo } from "../../redux/actions/userAction"
import React, { useState, useContext, useCallback, useEffect } from "react"
import ServerServiceContext from "../../contexts/ServerServiceContext"

const Header = () => {
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
    return(
    <div className="myContainer">
        <Row className="justify-content-between align-items-center">
            <div className="col-md-3 d-flex justify-content-center">
                <Image src={logo} alt="logo" size="sm" className="header__logo"/>
            </div>
            <div className="col-md-6  d-flex justify-content-center"> 
                <HeaderCenter/>
            </div>
            <div className="col-md-3  d-flex justify-content-end">
               <HeaderRight/>
            </div>
        </Row>
    </div>
    )
}
export default Header