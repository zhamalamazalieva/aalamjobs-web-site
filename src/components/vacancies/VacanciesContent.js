import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import VacancyCart from "./VacancyCart"
import VacancyDetail from "./VacancyDetail"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import FullSpinner from "../spinners/FullSpinner"
import NoItems from "../noItems/NoItems"
import Pagination from 'react-bootstrap/Pagination'

const VacanciesContent = () => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)

	//STATES
	const [isLoading, setIsLoading] = useState(false)
	const [vacancies, setVacancies] = useState([])

	const [count, setCount] = useState(null)

	const [currentPage, setCurrentPage] = useState(1)
	const [pagesCount, setPagesCount] = useState(1)

	const [vacancyToShow, setVacancyToShow] = useState(1)

	const showVacancy = useCallback(async (vacancy) => {
		setVacancyToShow(vacancy)
	}, [])

	let active = currentPage;
	console.log(pagesCount)
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

	//FETCH_VACANCIES
	const fetchVacancies = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getVacancies(currentPage)

		if (hasError) {
			console.log("Что-то пошло не так с сервером")
		} else {
			setPagesCount(data.num_pages)
			setVacancies(data.results)
			setCount(data.count)
			setVacancyToShow(data?.results[0] || {})
		}
		setIsLoading(false)
	}, [ServerService, currentPage])

	useEffect(() => {
		fetchVacancies()
	}, [fetchVacancies, currentPage])

	return (
		<div className="vacancy__wrapper">
			<h1 className="myText--large color-blueGray text-center mb-3 text-uppercase">
				{t("vacancy.allVacancies")}
			</h1>
			<Row className="m-minus">
				<Col md="6" className="ml-minus">
					{isLoading ? (
						<FullSpinner />
					) : (
						<>
							{count ? (
								<>
								<VacancyCart vacancies={vacancies} showVacancy={showVacancy} vacancyToShow={vacancyToShow}/>
								<Pagination size="sm">{items}</Pagination>
								</>
							) : (
								<NoItems />
							)}
						</>
					)}
				</Col>
				<Col md="6">
					<VacancyDetail vacancyToShow={vacancyToShow} />
				</Col>
			</Row>
		</div>
	)
}
export default VacanciesContent
