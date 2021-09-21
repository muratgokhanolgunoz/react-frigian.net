import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFound = () => {

    const {t} = useTranslation('translation')

    const styles = {
        width: "100%",
        textAlign: "center",
        padding: "20em 0"
    }

    return (
        <div style={styles}>
            <h1>404</h1>
            <h3>{t('template_message.error.NOT_FOUND')}</h3>            
        </div>
    )
}

export default NotFound