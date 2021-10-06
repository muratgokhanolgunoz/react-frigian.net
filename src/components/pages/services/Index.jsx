import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SectionBanner from '../../layouts/SectionBanner'
import ServicesList from './ServicesList'

const Index = () => {
    const { t } = useTranslation('translation')

    useEffect(() => {
        window.scrollTo(0, 250)
    }, [])

    return (
        <div id="services">
            <SectionBanner
                title={t('services.banner.SERVICES_BANNER_TITLE')}
                breadcrumbPrevText={t('navbar.NAVBAR_ITEM_HOME')}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t('navbar.NAVBAR_ITEM_SERVICES')}
            />
            <ServicesList />
        </div>
    )
}

export default Index