import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Container } from 'react-bootstrap'
import SectionTitle from '../../layouts/SectionTitle'
import { GoRocket } from "react-icons/go"
import { FaRegHandPaper, FaCogs, FaCloudUploadAlt, FaGraduationCap } from "react-icons/fa"
import { GiJigsawPiece } from "react-icons/gi"
import { BsFileEarmarkText } from "react-icons/bs"
import { SiMailDotRu } from "react-icons/si"
import { HiOutlineSupport } from "react-icons/hi"

const Why = () => {

    const {t} = useTranslation('translation')

    return (
        <div id="why" className="section-padding">
            <Container>
                <Row>
                    <SectionTitle
                        sectionTitle="section-title"
                        sectionSubTitle="section-subtitle"
                        textAlign="text-center"
                        titleColor="color-orange"
                        subtitleColor="color-dark"
                        title={t('home.why.WHY_SECTION_TITLE')}
                        subtitle={t('home.why.WHY_SECTION_SUBTITLE')}
                    />
                </Row>

                <Row>
                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <GoRocket className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.1.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.1.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <FaRegHandPaper className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.2.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.2.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <GiJigsawPiece className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.3.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.3.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <BsFileEarmarkText className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.4.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.4.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <FaCogs className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.5.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.5.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <SiMailDotRu className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.6.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.6.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <FaCloudUploadAlt className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.7.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.7.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <FaGraduationCap className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.8.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.8.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="why-item">
                            <HiOutlineSupport className="why-icon" />
                            <div className="why-box">
                                <h4>{t('home.why.items.9.WHY_ITEMS_TITLE')}</h4>
                                <p>{t('home.why.items.9.WHY_ITEMS_CONTENT')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Why