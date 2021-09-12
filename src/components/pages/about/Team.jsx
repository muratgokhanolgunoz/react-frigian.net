import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../layouts/SectionTitle'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { GrLinkedin } from "react-icons/gr"

const Team = () => {
    const {t} = useTranslation('translation')

    return (
        <div id="team" className="section-padding">
            <Container>
                <Row>
                    <SectionTitle
                        id="history-title"
                        sectionTitle="section-title"
                        sectionSubTitle="section-subtitle"
                        textAlign="text-center"
                        titleColor="color-orange"
                        subtitleColor="color-dark"
                        title={t('about.team.TEAM_TITLE')}
                        subtitle=""
                    />
                </Row>
                <Row>
                    <Col lg={{ offset: 2, span: 4 }} md={6}>
                        <div className="team-box">
                            <Image src="./assets/img/about/team_1.jpg" fluid></Image>
                            <h5>Seyfi ARICI</h5>
                            <span>{t('about.team.items.1.TEAM_ITEMS_RANK')}</span>
                            <p>{t('about.team.items.1.TEAM_ITEMS_DESCRIPTION')}</p>
                            <a href="https://www.linkedin.com/in/seyfi-arici/" rel="noropper noreferrer" target="_blank" className="team-social">
                                <GrLinkedin />
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="team-box">
                            <Image src="./assets/img/about/team_2.jpg" fluid></Image>
                            <h5>Turaj FARSI</h5>
                            <span>{t('about.team.items.2.TEAM_ITEMS_RANK')}</span>
                            <p>{t('about.team.items.2.TEAM_ITEMS_DESCRIPTION')}</p>
                            <a href="https://www.linkedin.com/in/tfarsi" rel="noropper noreferrer" target="_blank" className="team-social">
                                <GrLinkedin />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team