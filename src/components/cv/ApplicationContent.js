import React from 'react'
import { useTranslation  } from 'react-i18next'
import { Col, Row } from 'react-bootstrap'
import Applicationform from './ApplicationForm'

const ApplicationContent = () => {
    const {t} = useTranslation()

    return (
        <>
       	<div className="vacancy__wrapper">
			<h1 className="myText--large text-center mb-3 text-uppercase">
				{t("cv.jobApplicationForm")}
			</h1>
			<Row >
				<Col md="9" >
                <Applicationform/> 
				</Col>
				
			</Row>
		</div>
        </>
    )
}
export default ApplicationContent