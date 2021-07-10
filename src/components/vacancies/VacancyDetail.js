import React from "react"
import { useTranslation } from "react-i18next"
import { Col, Row, Button } from "react-bootstrap"

const VacancyDetail = () => {
	const { t } = useTranslation()
	return (
		<div className="p-4 d-flex flex-column vacancy__detail">
			<span className="myText--xsmall mb-2 d-flex justify-content-end">
				24.01.2020
			</span>
			<div className="d-flex mb-3">
			<div className="vacancy__logo">
			<svg className="vacancy__nologo" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="40" cy="40" r="39" stroke="#ABAABD" stroke-width="2"/>
				<circle cx="56" cy="50.6667" r="8" fill="#ABAABD"/>
				<path d="M40 0V35.3333H22.9231V53H3" stroke="#ABAABD" stroke-width="2" stroke-linejoin="round"/>
				</svg>
			</div>

				<div>
					<h5 className="cart__title">HR Manager</h5>
					<span className="cart__location myText--xsmall">Bishkek</span>
					{", "}
					<span className="cart__location myText--xsmall">Kyrgyzstan</span>
				</div>
			</div>
			<span className="myText--large">Sky Mobile</span>
			<span className="myText--xsmall">Telecommunications Company</span>
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
			<span className="myText--large">Full-time (09:00-18:00), 5/2 </span>
			<span className="myText--large ">Permanent contract</span>
			<span className="myText--large ">IT Industry</span>
			<span className="myText--large ">Start date: ASAP</span>
			<span className="myText--large ">Deadline: NO (10.Jul.2021)</span>
			<div className="vacancy__section section mt-3">
				<span className="section__titlemy Text--large">About us</span>
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
            <div className="vacancy__section section mt-3">
				<span className="section__title myText--bold">Job Summary</span>
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
            <div className="vacancy__section section mt-3">
				<span className="section__title myText--bold">Job Responsibilites</span>
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
		</div>
	)
}
export default VacancyDetail
