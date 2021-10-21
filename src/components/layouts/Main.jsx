import React, { useEffect, useContext } from 'react'
import Context from '../../context/Context'
import HomeServices from '../../services/HomeServices'
import Cookies from 'universal-cookie'
import { useTranslation } from 'react-i18next'
import EventPopup from './popups/EventPopup'
import Navigation from './Navigation'
import Home from '../pages/home/Index'
import CookieBanner from './CookieBanner'
import About from '../pages/about/Index'
import Services from '../pages/services/Index'
import Pricing from '../pages/pricing/Index'
import Faq from '../pages/faq/Index'
import Contact from '../pages/contact/Index'
import Blog from '../pages/blog/Index'
import Admin from '../admin/layouts/Main'
import NotFound from '../errors/NotFound'
import Footer from './Footer'
import { Switch, Route, withRouter } from "react-router-dom"

import '../../assets/css/style.css'
import "react-toastify/dist/ReactToastify.css"

const Page = ({ history }) => {

    const cookies = new Cookies()
    const context = useContext(Context)
    const { i18n } = useTranslation('translation')
    const homeServices = new HomeServices()

    useEffect(() => {
        if (cookies.get('language') !== undefined) {
            if (cookies.get('language').substr(0, 2) === "en") {
                i18n.changeLanguage("us")
            } else {
                i18n.changeLanguage(cookies.get('language').substr(0, 2))
            }
        }

        // save user ip address & userAgent with api
        homeServices.userLog()

        // eslint disable for useEffect ( useEffect will be used when the page is first created )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setCookie = (_language) => {
        var maxAge = new Date(Date.now() + (365 * 24 * 60 * 60 * 1000))
        cookies.set('language', _language, { path: '/', expires: maxAge })
        context.setCookie({
            language: _language,
        })
    }

    const getCookie = () => {
        return {
            language: cookies.get('language')
        }
    }

    return (
        <div id="main">
            <EventPopup />

            <Navigation funcSetCookie={setCookie} />
            <CookieBanner funcSetCookie={setCookie} funcGetCookie={getCookie} />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/services">
                    <Services />
                </Route>

                <Route path="/pricing">
                    <Pricing />
                </Route>

                <Route path="/faq">
                    <Faq />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/blog">
                    <Blog />
                </Route>

                <Route path="/sarici2021">
                    <Admin />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>

            <Footer />
        </div>
    )
}

export default withRouter(Page)