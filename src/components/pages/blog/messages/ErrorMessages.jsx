import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { VscWarning } from 'react-icons/vsc'

const WaitingMessage = () => {

    const { t } = useTranslation('translation')

    return (
        <Fragment>
            <div id="alert-blog-list" className="alert alert-danger" role="alert">
                <VscWarning className="template-button-icon" />&emsp;{t('template_message.error.BLOG_SERVER_ERROR')}
            </div>
        </Fragment>
    )
}
export default WaitingMessage