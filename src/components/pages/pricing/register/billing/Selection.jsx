import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Form } from 'react-bootstrap'
import Context from '../../../../../context/Context'

const Selection = () => {

    const { t } = useTranslation('translation')
    const context = useContext(Context)
    const [select, setSelect] = useState("")

    useEffect(() => {
        setSelect(context.state.registrationYearMonth)
    }, [context.state.registrationYearMonth])

    const handleChange = (_selection) => {
        context.setRegistrationYearMonth(_selection)
    }

    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="selection">
                        <div className="selection-item">
                            <Form.Check
                                className="selection-radio"
                                name="select"
                                type="radio"
                                checked={select === "1" ? true : false}
                                value="1"
                                label={t('register.pricingForm.YEARLY_PAYMENT')}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            <span>
                                &emsp;<b>[ €{' '}{context.state.packageYearlyPrice.toString().replace(".", ",")} + {t('register.pricingForm.CAMPAIGN_TAX_ABBREVIATION')} ]</b>
                            </span>
                        </div>
                        <div className="selection-item">
                            <Form.Check
                                className="selection-radio"
                                name="select"
                                type="radio"
                                checked={select === "2" ? true : false}
                                value="2"
                                label={t('register.pricingForm.MONTHLY_PAYMENT')}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            <span>
                                &emsp;<b>[ €{' '}{context.state.packageMonthlyPrice.toString().replace(".", ",")} + {t('register.pricingForm.CAMPAIGN_TAX_ABBREVIATION')} ]</b>
                            </span>
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default Selection