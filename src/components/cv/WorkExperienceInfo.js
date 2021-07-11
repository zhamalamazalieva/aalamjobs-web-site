import React, { useCallback, useEffect , useState }from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from 'react-bootstrap'
import AddExperiences from "./AddExperiences"


const WorkExperienceInfo = () => {
	const { t } = useTranslation()
    const [experiences, setExperiences] = useState([])
 

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.workExperiencesInfo")}</h3>
                <TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("mother_language")}
							variant="outlined"
							className="mb-4"
						/>
               <FormLabel component="legend">{t("addWorkExperiences")}</FormLabel>	
				<AddExperiences experiences={experiences} setExperiences={setExperiences}/>
             
			</div>
		</div>
	)


}
export  default WorkExperienceInfo
