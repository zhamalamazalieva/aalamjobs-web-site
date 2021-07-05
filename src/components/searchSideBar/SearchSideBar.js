import React from "react"
import {
	Col,
	Row,
	Image,
	Label,
	Form,
	FormLabel,
	FormGroup,
	Button,
} from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Select from "react-select"

const SearchSideBar = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Form className="search__wrapper">
				<span className="myText--small d-center">Advanced Search</span>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.country")}
					</Form.Label>
					<Select
						className="react-select"
						classNamePrefix="react-select"
						placeholder="Turkey"
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.city")}
					</Form.Label>
					<Select className="react-select" classNamePrefix="react-select" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.industry")}
					</Form.Label>
					<Select className="react-select" classNamePrefix="react-select" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.speciality")}
					</Form.Label>
					<Select className="react-select" classNamePrefix="react-select" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.salary")}
					</Form.Label>
					<Form.Control className="search__input" placeholder="500-1000" />
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label className="search__label myText--small">
						{t("search.employmentType")}
					</Form.Label>
					<Form.Control className="search__input" placeholder="Full-time" />
				</Form.Group>
				<Button
					variant="success"
					className="mt-3 myBorderRadius m-width"
					type="submit"
				>
					{t("apply")}
				</Button>
			</Form>
		</div>
	)
}
export default SearchSideBar
