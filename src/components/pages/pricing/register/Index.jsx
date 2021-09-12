import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Context from '../../../../context/Context'

import SectionBanner from '../../../layouts/SectionBanner'
import CompanyForm from './forms/CompanyForm'
import PricingForm from './forms/PricingForm'

const Index = () => {

    const { t } = useTranslation('translation')
    const context = useContext(Context)
    
    return (
        <div id="register">
            <SectionBanner
                title={t('register.banner.TITLE')}
                breadcrumbPrevText={t('navbar.NAVBAR_ITEM_HOME')}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t('navbar.NAVBAR_ITEM_PRICING')}
            />
            {context.state.registerPage % 2 === 0
                ? <CompanyForm />
                : <PricingForm />
            }
        </div>
    )
}

export default Index