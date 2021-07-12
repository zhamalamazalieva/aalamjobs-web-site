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
				<div className="d-flex m-width">
				<TextField
					fullWidth
					size="small"
					className="col-6 m-width"
					label={t("salary")}
					variant="outlined"
					className="mb-4"
				/>
			
                <FormControl variant="outlined"className="m-width" >
        <InputLabel htmlFor="outlined-age-native-simple">{t("currency")}</InputLabel>
        <Select
          native
          label="currency"
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
      </FormControl></div>
	  <FormControl variant="outlined"className="m-width mb-4" >
        <InputLabel htmlFor="outlined-age-native-simple">{t("employmentType")}</InputLabel>
        <Select
          native
          label="employmentType"
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
				
				<TextField
					fullWidth
					size="small"
					className="max-width"
					label={t("positionWouldYouLikeToWork")}
					variant="outlined"
					className="mb-4"
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
				/>
			
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
							label={t("IHaveAComputer")}
						/>
					</div>
				</RadioGroup>
				<TextField
					fullWidth
					multiline={true}
					rows="5"
					size="small"
					className="max-width"
					label={t("profile")}
					variant="outlined"
					className="mb-4"
				/>
			
			</div>
		</div>
	)
}

export default JobRequirements
