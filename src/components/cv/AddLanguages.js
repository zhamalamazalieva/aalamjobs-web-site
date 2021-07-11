import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
// import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl, FormGroup,FormLabel,  } from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const AddLanguages = ({ other_languages, setOther_languages }) => {
	const { t } = useTranslation()
	const classes = useStyles()

	const onother_languagesInputsChange = useCallback(
		(idx, e) => {
			const add = { ...other_languages[idx], [e.target.name]: e.target.value }
			const before = other_languages.filter((a, i) => i < idx)
			const after = other_languages.filter((a, i) => i > idx)

			const temp = [...before, add, ...after]

			setOther_languages(temp)
		},
		[other_languages]
	)

	const onNewother_languages = useCallback(
		(e) => {
			e.preventDefault()
			const add = [...other_languages]
			add.push({
				institution: "",
				specialization: "",
				country: "",
				city: "",
				date_from: "",
				date_to: "",
			})
			setOther_languages(add)
		},
		[other_languages]
	)

	useEffect(() => {
		setOther_languages(
			other_languages.map((a) => ({
				name: a.institution,
				specialization: a.specialization,
				country: a.country,
				city: a.city,
				date_from: a.date_from,
				date_to: a.date_to,
				id: a.id,
			}))
		)
	}, [])

	return (
		<>
			<Form onSubmit={onNewother_languages} className="m-width">
				{other_languages.map((a, index) => {
					return (
						<div
							key={index}
							className="myBorder--secondary my-2 mb-3 p-2"
							style={{ borderRadius: 5, position: "relative" }}
						>

<Form.Group row>
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("firstName")}
								id={`other_languages-institution-${index}`}
								name={`institution`}
								autoComplete="other_languages-institution"
								value={other_languages[index].institution}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
                            <TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("specialization")}
								id={`other_languages-specialization-${index}`}
								name={`specialization`}
								autoComplete="other_languages-specialization"
								value={other_languages[index].specialization}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
                            <TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("country")}
								id={`other_languages-country-${index}`}
								name={`country`}
								autoComplete="other_languages-country"
								value={other_languages[index].country}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
                             <TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("city")}
								id={`other_languages-city-${index}`}
								name={`city`}
								autoComplete="other_languages-city"
								value={other_languages[index].city}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
                            <div className="mb-2 d-flex"> 
                            <div  className="d-flex flex-column col "><FormLabel>{t("dateFrom")}</FormLabel>
                            <TextField
								className="m-width"
								variant="outlined"
								size="small"
								type="date"
								id={`other_languages-date_from-${index}`}
								name={`date_from`}
								value={other_languages[index].date_from}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/></div> 
                            <div className="d-flex flex-column col">

                        
                               <FormLabel>{t("dateTo")}</FormLabel>
                             <TextField
								className="m-width"
								variant="outlined"
								size="small"
								type="date"
								id={`other_languages-date_to-${index}`}
								name={`date_to`}
								value={other_languages[index].date_to}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
                                </div>
							
                            </div>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="file"
								id={`other_languages-file-${index}`}
								name={`file`}
								autoComplete="other_languages-file"
								value={other_languages[index].file}
								onChange={(e) => onother_languagesInputsChange(index, e)}
							/>
						</div>
					)
				})}
				<div className="d-flex justify-content-center">
					
						 <Fab type="submit" size="small" color="success" aria-label="add">
        <AddIcon />
      </Fab>
	  </div>
			</Form>
		

		</>
	)
}

export default AddLanguages
