import React from "react"
import TextField from "@material-ui/core/TextField"
import { useTranslation } from "react-i18next"

const ContactInfo = ({ inputValues, setInputValues }) => {

	const { t } = useTranslation()

	const handleChange = (e) => {
		setInputValues((inputValues) => ({
			...inputValues,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div>
			<div className="application__section d-flex flex-column align-items-center justify-content-between">
				<h3 className="myText--large mb-2">{t("cv.contactInfo")}</h3>
				<TextField
					fullWidth
					size="small"
					className="max-width required__textfield mb-4 swiper-no-swiping"
					label={t("phone")}
					variant="outlined"
					type="tel"
					name="phone"
					value={inputValues.phone}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width required__textfield mb-4 swiper-no-swiping" 
					label={t("email")}
					variant="outlined"
					type="email"
					name="email"
					value={inputValues.email}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width required__textfield mb-4 swiper-no-swiping"
					label={t("currentCountry")}
					variant="outlined"
					name="currentCountry"
					value={inputValues.currentCountry}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width required__textfield mb-4 swiper-no-swiping"
					label={t("currentCity")}
					variant="outlined"
					name="currentCity"
					value={inputValues.currentCity}
					onChange={handleChange}
				/>
				<TextField
					fullWidth
					size="small"
					className="max-width required__textfield mb-4 swiper-no-swiping"
					label={t("address")}
					variant="outlined"
					name="living_address"
					value={inputValues.living_address}
					onChange={handleChange}
				/>
				<div className="d-flex mb-2 m-width">
					<div className="mr-2">
						<svg
							style={{ borderRadius: "50%" }}
							width="24"
							height="24"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M30 0H0V30H30V0Z" fill="#1BD741" />
							<path
								d="M4.50879 25.5026L5.97827 20.2835C5.03331 18.6781 4.53578 16.8516 4.53578 14.9752C4.53578 9.19777 9.23605 4.4975 15.0135 4.4975C20.7909 4.4975 25.4911 9.19777 25.4911 14.9752C25.4911 20.7526 20.7909 25.4529 15.0135 25.4529C13.2133 25.4529 11.4505 24.9921 9.89111 24.1171L4.50879 25.5026ZM10.1663 22.2109L10.487 22.4067C11.8466 23.2368 13.4119 23.6755 15.0135 23.6755C19.8108 23.6755 23.7137 19.7726 23.7137 14.9752C23.7137 10.1778 19.8108 6.27486 15.0135 6.27486C10.2161 6.27486 6.31314 10.1778 6.31314 14.9752C6.31314 16.6468 6.78823 18.27 7.68691 19.6695L7.9029 20.0058L7.05667 23.0114L10.1663 22.2109Z"
								fill="white"
							/>
							<path
								d="M12.0704 10.0986L11.3905 10.0615C11.177 10.0499 10.9675 10.1212 10.8061 10.2615C10.4765 10.5477 9.94947 11.101 9.7876 11.8221C9.54621 12.8973 9.91926 14.2139 10.8848 15.5304C11.8503 16.847 13.6496 18.9535 16.8312 19.8532C17.8565 20.1431 18.663 19.9476 19.2853 19.5496C19.7782 19.2343 20.1179 18.7283 20.2403 18.1562L20.3489 17.6492C20.3834 17.4881 20.3016 17.3246 20.1519 17.2556L17.8541 16.1965C17.705 16.1277 17.5281 16.1712 17.4278 16.3012L16.5257 17.4706C16.4576 17.5589 16.3409 17.5939 16.2356 17.5569C15.6179 17.3398 13.5486 16.4732 12.4132 14.2861C12.364 14.1913 12.3762 14.0761 12.4461 13.9952L13.3082 12.9979C13.3962 12.8961 13.4185 12.7529 13.3656 12.6292L12.3751 10.3119C12.3224 10.1886 12.2042 10.1059 12.0704 10.0986Z"
								fill="white"
							/>
						</svg>
					</div>
					<TextField
						fullWidth
						size="small"
						className="max-width swiper-no-swiping "
						label={t("whatsapp")}
						variant="outlined"
						name="whatsapp"
						value={inputValues.whatsapp}
						onChange={handleChange}
					/>
				</div>
				<div className="d-flex mb-2 m-width">
					<div className="mr-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
								fill="url(#paint0_linear)"
							/>
							<path
								d="M12.25 21.875C11.764 21.875 11.8466 21.6915 11.679 21.2288L10.25 16.5259L21.25 10"
								fill="#C8DAEA"
							/>
							<path
								d="M12.25 21.875C12.625 21.875 12.7906 21.7035 13 21.5L15 19.5553L12.5052 18.0509"
								fill="#A9C9DD"
							/>
							<path
								d="M12.5049 18.0513L18.5499 22.5174C19.2398 22.898 19.7375 22.7009 19.9094 21.877L22.37 10.2816C22.6219 9.27165 21.985 8.8134 21.325 9.11302L6.87629 14.6844C5.89004 15.08 5.89591 15.6303 6.69654 15.8754L10.4044 17.0328L18.9885 11.6172C19.3938 11.3714 19.7658 11.5034 19.4605 11.7744"
								fill="url(#paint1_linear)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear"
									x1="20.01"
									y1="5.01"
									x2="12.51"
									y2="22.5"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#37AEE2" />
									<stop offset="1" stop-color="#1E96C8" />
								</linearGradient>
								<linearGradient
									id="paint1_linear"
									x1="16.8804"
									y1="15.0012"
									x2="19.2213"
									y2="20.3348"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#EFF7FC" />
									<stop offset="1" stop-color="white" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<TextField
						fullWidth
						size="small"
						className="max-width swiper-no-swiping"
						label={t("telegram")}
						variant="outlined"
						name="telegram"
						value={inputValues.telegram}
						onChange={handleChange}
					/>
				</div>
				<div className="d-flex mb-2 m-width">
					<div className="mr-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 0C18.6277 0 24 5.373 24 12C24 18.6278 18.6277 24 12 24C5.37217 24 0 18.6277 0 12C0 5.373 5.37225 0 12 0Z"
								fill="#26A6D1"
							/>
							<path
								d="M19.5023 8.08424C18.9781 8.31072 18.414 8.46296 17.8223 8.532C18.4268 8.18022 18.8903 7.62446 19.1086 6.96078C18.5431 7.28702 17.9175 7.52329 17.2508 7.65C16.7175 7.09877 15.9578 6.75449 15.1163 6.75449C13.5023 6.75449 12.1928 8.02427 12.1928 9.59171C12.1928 9.81447 12.2184 10.0312 12.2686 10.239C9.83856 10.1205 7.68306 8.99022 6.24159 7.2735C5.98958 7.69276 5.84557 8.17948 5.84557 8.69998C5.84557 9.68398 6.36154 10.5539 7.14608 11.0618C6.66612 11.0468 6.21605 10.92 5.82086 10.7063V10.7423C5.82086 12.1178 6.82882 13.2645 8.16682 13.5255C7.92156 13.59 7.66354 13.6253 7.39653 13.6253C7.20828 13.6253 7.02531 13.6081 6.84678 13.5743C7.21875 14.7023 8.2988 15.5228 9.57905 15.5453C8.57783 16.3073 7.31703 16.7603 5.94682 16.7603C5.71054 16.7603 5.47806 16.7468 5.24854 16.7206C6.54378 17.5261 8.07982 17.9963 9.73203 17.9963C15.111 17.9963 18.0526 13.6704 18.0526 9.92034L18.0443 9.55282C18.6143 9.15375 19.11 8.65426 19.5023 8.08424Z"
								fill="white"
							/>
						</svg>
					</div>
					<TextField
						fullWidth
						size="small"
						className="max-width swiper-no-swiping"
						label={t("twitter")}
						variant="outlined"
						name="twitter"
						value={inputValues.twitter}
						onChange={handleChange}
					/>
				</div>
				<div className="d-flex mb-2 m-width">
					<div className="mr-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0)">
								<path
									d="M12 23.999C18.6274 23.999 24 18.6264 24 11.999C24 5.37158 18.6274 -0.00100708 12 -0.00100708C5.37258 -0.00100708 0 5.37158 0 11.999C0 18.6264 5.37258 23.999 12 23.999Z"
									fill="#007AB9"
								/>
								<path
									d="M19.1699 12.9654V17.9127H16.3016V13.2969C16.3016 12.138 15.8874 11.3465 14.8489 11.3465C14.0563 11.3465 13.5855 11.8793 13.3776 12.3953C13.3021 12.5797 13.2826 12.8357 13.2826 13.0944V17.9125H10.4141C10.4141 17.9125 10.4526 10.0949 10.4141 9.28567H13.2828V10.5082C13.2771 10.5178 13.2689 10.5272 13.2638 10.5364H13.2828V10.5082C13.664 9.92162 14.3438 9.08309 15.868 9.08309C17.7551 9.08309 19.1699 10.3161 19.1699 12.9654ZM7.41332 5.12723C6.43211 5.12723 5.79016 5.77132 5.79016 6.61755C5.79016 7.44581 6.4135 8.10851 7.37567 8.10851H7.39428C8.39475 8.10851 9.0168 7.44581 9.0168 6.61755C8.99776 5.77132 8.39475 5.12723 7.41332 5.12723ZM5.96065 17.9127H8.82813V9.28567H5.96065V17.9127Z"
									fill="#F1F2F2"
								/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<TextField
						fullWidth
						size="small"
						className="max-width swiper-no-swiping"
						label={t("linkedin")}
						variant="outlined"
					
					/>
				</div>
				<div className="d-flex mb-2 m-width">
					<div className="mr-2">
						<svg	name="linkedin"
						value={inputValues.linkedin}
						onChange={handleChange}
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
								fill="#3B5998"
							/>
							<path
								d="M15.0168 12.4698H12.8755V20.3143H9.63132V12.4698H8.08838V9.71287H9.63132V7.92885C9.63132 6.65308 10.2373 4.65536 12.9044 4.65536L15.3075 4.66542V7.34145H13.5639C13.2779 7.34145 12.8757 7.48434 12.8757 8.09292V9.71544H15.3002L15.0168 12.4698Z"
								fill="white"
							/>
						</svg>
					</div>
					<TextField
						fullWidth
						size="small"
						className="max-width swiper-no-swiping"
						label={t("facebok")}
						variant="outlined"
						className="mb-4"
						name="facebok"
						value={inputValues.facebok}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	) 
}

export default ContactInfo
