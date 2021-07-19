import React, { useState, useContext, useCallback, useEffect } from "react";
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { getCurrentLanguage } from "../../localizaton/localication";
import ServerServiceContext from "../../contexts/ServerServiceContext";
import Select from 'react-select'

const JobRequirements = ({selectedEmploymentType, setSelectedEmploymentType, selectedCurrency, setSelectedCurrency, setInputValues, inputValues}) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext);
	const selectedLanguage = getCurrentLanguage();

	//STATES
	const [employmentTypes, setEmploymentTypes] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState(null);



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
	const handleChange = (e) => {
		setInputValues(inputValues => ({...inputValues, [e.target.name]:e.target.value}))
	}

    //FETCH_EMPLOYMENY_TYPE
	const fetchEmploymentTypes = useCallback(async () => {
		setIsLoading(true);
		const { hasError, data } = await ServerService.getEmploymentTypes();
		if (hasError) {
		  setFetchError("Ошибка при загрузке данных");
		} else {
		  const employment = await data.map((c) => ({
			value: c.id,
			label: c.name[selectedLanguage],
			sign: c.sign,
		  }));
		  setEmploymentTypes(employment);
		}
		return null;
	  }, [ServerService, selectedLanguage]);
	
	  useEffect(() => {
		fetchEmploymentTypes();
	  }, [ServerService, fetchEmploymentTypes]);
	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center justify-content-between">
				<h3 className="myText--large mb-2 text-capitalize">{t("cv.jobRequirements")}</h3>
				<div className="d-flex m-width">
				<TextField
					fullWidth
					size="small"
					className="col-6 m-width"
					label={t("salary")}
					variant="outlined"
					className="mb-4"
					name="salary"
					value={inputValues.salary}
					onChange={handleChange}
				/>
			
               
        <Select
          options={currencies}
		  value={selectedCurrency}
		  className="col-6 m-width"
         
		  onChange={e => selectedCurrency(e)}
		  />
		  </div>
		<Select
          options={currencies}
		  value={selectedEmploymentType}
		  placeholder={t("choose")}
		//   className="m-width"
		  onChange={e => setSelectedEmploymentType(e)}
		  />
				
				<TextField
					fullWidth
					size="small"
					className="max-width"
					label={t("positionWouldYouLikeToWork")}
					variant="outlined"
					className="mb-4"
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
					className="mb-4"
					name="date_can_start"
					value={inputValues.date_can_start}
					onChange={handleChange}
				/>
			
				<RadioGroup
					aria-label="gender"
					name="hasComputer"
					value={inputValues.hasComputer}
					onChange={handleChange}
					className="d-flex flex-row m-width mb-4"
					size="small"
				>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="female"
							labelPlacement="end"
							control={<Radio />}
							label={t("iNeedAComputer")}
						/>
					</div>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="male"
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
					className="mb-4 max-width"
					name="profile"
					value={inputValues.profile}
					onChange={handleChange}
				/>
			
			</div>
		</div>
	)
}

export default JobRequirements
