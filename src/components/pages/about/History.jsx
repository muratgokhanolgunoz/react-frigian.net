import React from 'react'
import SectionTitle from '../../layouts/SectionTitle'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Image } from 'react-bootstrap'

const History = () => {

    const { t } = useTranslation('translation')

    return (
        <div id="history" className="section-padding">
            <Container>
                <Row>
                    <Col className="history-pragraph" lg={7} md={12}>
                        <SectionTitle
                            id="history-title"
                            sectionTitle="section-title"
                            sectionSubTitle="section-subtitle"
                            textAlign="text-center"
                            titleColor="color-orange"
                            subtitleColor="color-dark"
                            title={t('about.history.HISTORY_TITLE')}
                            subtitle=""
                        />
                        <br />
                        <p>{t('about.history.HISTORY_PARAGRAPH_1')}</p>
                        <br />
                        <p>{t('about.history.HISTORY_PARAGRAPH_2')}</p>
                        <br />
                        <br />
                        <p><b>{t('about.history.HISTORY_SIGNATURE')}</b></p>
                    </Col>

                    <Col lg={5} md={12}>
                        <br />
                        <br />
                        <br />
                        <Image className="history-image" src="./assets/img/about/history_2.jpg" title="Frigian" fluid></Image>
                        {/* <Image className="history-image" src="./assets/img/about/history_1.jpg" title="Frigian" fluid></Image>                         */}
                        <Image className="history-image" src="./assets/img/about/history_3.jpg" title="Online eğitimlerimizden bir sahne" fluid></Image>                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default History