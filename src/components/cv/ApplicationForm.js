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
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import EducationInfo from './EducationInfo'
import LanguagesInfo from './LanguagesInfo'

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
				<div className="">
					<Button variant="outline-secondary" className="prev pl-4 pr-4  mr-1">
						Prev
					</Button>
					<Button variant="success" className="next pl-4 pr-4 ml-1">
						Next
					</Button>
				</div>
			</Swiper>
		</div>
	)
}

export default ApplicationForm
