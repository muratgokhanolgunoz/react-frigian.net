import React, { useContext } from 'react'
import Context from '../../../../../context/Context'
import { useTranslation } from 'react-i18next'
import RegisterServices from '../../../../../services/RegisterServices'
import { makeRandomCharacter, showToast } from '../../../../../core/functions'
import PropTypes from 'prop-types'
import { Modal, Image } from 'react-bootstrap'

const PopupCompanyLogo = (props) => {

    const context = useContext(Context)
    const { t } = useTranslation('translation')
    let registerServices = new RegisterServices()

    const uploadCompanyLogo = () => {
        if (context.state.subdomain !== "") {

            var file = new File([props.companyLogoBlob], makeRandomCharacter(10), { type: "image/jpg" })

            if (file.size <= 1048576) {
                const payload = new FormData()
                payload.append('file', file)
                payload.append('subdomain', context.state.subdomain)

                registerServices.uploadLogo(payload)
                    .then((response) => {
                        if (response.data.msg === "Success") {
                            context.setCompanyLogo(response.data.img)
                            props.companyPopupHandleClose(false)
                            props.companyLogoHandleChange(undefined)
                            showToast("bottom-right", t('register.notification.LOGO_UPLOAD_SUCCESS_MESSAGE'), "success")
                        } else {
                            showToast("bottom-right", t('register.notification.LOGO_UPLOAD_ERROR_MESSAGE'), "error")
                        }
                    })
                    .catch(() => showToast("bottom-right", t('register.notification.LOGO_UPLOAD_ERROR_MESSAGE'), "error"))
            } else {
                showToast("bottom-right", t('register.notification.LOGO_UPLOAD_FILE_SIZE_ERROR'), "error")
            }

        } else {
            showToast("bottom-right", t('register.notification.DEFINE_SUBDOMAIN'), "error")
        }
    }

    return (
        <div>
            <Modal show={props.companyPopupShow} onHide={() => props.companyPopupHandleClose()}>
                <Modal.Header style={{ backgroundColor: "#fff" }}>
                    <Modal.Title>{t('register.pricingForm.COMPANY_LOGO_CONFIRMATION')}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#fff" }}>
                    <Image src={props.companyLogoDataUri} style={{ border: "1px solid lightgray", display: "block", margin: "auto" }} fluid></Image>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#fff" }}>
                    <button className="template-button template-button-dark" style={{ fontSize: "1em" }} onClick={() => uploadCompanyLogo()}>EVET</button>
                    <button className="template-button template-button-dark" style={{ fontSize: "1em" }} onClick={() => props.companyPopupHandleClose()}>HAYIR</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

PopupCompanyLogo.propTypes = {
    companyPopupShow: PropTypes.bool.isRequired,
    companyPopupHandleClose: PropTypes.func.isRequired,
    companyLogoHandleChange: PropTypes.func.isRequired,
    companyLogoDataUri: PropTypes.string.isRequired,
    companyLogoBlob: PropTypes.object.isRequired,
}

export default PopupCompanyLogo