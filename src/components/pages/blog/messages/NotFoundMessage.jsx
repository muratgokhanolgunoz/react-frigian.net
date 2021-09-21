import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { VscWarning } from 'react-icons/vsc'

const WaitingMessage = () => {

    const { t } = useTranslation('translation')

    return (
        <Fragment>
            <div id="alert-blog-list" className="alert alert-warning" role="alert">
                <VscWarning className="template-button-icon" />&emsp;{t('template_message.warning.BLOG_NOT_FOUND')}
            </div>
        </Fragment>
    )
}
export default WaitingMessage