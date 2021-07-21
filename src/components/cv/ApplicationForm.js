import React, { useState, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
} from "swiper/core"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import PersonalInfo from "./PersonalInfo"
import ContactInfo from "./ContactInfo"
import EducationInfo from "./EducationInfo"
import LanguagesInfo from "./LanguagesInfo"
import WorkExperienceInfo from "./WorkExperienceInfo"
import AchievementsInfo from "./AchievementsInfo"
import JobRequirements from "./JobRequirements"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import { toastify } from "../../helpers/toast"

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])

const ApplicationForm = () => {
	const ServerService = useContext(ServerServiceContext)
	const { t } = useTranslation()

	//STATES
	const [isLoading, setIsLoading] = useState(false)
	const [inputValues, setInputValues] = useState("")
	const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("")
	const [selectedLocale, setSelectedLocale] = useState("")
	const [selectedCurrency, setSelectedCurrency] = useState({})
	const [selectedEmploymentType, setSelectedEmploymentType] = useState({})
	const [reachEnd, setReachEnd] = useState(false)
	const [isEnd, setIsEnd] = useState(false)

	const [education, setEducation] = useState([]);
	const [otherLanguages, setOtherLanguages] = useState([]);
	const [experiences, setExperiences] = useState([]);
	const [portfolio, setPortfolio] = useState([]);
  
	console.log(education, experiences, otherLanguages)
	//ONSUBMIT
	var onSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		const { hasError } = await ServerService.createApplication({
			locale: inputValues.locale,
			firstname: inputValues.firstName,
			lastname: inputValues.lastName,
			birthdate: inputValues.birthDate,
			citizenship: inputValues.citizenship,
			gender: inputValues.gender,
			marital_status: selectedMaritalStatus.label,
			email: inputValues.email,
			phone: inputValues.phone,
			current_city: inputValues.city,
			current_country: inputValues.country,
			living_address: inputValues.living_address,
			social: {
				twitter: inputValues.twitter,
				facebook: inputValues.facebook,
				linkedin: inputValues.linkedin,
				whatsapp: inputValues.whatsapp,
				telegram: inputValues.telegram,
			},
			education: education,
			mother_language:inputValues.motherLanguage,
			other_languages: otherLanguages,
			experience: experiences,
			date_can_start: inputValues.dateCanStart,
			profile: inputValues.profile,
			has_computer: inputValues.hasComputer,
			position: inputValues.position,
			hasComputer: inputValues.hasComputer,
			salary: inputValues.salary,
			currency: selectedCurrency.value,
			employment_type: selectedEmploymentType.value,


		})
		if (hasError) {
			console.log("Произошла ошибка", hasError)
			toastify("error", t("failedToCreate"))
		} else {
			toastify("success", t("successfullyCreated"))
		}
		setIsLoading(false)
	}

	console.log(education)
	return (
		<div className="application__wrapper myBorder--secondary p-4">
			<form onSubmit={onSubmit}>
				<Swiper
					slidesPerView={1}
					// autoHeight={true}
					pagination={{ clickable: true }}
					navigation={{
						nextEl: ".next",
						prevEl: ".prev",
					}}
					className="d-center flex-column"
					onReachEnd={() => {
						setReachEnd(true)
					}}
					enabled={true}
					onSlideChange={(props) => setIsEnd(props.isEnd)}
				>
					<SwiperSlide>
						<PersonalInfo
							inputValues={inputValues}
							setInputValues={setInputValues}
							selectedMaritalStatus={selectedMaritalStatus}
							setSelectedMaritalStatus={setSelectedMaritalStatus}
							setSelectedLocale={setSelectedLocale}
							selectedLocale={selectedLocale}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ContactInfo
							inputValues={inputValues}
							setInputValues={setInputValues}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<EducationInfo
						education={education}
						setEducation={setEducation}
						 />
					</SwiperSlide>
					<SwiperSlide>
						<LanguagesInfo 
						inputValues={inputValues}
						setInputValues={setInputValues}
						otherLanguages={otherLanguages}
						setOtherLanguages={setOtherLanguages}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<WorkExperienceInfo
						experiences={experiences}
						setExperiences={setExperiences}
						/>
					</SwiperSlide>
					<SwiperSlide>{/* <AchievementsInfo/> */}</SwiperSlide>
					<SwiperSlide>
						<JobRequirements 
						inputValues={inputValues}
						setInputValues={setInputValues}
						setSelectedCurrency={setSelectedCurrency}
						selectedCurrency={selectedCurrency}
						selectedEmploymentType={selectedEmploymentType}
						setSelectedEmploymentType={setSelectedEmploymentType}
						/>
					</SwiperSlide>

					<div className="mt-4">
						<Button
							variant="outline-secondary"
							className="prev pl-4 pr-4  mr-1"
						>
							{t("prev")}
						</Button>

						<Button
							variant="success"
							type="button"
							className={`next pl-4 pr-4 ml-1 ${isEnd ? "display-none" : ""}`}
						>
							{t("next")}
						</Button>
						<Button
							variant="success"
							type="submit"
							className={` pl-4 pr-4 ml-1 ${
								isEnd ? "display-block" : "display-none"
							}`}
						>
							{t("save")}
						</Button>
					</div>
				</Swiper>
			</form>
		</div>
	)
}

export default ApplicationForm
