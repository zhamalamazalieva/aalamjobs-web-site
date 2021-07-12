import React from 'react'
import { useTranslation } from 'react-i18next'
const UserInfo = ({user}) => {
    const {t} = useTranslation()

    return (
        <div className="user__wrapper--top color-blueGray">
            <span className="myText--large color-blueGray">{t("user.contactInformation")}</span>
            <div className="d-flex">
                <span className="user__label mr-3">{t("name")}:</span>
                <span className="myText--small">Will Smith</span>
            </div>
            <div className="d-flex">
                <span className="user__label mr-3">{t("email")}:</span>
                <span className="myText--small">{user.email}</span>
            </div>
            <div className="d-flex">
                <span className="user__label mr-3">{t("phone")}:</span>
                <span className="myText--small">{user.phone}</span>
            </div>
            <div className="d-flex">
                <span className="user__label mr-3">{t("address")}:</span>
                <span className="myText--small">{user.address}</span>
            </div>
        </div>
    )
}

export default UserInfo