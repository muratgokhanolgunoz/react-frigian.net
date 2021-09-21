/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Image, Col } from 'react-bootstrap'

const BlogItem = (props) => {

    const { t, i18n } = useTranslation('translation')

    return (
        <Fragment>
            <Col className="blog-box" xl={4} md={6}>
                <div className="blog-box-item">
                    <Image className="blog-box-image" src={props.blog.BLOG_SECTION_ITEMS_THUMBNAIL} fluid />
                    <span className="blog-box-item-author">
                        <span>{props.blog.BLOG_SECTION_ITEMS_DATE.substr(0, 10)} | {' '}</span>
                        <span>
                            <small>
                                {i18n.language === 'tr'
                                    ? <span><b>{props.blog.BLOG_SECTION_ITEMS_AUTHOR}{' '}</b>{t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}</span>
                                    : <span>{t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}{' '}<b>{props.blog.BLOG_SECTION_ITEMS_AUTHOR}</b></span>
                                }
                            </small>
                        </span>
                    </span>
                    <h6>{props.blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                    <p>{props.blog.BLOG_SECTION_ITEMS_SUMMARY}</p>
                    <a className="template-button template-button-orange-variant-2 template-button-box-shadow" onClick={() => props.setBlog(props.blog)}>{t('buttons.READ_MORE')}</a>
                </div>
            </Col>
        </Fragment>
    )
}

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogItem