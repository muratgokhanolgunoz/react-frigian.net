import React, { useContext } from 'react'
import Context from '../../../context/Context'
import { useTranslation } from 'react-i18next'

import SectionBanner from '../../layouts/SectionBanner'
import SectionTitle from '../../layouts/SectionTitle'

import { Container, Row, Col } from 'react-bootstrap'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const Packages = () => {

    const { t } = useTranslation('translation')
    const context = useContext(Context)

    const setSelectedPackage = (_packageId, _packageUsers, _packageUnitPrice) => {
        context.setPackageId(_packageId)
        context.setPackageUsers(_packageUsers)
        context.setPackageUnitPrice(_packageUnitPrice)
    }

    return (
        <div id="pricing">
            <SectionBanner
                title={t('pricing.banner.TITLE')}
                breadcrumbPrevText={t('navbar.NAVBAR_ITEM_HOME')}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t('navbar.NAVBAR_ITEM_PRICING')}
            />

            <Container className="section-padding">
                <Row>
                    <SectionTitle
                        sectionTitle="section-title"
                        sectionSubTitle="section-subtitle"
                        textAlign="text-center"
                        titleColor="color-orange"
                        subtitleColor="color-dark"
                        title={t('pricing.title.TITLE')}
                        subtitle={t('pricing.title.SUBTITLE_1')}
                    />
                </Row>
                <Row>
                    <p id="pricing-subitle-2">{t('pricing.title.SUBTITLE_2')}</p>
                </Row>
                <Row>
                    <Col className="pricing-column" lg={4} md={6}>
                        <div className="pricing-item">
                            <div className="pricing-item-header" style={{ backgroundColor: "var(--color-5)", border: "3px solid var(--color-5)" }}>
                                <h4>{t('pricing.items.startup.TITLE')}</h4>
                            </div>
                            <div className="pricing-item-body" style={{ borderWidth: "3px 3px .1px 3px", borderStyle: "solid", borderColor: "var(--color-5)" }}>
                                <p>{t('pricing.items.startup.SUBTITLE')}</p>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.SALES')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.OPERATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.DOCUMENTATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.QUALITY_CONTROL')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ARCHIVE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ACCOUNTING')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.INVOICE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaTimesCircle className="pricing-icon pricing-no-feature" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.CONSOLE')}</span>
                                </div>
                            </div>
                            <div className="pricing-item-footer" style={{ borderWidth: "0 3px 3px 3px", borderStyle: "solid", borderColor: "var(--color-5)" }}>
                                <p>{t('pricing.items.startup.FOOTER_ROW_1')}</p>
                                <p>{t('pricing.items.startup.FOOTER_ROW_2')}</p>
                                <p>{t('pricing.items.startup.FOOTER_ROW_3')}</p>
                                <button className="template-button template-button-danger" onClick={() => setSelectedPackage(1, 4, 9.99)}>{t('pricing.items.startup.BUTTON')}</button>
                            </div>
                        </div>
                    </Col>

                    <Col className="pricing-column" lg={4} md={6}>
                        <div className="pricing-item">
                            <div className="pricing-item-header" style={{ backgroundColor: "var(--color-6)", border: "3px solid var(--color-6)" }}>
                                <h4>{t('pricing.items.business.TITLE')}</h4>
                                <span id="span-best-value">{t('pricing.items.BEST_PRICE')}</span>
                            </div>                            
                            <div className="pricing-item-body" style={{ borderWidth: "3px 3px .1px 3px", borderStyle: "solid", borderColor: "var(--color-6)" }}>
                                <p>{t('pricing.items.business.SUBTITLE')}</p>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.SALES')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.OPERATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.DOCUMENTATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.QUALITY_CONTROL')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ARCHIVE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ACCOUNTING')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.INVOICE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.CONSOLE')}</span>
                                </div>
                            </div>
                            <div className="pricing-item-footer" style={{ borderWidth: "0 3px 3px 3px", borderStyle: "solid", borderColor: "var(--color-6)" }}>
                                <p>{t('pricing.items.business.FOOTER_ROW_1')}</p>
                                <p>{t('pricing.items.business.FOOTER_ROW_2')}</p>
                                <p>{t('pricing.items.business.FOOTER_ROW_3')}</p>
                                <button className="template-button template-button-danger" onClick={() => setSelectedPackage(2, 5, 17.99)}>{t('pricing.items.business.BUTTON')}</button>
                            </div>
                        </div>
                    </Col>

                    <Col className="pricing-column" lg={4} md={6}>
                        <div className="pricing-item">
                            <div className="pricing-item-header" style={{ backgroundColor: "var(--color-7)", border: "3px solid var(--color-7)" }}>
                                <h4>{t('pricing.items.premium.TITLE')}</h4>
                            </div>
                            <div className="pricing-item-body" style={{ borderWidth: "3px 3px .1px 3px", borderStyle: "solid", borderColor: "var(--color-7)" }}>
                                <p>{t('pricing.items.premium.SUBTITLE')}</p>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.SALES')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.OPERATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.DOCUMENTATION')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.QUALITY_CONTROL')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ARCHIVE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.ACCOUNTING')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.INVOICE')}</span>
                                </div>
                                <div className="pricing-feature-row">
                                    <span><FaCheckCircle className="pricing-icon" /></span>
                                    <span className="pricing-item-text">{t('pricing.items.features.CONSOLE')}</span>
                                </div>
                            </div>
                            <div className="pricing-item-footer" style={{ borderWidth: "0 3px 3px 3px", borderStyle: "solid", borderColor: "var(--color-7)" }}>
                                <p>{t('pricing.items.premium.FOOTER_ROW_1')}</p>
                                <p>{t('pricing.items.premium.FOOTER_ROW_2')}</p>
                                <p>{t('pricing.items.premium.FOOTER_ROW_3')}</p>
                                <a className="template-button template-button-danger" href="tel:+908508112480">{t('pricing.items.premium.BUTTON')}</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Packages