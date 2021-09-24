/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-restricted-globals */
import React, { Fragment, useState, useEffect } from 'react'
import BlogService from '../../../services/BlogService'
import { useTranslation } from 'react-i18next'
import { showToast } from '../../../core/functions'
import { ToastContainer } from 'react-toastify'
import { Container, Row, Col, Table, Button, ButtonGroup } from 'react-bootstrap'

let formError = false

const Blog = () => {
    let blogService = new BlogService()
    const { t } = useTranslation('translation')

    const [language, setLanguage] = useState("tr")
    const [blogs, setBlogs] = useState([])
    const [blogId, setBlogId] = useState("")
    const [title, setTitle] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [lastThumbnail, setLastThumbnail] = useState("")
    const [photo, setPhoto] = useState("")
    const [lastPhoto, setLastPhoto] = useState("")
    const [summary, setSummary] = useState("")
    const [article, setArticle] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(() => {
        listBlogs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    const listBlogs = () => {
        blogService.getBlogs(language).then((response) => setBlogs(response.data.result))
    }

    const clearForm = () => {
        setBlogId("")
        setTitle("")
        setThumbnail("")
        setPhoto("")
        setSummary("")
        setArticle("")
        setAuthor("")
        setLastThumbnail("")
        setLastPhoto("")
    }

    const addOrUpdateBlog = (_status = 0) => {
        // _status == 0 => Add, 1 => Edit

        const payload = new FormData()
        payload.append('title', title)
        payload.append('thumbnail', thumbnail)
        payload.append('photo', photo)
        payload.append('summary', summary)
        payload.append('article', article)
        payload.append('author', author)

        if (_status === 0) {
            if (title === "" ||
                thumbnail === "" ||
                thumbnail.size > 5242880 ||
                photo === "" ||
                photo.size > 5242880 ||
                summary === "" ||
                article === "" ||
                author === "") {
                formError = true
                showToast("bottom-right", "Please fill in all fields", "error")
            } if (thumbnail !== "" && thumbnail.size > 5242880) {
                formError = true
                showToast("bottom-right", t('template.notification.warnings.FILE_SIZE'), "error")
            } if (photo !== "" && photo.size > 5242880) {
                formError = true
                showToast("bottom-right", t('template.notification.warnings.FILE_SIZE'), "error")
            } if (!formError) {
                blogService.addBlog(language, payload)
                    .then((response) => {
                        response.data.result === true
                            ?
                            showToast("bottom-right", "Success", "success")
                            :
                            showToast("bottom-right", "Failed", "error")
                    })
                    .then(() => {
                        clearForm()
                        listBlogs()
                    })
                    .catch(() => (
                        showToast("bottom-right", "Server error", "error")
                    ))
            }
        } else {
            if (title === "" ||
                summary === "" ||
                article === "" ||
                author === "") {
                formError = true
                showToast("bottom-right", "Please fill in all fields", "error")
            } if (thumbnail !== "" || photo !== "") {
                if (thumbnail !== "" && thumbnail.size > 5242880) {
                    formError = true
                    showToast("bottom-right", t('template.notification.warnings.FILE_SIZE'), "error")
                }

                if (photo !== "" && photo.size > 5242880) {
                    formError = true
                    showToast("bottom-right", t('template.notification.warnings.FILE_SIZE'), "error")
                }
            } if (!formError) {
                payload.append('id', blogId)
                blogService.updateBlog(language, payload)
                    .then((response) => {
                        response.data.result === true
                            ?
                            showToast("bottom-right", "Success", "success")
                            :
                            showToast("bottom-right", "Failed", "error")
                    })
                    .then(() => {
                        clearForm()
                        listBlogs()
                    })
                    .catch(() => (
                        showToast("bottom-right", "Server error", "error")
                    ))
            }
        }
    }

    const deleteBlog = (_id) => {
        if (confirm('Do you really want to delete your blog post with id ' + _id + ' ?')) {
            const payload = new FormData()
            payload.append("id", _id)

            blogService.deleteBlog(language, payload)
                .then((response) => {
                    if (response.data.result === true) {
                        showToast("bottom-right", "Success", "success")
                    } else {
                        showToast("bottom-right", "An error occured", "error")
                    }
                })
                .then(() => {
                    listBlogs()
                })
                .catch(() => showToast("bottom-right", "Server error", "error"))
        }
    }

    const getEditBlog = (_id) => {
        blogService.getSelectedBlog(language, _id)
            .then((response) => {
                setBlogId(response.data.result.BLOG_SECTION_ITEMS_ID)
                setTitle(response.data.result.BLOG_SECTION_ITEMS_TITLE)
                setSummary(response.data.result.BLOG_SECTION_ITEMS_SUMMARY)
                setArticle(response.data.result.BLOG_SECTION_ITEMS_ARTICLE)
                setAuthor(response.data.result.BLOG_SECTION_ITEMS_AUTHOR)
                setLastThumbnail(response.data.result.BLOG_SECTION_ITEMS_THUMBNAIL)
                setLastPhoto(response.data.result.BLOG_SECTION_ITEMS_PHOTO)
            })
            .catch(() => {
                console.warn("API Error: Unable to load blog section")
                showToast("bottom-right", "Server Error", "error")
            })
    }

    return (
        <div style={{ padding: "15em 4em" }}>
            <Container fluid className="admin-container">
                <Row>
                    <Col>
                        <h2>Blog | Frigian</h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={6}>
                        <ButtonGroup size="sm">
                            {language === 'tr'
                                ?
                                (
                                    <Fragment>
                                        <Button className="bg-dark text-light" onClick={() => setLanguage("tr")}>TR</Button>
                                        <Button className="bg-primary text-light" onClick={() => setLanguage("us")}>EN</Button>
                                    </Fragment>
                                )
                                :
                                (
                                    <Fragment>
                                        <Button className="bg-primary text-light" onClick={() => setLanguage("tr")}>TR</Button>
                                        <Button className="bg-dark text-light" onClick={() => setLanguage("us")}>EN</Button>
                                    </Fragment>
                                )
                            }
                        </ButtonGroup>
                    </Col>
                    <Col xs={6} style={{ textAlign: "right" }}>
                        <h5>Selected Language : <b>{language === "us" ? "EN" : "TR"}</b></h5>
                    </Col>
                </Row>

                <br /><br />

                <Row>
                    <Col lg={5} sm={12} style={{ backgroundColor: "#f5f5f5", padding: "25px" }}>
                        <Col lg={12}>   
                            <Button onClick={() => clearForm()} style={{ float: "right" }}>Clear Form</Button>
                        </Col>
                        <br /><br />
                        <Col xs={12}>
                            <label><b>Title : </b></label>
                            <input
                                id="input-title"
                                type="text"
                                name="title"
                                value={title}
                                className="form-control"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label><b>Thumbnail : </b></label>

                            <input
                                id="input-upload-thumbnail"
                                type="file"
                                name="thumbnail"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => setThumbnail(e.target.files[0])}
                                className="form-control"
                            />
                            <label>File Type : <b>png - jpg - jpeg</b></label>
                            &emsp;
                            <label>Maximum Size : <b>5MB</b></label>
                        </Col>
                        {
                            lastThumbnail !== "" && (
                                <Col>
                                    <img src={lastThumbnail} alt="" style={{ maxWidth: "250px" }} />
                                </Col>
                            )
                        }
                        <br />
                        <Col xs={12}>
                            <label><b>Photo : </b></label>
                            <input
                                id="input-upload-photo"
                                type="file"
                                name="photo"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                className="form-control"
                            />
                            <label>File Type : <b>png - jpg - jpeg</b></label>
                            &emsp;
                            <label>Maximum Size : <b>5MB</b></label>
                        </Col>
                        {
                            lastPhoto !== "" && (
                                <Col>
                                    <img src={lastPhoto} alt="" style={{ maxWidth: "600px" }} />
                                </Col>
                            )
                        }
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>
                                    Summary
                                    <small> [Max Length 350 Characters] : </small>
                                </b>
                            </label>
                            <textarea
                                id="textarea-summary"
                                name="summary"
                                value={summary}
                                className="form-control"
                                rows="7"
                                maxLength="350"
                                onChange={(e) => setSummary(e.target.value)}
                            ></textarea>
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label>
                                <b>
                                    Article
                                    <small> [ Supported Tags : br -  b -  u -  em -  mark -  h1 -  h2 -  h3 -  h4 -  h5 -  h6 -  pre -  small -  big ] : </small>
                                </b>
                            </label>

                            <textarea
                                id="textarea-article"
                                name="article"
                                value={article}
                                className="form-control"
                                rows="15"
                                onChange={(e) => setArticle(e.target.value)}
                            ></textarea>
                        </Col>
                        <br />
                        <Col xs={12}>
                            <label><b>Author : </b></label>
                            <input
                                id="input-author"
                                type="text"
                                name="author"
                                value={author}
                                className="form-control"
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Col>
                        <br />
                        <Col xs={12}>
                            <Button onClick={() => addOrUpdateBlog(blogId !== "" ? 1 : 0)}>
                                {
                                    blogId !== ""
                                        ? "Edit"
                                        : "Save"
                                }
                            </Button>
                        </Col>
                    </Col>
                    <Col lg={7} sm={12}>
                        <Table striped responsive>
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Share</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.map((blogItem, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{blogItem.BLOG_SECTION_ITEMS_AUTHOR}</td>
                                            <td>{blogItem.BLOG_SECTION_ITEMS_TITLE}</td>
                                            <td>{blogItem.BLOG_SECTION_ITEMS_DATE}</td>
                                            <td>
                                                <a href={"https://frigian.net/blog?language=" + language + "&blog=" + index} target="_blank">{"https://frigian.net/blog?language=" + language + "&blog=" + index}</a>
                                            </td>
                                            <td>
                                                <span className="text-primary" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => deleteBlog(blogItem.BLOG_SECTION_ITEMS_ID)}>Delete</span>
                                            </td>
                                            <td>
                                                <span className="text-primary" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => getEditBlog(index)}>Edit</span>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <ToastContainer />
        </div>
    )
}
export default Blog