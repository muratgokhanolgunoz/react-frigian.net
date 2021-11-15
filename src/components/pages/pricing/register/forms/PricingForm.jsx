/* eslint-disable no-sequences */
import React, { useContext, useState, useEffect, useRef } from "react";
import Context from "../../../../../context/Context";
import RegisterServices from "../../../../../services/RegisterServices";
import { useTranslation } from "react-i18next";
import {
    dataUriToBlob,
    showToast,
    validateEmail,
} from "../../../../../core/functions";
import NavigationButtons from "./NavigationButtons";
import Billing from "../billing/Index";
import PopupCompanyLogo from "./PopupCompanyLogo";
import Cropper from "react-cropper";
import Resizer from "react-image-file-resizer";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

import "cropperjs/dist/cropper.css";
import "react-toastify/dist/ReactToastify.css";

const subdomainInputStylesTrue = {
    color: "green",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const subdomainInputStylesFalse = {
    color: "red",
    fontWeight: "bold",
    letterSpacing: "1px",
};

const PricingForm = () => {
    const { t } = useTranslation("translation");
    const context = useContext(Context);
    let registerServices = new RegisterServices();
    let formError = false;
    const fileCompanyLogoRef = useRef();

    const [companyLogo, setCompanyLogo] = useState(undefined);
    const [croppedCompanyLogoDataIri, setCroppedCompanyLogoDataUri] =
        useState("");
    const [croppedCompanyLogoBlob, setCroppedCompanyLogoBlob] = useState({});
    const [cropperCompanyLogo, setCropperCompanyLogo] = useState(undefined);

    const [popupShow, setPopupShow] = useState(false);

    const popupHandleClose = () => setPopupShow(false);
    const popupHandleShow = () => setPopupShow(true);

    useEffect(() => {
        context.calculateYearlyPrice();
        context.calculateMonthlyPrice();
        window.scrollTo(0, 250);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setPrevPageLog = () => {
        registerServices
            .setPrevPageLog()
            .then(() => console.log("Click to previous page button"))
            .catch(() => console.warn("Error : Click to previous page button"));
    };

    const navigationButton = () => {
        context.setRegisterPage();
        setPrevPageLog();
    };

    const handleSubdomain = (_value) => {
        context.setTempSubdomain(_value);
        if (_value.length >= 3) {
            registerServices
                .checkSubDomain(_value)
                .then((response) => {
                    if (response.data.exist === 0) {
                        context.setSubdomainStatus(true);
                        context.setSubDomain(_value);
                    } else {
                        context.setSubdomainStatus(false);
                        context.setSubDomain("");
                    }
                })
                .catch(() =>
                    console.warn("Error : Error occurred in subdomain control")
                );
        } else if (_value.length < 3) {
            context.setSubdomainStatus(false);
            context.setSubDomain("");
        }
    };

    const closeCropperArea = () => {
        setCompanyLogo(undefined);
        clearCompanyLogoRef();
        context.setTempCompanyLogo(context.state.companyLogo);
    };

    const imageOnChange = (_file) => {
        if (context.state.subdomain !== "") {
            if (_file.size <= 1048576) {
                const reader = new FileReader();
                reader.onload = () => {
                    setCompanyLogo(reader.result);
                };
                reader.readAsDataURL(_file);
                context.setTempCompanyLogo("");
            } else {
                showToast(
                    "bottom-right",
                    t("register.notification.LOGO_UPLOAD_FILE_SIZE_ERROR"),
                    "error"
                );
            }
        } else {
            showToast(
                "bottom-right",
                t("register.notification.DEFINE_SUBDOMAIN"),
                "error"
            );
        }
    };

    const clearCompanyLogoRef = () => {
        fileCompanyLogoRef.current.value = "";
    };

    const resizeCompanyPhoto = (_file, _type, _function) => {
        // 1 => blob
        // 2 => base64

        try {
            Resizer.imageFileResizer(
                _file,
                350,
                350,
                "PNG",
                100,
                0,
                (uri) => {
                    _function(uri);
                },
                _type === 1 ? "blob" : "base64",
                350,
                0
            );
        } catch (err) {
            console.log(err);
        }
    };

    const getCroppedCompanyLogo = () => {
        if (typeof cropperCompanyLogo !== "undefined") {
            // for upload from api
            resizeCompanyPhoto(
                dataUriToBlob(
                    cropperCompanyLogo.getCroppedCanvas().toDataURL(),
                    "image/png"
                ),
                1,
                setCroppedCompanyLogoBlob
            );

            // for view
            resizeCompanyPhoto(
                dataUriToBlob(
                    cropperCompanyLogo.getCroppedCanvas().toDataURL(),
                    "image/png"
                ),
                2,
                setCroppedCompanyLogoDataUri
            );
            popupHandleShow(true);
        }
    };

    const documentOnChange = (_doc) => {
        if (context.state.subdomain !== "") {
            if (_doc.size <= 5242880) {
                const payload = new FormData();
                payload.append("file", _doc);
                payload.append("subdomain", context.state.subdomain);

                registerServices
                    .uploadDocument(payload)
                    .then((response) => {
                        if (response.data.msg === "Success") {
                            context.setCompanyDoc(response.data.img);
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.DOCUMENT_UPLOAD_SUCCESS_MESSAGE"
                                ),
                                "success"
                            );
                        } else {
                            showToast(
                                "bottom-right",
                                t(
                                    "register.notification.DOCUMENT_UPLOAD_ERROR_MESSAGE"
                                ),
                                "error"
                            );
                        }
                    })
                    .catch(() =>
                        showToast(
                            "bottom-right",
                            t(
                                "register.notification.DOCUMENT_UPLOAD_ERROR_MESSAGE"
                            ),
                            "error"
                        )
                    );
            } else {
                showToast(
                    "bottom-right",
                    t("register.notification.DOCUMENT_UPLOAD_FILE_SIZE_ERROR"),
                    "error"
                );
            }
        } else {
            showToast(
                "bottom-right",
                t("register.notification.DEFINE_SUBDOMAIN"),
                "error"
            );
        }
    };

    const save = () => {
        formError = false;

        if (
            context.state.subdomain === "" ||
            context.state.name === "" ||
            context.state.surname === "" ||
            context.state.mobile === "" ||
            context.state.personalEmail === "" ||
            context.state.adminEmail === "" ||
            context.state.senderEmail === ""
        ) {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION"),
                "error"
            );
            formError = true;
        }
        if (
            context.state.personalEmail !== "" &&
            !validateEmail(context.state.personalEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.PERSONAL_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (
            context.state.adminEmail !== "" &&
            !validateEmail(context.state.adminEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.ADMIN_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (
            context.state.senderEmail !== "" &&
            !validateEmail(context.state.senderEmail)
        ) {
            showToast(
                "bottom-right",
                t("register.notification.SENDER_EMAIL"),
                "error"
            );
            formError = true;
        }
        if (context.state.registrationYearMonth === "") {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_PACKAGE"),
                "error"
            );
            formError = true;
        }
        if (context.state.companyLogo === "") {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_COMPANY_LOGO"),
                "error"
            );
            formError = true;
        }
        if (context.state.aggrementCheckedStatus === false) {
            showToast(
                "bottom-right",
                t("register.notification.FORM_VALIDATION_AGGREMENT"),
                "error"
            );
            formError = true;
        }
        if (formError === false) {
            const payload = new FormData();
            payload.append("reg_address", context.state.address);
            payload.append("reg_admin_email", context.state.adminEmail);
            payload.append("reg_campaign_code", context.state.campaignCode);
            payload.append("reg_company_doc", context.state.companyDoc);
            payload.append("reg_company_logo", context.state.companyLogo);
            payload.append("reg_country_id", context.state.countryId);
            payload.append("reg_email", context.state.personalEmail);
            payload.append("reg_firm_name", context.state.companyName);
            payload.append("reg_mobile", context.state.mobile);
            payload.append("reg_name", context.state.name);
            payload.append("reg_package_id", context.state.packageId);
            payload.append("reg_sender_email", context.state.senderEmail);
            payload.append("reg_subdomain", context.state.subdomain);
            payload.append("reg_surname", context.state.surname);
            payload.append("reg_tax_no", context.state.taxNo);
            payload.append("reg_tel", context.state.phone);
            payload.append("reg_users", context.state.packageUsers);
            payload.append("reg_website", context.state.website);
            payload.append(
                "reg_year_month",
                context.state.registrationYearMonth
            );

            registerServices
                .saveRegistration(payload)
                .then((response) =>
                    response.data.result === "sebeci.MESSAGE_SENT_SUCCESSFULLY"
                        ? (showToast(
                              "bottom-right",
                              t("register.notification.REGISTRATION_SUCCESS"),
                              "success"
                          ),
                          setTimeout(() => {
                              window.location.reload();
                          }, 3000))
                        : showToast(
                              "bottom-right",
                              t("register.notification.REGISTRATION_ERROR"),
                              "error"
                          )
                )
                .catch(() =>
                    showToast(
                        "bottom-right",
                        t("register.notification.REGISTRATION_ERROR"),
                        "error"
                    )
                );
        }
    };

    const handleFocusAdminEmail = () => {
        context.setAdminEmail(context.state.personalEmail);
    };

    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <div id="pricing-form">
                        <Container className="section-padding">
                            <Row className="register-form">
                                <Col lg={6}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.SUBDOMAIN"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={
                                                        context.state
                                                            .subdomainTemp
                                                    }
                                                    onChange={(e) =>
                                                        handleSubdomain(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="contact-form-item">
                                                <label>
                                                    {t(
                                                        "register.pricingForm.SUBDOMAIN_CHECK"
                                                    )}
                                                </label>
                                                <input
                                                    id="pricing-input-subdomain"
                                                    type="text"
                                                    style={
                                                        context.state
                                                            .subdomainStatus ===
                                                        true
                                                            ? subdomainInputStylesTrue
                                                            : subdomainInputStylesFalse
                                                    }
                                                    placeholder=""
                                                    value={
                                                        context.state
                                                            .subdomainTemp +
                                                        ".frigian.net"
                                                    }
                                                    readOnly
                                                ></input>
                                                <span
                                                    id="pricing-input-subdomain-span"
                                                    style={
                                                        context.state
                                                            .subdomainStatus ===
                                                        true
                                                            ? subdomainInputStylesTrue
                                                            : subdomainInputStylesFalse
                                                    }
                                                >
                                                    {context.state
                                                        .subdomainStatus ===
                                                    true ? (
                                                        <FaCheck />
                                                    ) : (
                                                        <FaTimes />
                                                    )}
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.NAME"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={context.state.name}
                                                    onChange={(e) =>
                                                        context.setName(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.SURNAME"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={
                                                        context.state.surname
                                                    }
                                                    onChange={(e) =>
                                                        context.setSurname(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.MOBILE_PHONE"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={context.state.mobile}
                                                    onChange={(e) =>
                                                        context.setMobile(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.EMAIL"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={
                                                        context.state
                                                            .personalEmail
                                                    }
                                                    onChange={(e) =>
                                                        context.setPersonalEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.ADMIN_EMAIL"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={
                                                        context.state.adminEmail
                                                    }
                                                    onFocus={() =>
                                                        handleFocusAdminEmail()
                                                    }
                                                    onChange={(e) =>
                                                        context.setAdminEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="contact-form-item">
                                                <label>
                                                    *{" "}
                                                    {t(
                                                        "register.pricingForm.SENDER_EMAIL"
                                                    )}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    value={
                                                        context.state
                                                            .senderEmail
                                                    }
                                                    onChange={(e) =>
                                                        context.setSenderEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                ></input>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <form>
                                                <div className="contact-form-item">
                                                    <label>
                                                        *{" "}
                                                        {t(
                                                            "register.pricingForm.COMPANY_LOGO"
                                                        )}{" "}
                                                        <b>[max : 1MB]</b>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        ref={fileCompanyLogoRef}
                                                        onChange={(e) =>
                                                            imageOnChange(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                            </form>
                                        </Col>
                                        {companyLogo !== undefined ? (
                                            <React.Fragment>
                                                <Col md={12}>
                                                    <Cropper
                                                        initialAspectRatio={1}
                                                        zoomTo={0}
                                                        src={companyLogo}
                                                        ref={cropperCompanyLogo}
                                                        viewMode={1}
                                                        autoCropArea={0}
                                                        responsive={true}
                                                        guides={true}
                                                        background={true}
                                                        checkOrientation={false}
                                                        onInitialized={(
                                                            instance
                                                        ) => {
                                                            setCropperCompanyLogo(
                                                                instance
                                                            );
                                                        }}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <button
                                                        className="template-button template-button-green"
                                                        style={{
                                                            fontSize: "1em",
                                                            float: "left",
                                                            width: "100%",
                                                        }}
                                                        onClick={() =>
                                                            getCroppedCompanyLogo()
                                                        }
                                                    >
                                                        {t(
                                                            "register.pricingForm.COMPANY_LOGO_UPLOAD"
                                                        )}
                                                    </button>
                                                </Col>
                                                <Col md={6}>
                                                    <button
                                                        className="template-button template-button-gray"
                                                        style={{
                                                            fontSize: "1em",
                                                            float: "right",
                                                            width: "100%",
                                                        }}
                                                        onClick={() =>
                                                            closeCropperArea()
                                                        }
                                                    >
                                                        {t(
                                                            "register.pricingForm.COMPANY_LOGO_CLOSE"
                                                        )}
                                                    </button>
                                                </Col>
                                            </React.Fragment>
                                        ) : null}
                                        {context.state.companyLogo !== "" &&
                                        context.state.tempCompanyLogo !== "" ? (
                                            <Col md={12}>
                                                <div id="view-upload-company-logo">
                                                    <img
                                                        src={
                                                            "https://demo.frigian.net" +
                                                            context.state
                                                                .companyLogo
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                            </Col>
                                        ) : null}
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <form>
                                                <div className="contact-form-item">
                                                    <label>
                                                        {t(
                                                            "register.pricingForm.COMPANY_DOC"
                                                        )}{" "}
                                                        <b>[max : 5MB]</b>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        accept="*"
                                                        onChange={(e) =>
                                                            documentOnChange(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    ></input>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6}>
                                    <Billing />
                                </Col>
                            </Row>
                            <Row
                                className="register-form"
                                style={{ marginTop: "20px" }}
                            >
                                <NavigationButtons
                                    handleNavigationButton={navigationButton}
                                    handleSave={save}
                                    statusOfCompanyLogo={companyLogo}
                                />
                            </Row>
                        </Container>

                        <PopupCompanyLogo
                            companyPopupShow={popupShow}
                            companyPopupHandleClose={popupHandleClose}
                            companyLogoHandleChange={setCompanyLogo}
                            companyLogoDataUri={croppedCompanyLogoDataIri}
                            companyLogoBlob={croppedCompanyLogoBlob}
                            companyLogoRefClear={clearCompanyLogoRef}
                        />
                        <ToastContainer />
                    </div>
                );
            }}
        </Context.Consumer>
    );
};

export default PricingForm;
