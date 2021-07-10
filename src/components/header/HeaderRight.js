import React, { useState } from "react"
import { Button, Row } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import localization from "../../localizaton/localication"
import { getCurrentLanguage } from "../../localizaton/localication"
import * as Constants from "../../constants/index"
import chevron from "../../assets/icons/chevron.svg"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const HeaderRight = () => {
    const { t } = useTranslation()

	const currentLanguage = getCurrentLanguage()
	const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)

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
			<Link to="/login" className="header__text cursor-pointer">
				{t("header.login")}
			</Link>
			<Link to='/register'>
			<button className="ml-4 header__btn myBtn--white">
				{t("header.signUp")}
			</button>
			</Link>
		</Row>
	)
}
export default HeaderRight
