import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Form } from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const AddEducation = ({ education, setEducation }) => {
	const { t } = useTranslation()
	const classes = useStyles()

	const onEducationInputsChange = useCallback(
		(idx, e) => {
			const add = { ...education[idx], [e.target.name]: e.target.value }
			const before = education.filter((a, i) => i < idx)
			const after = education.filter((a, i) => i > idx)

			const temp = [...before, add, ...after]

			setEducation(temp)
		},
		[education]
	)

	const onNewEducation = useCallback(
		(e) => {
			e.preventDefault()
			const add = [...education]
			add.push({
				institution: "",
				specialization: "",
				country: "",
				city: "",
				date_from: "",
				date_to: "",
			})
			setEducation(add)
		},
		[education]
	)

	useEffect(() => {
		setEducation(
			education.map((a) => ({
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
			<Form  className="m-width">
				{education.map((a, index) => {
					return (
						<div
							key={index}
							className="myBorder--secondary my-2 mb-3 p-2"
							style={{ borderRadius: 5, position: "relative" }}
						>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("firstName")}
								id={`education-institution-${index}`}
								name={`institution`}
								autoComplete="education-institution"
								value={education[index].institution}
								onChange={(e) => onEducationInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("specialization")}
								id={`education-specialization-${index}`}
								name={`specialization`}
								autoComplete="education-specialization"
								value={education[index].specialization}
								onChange={(e) => onEducationInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("country")}
								id={`education-country-${index}`}
								name={`country`}
								autoComplete="education-country"
								value={education[index].country}
								onChange={(e) => onEducationInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("city")}
								id={`education-city-${index}`}
								name={`city`}
								autoComplete="education-city"
								value={education[index].city}
								onChange={(e) => onEducationInputsChange(index, e)}
							/>
							<div className="mb-2 d-flex">
								<div className="d-flex flex-column col ">
									<FormLabel>{t("dateFrom")}</FormLabel>
									<TextField
										className="m-width"
										variant="outlined"
										size="small"
										type="date"
										id={`education-date_from-${index}`}
										name={`date_from`}
										value={education[index].date_from}
										onChange={(e) => onEducationInputsChange(index, e)}
									/>
								</div>
								<div className="d-flex flex-column col">
									<FormLabel>{t("dateTo")}</FormLabel>
									<TextField
										className="m-width"
										variant="outlined"
										size="small"
										type="date"
										id={`education-date_to-${index}`}
										name={`date_to`}
										value={education[index].date_to}
										onChange={(e) => onEducationInputsChange(index, e)}
									/>
								</div>
							</div>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="file"
								id={`education-file-${index}`}
								name={`file`}
								autoComplete="education-file"
								value={education[index].file}
								onChange={(e) => onEducationInputsChange(index, e)}
							/>
						</div>
					)
				})}
				<div className="d-flex justify-content-center">
					<Fab onClick={onNewEducation} size="small" color="success" aria-label="add">
						<AddIcon />
					</Fab>
				</div>
			</Form>
		</>
	)
}

export default AddEducation
