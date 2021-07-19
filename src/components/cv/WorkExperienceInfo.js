import React, { useCallback, useEffect, useState } from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from "react-bootstrap"
import AddExperiences from "./AddExperiences"

const WorkExperienceInfo = ({ experiences, setExperiences }) => {
	const { t } = useTranslation()
	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.workExperience")}</h3>
				<span className="myText--small mb-3">{t("cv.addWorkExperiences")}</span>
				<AddExperiences
					experiences={experiences}
					setExperiences={setExperiences}
				/>
			</div>
		</div>
	)
}
export default WorkExperienceInfo
