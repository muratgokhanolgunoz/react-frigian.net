import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import ServicesRow from './ServicesRow'

import { FaCogs, FaPuzzlePiece } from "react-icons/fa"

const ServicesList = () => {

    const { t } = useTranslation('translation')

    return (
        <div id="services-list" className="section-padding">
            <Container>
                <Row>
                    <Col className="p-4" lg={6} sm={12}>
                        <div className="services-item-title">
                            <h4><FaPuzzlePiece />&emsp;{t('services.titles.SERVICES_COLUMNS_LEFT_TITLE')}</h4>
                        </div>
                        {
                            t('services.columns.left', { returnObjects: true }).map((servicesObject, index) => (
                                <ServicesRow key={index} item={servicesObject} />
                            ))
                        }
                    </Col>

                    <Col className="p-4" lg={6} sm={12}>
                        <div className="services-item-title">
                            <h4><FaCogs />&emsp;{t('services.titles.SERVICES_COLUMNS_RIGHT_TITLE')}</h4>
                        </div>
                        {
                            t('services.columns.right', { returnObjects: true }).map((servicesObject, index) => (
                                <ServicesRow key={index} item={servicesObject} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesList