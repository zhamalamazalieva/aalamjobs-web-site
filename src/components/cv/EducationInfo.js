import React, { useCallback, useEffect , useState }from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from 'react-bootstrap'
import AddEducation from "./AddEducation"


const EducationInfo = () => {
	const { t } = useTranslation()
	const [age, setAge] = React.useState("")
    const [education, setEducation] = useState([])
 

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.educationInfo")}</h3>
               
               <FormLabel component="legend">{t("addEducation")}</FormLabel>	
				<AddEducation education={education} setEducation={setEducation}/>
             
			</div>
		</div>
	)


}
export default EducationInfo
