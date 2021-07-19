import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from "react-bootstrap"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { WithContext as ReactTags } from "react-tag-input"

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))
const AddExperiences = ({ experiences, setExperiences }) => {
	const { t } = useTranslation()
	const classes = useStyles()

	//KEYCODES
	const KeyCodes = { dot: 190, enter: 13, next: 9 }
	const delimiters = [KeyCodes.enter, KeyCodes.dot, KeyCodes.next]

	const onExperiencesInputsChange = useCallback(
		(idx, e) => {
			const add = { ...experiences[idx], [e.target.name]: e.target.value }
			const before = experiences.filter((a, i) => i < idx)
			const after = experiences.filter((a, i) => i > idx)
			const temp = [...before, add, ...after]
			setExperiences(temp)
		},
		[experiences]
	)

	//REACT_INPUT_TAGS_SKILLS
	const [skillsTags, setSkillsTags] = useState([])

	const handleAdditionSkills = (tag, index) => {
		const newSkillsTags = skillsTags
		newSkillsTags[index] = [...newSkillsTags[index], tag]
		const newExp = experiences
		newExp[index].responsibilities = [...newSkillsTags[index]].map(
			(t) => t.text
		)
		setExperiences(newExp)
		setSkillsTags((index) => [...skillsTags, newSkillsTags[index]])
	}

	const handleDeleteSkills = (i, idx) => {
		const newSkillsTags = skillsTags
		newSkillsTags[idx] = newSkillsTags[idx].filter((t, index) => index !== i)

		setSkillsTags((idx) => [...skillsTags, newSkillsTags[idx]])
	}

	//ADD_NEW_EXPERIENCE
	const onNewExperiences = useCallback(
		(e) => {
			e.preventDefault()
			console.log("Hello")
			const add = [...experiences]
			add.push({
				position: "",
				company: "",
				date_from: "",
				country: "",
				city: "",
				date_to: "",
			})
			const skillsAdd = [...skillsTags]
			skillsAdd.push([])
			setSkillsTags(skillsAdd)
			setExperiences(add)
		},
		[experiences]
	)

	return (
		<>
			<Form className="m-width">
				{experiences.map((a, index) => {
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
								label={t("position")}
								id={`experiences-position-${index}`}
								name={`position`}
								autoComplete="experiences-position"
								value={experiences[index].position}
								onChange={(e) => onExperiencesInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("company")}
								id={`experiences-company-${index}`}
								name={`company`}
								autoComplete="experiences-company"
								value={experiences[index].company}
								onChange={(e) => onExperiencesInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("country")}
								id={`experiences-country-${index}`}
								name={`country`}
								autoComplete="experiences-country"
								value={experiences[index].country}
								onChange={(e) => onExperiencesInputsChange(index, e)}
							/>
							<TextField
								className="m-width mb-2"
								variant="outlined"
								size="small"
								type="text"
								label={t("city")}
								id={`experiences-city-${index}`}
								name={`city`}
								autoComplete="experiences-city"
								value={experiences[index].city}
								onChange={(e) => onExperiencesInputsChange(index, e)}
							/>
							<div className="mb-2 d-flex">
								<div className="d-flex flex-column col ">
									<FormLabel>{t("dateFrom")}</FormLabel>
									<TextField
										className="m-width"
										variant="outlined"
										size="small"
										type="date"
										id={`experiences-date_from-${index}`}
										name={`date_from`}
										value={experiences[index].date_from}
										onChange={(e) => onExperiencesInputsChange(index, e)}
									/>
								</div>
								<div className="d-flex flex-column col">
									<FormLabel>{t("dateTo")}</FormLabel>
									<TextField
										className="m-width"
										variant="outlined"
										size="small"
										type="date"
										id={`experiences-date_to-${index}`}
										name={`date_to`}
										value={experiences[index].date_to}
										onChange={(e) => onExperiencesInputsChange(index, e)}
									/>
								</div>
							</div>
							<ReactTags
								tags={skillsTags[index]}
								handleDelete={(e) => handleDeleteSkills(e, index)}
								handleAddition={(e) => handleAdditionSkills(e, index)}
								placeholder={t("pressEnterToAddTag")}
								inputFieldPosition="top"
								delimiters={delimiters}
							/>
						</div>
					)
				})}
				<div className="d-flex justify-content-center">
					<Fab onClick={onNewExperiences}  size="small" color="success" aria-label="add">
						<AddIcon />
					</Fab>
				</div>
			</Form>
		</>
	)
}

export default AddExperiences
