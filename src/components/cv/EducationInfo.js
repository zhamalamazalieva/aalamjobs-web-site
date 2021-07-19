import React from "react"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import AddEducation from "./AddEducation"


const EducationInfo = ({education, setEducation}) => {
	const { t } = useTranslation()
 

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2 text-capitalize">{t("cv.education")}</h3>               
               <span className="myText--small mb-3">{t("cv.addEducation")}</span>	
				<AddEducation education={education} setEducation={setEducation}/>
             
			</div>
		</div>
	)


}
export default EducationInfo
