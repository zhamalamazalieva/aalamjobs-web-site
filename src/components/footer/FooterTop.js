import React from "react"
import { Col, Row, Image, Container } from "react-bootstrap"
import logo from "../../assets/img/logo-green.png"
import { useTranslation } from "react-i18next"
import googlePlay from '../../assets/img/googleplay.png'


const FooterTop = () => {
	const { t } = useTranslation()
	return (
		<div className="footer__top">
			<Row className="myContainer">
				<a href="#" className="col-md-2 d-flex justify-content-center">
					<Image src={logo} alt="logo" size="sm" className="footer__logo" />
				</a>			
				<div className="col">
					<ul>
						<li className="myText--small footer__link">
							{t("footer.aboutUs")}
						</li>
						<li className="myText--small footer__link">
							{t("footer.termsAndConditions")}
						</li>
						<li className="myText--small footer__link">
							{t("footer.privacyPolicy")}
						</li>
						<li className="myText--small footer__link">{t("footer.FAQ")}</li>
					</ul>
				</div>
				<div className="col">
					<ul>
						<li className="myText--small footer__link">
							{t("footer.contactUs")}
						</li>
						<li className="myText--small footer__link">info@aalamjobs.com</li>
						<li className="myText--small footer__link">+996 (700) 123456</li>
					</ul>
				</div>
				<div className="col">
		
						<span className="myText--small footer__link">
							{t("footer.followUsOn")}
						</span>
			
						
							<div className="d-flex ">
								<span className="footer__social-links">
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
								</span>
								<span className="footer__social-links">
									<svg
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
								</span>
								<span className="footer__social-links">
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
								</span>
							</div>
					
				
				</div>
                <div className="col">
					<ul>
						<li className="myText--small footer__link">
							{t("footer.downloadApp")}!
						</li>
						<li className="myText--small footer__link">
							<img src={googlePlay} alt="google play"/>
						</li>
					</ul>
				</div>
			</Row>
		</div>
	)
}
export default FooterTop
