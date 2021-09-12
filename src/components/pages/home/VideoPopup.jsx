import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { AiOutlineCloseCircle } from "react-icons/ai"

const VideoPopup = (props) => {

    const { i18n } = useTranslation('translation')

    return (
        <Fragment>
            <Modal size="lg" show={props.show} animation={true} centered={true} >
                <span id="video-iframe-close" onClick={() => props.handleShow(false)}>
                    <AiOutlineCloseCircle />
                </span>
                <Modal.Body>
                    <iframe id="video-iframe" src={"./assets/videos/intro_" + i18n.language + ".mp4"} title="Video" frameBorder="0"></iframe>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

VideoPopup.propTypes = {
    show: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired
}

export default VideoPopup