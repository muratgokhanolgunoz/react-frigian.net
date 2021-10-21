import React, { useState } from 'react'
import { Modal, Image } from 'react-bootstrap'
import { VscChromeClose } from 'react-icons/vsc'

const EventPopup = () => {

    const [show, setShow] = useState(true)
    const handleToogle = (_show) => setShow(_show)

    return (
        <div id="event-popup">
            <Modal id="modal-event" show={show} onHide={() => handleToogle(false)} animation={false} backdrop="static" keyboard={false} size="lg" centered={true}>
                <Modal.Header>
                    <VscChromeClose id="close-button" onClick={() => handleToogle(false)} />
                </Modal.Header>
                <Modal.Body>
                    <Image src="./assets/img/event-logitrans.png" alt="" fluid></Image>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default EventPopup