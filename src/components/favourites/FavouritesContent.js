import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import FullSpinner from "../spinners/FullSpinner"
import NoItems from "../noItems/NoItems"
import Pagination from "react-bootstrap/Pagination"
import { getCurrentLanguage } from "../../localizaton/localication";
import ServerService from "../../services/ServerService"
import { toastify } from '../../helpers/toast';
import VacancyCart from "../vacancies/VacancyCart"
import VacancyDetail from "../vacancies/VacancyDetail"


const FavouritesContent = () => {
    const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage();
    const [isLoading, setIsLoading] = useState(false)
	const [vacancies, setVacancies] = useState([])

	const [count, setCount] = useState(null)

	const [currentPage, setCurrentPage] = useState(1)
	const [pagesCount, setPagesCount] = useState(1)

	const [vacancyToShow, setVacancyToShow] = useState(1)

	const [currencies, setCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency ]= useState({})

	const [cities, setCities] = useState([]);
	const [sectors, setSectors] = useState([]);
	const [countries, setCountries] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	const [isAdded, setIsAdded] = useState(false)

    return (
        <>
        FavouritesContent
        </>
    )
}
export default FavouritesContent