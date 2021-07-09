import React, { useState, useRef } from "react"
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
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard])
const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			minWidth: "100%",
		},
	},
}))

const ApplicationForm = () => {
	const classes = useStyles()
	const { t } = useTranslation()
	return (
		<div className="application__wrapper myBorder--secondary p-4">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: ".next",
					prevEl: ".prev",
				}}
				scrollbar={{ draggable: true }}
				className="d-center flex-column"
			>
				<SwiperSlide>
					<div className="application__section d-flex flex-column align-items-center justify-content-between">
						<h3 className="myText--large mb-2">{t("cv.personalInfo")}</h3>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("firstName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("lastName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("middleName")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("birthDate")}
							variant="outlined"
							className="mb-4"
						/>
						<TextField
							fullWidth
							size="small"
							className="max-width"
							label={t("citizenship")}
							variant="outlined"
							className="mb-4"
						/>
						<FormLabel component="legend">Gender</FormLabel>
                        <div className="d-flex justify-content-between myBorder--secondary col-6 align-items-center"><label>Female</label>
                        <input type="radio"/></div>

						{/* <RadioGroup
							aria-label="gender"
							name="gender1"
							// onChange={handleChange}
                            className="d-flex flex-row"
						><div className="myBorder--secondary col-6">
							<FormControlLabel value="female" control={<Radio />} label="Male" />

                        </div>
                        <div className="myBorder--secondary col-6">
							<FormControlLabel value="male" control={<Radio />} label="Male" />

                        </div>
						
						</RadioGroup> */}
					</div>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<div className="">
					<Button variant="outline-secondary" className="prev pl-4 pr-4  mr-1">
						Next
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
