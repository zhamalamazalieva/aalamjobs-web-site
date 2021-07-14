import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import VacancyCart from "./VacancyCart"
import VacancyDetail from "./VacancyDetail"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import FullSpinner from "../spinners/FullSpinner"
import NoItems from "../noItems/NoItems"
import Pagination from "react-bootstrap/Pagination"
import { getCurrentLanguage } from "../../localizaton/localication"
import { toastify } from "../../helpers/toast"

const VacanciesContent = () => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage()

	//STATES
	const [isLoading, setIsLoading] = useState(false)

	const [vacancies, setVacancies] = useState([])

	const [count, setCount] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [pagesCount, setPagesCount] = useState(1)

	const [vacancyToShow, setVacancyToShow] = useState(1)

	const [currencies, setCurrencies] = useState([])
	const [selectedCurrency, setSelectedCurrency] = useState({})

	const [cities, setCities] = useState([])
	const [sectors, setSectors] = useState([])
	const [countries, setCountries] = useState([])
	
	const [fetchError, setFetchError] = useState(null)

	const [favourites, setFavourites] = useState("")

	//FILTER_VACANCIES_STATES
	const [filterByCity, setFilterByCity] = useState([])
	const [filterByCountry, setFilterByCountry] = useState([])
	const [filterBySector, setFilterBySector] = useState([])
	const [filterBySalary, setFilterBySalary] = useState({})
	const [allVacancies, setAllVacancies] = useState(false)
	const [salaryValue, setSalaryValue] = React.useState([1000, 200000])


	//FETCH_CITIES
	useEffect(() => {
		const fetchCities = async () => {
			const { hasError, data } = await ServerService.getCities()
			if (hasError) {
				setFetchError("Произошла ошибка при загрузке данных")
			} else {
				setCities(data)
			}
		}
		fetchCities()
	}, [ServerService])

	//FETCH_COUNTRIES
	useEffect(() => {
		const fetchCountries = async () => {
			const { hasError, data } = await ServerService.getCountries()
			if (hasError) {
				setFetchError("Произошла ошибка при загрузке данных")
			} else {
				setCountries(data.map((c) => ({ ...c, checked: false })))
			}
		}
		fetchCountries()
	}, [ServerService])

	//FETCH_SECTORS
	useEffect(() => {
		const fetchSectors = async () => {
			const { hasError, data } = await ServerService.getSectors()
			if (hasError) {
				setFetchError("Произошла ошибка при загрузке данных")
			} else {
				setSectors(data)
			}
		}
		fetchSectors()
	}, [ServerService])

	const handleChange = (event, newValue) => {
		setSalaryValue(newValue)
	}

	//FETCH_CURRENCIES
	const fetchCurrencies = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getCurrencies()
		if (hasError) {
			setFetchError("Ошибка при загрузке данных")
		} else {
			const currency = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
				sign: c.sign,
			}))
			setCurrencies(currency)
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchCurrencies()
	}, [ServerService, fetchCurrencies])

	//VACANCY_DETAIL
	const showVacancy = useCallback(async (vacancy) => {
		setVacancyToShow(vacancy)
	}, [])

	//VACANCY_FAVOURITES	
	const handleClickFavourites = useCallback(
		async (job) => {
			setIsLoading(true)
			const { hasError } = await ServerService.createFavourites({ job: job })
			if (hasError) {
				console.log("Произошла ошибка", hasError)
				toastify("error", t(""))
			} else {
				toastify("success", t("successfullyAdded"))
				setFavourites(job)
			}
			setIsLoading(false)
		},
		[ServerService]
	)

		//VACANCY_FAVOURITES	
		const handleClickDeleteFavourites = useCallback(
			async (job) => {
				setIsLoading(true)
				const { hasError } = await ServerService.deleteFavourites(job)
				if (hasError) {
					console.log("Произошла ошибка", hasError)
					toastify("error", t(""))
				} else {
					toastify("success", t("successfullyAdded"))
				}
				setIsLoading(false)
			},
			[ServerService]
		)

	// 	let active = currentPage;
	// 	console.log(pagesCount)
	// let items = [];
	// for (let number = 1; number <= 5; number++) {
	//   items.push(
	//     <Pagination.Item key={number} active={number === active}>
	//       {number}
	//     </Pagination.Item>,
	//   );
	// }

	
	//FECTH_VACANCIES
	const fetchVacancies = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getVacancies(
			currentPage,
			filterByCity,			
		)
		if (hasError) {
			console.log("Что-то пошло не так с сервером")
		} else {
			setPagesCount(data.num_pages)
			setVacancies(data.results)
			setCount(data.count)
			setVacancyToShow(data?.results[0] || {})
		}
		setIsLoading(false)
	}, [
		ServerService,
		currentPage,
		filterByCity,
	])

	useEffect(() => {
		fetchVacancies()
	}, [
		fetchVacancies,
		currentPage,
		filterByCity,
	])

	const reFetchVacancies = useCallback(async () => {
		fetchVacancies()
	}, [fetchVacancies])

	//FILTERS



	return (
		<div className="vacancy__wrapper">
			<h1 className="myText--large color-blueGray text-center mb-3 text-uppercase">
				{t("vacancy.allVacancies")}
			</h1>
			<Row className="">
				<Col md="6" className="">
					{isLoading ? (
						<FullSpinner />
					) : (
						<>
							{count ? (
								<>
									<VacancyCart
										vacancies={vacancies}
										showVacancy={showVacancy}
										vacancyToShow={vacancyToShow}
										favourites={favourites}
										handleClickFavourites={handleClickFavourites}
										handleClickDeleteFavourites={handleClickDeleteFavourites}
									/>
									{/* <Pagination size="sm">{items}</Pagination> */}
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
