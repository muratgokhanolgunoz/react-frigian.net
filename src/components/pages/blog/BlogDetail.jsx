/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
import elementsJSON from "../../../tools/html_elements/elements.json"
import { Container, Row, Col, Image } from "react-bootstrap"
import { VscChevronLeft } from "react-icons/vsc"

let elements = elementsJSON

let arrayFindElements = []
let tempObject = {},
    tagOpenIndex = undefined,
    tagCloseIndex = undefined

const BlogDetail = (props) => {

    const { objectSelectedBlog, funcSetIncrasePageStatus, t } = props

    useEffect(() => {
        arrayFindElements = []
        elements.map((e) => (
            findElements(objectSelectedBlog.BLOG_SECTION_ITEMS_ARTICLE, e)
        ))
        showArticle(objectSelectedBlog.BLOG_SECTION_ITEMS_ARTICLE, sortArray(arrayFindElements))

        window.scrollTo(0, 350)
    }, [])

    const tagIndexOf = (_article, _tag, _index) => {
        return _article.indexOf(_tag, _index)
    }

    const findElements = (_article, _tag, _index = 0) => {
        tagOpenIndex = tagIndexOf(_article, _tag.tagOpen, _index)
        _index = tagOpenIndex

        if (_tag.tagClose !== null && _index > -1) {
            _index += _tag.tagOpen.length
            tagCloseIndex = tagIndexOf(_article, _tag.tagClose, _index)
            _index = tagCloseIndex
        }

        if (_index > -1) {
            tempObject = {
                "tag": _tag,
                "open": tagOpenIndex,
                "close": tagCloseIndex
            }
            arrayFindElements.push(tempObject)
            tempObject = {}
        }

        if (_article.length >= _index && _index > -1) {
            if (_tag.tagClose !== null) {
                _index += _tag.tagClose.length
                findElements(_article, _tag, _index)
            } else {
                _index += _tag.tagOpen.length
                findElements(_article, _tag, _index)
            }
        }
    }

    const sortArray = (_array) => {
        return _array.sort((i, j) => {
            return i.open - j.open
        })
    }

    const getArticleText = (_article, _start, _end) => {
        let result = ""
        for (let i = _start; i < _end; i++) {
            result += _article[i]
        }
        return result
    }

    const showArticle = (_article, _elements) => {
        let index = 0
        let createSpan
        let createElement

        let createParagraph = document.createElement('p')

        if (_elements.length > 0) {
            for (let i = 0; i < _elements.length; i++) {
                createSpan = document.createElement('span')
                createSpan.innerHTML = getArticleText(_article, index, _elements[i].open)
                createParagraph.append(createSpan)

                if (_elements[i].tag.tagClose !== null) {
                    index = _elements[i].close + _elements[i].tag.tagClose.length
                } else {
                    index = _elements[i].open + _elements[i].tag.tagOpen.length
                }

                createSpan = document.createElement('span')
                createElement = document.createElement(_elements[i].tag.tagOpen.substr(1, _elements[i].tag.tagOpen.length - 2))

                if (_elements[i].tag.isContent === true) {
                    createElement.innerHTML = getArticleText(_article, _elements[i].open + _elements[i].tag.tagOpen.length, _elements[i].close)
                }

                createSpan.append(createElement)
                createParagraph.append(createSpan)
            }

            createSpan = document.createElement('span')
            createSpan.innerHTML = getArticleText(_article, index, _article.length)
            createParagraph.append(createSpan)

        } else {
            createParagraph.innerHTML = _article
        }

        document.getElementById("blog-popup-article").append(createParagraph)
    }

    return (
        <div id="blog-detail">
            <Container>
                <Row>
                    <Col className="modal-blog-preview-body" lg={12}>
                        <Row>
                            <Image className="modal-blog-preview-body-image" src={objectSelectedBlog.BLOG_SECTION_ITEMS_PHOTO} alt="" fluid />
                            <Image className="modal-blog-preview-body-thumbnail" src={objectSelectedBlog.BLOG_SECTION_ITEMS_THUMBNAIL} alt="" fluid />
                            <span className="modal-blog-preview-author"><small>{objectSelectedBlog.BLOG_SECTION_ITEMS_DATE !== undefined ? objectSelectedBlog.BLOG_SECTION_ITEMS_DATE.substr(0, 10) : null} | {objectSelectedBlog.BLOG_SECTION_ITEMS_AUTHOR}</small></span>
                        </Row>
                        <Row style={{ marginTop: "-60px" }}>
                            <Col lg={3} md={6}>
                                <button id="button-blog-detail" className="template-button template-button-gray" onClick={() => funcSetIncrasePageStatus()}>
                                    <VscChevronLeft className="template-button-icon" />&nbsp;{t('buttons.PREVIOUS')}
                                </button>
                            </Col>
                        </Row>
                        <Row>                            
                            <Col md={12}>
                                <h1>{objectSelectedBlog.BLOG_SECTION_ITEMS_TITLE}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <div id="blog-popup-article"></div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

BlogDetail.propTypes = {
    objectSelectedBlog: PropTypes.object.isRequired,
    funcSetIncrasePageStatus: PropTypes.func.isRequired
}

export default withTranslation('translation')(BlogDetail)