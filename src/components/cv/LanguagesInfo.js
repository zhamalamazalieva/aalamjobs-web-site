import React, { useCallback, useEffect , useState }from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from 'react-bootstrap'
import AddLanguages from "./AddLanguages"


const LanguagesInfo = ({otherLanguages, setOtherLanguages}) => {
	const { t } = useTranslation()
	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2 text-capitalize">{t("cv.languages")}</h3>
                <TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("mother_language")}
							variant="outlined"
							className="mb-4"
						/>
               <span className="myText--small mb-3">{t("cv.addOther_languages")}</span>	
				<AddLanguages otherLanguages={otherLanguages} setOtherLanguages={setOtherLanguages}/>
             
			</div>
		</div>
	)


}
export  default LanguagesInfo
