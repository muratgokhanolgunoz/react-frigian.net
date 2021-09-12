/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ImPlay3 } from "react-icons/im"
import VideoPopup from './VideoPopup'

const Video = () => {

    const {t} = useTranslation('translation')
    const [show, setShow] = useState(false)

    const handleShow = (_show) => {
        setShow(_show)
    }

    const styles = {
        background: 'url(./assets/img/frigian-dashboard.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div id="video" style={styles}>
            <Container>
                <Row className="video-inner">
                    <span>
                        <a onClick={() => handleShow(true)}>
                            <ImPlay3 className="video-icon" />
                        </a>
                    </span>
                    <br />
                    <h1>{t('home.video.VIDEO_TEXT')}</h1>
                </Row>
            </Container>

            <VideoPopup show={show} handleShow={handleShow} />
        </div>
    )
}

export default Video