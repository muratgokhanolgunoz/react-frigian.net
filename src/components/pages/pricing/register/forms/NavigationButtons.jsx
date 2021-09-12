import React, { useContext, Fragment } from 'react'
import Context from '../../../../../context/Context'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Row, Col } from 'react-bootstrap'


const NavigationButtons = (props) => {

    const { t } = useTranslation('translation')
    const context = useContext(Context)

    return (
        <div id="pricing-navigation-button">
            <Row>
                {context.state.registerPage % 2 === 0
                    ?
                    (
                        <Fragment>
                            <Col lg={6}>
                                <div className="contact-form-item">
                                    <button className="template-button template-button-dark" onClick={() => context.setDefault()}>{t('register.button.PREVIOUS')}</button>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="contact-form-item">
                                    <button className="template-button template-button-dark" onClick={() => props.handleFormValidation()}>{t('register.button.NEXT')}</button>
                                </div>
                            </Col>
                        </Fragment>
                    )
                    :
                    (
                        <Fragment>
                            <Col sm={6}>
                                <div className="contact-form-item">
                                    <button type="button" className="template-button template-button-dark" onClick={() => props.handleNavigationButton()}>{t('register.button.PREVIOUS')}</button>
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div className="contact-form-item">
                                    <button type="submit" onClick={() => props.handleSave()} className="template-button template-button-dark">{t('register.button.SAVE')}</button>
                                </div>
                            </Col>
                        </Fragment>
                    )
                }
            </Row>
        </div>
    )
}

NavigationButtons.propTypes = {
    handleFormValidation: PropTypes.func,
    handleNavigationButton: PropTypes.func,
    handleSave: PropTypes.func
}

export default NavigationButtons