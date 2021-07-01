import React from 'react'
import { Col, Row, Image} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const HeaderCenter = () => {

    const { t } = useTranslation()
    return(
        <div className="">
              <NavLink className="header__link" exact to="/">{t("header.vacancies")}</NavLink>
              <NavLink className="header__link" exact to="/favourites">{t("header.favourites")}</NavLink>
              <NavLink className="header__link" exact to="/applied">{t("header.applied")}</NavLink>
              <NavLink className="header__link" exact to="/mycv">{t("header.myCv")}</NavLink>
              <NavLink className="header__link" exact to="/me">{t("header.me")}</NavLink>
        </div>
    )
}
export default HeaderCenter