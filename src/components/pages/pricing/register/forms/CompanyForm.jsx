import React, { useContext, useEffect } from 'react'
import Context from '../../../../../context/Context'
import RegisterServices from '../../../../../services/RegisterServices'
import NavigationButtons from './NavigationButtons'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { showToast } from '../../../../../core/functions'

const CompanyForm = () => {

    const { t } = useTranslation('translation')
    let registerServices = new RegisterServices()
    const context = useContext(Context)

    useEffect(() => {
        getCountryInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setNextPageLog = () => {
        registerServices.setNextPageLog()
            .then(() => console.log("Click to next page button"))
            .catch(() => console.warn("Error : Click to next page button"))
    }

    const getCountryInfo = () => {
        registerServices.getCountryInfo()
            .then((response) => {
                context.setCountryId(response.data.countryId)
                context.setCountryName(response.data.countryName)
            })
            .catch(() => console.warn("Error : Getting country information"))
    }

    const formValidation = () => {
        if (context.state.countryId === "" ||
            context.state.countryName === "" ||
            context.state.taxNo === "" ||
            context.state.companyName === "" ||
            context.state.phone === "" ||
            context.state.website === "" ||
            context.state.address === "") {
            showToast("bottom-right", t('register.notification.FORM_VALIDATION'), "error")
        } else {
            context.setRegisterPage()
            setNextPageLog()
        }
    }

    return (
        <div id="company-form">
            <Container className="section-padding">
                <Row>
                    <Col lg={{ offset: 3, span: 6 }} className="register-form">
                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.COUNTRY')}</label>
                            <input type="text" placeholder="" value={context.state.countryName} disabled></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.TAX_NO')}</label>
                            <input type="text" placeholder="" value={context.state.taxNo} onChange={(e) => context.setTaxNo(e.target.value)}></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.COMPANY_NAME')}</label>
                            <input type="text" placeholder="" value={context.state.companyName} onChange={(e) => context.setCompanyName(e.target.value)}></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.PHONE')}</label>
                            <input type="text" placeholder="" value={context.state.phone} onChange={(e) => context.setPhone(e.target.value)}></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.WEBSITE')}</label>
                            <input type="text" placeholder="" value={context.state.website} onChange={(e) => context.setWebSite(e.target.value)}></input>
                        </div>

                        <div className="contact-form-item">
                            <label>* {t('register.companyForm.ADDRESS')}</label>
                            <textarea type="text" placeholder="" rows="5" value={context.state.address} onChange={(e) => context.setAddress(e.target.value)}>{context.state.address}</textarea>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ offset: 3, span: 6 }} className="register-form" style={{ marginTop: "20px" }}>
                        <NavigationButtons handleFormValidation={formValidation} />
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </div>
    )
}

export default CompanyForm