import React from 'react'
import { useTranslation  } from 'react-i18next'
import { Col, Row } from 'react-bootstrap'
import VacancyCart from './VacancyCart';
import VacancyDetail from './VacancyDetail'


const VacanciesContent = () => {
    const {t} = useTranslation()
    return (
        <div className="vacancy__wrapper">
            <h1 className="myText--large text-center">{t('allVacancies')}</h1>
            <Row className="">
                <Col md="6">
                <VacancyCart/>
                <VacancyCart/>
                <VacancyCart/>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}
export default VacanciesContent