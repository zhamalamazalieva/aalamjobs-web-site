import React, { useEffect, useState, useCallback, useContext } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "react-bootstrap"
import { useParams } from "react-router"
import { getCurrentLanguage } from "../../localizaton/localication"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import { getCurrentDate } from "../../functions/Function"

const VacancyDetail = ({ vacancyToShow }) => {
	const { t } = useTranslation()
	const ServerService = useContext(ServerServiceContext)
	const selectedLanguage = getCurrentLanguage()
	const { vacancyId } = useParams()
	const [vacancy, setVacancy] = useState("")

	const [vacancies, setVacancies] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const fetchVacancyDetail = useCallback(async () => {
		setIsLoading(true)
		const { hasError, data } = await ServerService.getVacancyDetail(vacancyId)
		if (hasError) {
			console.log("Ошибка с сервером: ", hasError)
		} else {
			setVacancy(data)
		}
	}, [ServerService])

	useEffect(() => {
		fetchVacancyDetail()
	}, [fetchVacancyDetail])

	return (
		<div className="p-4 d-flex flex-column vacancy__detail">
			<span className="myText--xsmall mb-2 d-flex justify-content-end">
				{vacancyToShow.published_date && getCurrentDate(vacancyToShow.published_date)}
			</span>
			<div className="d-flex mb-3">
				<div className="vacancy__logo">
					<svg
						className="vacancy__nologo"
						viewBox="0 0 80 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="40" cy="40" r="39" stroke="#ABAABD" stroke-width="2" />
						<circle cx="56" cy="50.6667" r="8" fill="#ABAABD" />
						<path
							d="M40 0V35.3333H22.9231V53H3"
							stroke="#ABAABD"
							stroke-width="2"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<div>
					<h5 className="cart__title">{vacancyToShow.title}</h5>
					<span className="cart__location myText--xsmall">
						{vacancyToShow.city && vacancyToShow.city.name[selectedLanguage]}
					</span>
					{", "}
					<span className="cart__location myText--xsmall">
						{vacancyToShow.city &&
							vacancyToShow.city.country.name[selectedLanguage]}
					</span>
				</div>
			</div>
			<div className="d-flex justify-content-between align-items-center">
			<span className="myText--large">{vacancyToShow.organization && vacancyToShow.organization.name}</span>
			
		
			<div>
								<svg
									className="cart__fav"
									width="20"
									height="20"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M29.9211 11.5067C29.7236 10.8993 29.1848 10.4692 28.5499 10.4118L19.8898 9.62553L16.4672 1.61271C16.2145 1.02401 15.6396 0.644062 14.9996 0.644062C14.3596 0.644062 13.7845 1.02401 13.5334 1.61271L10.1108 9.62553L1.44935 10.4118C0.814424 10.4703 0.276771 10.9004 0.0780987 11.5067C-0.11943 12.1142 0.0629922 12.7805 0.543194 13.2016L7.08955 18.9419L5.15936 27.4431C5.01814 28.0682 5.26076 28.7146 5.77941 29.0895C6.0582 29.2921 6.38573 29.3932 6.71441 29.3932C6.99686 29.3932 7.27953 29.3182 7.53199 29.1671L14.9996 24.702L22.4659 29.1671C23.0136 29.4944 23.7023 29.4644 24.2198 29.0895C24.7385 28.7146 24.9811 28.0682 24.8399 27.4431L22.9097 18.9419L29.456 13.2016C29.936 12.7805 30.1187 12.1156 29.9211 11.5067Z" />
								</svg>
							</div>

							</div>
			<div className="d-flex mt-3 mb-3">
				<Button variant="success" className="mr-2 myBtn-shadow">
					{t("sendCV")}
				</Button>
				<Button
					variant="outline-light"
					className="myBtn-shadow color-lightGreen"
				>
					{t("share")}
				</Button>
			</div>
			<span className="myText--large">
				{t("vacancy.schedule")}: {vacancyToShow.schedule}{" "}
			</span>
			<span className="myText--large ">
				{t("vacancy.employmentType")}:
				{vacancyToShow.employment_type &&
					vacancyToShow.employment_type.name[selectedLanguage]}
			</span>
			<span className="myText--large ">
				{t("vacancy.specialization")}:{" "}
				{vacancyToShow.specialization && vacancyToShow.specialization.name}
			</span>
			<span className="myText--large ">
				{t("vacancy.startDate")}:{" "}
				{vacancyToShow.start_date && getCurrentDate(vacancyToShow.start_date)}
			</span>
			<span className="myText--large ">
				{t("vacancy.deadline")}:{" "}
				{vacancyToShow.deadline && getCurrentDate(vacancyToShow.deadline)}
			</span>
			<div className="vacancy__section section mt-3">
				<span className="section__titlemy myText--large">{t("vacancy.aboutUs")}</span>
				<p className="myText--xsmall">
					About Us: We’re an exciting new start-up; an innovative digital
					platform, with the goal of becoming the number one destination for
					aesthetic medicine. We aim to be the go-to site for consumers, a
					tech-driven marketplace, and a cutting-edge e-commerce site, all in
					one. With support the region’s premier experts in aesthetics, we
					intend to change the industry’s landscape forever – and we’re moving
					at speed.
				</p>
			</div>
			<div className="vacancy__section section mt-2">
				<span className="section__title myText--large">{t("vacancy.description")}</span>
				<p className="myText--xsmall">
					{vacancyToShow.description && vacancyToShow.description}
				</p>
			</div>
			<div className="vacancy__section section mt-2">
				<span className="section__title myText--large">{t("vacancy.jobResponsibilites")}</span>
				<ul>
					{vacancyToShow.responsibilities && vacancyToShow.responsibilities.map((i) => {
						return(
							<>
							<li className="myText--xsmall vacancy__item">{i}</li>
							</>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default VacancyDetail
