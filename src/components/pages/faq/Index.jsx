import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SectionBanner from '../../layouts/SectionBanner'
import FaqRow from './FaqRow'
import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
    const { t } = useTranslation('translation')

    useEffect(() => {
        window.scrollTo(0, 250);
    }, []);

    return (
        <div id="faq">
            <SectionBanner
                title={t('faq.banner.FAQ_BANNER_TITLE')}
                breadcrumbPrevText={t('navbar.NAVBAR_ITEM_HOME')}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t('navbar.NAVBAR_ITEM_FAQ')}
            />
            <Container className="section-padding">
                <Row>
                    <Col lg={12}>
                        {
                            t('faq.items', { returnObjects: true }).map((object, index) => (
                                <FaqRow key={index} item={object} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index