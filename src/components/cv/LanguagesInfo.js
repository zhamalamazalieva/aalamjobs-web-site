import React, { useCallback, useEffect , useState }from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"
import FormLabel from "@material-ui/core/FormLabel"
import { Col, Row, Form, FormControl } from 'react-bootstrap'
import AddLanguages from "./AddLanguages"


const LanguagesInfo = () => {
	const { t } = useTranslation()
    const [otherLanguages, setOtherLanguages] = useState([])
 

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center m-width justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.other_languagesInfo")}</h3>
                <TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("mother_language")}
							variant="outlined"
							className="mb-4"
						/>
               <FormLabel component="legend">{t("addOther_languages")}</FormLabel>	
				<AddLanguages otherLanguages={otherLanguages} setOtherLanguages={setOtherLanguages}/>
             
			</div>
		</div>
	)


}
export  default LanguagesInfo
