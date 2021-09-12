import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Banner = () => {

    const { t } = useTranslation('translation')

    const styles = {
        background: 'url(./assets/img/frigian-bg.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
    }

    return (
        <div id="banner" style={styles}>
            <div id="banner-text">
                <h1>{t('home.banner.BANNER_HEADER')}</h1>
                <p>{t('home.banner.BANNER_CONTENT')}</p>
                <br />
                <Link className="template-button template-button-orange" to="/pricing" rel="noreferrer">{t('home.banner.BANNER_BUTTON')}</Link>
            </div>
        </div>
    )
}

export default Banner