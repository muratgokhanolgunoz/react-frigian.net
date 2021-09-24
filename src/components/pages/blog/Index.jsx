/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import queryString from 'query-string'
import BlogService from '../../../services/BlogService'
import SectionBanner from '../../layouts/SectionBanner'
import { showToast } from '../../../core/functions'
import { ToastContainer } from 'react-toastify'

const BlogDetail = React.lazy(() => import('./BlogDetail'))
const BlogList = React.lazy(() => import('./BlogList'))

let urlParams
let blogService = new BlogService()
const languages = {
    tr: "TR",
    us: "EN"
}

const Index = () => {

    const [pageStatus, setPageStatus] = useState(0)
    const [selectedBlog, setSelectedBlog] = useState({})

    const { t, i18n } = useTranslation('translation')

    useEffect(() => {
        urlParams = queryString.parse(location.search)
        showBlogFromUrl()
    }, [])

    const incrasePageStatus = () => {
        setPageStatus(pageStatus + 1)
    }

    const showBlogFromUrl = () => {
        if (Object.keys(urlParams).length !== 0 && urlParams.language !== undefined && urlParams.language in languages === true && urlParams.blog !== undefined && urlParams.blog !== "") {
            blogService.getSelectedBlog(urlParams.language, urlParams.blog)
                .then((response) => {
                    setSelectedBlog(response.data.result)
                })
                .then(() => {
                    incrasePageStatus()
                })
                .catch(() => {
                    i18n.changeLanguage(urlParams.language)
                    showToast("bottom-right", t('template_message.warning.BLOG_NOT_FOUND'), "error")
                    console.warn("API Error: Unable to load blog section")
                })
        }
    }

    return (
        <div id="blogs">
            <SectionBanner
                title={t('blog.banner.BLOG_BANNER_TITLE')}
                breadcrumbPrevText={t('navbar.NAVBAR_ITEM_HOME')}
                breadcrumbPrevLink="/"
                breadcrumbCurrentText={t('navbar.NAVBAR_ITEM_BLOG')}
            />
            {
                pageStatus % 2 === 0
                    ?
                    (
                        <Suspense fallback={"<div>Loading ...</div>"}>
                            <BlogList
                                funcSetSelectedBlog={setSelectedBlog}
                                funcSetIncrasePageStatus={incrasePageStatus}
                            />
                        </Suspense>
                    )
                    :
                    (
                        <Suspense fallback={"<div>Loading ...</div>"}>
                            <BlogDetail
                                objectSelectedBlog={selectedBlog}
                                funcSetIncrasePageStatus={incrasePageStatus}
                            />
                        </Suspense>
                    )
            }

            <ToastContainer />
        </div>
    )
}
export default Index