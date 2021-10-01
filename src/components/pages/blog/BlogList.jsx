/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import BlogService from '../../../services/BlogService'
import { useTranslation } from 'react-i18next'
import { Container, Row } from 'react-bootstrap'
import BlogItem from './BlogItem'
import WaitingMessage from './messages/WaitingMessage'
import NotFoundMessage from './messages/NotFoundMessage'


const BlogList = (props) => {
    const [blogs, setBlogs] = useState([])

    // 0 => Waiting, 1 => Not Found 
    const [statusOfResponseMessage, setStatusOfResponseMessage] = useState(0)

    const blogService = new BlogService()
    const { i18n } = useTranslation('translation')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setStatusOfResponseMessage(0)
        setBlogs([])
        getBlogs(i18n.language.toLowerCase())
    }, [i18n.language])

    const sendBlogInformation = (_blog) => {
        props.funcSetSelectedBlog(_blog)
        props.funcSetIncrasePageStatus()
    }

    const getBlogs = (_language) => {
        blogService.getBlogs(_language)
            .then(response => {
                if (response.data.result.length === 0) {
                    setStatusOfResponseMessage(1)
                } else {
                    setBlogs(sortArray(response.data.result))
                }
            })
            .catch(() => {
                setStatusOfResponseMessage(1)
                console.warn("API Error: Unable to load blog section")
            })
    }

    const sortArray = (_array) => {
        return _array.sort((i, j) => {
            return i.BLOG_SECTION_ITEMS_ID - j.BLOG_SECTION_ITEMS_ID
        })
    }

    return (
        <div id="blog">
            <div className="blog section-padding">
                <Container>
                    <Row>
                        {
                            blogs.length > 0
                                ? (
                                    blogs.map((item, index) => (
                                        <BlogItem key={index} blog={item} setBlog={sendBlogInformation} />
                                    ))
                                )
                                : (
                                    statusOfResponseMessage === 0
                                        ? <WaitingMessage />
                                        : <NotFoundMessage />
                                )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default BlogList