import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles"
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
			<Form onSubmit={onNewEducation} className="m-width">
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
                            <div  className="d-flex flex-column col "><FormLabel>{t("dateForm")}</FormLabel>
                            <TextField
								className="m-width"
								variant="outlined"
								size="small"
								type="date"
								id={`education-date_from-${index}`}
								name={`date_from`}
								value={education[index].date_from}
								onChange={(e) => onEducationInputsChange(index, e)}
							/></div> 
                            <div className="d-flex flex-column col">

                        
                               <FormLabel>{t("dateForm")}</FormLabel>
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
						</div>
					)
				})}
				<div className="d-flex justify-content-center">
					<button
						type="submit"
						className="border-0 bg-transparent addition-button"
					>
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 40C8.97156 40 0 31.0284 0 20C0 8.97156 8.97156 0 20 0C31.0284 0 40 8.97156 40 20C40 31.0284 31.0284 40 20 40ZM20 2.5C10.35 2.5 2.5 10.35 2.5 20C2.5 29.65 10.35 37.5 20 37.5C29.65 37.5 37.5 29.65 37.5 20C37.5 10.35 29.65 2.5 20 2.5Z"
								fill="#ABAABD"
							/>
							<path
								d="M28.75 21.25H11.25C10.56 21.25 10 20.69 10 20C10 19.31 10.56 18.75 11.25 18.75H28.75C29.44 18.75 30 19.31 30 20C30 20.69 29.44 21.25 28.75 21.25Z"
								fill="#5A5A67"
							/>
							<path
								d="M20 30C19.31 30 18.75 29.44 18.75 28.75V11.25C18.75 10.56 19.31 10 20 10C20.69 10 21.25 10.56 21.25 11.25V28.75C21.25 29.44 20.69 30 20 30Z"
								fill="#5A5A67"
							/>
						</svg>
					</button>
				</div>
			</Form>
		</>
	)
}

export default AddEducation
