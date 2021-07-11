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
import { Form } from "react-bootstrap"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const JobRequirements = () => {
	const { t } = useTranslation()
	const [age, setAge] = React.useState("")

	const handleChange = (event) => {
		setAge(event.target.value)
	}
	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.jobRequirements")}</h3>
				<TextField
					fullWidth
					size="small"
					className="col-6 m-width"
					label={t("salary")}
					variant="outlined"
					className="mb-4"
				/>
				<Form.Group className="d-flex align-items-center m-width">
					<Form.Control as="select" className="form-control">
						<option selected hidden value={t("choose")}>
							{t("choose")}
						</option>
						<option value={t("intermediate")}>{t("intermediate")}</option>
						<option value={t("upperIntermediate")}>
							{t("upperIntermediate")}
						</option>
						<option value={t("advanced")}>{t("advanced")}</option>
						<option value={t("proficient")}>{t("proficient")}</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className="d-flex align-items-center m-width">
                <FormControl variant="outlined"className="m-width" >
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
				</Form.Group>
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
				<FormLabel component="legend">{t("gender")}</FormLabel>
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
				<FormControl
					fullWidth
					size="small"
					className="m-width"
					className="mb-4"
					variant="outlined"
				>
					<InputLabel id="demo-simple-select-helper-label">
						{t("maritalStatus")}
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						label={t("maritalStatus")}
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

export default JobRequirements
