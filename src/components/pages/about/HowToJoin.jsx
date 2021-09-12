import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../layouts/SectionTitle'
import { Container, Row, Col } from 'react-bootstrap'

const HowToJoin = () => {
    const { t } = useTranslation('translation')

    const styles = {
        background: 'url(./assets/img/frigian-bg.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
    }

    return (
        <div id="how-to-join" className="section-padding" style={styles}>
            <Container>
                <Row>
                    <Col className="history-pragraph" lg={12}>
                        <SectionTitle
                            id="history-title"
                            sectionTitle="section-title"
                            sectionSubTitle="section-subtitle"
                            textAlign="text-center"
                            titleColor="color-orange"
                            subtitleColor="color-dark"
                            title={t('about.how_to_join.HOW_TO_JOIN_TITLE')}
                            subtitle=""
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        t('about.how_to_join.items', { returnObjects: true }).map((object, index) => (
                            <Col key={index} lg={4} sm={12}>
                                <div className="how-to-join-box">
                                    <span>{object['HOW_TO_JOIN_ITEM_ID']}</span>
                                    <h4>{object['HOW_TO_JOIN_ITEM_TITLE']}</h4>
                                    <p>{object['HOW_TO_JOIN_ITEM_CONTENT']}</p>
                                </div>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    )
}

export default HowToJoin