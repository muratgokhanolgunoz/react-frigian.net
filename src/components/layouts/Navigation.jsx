import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Cookies from 'universal-cookie'
import ReactFlagsSelect from 'react-flags-select'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Navigation = (props) => {

    const { t, i18n } = useTranslation('translation')
    const cookies = new Cookies()

    const [navbarExpanded, setNavbarExpanded] = useState(false)

    const handleLanguage = (_language) => {        
        i18n.changeLanguage(_language)
        if (cookies.get("language") !== undefined) {
            props.funcSetCookie(_language)
        }
    }

    return (
        <div>
            <Navbar variant="light" bg="light" expand="xl" expanded={navbarExpanded} fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Image src="https://frigian.net/assets/img/frigian-dark.png" fluid alt="Frigian"></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setNavbarExpanded(true)} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navigation">
                            <Link to="/" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_HOME')}</Link>
                            <Link to="/about" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_ABOUT')}</Link>
                            <Link to="/services" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_SERVICES')}</Link>
                            <Link to="/pricing" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_PRICING')}</Link>
                            <Link to="/faq" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_FAQ')}</Link>
                            <Link to="/contact" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_CONTACT')}</Link>
                            <Link to="/blog" onClick={() => setNavbarExpanded(false)}>{t('navbar.NAVBAR_ITEM_BLOG')}</Link>
                            <a href="https://frigian.whereby.com/frigian" target="_blank" rel="noreferrer">{t('navbar.NAVBAR_ITEM_MEETING_ROOM')}</a>
                        </Nav>
                        <Nav>
                            <ReactFlagsSelect
                                id="navbar-select-language"
                                countries={["TR", "US"]}
                                customLabels={{
                                    "TR": "TR",
                                    "US": "EN"
                                }}
                                selected={i18n.language.toString().toUpperCase()}
                                onSelect={_language => handleLanguage(_language.toLowerCase().toString())}
                                optionsSize={13}
                                selectedSize={15}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Navigation.propsTypes = {
    funcSetCookie: PropTypes.func.isRequired,
    funcHandlePageChange: PropTypes.func.isRequired,
}

export default Navigation