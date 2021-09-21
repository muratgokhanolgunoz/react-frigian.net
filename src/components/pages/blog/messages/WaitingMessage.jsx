import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CgSpinner } from 'react-icons/cg'

const WaitingMessage = () => {

    const { t } = useTranslation('translation')

    return (
        <Fragment>
            <div id="alert-blog-list" className="alert alert-info" role="alert">
                <CgSpinner id="spinner" className="template-button-icon" /> &emsp; {t('template_message.info.WAIT_RESPONSE')}
            </div>
        </Fragment>
    )
}
export default WaitingMessage