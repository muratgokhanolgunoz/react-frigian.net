import React from 'react'
import Context from '../../../../../../context/Context'
import { useTranslation } from 'react-i18next'

import { Image } from 'react-bootstrap'

const CampaignDiscount = () => {

    const { t } = useTranslation('translation')    

    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="campaign-discount">
                        <div id="campaign-success">
                            <Image className="campaign-discount-thumb" src={context.state.campaignCodeImage}></Image>
                            <div className="campaign-discount-reseller">
                                <span><b>{context.state.campaignCodeReseller === "INVALID_CODE" ? t('register.pricingForm.CAMPAIGN_ERROR') : context.state.campaignCodeReseller}</b></span>
                                <span className={context.state.campaignCodeDiscount > 0 ? "color-green" : null}>
                                    <small>%{context.state.campaignCodeDiscount}{' '}{t('register.pricingForm.CAMPAIGN_DISCOUNT')}</small>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default CampaignDiscount