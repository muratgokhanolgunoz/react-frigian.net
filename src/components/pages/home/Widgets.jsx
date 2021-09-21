import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import HomeServices from '../../../services/HomeServices'
import { ToastContainer } from 'react-toastify'
import { Container, Row, Col } from 'react-bootstrap'
import { MdLocalPhone } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { showToast, validateEmail } from '../../../core/functions'

const Widgets = () => {

    let homeServices = new HomeServices()
    let formError = false

    const {t} = useTranslation('translation')

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const sendCallRequest = (e) => {
        e.preventDefault()
        formError = false

        if (fullname === "") {
            showToast("bottom-right", t('home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_NAME'), "error")
            formError = true
        }

        if (email === "") {
            showToast("bottom-right", t('home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL'), "error")
            formError = true
        }

        if (email !== "" && !validateEmail(email)) {
            showToast("bottom-right", t('home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT'), "error")
            formError = true
        }

        if (phone === "") {
            showToast("bottom-right", t('home.widgets.notification.form_validation.HOME_WIDGETS_NOTIFICATION_FORM_VALIDATION_ERROR_PHONE'), "error")
            formError = true
        }

        if (formError === false) {
            const payload = new FormData()
            payload.append('name', fullname)
            payload.append('email', email)
            payload.append('tel', phone)

            homeServices.sendCallRequest(payload)
                .then((response) => {
                    response.data.result === "sebeci.MESSAGE_SENT_SUCCESSFULLY"
                        ?
                        showToast("bottom-right", t('home.widgets.notification.HOME_WIDGETS_NOTIFICATION_SUCCESS_MESSAGE'), "success")
                        :
                        showToast("bottom-right", t('home.widgets.notification.HOME_WIDGETS_NOTIFICATION_ERROR_MESSAGE'), "error")

                    setFullname("")
                    setEmail("")
                    setPhone("")
                })
                .catch(() => showToast("bottom-right", t('home.widgets.notification.HOME_WIDGETS_NOTIFICATION_ERROR_MESSAGE'), "error"))
        }
    }

    return (
        <div id="widgets">
            <Container className="section-container">
                <Row>
                    <Col lg={1}></Col>
                    <Col className="widgets-column" lg={3} sm={12}>
                        <div className="widget-item background-color-orange">
                            <span>
                                <BiDollar className="widget-icon" />
                            </span>
                            <br />
                            <h5>{t('home.widgets.left.WIDGET_LEFT_TITLE')}</h5>
                            <p>{t('home.widgets.left.WIDGET_LEFT_CONTENT')}</p>
                        </div>
                    </Col>

                    <Col className="widgets-column" lg={4} sm={12}>
                        <div className="widget-item background-color-dark">
                            <h5>{t('home.widgets.center.WIDGET_CENTER_TITLE')}</h5>
                            <form onSubmit={(e) => sendCallRequest(e)}>
                                <div className="form-item">
                                    <input type="text" placeholder={t('home.widgets.center.form.WIDGET_CENTER_FORM_NAME')} value={fullname} onChange={(e) => setFullname(e.target.value)}></input>
                                </div>
                                <div className="form-item">
                                    <input type="text" placeholder={t('home.widgets.center.form.WIDGET_CENTER_FORM_EMAIL')} value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="form-item">
                                    <input type="text" placeholder={t('home.widgets.center.form.WIDGET_CENTER_FORM_PHONE')} value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                </div>
                                <div className="form-item">
                                    <button className="template-button template-button-orange">{t('buttons.SEND_REQUEST')}</button>
                                </div>
                            </form>
                        </div>
                    </Col>

                    <Col className="widgets-column" lg={3} sm={12}>
                        <div className="widget-item background-color-orange">
                            <span>
                                <MdLocalPhone className="widget-icon" />
                            </span>
                            <br />
                            <h5>{t('home.widgets.right.WIDGET_RIGHT_TITLE')}</h5>
                            <p>{t('home.widgets.right.WIDGET_RIGHT_CONTENT')}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </div>
    )
}

export default Widgets