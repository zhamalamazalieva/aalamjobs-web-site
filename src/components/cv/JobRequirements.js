import React, { useState, useContext, useCallback, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import { getCurrentLanguage } from "../../localizaton/localication"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import Select from "react-select"
// import Select from '@material-ui/core/Select';

const JobRequirements = ({
	selectedEmploymentType,
	setSelectedEmploymentType,
	selectedCurrency,
	setSelectedCurrency,
	setInputValues,
	inputValues,
}) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage()

	//STATES
	const [employmentTypes, setEmploymentTypes] = useState([])
	const [currencies, setCurrencies] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [fetchError, setFetchError] = useState(null)

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


	const handleChange = (e) => {
		setInputValues((inputValues) => ({
			...inputValues,
			[e.target.name]: e.target.value,
		}))
	}

	//FETCH_EMPLOYMENY_TYPE
	const fetchEmploymentTypes = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getEmploymentTypes()
		if (hasError) {
			setFetchError("Ошибка при загрузке данных")
		} else {
			const employment = await data.map((c) => ({
				value: c.id,
				label: c.name[selectedLanguage],
				sign: c.sign,
			}))
			setEmploymentTypes(employment)
		}
		return null
	}, [ServerService, selectedLanguage])

	useEffect(() => {
		fetchEmploymentTypes()
	}, [ServerService, fetchEmploymentTypes])
	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center justify-content-between">
				<h3 className="myText--large mb-2 text-capitalize">
					{t("cv.jobRequirements")}
				</h3>
			
					<div className="d-flex m-width">
					<div className="width-50">
					<span className="required__textlabel">{t("expectedSalary")}</span>
						<TextField
							fullWidth
							size="small"
							className="m-width50 mb-4 swiper-no-swiping"
							label={t("salary")}
							variant="outlined"
							name="salary"
							value={inputValues.salary}
							onChange={handleChange}
						/>
					</div>

					<div className="m-width50 ">
					<span className="required__textlabel">{t("currency")}</span>
						<Select
							options={currencies}
							value={selectedCurrency}
							onChange={(e) => setSelectedCurrency(e)}
							className="swiper-no-swiping m-width application__select "
						/>
					</div>
				
				</div>
				<div className="m-width">
				<span className="required__textlabel" >{t("typeOfWork")}</span>
				<Select
					options={employmentTypes}
					value={selectedEmploymentType}
					onChange={(e) => setSelectedEmploymentType(e)}
					className="swiper-no-swiping m-width mb-4 application__select "
				/>
</div>
				<TextField
					fullWidth
					size="small"
					className="max-width"
					label={t("positionWouldYouLikeToWork")}
					variant="outlined"
					className="mb-4 required__textfield swiper-no-swiping"
					name="position"
					value={inputValues.position}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					type="date"
					size="small"
					className="max-width"
					label={t("theEarliestDateYouCanStartWorking")}
					variant="outlined"
					defaultValue="2017-05-24"
					className="mb-4 required__textfield  swiper-no-swiping"
					name="date_can_start"
					value={inputValues.date_can_start}
					onChange={handleChange}
				/>

				<RadioGroup
					aria-label="gender"
					name="hasComputer"
					value={inputValues.hasComputer}
					onChange={handleChange}
					className="d-flex flex-row m-width mb-4 swiper-no-swiping"
					size="small"
				>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="false"
							labelPlacement="end"
							control={<Radio />}
							label={t("iNeedAComputer")}
						/>
					</div>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="true"
							labelPlacement="end"
							control={<Radio />}
							label={t("iHaveAComputer")}
						/>
					</div>
				</RadioGroup>
				<TextField
					fullWidth
					multiline={true}
					rows="5"
					size="small"
					label={t("profile")}
					variant="outlined"
					className="mb-4 max-width swiper-no-swiping"
					name="profile"
					value={inputValues.profile}
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default JobRequirements
