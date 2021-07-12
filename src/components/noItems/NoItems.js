import React from 'react'
import {
  Col,
  Container,
  Row
} from 'react-bootstrap'

import { useTranslation } from 'react-i18next'


const NoItems = () => {
    const { t } = useTranslation()

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="mt-5 mb-5">
            <div className="d-flex flex-column align-items-center">
              <h4 className="mb-2">{t("noItemsAfterSearch")}</h4>
              <p className="text-muted float-left">{t("trytoChangeSearchFields")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NoItems
