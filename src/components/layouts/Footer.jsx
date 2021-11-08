import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
    const date = new Date();
    const { t, i18n } = useTranslation("translation");

    return (
        <div id="footer" className="section-padding">
            <Container>
                <Row className="footer-row">
                    <Col className="footer-column" lg={2}>
                        <h5>{t("footer.columns.1.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <a href="#x">
                                    {t("footer.columns.1.FOOTER_COLUMN_LINK_ABOUT")}
                                </a>
                            </li>

                            <li>
                                <a href="#x">
                                    {t("footer.columns.1.FOOTER_COLUMN_LINK_SERVICES")}
                                </a>
                            </li>

                            <li>
                                <a href="#x">
                                    {t("footer.columns.1.FOOTER_COLUMN_LINK_CONTACT")}
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="footer-column" lg={2}>
                        <h5>{t("footer.columns.2.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <a
                                    href="https://frigian.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    frigian.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://frigian.net"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    frigian.net
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="footer-column" lg={2}>
                        <h5>{t("footer.columns.3.FOOTER_COLUMN_TITLE")}</h5>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        i18n.language +
                                        "-agreement.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("footer.columns.3.FOOTER_COLUMN_LINK_AGREEMENT")}
                                </a>
                            </li>

                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        i18n.language +
                                        "-privacy.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("footer.columns.3.FOOTER_COLUMN_LINK_PRIVACY")}
                                </a>
                            </li>

                            <li>
                                <a
                                    href={
                                        "./assets/agreement/frigian-net-" +
                                        i18n.language +
                                        "-cookies.html"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("footer.columns.3.FOOTER_COLUMN_LINK_COOKIES")}
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="footer-column" lg={6}>
                        <h5>{t("footer.columns.4.FOOTER_COLUMN_TITLE")}</h5>
                        <Image
                            src="https://frigian.net/assets/img/footer_logo.png"
                            alt=""
                            fluid
                        />
                    </Col>
                </Row>

                <Row className="footer-row">
                    <Col className="footer-column" lg={12}>
                        <ul id="footer-social">
                            <li>
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.frigian.mobile.tokenproject"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoGooglePlaystore />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/company/frigian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCQVs9qMAhF-f1eNoQ6ak2GA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/frigianplatform/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://twitter.com/FrigianPlatform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="footer-row">
                    <Col className="footer-column" lg={12}>
                        <p>
                            Copyright © {date.getFullYear()} Frigian.{" "}
                            {t("footer.FOOTER_TEXT")}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
