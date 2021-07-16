import React, { useState, useContext, useCallback, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Select from "react-select"
import { getCurrentLanguage } from "../../localizaton/localication"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import { useDispatch, useSelector } from "react-redux"
import {
	updateCity,
	updateCountry,
	updateSector,
	updateEmploymentType,
} from "../../redux/actions/filterActions"

const SearchSideBar = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage()

	//STATES
	const [isLoading, setIsLoading] = useState(false)

	const [currencies, setCurrencies] = useState([])
	const [selectedCurrency, setSelectedCurrency] = useState("")

	const [cities, setCities] = useState([])
	const [selectedCity, setSelectedCity] = useState({})

	const [countries, setCountries] = useState([])
	const [selectedCountry, setSelectedCountry] = useState({})

	const [sectors, setSectors] = useState([])
	const [selectedSector, setSelectedSector] = useState({})

	const [employmentTypes, setEmploymentTypes] = useState([])
	const [selectedEmploymentType, setSelectedEmploymentType] = useState({})

	const [fetchError, setFetchError] = useState(null)

	//USE_SELECTORS
	const stateCity = useSelector((state) => state.filter.city)
	const stateCountry = useSelector((state) => state.filter.country)
	const stateSector = useSelector((state) => state.filter.sector)
	const stateEmploymentType = useSelector(
		(state) => state.filter.employmentType
	)

	//FETCH_CITIES
	const fetchCities = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getCities()
		if (hasError) {
			setFetchError("Ошибка при загрузке данных")
		} else {
			const city = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
				country: c.country_name[selectedLanguage],
			}))
			setCities(city)
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchCities()
	}, [ServerService, fetchCities])

	//FETCH_COUNTRIES
	const fetchCountries = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getCountries()
		if (hasError) {
			setFetchError("Ошибка при загрузке данных")
		} else {
			const country = data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
			}))
			setCountries(country)
			country[0] && setSelectedCountry(country[0])
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchCountries()
	}, [ServerService, fetchCountries])

	//FETCH_SECTORS
	const fetchSectors = useCallback(async () => {
		const { hasError, data } = await ServerService.getSectors()
		if (hasError) {
			setFetchError("Произошла ошибка при загрузке данных")
		} else {
			const sec = data.map((s) => ({ value: s.id, label: s.name }))
			setSectors(sec)
			sec[0] && setSelectedSector(sec[0])
		}
		return null
	}, [ServerService])

	useEffect(() => {
		fetchSectors()
	}, [fetchSectors])

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
			currency[0] && setSelectedCurrency(currency[0])
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchCurrencies()
	}, [ServerService, fetchCurrencies])

	//FETCH_EMPLOYMENT_TYPES
	const fetchEmploymentTypes = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getEmploymentTypes()
		if (hasError) {
			setFetchError("Ошибка при загрузке данных")
		} else {
			const emp = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
			}))
			setEmploymentTypes(emp)
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchEmploymentTypes()
	}, [ServerService, fetchEmploymentTypes])

	// useEffect(() => {
	// 	// setSelectedCity(
	// 	// 	stateCity
	// 	// 		? {
	// 	// 				label: cities.filter((c) => c.value === stateCity)[0].label,
	// 	// 				value: stateCity,
	// 	// 		  }
	// 	// 		: {
	// 	// 				label: t("Select a city"),
	// 	// 		  }
	// 	// )
	// 	setSelectedCountry(
	// 		stateCountry
	// 			? {
	// 					label: countries.filter((c) => c.value === stateCountry)[0].label,
	// 					value: stateCountry,
	// 			  }
	// 			: {
	// 					label: t("Select a country"),
	// 			  }
	// 	)
	// 	setSelectedSector(
	// 		stateSector
	// 			? {
	// 					label: sectors.filter((c) => c.value === stateSector)[0].label,
	// 					value: stateSector,
	// 			  }
	// 			: {
	// 					label: t("Select a sector"),
	// 			  }
	// 	)
	// 	setSelectedEmploymentType(
	// 		stateEmploymentType
	// 			? {
	// 					label: employmentTypes.filter((c) => c.value === stateEmploymentType)[0].label,
	// 					value: stateEmploymentType,
	// 			  }
	// 			: {
	// 					label: t("Select an employment type"),
	// 			  }
	// 	)
	// }, [stateCity, stateCountry, stateSector,stateEmploymentType ])

	return (
		<div>
			<Form className="search__wrapper">
				<span className="myText--small d-center color-blueGray">
					{t("advancedSearch")}
				</span>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.country")}
					</Form.Label>
					<Select
						className="react-select"
						classNamePrefix="react-select"
						placeholder="Turkey"
						options={countries}
						value={selectedCountry}
						onChange={(e) => dispatch(updateCountry(e.value))}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.city")}
					</Form.Label>
					<Select
						className="react-select"
						classNamePrefix="react-select"
						options={cities}
						value={selectedCity}
						onChange={(e) => dispatch(updateCity(e.value))}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.sector")}
					</Form.Label>
					<Select
						className="react-select"
						value={selectedSector}
						onChange={(e) => dispatch(updateSector(e.value))}
						options={sectors}
						classNamePrefix="react-select"
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.salary")}
					</Form.Label>
					<Form.Group className="d-flex">
						<Form.Control className="search__input mr-1" placeholder="min" />
						<Form.Control className="search__input ml-1" placeholder="max" />
					</Form.Group>
					<Select
						className="react-select"
						options={currencies}
						value={selectedCurrency}
						onChange={(e) => setSelectedCurrency(e)}
						classNamePrefix="react-select"
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.employmentType")}
					</Form.Label>
					<Select
						className="react-select"
						value={selectedEmploymentType}
						onChange={(e) => dispatch(updateEmploymentType(e.value))}
						options={employmentTypes}
						classNamePrefix="react-select"
					/>
				</Form.Group>
				<Button
					variant="success"
					className="mt-3 myBorderRadius m-width"
					type="submit"
				>
					{t("apply")}
				</Button>
			</Form>
		</div>
	)
}
export default SearchSideBar
