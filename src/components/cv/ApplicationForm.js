import React from "react"
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
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import LanguagesInfo from './LanguagesInfo'
import WorkExperienceInfo from './WorkExperienceInfo'
import AchievementsInfo from './AchievementsInfo'


SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])


const ApplicationForm = () => {
	const { t } = useTranslation()

	return (
		<div className="application__wrapper myBorder--secondary p-4">
			<Swiper
				slidesPerView={1}
				// autoHeight={true}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: ".next",
					prevEl: ".prev",
				}}
				scrollbar={{ draggable: true }}
				className="d-center flex-column"
			>
				<SwiperSlide>
				
					<PersonalInfo/>
				</SwiperSlide>
				<SwiperSlide><ContactInfo/></SwiperSlide>
				<SwiperSlide><EducationInfo/></SwiperSlide>
				<SwiperSlide><LanguagesInfo/></SwiperSlide>
				<SwiperSlide><WorkExperienceInfo/></SwiperSlide>
				<SwiperSlide><AchievementsInfo/></SwiperSlide>


				<div className="mt-4">
					<Button variant="outline-secondary" className="prev pl-4 pr-4  mr-1">
						{t("prev")}
					</Button>
					<Button variant="success" className="next pl-4 pr-4 ml-1">
						{t("next")}
					</Button>
				</div>
			</Swiper>
		</div>
	)
}

export default ApplicationForm
