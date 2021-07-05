import React from 'react'
import { useTranslation  } from 'react-i18next'
import { Col, Row } from 'react-bootstrap'


const VacancyDetail = () => {
    const {t} = useTranslation()
    return (
        <div className="border-info p-4 d-flex flex-column cart__wrapper">
            <h5 className="cart__title">{t('vacancy.position')}</h5>
            <span className="cart__company myText--small">{t("vacancy.company")}</span>
            <div className="">
                <span className="cart__location myText--xsmall">Bishkek</span>{", "}
                <span className="cart__location myText--xsmall">Kyrgyzstan</span>
            </div>
            <span  className="cart__salary myText--large">200000 - 300000 som</span>
            <span  className="cart__date myText--xsmall">08.12.2021</span>
        </div>
    )
}
export default VacancyDetail