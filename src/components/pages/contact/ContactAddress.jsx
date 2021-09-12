import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactAddress = () => {
    const {t} = useTranslation('translation')

    return (
        <div id="contact-address">
            <div className="contact-address-row">
                <iframe title="Frigian" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12045.414611750355!2d28.722642!3d40.995632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xacad3034e50d32e!2sfrigian.com%20%7C%20Navlun%20arama%20motoru!5e0!3m2!1str!2str!4v1629718657785!5m2!1str!2str" allowFullScreen="" loading="lazy"></iframe>
            </div>

            <div className="contact-address-row">
                <h5><b>{t('contact.address.CONTACT_ADDRESS_COMPANY_NAME_LABEL')}</b></h5>
                <p>{t('contact.address.CONTACT_ADDRESS_COMPANY_NAME_CONTENT')}</p>
            </div>

            <div className="contact-address-row">
                <h5><b>{t('contact.address.CONTACT_ADDRESS_MERSIS_LABEL')}</b></h5>
                <p>0388123262200001</p>
            </div>

            <div className="contact-address-row">
                <h5><b>{t('contact.address.CONTACT_ADDRESS_ADDRESS_LABEL')}</b></h5>
                <p>{t('contact.address.CONTACT_ADDRESS_ADDRESS_CONTENT')}</p>
            </div>

            <div className="contact-address-row">
                <h5><b>{t('contact.address.CONTACT_ADDRESS_PHONE_LABEL')}</b></h5>
                <a href="tel:+908508112480">+90 (850) 811 24 80</a>
            </div>

            <div className="contact-address-row">
                <h5><b>{t('contact.address.CONTACT_ADDRESS_EMAIL_LABEL')}</b></h5>
                <a href="mailto:info@frigian.com">info@frigian.com</a>
            </div>
        </div>
    )
}

export default ContactAddress