import React from 'react'
import { useTranslation  } from 'react-i18next'
import { Col, Row } from 'react-bootstrap'


const VacancyCart = (vacancies) => {
    console.log("v i cart", vacancies)
    const {t} = useTranslation()
    return (
       <>
      
            <div className="p-4 d-flex flex-column cart__wrapper">
            <h5 className="cart__title">po</h5>
            <span className="cart__company myText--small">vgbhj</span>
            <div className="">
                <span className="cart__location myText--xsmall"></span>{", "}
                <span className="cart__location myText--xsmall"></span>
            </div>
            <span  className="cart__salary myText--large">200000 - 300000 som</span>
            <div className="d-flex justify-content-between align-items-center">
            <span  className="cart__date myText--xsmall">08.12.2021</span>
            <div>
            <svg className="cart__fav" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9211 11.5067C29.7236 10.8993 29.1848 10.4692 28.5499 10.4118L19.8898 9.62553L16.4672 1.61271C16.2145 1.02401 15.6396 0.644062 14.9996 0.644062C14.3596 0.644062 13.7845 1.02401 13.5334 1.61271L10.1108 9.62553L1.44935 10.4118C0.814424 10.4703 0.276771 10.9004 0.0780987 11.5067C-0.11943 12.1142 0.0629922 12.7805 0.543194 13.2016L7.08955 18.9419L5.15936 27.4431C5.01814 28.0682 5.26076 28.7146 5.77941 29.0895C6.0582 29.2921 6.38573 29.3932 6.71441 29.3932C6.99686 29.3932 7.27953 29.3182 7.53199 29.1671L14.9996 24.702L22.4659 29.1671C23.0136 29.4944 23.7023 29.4644 24.2198 29.0895C24.7385 28.7146 24.9811 28.0682 24.8399 27.4431L22.9097 18.9419L29.456 13.2016C29.936 12.7805 30.1187 12.1156 29.9211 11.5067Z"/>
                </svg>

            </div>

            </div>
        </div>
           
       </>
    )
}
export default VacancyCart