import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const PersonalInfo = () => {
    const classes = useStyles()
	const { t } = useTranslation()
	const [age, setAge] = React.useState("")

	const handleChange = (event) => {
		setAge(event.target.value)
	}
  return(
    <div>
        	<div className="application__section d-flex flex-column align-items-center justify-content-between">
						<h3 className="myText--large mb-2">{t("cv.personalInfo")}</h3>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("firstName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("lastName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("middleName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("birthDate")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("citizenship")}
							variant="outlined"
							className="mb-4"
						/>
						<FormLabel component="legend">Gender</FormLabel>
						<RadioGroup
							aria-label="gender"
							name="gender1"
							// onChange={handleChange}
							className="d-flex flex-row m-width mb-4"
							size="small"
						>
							<div className="application__radio-btn col-6">
								<FormControlLabel
									value="female"
									labelPlacement="start"
									control={<Radio />}
									label="The best!"
								/>
							</div>
							<div className="application__radio-btn col-6">
								<FormControlLabel
									value="male"
									labelPlacement="start"
									control={<Radio />}
									label="The best!"
								/>
							</div>
						</RadioGroup>
						<FormControl
							fullWidth
							size="small"
							className="m-width"
							className="mb-4"
							variant="outlined"
						>
							<InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								label="Age"
								size="small"
								className="m-width"
								variant="outlined"
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
                        </div>

    </div>
  )
}

export default PersonalInfo