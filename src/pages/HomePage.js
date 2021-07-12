import React, { useState, useContext, useCallback, useEffect } from "react"
import VacanciesContent from "../components/vacancies/VacanciesContent"
import SearchField from "../components/searchField/SearchField"
import SearchSideBar from "../components/searchSideBar/SearchSideBar"
import { Col, Row } from "react-bootstrap"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import ServerServiceContext from "../contexts/ServerServiceContext"
import { getCurrentLanguage } from "../localizaton/localication";
import { useTranslation } from "react-i18next"


const HomePage = () => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage();

	//STATES
	const [isLoading, setIsLoading] = useState(false)

	const [currencies, setCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency ]= useState({})

	const [cities, setCities] = useState([]);
	const [selectedCity, setSelectedCity] = useState({});

	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState({});

	const [sectors, setSectors] = useState([]);

	const [fetchError, setFetchError] = useState(null);

		  //FETCH_CITIES
		  const fetchCities = useCallback(async () => {
			setIsLoading(true);
			const { hasError, data } = await ServerService.getCities();
			if (hasError) {
			  setFetchError("Ошибка при загрузке данных");
			} else {
			  const city = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
				country: c.country_name[selectedLanguage],
			  }));
			  setCities(city);
			}
			return null;
		  }, [ServerService, selectedLanguage]);
		
		  useEffect(() => {
			fetchCities();
		  }, [ServerService, fetchCities]);
		
		  const reFetchCities = useCallback(async () => {
			await fetchCities();
		  }, [fetchCities]);
		
	  //FETCH_COUNTRIES
	  const fetchCountries = useCallback(async () => {
		setIsLoading(true);
		const { hasError, data } = await ServerService.getCountries();
		if (hasError) {
		  setFetchError("Ошибка при загрузке данных");
		} else {
		  const country = data.map((c) => ({
			value: c.id,
			label: c.name[selectedLanguage],
		  }));
		  setCountries(country);
		}
		return null;
	  }, [ServerService, selectedLanguage]);
	
	  useEffect(() => {
		fetchCountries();
	  }, [ServerService, fetchCountries]);

		  //FETCH_SECTORS
  const fetchSectors = useCallback(async () => {
    const { hasError, data } = await ServerService.getSectors();
    if (hasError) {
      setFetchError("Произошла ошибка при загрузке данных");
    } else {
      const sec = data.map((s) => ({ value: s.id, label: s.name }));
      setSectors(sec);
    }
    return null;
  }, [ServerService]);

  useEffect(() => {
    fetchSectors();
  }, [fetchSectors]);
	
		
		 //FETCH_CURRENCIES
		 const fetchCurrencies = useCallback(async () => {
			setIsLoading(true);
			const { hasError, data } = await ServerService.getCurrencies();
			if (hasError) {
			  setFetchError("Ошибка при загрузке данных");
			} else {
			  const currency = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
				sign: c.sign,
			  }));
			  setCurrencies(currency);
			}
			return null;
		  }, [ServerService, selectedLanguage]);
		
		  useEffect(() => {
			fetchCurrencies();
		  }, [ServerService, fetchCurrencies]);
		
		  const reFetchCurrencies = useCallback(async () => {
			await fetchCurrencies();
		  }, [fetchCurrencies]);


	return (
		<>
			<div className="bg-color--darkGreen">
				<Header />
			</div>
			<Row className="myContainer mt-5 mb-5">
				<Col md="3" xs="12">
					<SearchSideBar 
						cities={cities}
						countries={countries}
						sectors={sectors}
					/>
				</Col>
				<Col md="9" xs="12">
					<SearchField/>
					<VacanciesContent />
				</Col>
			</Row>
			<Footer />
		</>
	)
}

export default HomePage
