import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Context from '../../../../../../context/Context'
import RegisterServices from '../../../../../../services/RegisterServices'

const CampaignInput = () => {

    const { t } = useTranslation('translation')
    const registerServices = new RegisterServices()
    const context = useContext(Context)
    const [code, setCode] = useState("")

    useEffect(() => {
        setCode(context.state.campaignCodeTemp)
    }, [context.state.campaignCodeTemp])

    const handleChange = (_value) => {
        context.setCampaignCodeTemp(_value)
        if (_value.length > 0) {            
            registerServices.getDiscount(_value)
                .then((response) => {
                    if (parseFloat(response.data.discount) > 0) {
                        context.setCampaignCode(_value)
                    } else {
                        context.setCampaignCode("")
                    }

                    context.setCampaignCodeStatusOfInput(true)
                    context.setCampaignCodeImage(response.data.reseller_photo)
                    context.setCampaignReseller(response.data.reseller_name)
                    context.setCampaignCodeDiscount(parseFloat(response.data.discount))

                    context.calculateYearlyPrice()
                    context.calculateMonthlyPrice()
                })
                .catch(() => console.warn("Error: Get discount"))
        } else {
            context.setCampaignCodeStatusOfInput(false)
            context.setCampaignCodeImage("")
            context.setCampaignReseller("")
            context.setCampaignCodeDiscount(0)

            context.calculateYearlyPrice()
            context.calculateMonthlyPrice()
        }
    }

    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="campain-input">
                        <div className="contact-form-item">
                            <label>{t('register.pricingForm.CAMPAIGN_CODE')}</label>
                            <input
                                type="text"
                                placeholder=""
                                value={code}
                                onChange={(e) => handleChange(e.target.value)}>
                            </input>
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default CampaignInput