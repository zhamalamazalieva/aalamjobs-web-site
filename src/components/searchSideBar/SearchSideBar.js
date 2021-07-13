import React, { useState, useContext, useCallback, useEffect } from "react"
import {
	Form,
	Button,
} from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Select from "react-select"
import { getCurrentLanguage } from "../../localizaton/localication"

const SearchSideBar = ({
	cities, countries, sectors, currencies, selectedCity, setSelectedCity,
	selectedCurrency,setSelectedCurrency,  selectedCountry,
	setSelectedCountry, selectedSector, setSelectedSector
	}) => {
	const { t } = useTranslation()
	const selectedLanguage = getCurrentLanguage()
	console.log(currencies)

	//FILTER_VACANCIES_STATES
	const [filterByCity, setFilterByCity] = useState([])
	const [filterByCountry, setFilterByCountry] = useState([])
	const [filterBySector, setFilterBySector] = useState([])
	const [filterBySalary, setFilterBySalary] = useState({})
	const [allVacancies, setAllVacancies] = useState(false)
	const [salaryValue, setSalaryValue] = React.useState([1000, 200000])
	
	console.log(cities)
	console.log(selectedCity)
	
	return (
		<div>
			<Form className="search__wrapper">
				<span className="myText--small d-center color-blueGray">Advanced Search</span>
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
						onChange={e => setSelectedCountry(e)}
						
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
					 onChange={e => setSelectedCity(e)}
					 />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.sectors")}
					</Form.Label>
					<Select className="react-select"
					value={selectedSector}
					onChange={e => setSelectedSector(e)}
					options={sectors} 
					classNamePrefix="react-select" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.salary")}
					</Form.Label>
					<Form.Group className="d-flex">
					<Form.Control className="search__input mr-1" placeholder="min" />
					<Form.Control className="search__input ml-1" placeholder="max" />
					</Form.Group>
					<Select className="react-select"
					options={currencies} 
					value={selectedCurrency}
					onChange={e => setSelectedCurrency(e)}
					classNamePrefix="react-select" />

				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.employmentType")}
					</Form.Label>
					<Form.Control className="search__input" placeholder="Full-time" />
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
