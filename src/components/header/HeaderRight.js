import React, { useState, useCallback } from "react"
import { Row } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import localization from "../../localizaton/localication"
import { getCurrentLanguage } from "../../localizaton/localication"
import * as Constants from "../../constants/index"
import chevron from "../../assets/icons/chevron.svg"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import avatar from "../../../src/assets/img/will.jpg"
import ConfirmLogout from "./HeaderLogOutModal"

const HeaderRight = () => {
	const { t } = useTranslation()

	//STATES
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

	const currentLanguage = getCurrentLanguage()
	const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)
	const isAuth = useSelector((state) => state.auth.isAuth)

	//MODALS
	const openLogoutModal = useCallback(async () => {
		setIsLogoutModalOpen(true)
	}, [])
	const closeLogoutModal = useCallback(async () => {
		setIsLogoutModalOpen(false)
	}, [])

	//SWITCH__LANGUAGES
	const onClick = (lang) => {
		localization.changeLanguage(lang)
		localStorage.setItem("lang", lang)
		setSelectedLanguage(lang)
	}
	return (
		<Row className="bg-color--darkGreen d-flex justify-content-end align-items-center max-width">
			<Dropdown>
				<Dropdown.Toggle
					type="text"
					id="dropdown-basic"
					className="header__lang-select d-flex align-items-center"
				>
					<span className="text-capitalize">{selectedLanguage}</span>
					<img src={chevron} alt="chevron" className="header__chevron" />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={() => onClick(Constants.EN)}>
						En
					</Dropdown.Item>
					<Dropdown.Item onClick={() => onClick(Constants.KG)}>
						Kg
					</Dropdown.Item>
					<Dropdown.Item onClick={() => onClick(Constants.RU)}>
						Ru
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			{!isAuth ? (
				<div className="ml-3">
					<Link to="/login" className="header__text cursor-pointer">
						{t("header.login")}
					</Link>
					<Link to="/register">
						<button className="ml-4 header__btn myBtn--white">
							{t("header.signUp")}
						</button>
					</Link>
				</div>
			) : (
				<Dropdown>
					<Dropdown.Toggle
						type="text"
						id="dropdown-basic"
						className="header__lang-select d-flex align-items-center"
					>
						<div className="header__img">
							<img src={avatar} className="header__img" alt="avatar" />
						</div>
						<img src={chevron} alt="chevron" className="header__chevron" />
					</Dropdown.Toggle>
					<Dropdown.Menu style={{ minWidth: "250px" }}>
						<Dropdown.Item>
							<img
								src={avatar}
								className="header__img header__img--big mr-2"
								alt="avatar"
							/>
							<span>Meerim Aitikeeva</span>
						</Dropdown.Item>

						<Dropdown.Item>
							<div className="d-flex justify-content-between mb-1">
								<Link
									to="/favourites"
									className="header__settings-link color-text"
								>
									{t("header.favourites")}
								</Link>
								<span>5</span>
							</div>
						</Dropdown.Item>

						<Dropdown.Item>
							<div className="d-flex justify-content-between mb-1">
								<Link
									to="/favourites"
									className="header__settings-link color-text"
								>
									{t("header.myCV")}
								</Link>
								<span>5</span>
							</div>
						</Dropdown.Item>

						<Dropdown.Item>
							<Link to="/support" className="header__settings-link color-text">
								{t("header.support")}
							</Link>
						</Dropdown.Item>
						<Dropdown.Item onClick={openLogoutModal}>
							<span className="header__settings-link color-text">
								{t("header.logOut")}
							</span>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			)}
			{isLogoutModalOpen && (
				<ConfirmLogout
					closeLogoutModal={closeLogoutModal}
					isLogoutModalOpen={isLogoutModalOpen}
				/>
			)}
		</Row>
	)
}
export default HeaderRight
