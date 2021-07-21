import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const PersonalInfo = ({
	inputValues,
	setInputValues,
	selectedMaritalStatus,
	setSelectedMaritalStatus,
	selectedLocale,
	setSelectedLocale,
}) => {
	const { t } = useTranslation()




	const handleChange = (e) => {
		setInputValues((inputValues) => ({
			...inputValues,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center justify-content-between">
				<h3 className="myText--large mb-2 text-capitalize">
					{t("cv.personalInfo")}
				</h3>
				<FormControl variant="outlined" className="m-width mb-4">
					<InputLabel htmlFor="outlined-age-native-simple" className="myText--small">
						{t("selectTheResumeLanguage")}
					</InputLabel>
					<Select
						native
						size="small"
						className="m-width swiper-no-swiping"
						value={selectedLocale}
						onChange={(e) => setSelectedLocale(e.target.value)}
						label={t("selectTheResumeLanguage")}
						inputProps={{
							name: "locale",
							id: "outlined-age-native-simple",
						}}
					>
						<option aria-label="None" value="" />

						<option value={1}>{t("inEnglish")}</option>
						<option value={2}>{t("inRussian")}</option>
					</Select>
				</FormControl>
				<TextField
					fullWidth
					size="small"
					className="max-width swiper-no-swiping myText--small"
					label={t("firstName")}
					variant="outlined"
					className="mb-4"
					name="firstName"
					value={inputValues.firstName}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width swiper-no-swiping"
					label={t("lastName")}
					variant="outlined"
					className="mb-4"
					name="lastName"
					value={inputValues.lastName}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width swiper-no-swiping"
					label={t("middleName")}
					variant="outlined"
					className="mb-4"
					name="middleName"
					value={inputValues.middleName}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					type="date"
					size="small"
					className="max-width swiper-no-swiping"
					label={t("birthDate")}
					variant="outlined"
					className="mb-4"
					name="birthDate"
					defaultValue="1995-05-05"
					value={inputValues.birthDate}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width swiper-no-swiping"
					label={t("citizenship")}
					variant="outlined"
					className="mb-4"
					name="citizenship"
					value={inputValues.citizenship}
					onChange={handleChange}
				/>
				<FormLabel component="legend" className="myText--small">{t("selectAGender")}</FormLabel>
				<RadioGroup
					aria-label="gender"
					name="gender"
					onChange={handleChange}
					className="d-flex flex-row m-width mb-4 swiper-no-swiping"
					size="small"
				>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="female"
							labelPlacement="start"
							control={<Radio />}
							label={t("female")}
						/>
					</div>
					<div className="application__radio-btn col-6">
						<FormControlLabel
							value="male"
							labelPlacement="start"
							control={<Radio />}
							label={t("male")}
						/>
					</div>
				</RadioGroup>
				<FormControl variant="outlined" className="m-width swiper-no-swiping">
					<InputLabel htmlFor="outlined-age-native-simple">
						{t("selectAMaritalStatus")}
					</InputLabel>
					<Select
						native
						className="m-width"
						value={selectedMaritalStatus}
						onChange={(e) => setSelectedMaritalStatus(e.target.value)}
						label={t("selectAMaritalStatus")}
						inputProps={{
							name: "maritalStatus",
							id: "outlined-age-native-simple",
						}}
					>
						<option aria-label="None" value="" />
						<option value={1}>{t("married")}</option>
						<option value={2}>{t("single")}</option>
						<option value={3}>{t("divorced")}</option>
						<option value={4}>{t("widow")}</option>
					</Select>
				</FormControl>
			</div>
		</div>
	)
}

export default PersonalInfo
