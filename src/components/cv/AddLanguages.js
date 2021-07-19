import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl, FormGroup } from "react-bootstrap"
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
const AddLanguages = ({ otherLanguages, setOtherLanguages }) => {
	const { t } = useTranslation()
	const classes = useStyles()

	const onOtherLanguagesInputsChange = useCallback(
		(idx, e) => {
			const add = { ...otherLanguages[idx], [e.target.name]: e.target.value }
			const before = otherLanguages.filter((a, i) => i < idx)
			const after = otherLanguages.filter((a, i) => i > idx)

			const temp = [...before, add, ...after]

			setOtherLanguages(temp)
		},
		[otherLanguages]
	)

	const onNewOtherLanguages = useCallback(
		(e) => {
			e.preventDefault()
			const add = [...otherLanguages]
			add.push({
				name: "",
				writing: "",
				reading: "",
				listening: "",
				talking: "",
			})
			setOtherLanguages(add)
		},
		[otherLanguages]
	)
	useEffect(() => {
		setOtherLanguages(
			otherLanguages.map((a) => ({
				name: a.name,
				writing: a.writing,
				reading: a.reading,
				talking: a.talking,
				listening: a.listening,
				id: a.id,
			}))
		)
	}, [])

	return (
		<>
			<Form className="m-width">
				{otherLanguages.map((a, index) => {
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
								id={`otherLanguages-institution-${index}`}
								name={`institution`}
								autoComplete="otherLanguages-institution"
								value={otherLanguages[index].institution}
								onChange={(e) => onOtherLanguagesInputsChange(index, e)}
							/>
							<Form.Group className="d-flex align-items-center ">
								<FormLabel className="col-4">{t("writing")}</FormLabel>
								<Form.Control
									as="select"
									className="form-control"
									name={`writing`}
									onChange={(e) => onOtherLanguagesInputsChange(index, e)}
									id={`writing-${index}`}
									value={otherLanguages[index].writing}
								>
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
							<Form.Group className="d-flex align-items-center ">
								<FormLabel className="col-4">{t("reading")}</FormLabel>
								<Form.Control
									as="select"
									className="form-control"
									name={`reading`}
									onChange={(e) => onOtherLanguagesInputsChange(index, e)}
									id={`reading-${index}`}
									value={otherLanguages[index].reading}
								>
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
							<Form.Group className="d-flex align-items-center ">
								<FormLabel className="col-4">{t("listening")}</FormLabel>
								<Form.Control
									as="select"
									className="form-control"
									name={`listening`}
									onChange={(e) => onOtherLanguagesInputsChange(index, e)}
									id={`listening-${index}`}
									value={otherLanguages[index].listening}
								>
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
							<Form.Group className="d-flex align-items-center ">
								<FormLabel className="col-4">{t("talking")}</FormLabel>
								<Form.Control
									as="select"
									className="form-control"
									name={`talking`}
									onChange={(e) => onOtherLanguagesInputsChange(index, e)}
									id={`talking-${index}`}
									value={otherLanguages[index].talking}
								>
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
						</div>
					)
				})}
				<div className="d-flex justify-content-center mb-2">
					<Fab
						onClick={onNewOtherLanguages}
						size="small"
						color="success"
						aria-label="add"
					>
						<AddIcon />
					</Fab>
				</div>
			</Form>
		</>
	)
}

export default AddLanguages
