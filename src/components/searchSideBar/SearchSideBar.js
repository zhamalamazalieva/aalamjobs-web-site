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
	updateSalaryMax,
	updateSalaryMin,
	updateCurrency
} from "../../redux/actions/filterActions"

const SearchSideBar = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage()

	//STATES
	const [isLoading, setIsLoading] = useState(false)

	const [currencies, setCurrencies] = useState([])

	const [cities, setCities] = useState([])

	const [countries, setCountries] = useState([])

	const [sectors, setSectors] = useState([])

	const [employmentTypes, setEmploymentTypes] = useState([])

	const [fetchError, setFetchError] = useState(null)

	//USE_SELECTOR
	const { selectedCity, selectedCountry, selectedSector, selectedEmploymentType, selectedCurrency, selectedSalaryMax, selectedSalaryMin } = useSelector(state => state.filter)


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
				country:c.country
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



	return (
		<div>
			<Form className="search__wrapper">
				<span className="myText--small mb-4 d-center color-blueGray">
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
						onChange={(val) => dispatch(updateCountry(val))}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.city")}
					</Form.Label>
					<Select
						className="react-select"
						classNamePrefix="react-select"
						options={cities.filter((item) => item.country === selectedCountry.value)}
						value={selectedCity}
						onChange={(val) => dispatch(updateCity(val))}
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.sector")}
					</Form.Label>
					<Select
						className="react-select"
						value={selectedSector}
						onChange={(val) => dispatch(updateSector(val))}
						options={sectors}
						classNamePrefix="react-select"
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.salary")}
					</Form.Label>
					<Form.Group className="d-flex">
						<Form.Control className="search__input mr-1" type="number" placeholder="min" value={selectedSalaryMin} onChange={e => dispatch(updateSalaryMin(parseInt(e.target.value)))}/>
						<Form.Control className="search__input ml-1" type="number" placeholder="max" value={selectedSalaryMax} onChange={e => dispatch(updateSalaryMax(parseInt(e.target.value)))}/>
					</Form.Group>
					<Select
						className="react-select"
						options={currencies}
						value={selectedCurrency}
						onChange={(val) => dispatch(updateCurrency(val))}
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
						onChange={(val) => dispatch(updateEmploymentType(val))}
						options={employmentTypes}
						classNamePrefix="react-select"
					/>
				</Form.Group>
				<Button
					variant="success"
					className="mt-3 myBorderRadius m-width"
					type="submit"
				>
					{t("vacancy.allVacancies")}
				</Button>
			</Form>
		</div>
	)
}
export default SearchSideBar
