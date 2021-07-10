import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import VacancyCart from "./VacancyCart"
import VacancyDetail from "./VacancyDetail"
import ServerServiceContext from "../../contexts/ServerServiceContext"

const VacanciesContent = () => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)

	//STATES
	const [isLoading, setIsLoading] = useState(false)
	const [vacancies, setVacancies] = useState([])

	
	return (
		<div className="vacancy__wrapper">
			<h1 className="myText--large color-blueGray text-center mb-3 text-uppercase">
				{t("vacancy.allVacancies")}
			</h1>
			<Row className="m-minus">
				<Col md="6" className="ml-minus">
					{ isLoading ? <span>...</span>:
                    (
                        <VacancyCart
                        vacancies={vacancies}
                        />
                    )}
				</Col>
				<Col md="6">
					<VacancyDetail />
				</Col>
			</Row>
		</div>
	)
}
export default VacanciesContent
