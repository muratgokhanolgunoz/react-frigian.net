import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap'
import Context from '../../../../../context/Context'

const Aggrement = () => {
    const { t, i18n } = useTranslation('translation')
    const context = useContext(Context)

    const handleChange = (_e) => {
        context.setAggrementCheckedStatus(_e.target.checked)
    }

    return (
        <div id="pricing-aggrement">
            <Form.Check
                className="selection-radio"
                type="checkbox"
                checked={context.state.aggrementCheckedStatus === true ? true : false}
                onChange={(e) => handleChange(e)}
            />
            <a href={"./assets/agreement/frigian-net-" + i18n.language + "-agreement.html"} target="_blank" rel="nopenner noreferrer">
                <span>{t('register.pricingForm.AGGREMENT_TEXT')}</span>
            </a>
        </div>
    )
}

export default Aggrement