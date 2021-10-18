import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Context from '../../../../../context/Context'
import { Row, Col } from 'react-bootstrap'

const Header = () => {

    const { t } = useTranslation('translation')
    const context = useContext(Context)

    const packages = [
        {
            name: t('pricing.items.startup.TITLE')
        },
        {
            name: t('pricing.items.business.TITLE')
        }
    ]

    const handleChange = (_value) => {        
        if (_value > 3) {
            const promise = new Promise(function (resolve, reject) {
                context.setPackageUsers(parseInt(_value))
                resolve()
            })

            promise.then(() => {
                context.calculateYearlyPrice()
                context.calculateMonthlyPrice()
            })
        } 
    }

    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div>
                        <Row>
                            <Col lg={9} md={12}>
                                <div id="billing-header">
                                    <h4><b>{t('register.pricingForm.PACKAGE')} : </b> {packages[context.state.packageId - 1].name}</h4>
                                </div>
                            </Col>

                            <Col lg={3} md={12}>
                                <div id="package-users-input" style={{ backgroundColor: "var(--color-2)", color: "#fff" }}>
                                    <div className="contact-form-item">
                                        <label>{t('register.pricingForm.NUMBER_OF_USERS')}</label>
                                        <input
                                            type="number"
                                            style={{ borderColor: "#fff", color: "#fff" }}
                                            min={context.state.packageId === 1 ? 4 : 5}
                                            max={context.state.packageId === 1 ? 4 : 30}
                                            disabled={context.state.packageId === 1 ? true : false}
                                            value={context.state.packageUsers}
                                            onChange={(e) => handleChange(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Header