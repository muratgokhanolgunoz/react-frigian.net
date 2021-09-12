import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { BsFillQuestionSquareFill } from "react-icons/bs"
import { ImCheckboxChecked } from "react-icons/im"

const FaqRow = (props) => {
    return (
        <Fragment>
            <div className="faq-row">
                <div className="faq-title">
                    <span>
                        <BsFillQuestionSquareFill className="faq-icon" />
                    </span>
                    <span className="faq-text"><b>{props.item['FAQ_ITEMS_TITLE']}</b></span>
                </div>
                <div className="faq-content">
                    <span>
                        <ImCheckboxChecked className="faq-icon" />
                    </span>
                    <span className="faq-text">{props.item['FAQ_ITEMS_CONTENT']}</span>
                </div>
            </div>
        </Fragment>
    )
}

FaqRow.propTypes = {
    item: PropTypes.object.isRequired
}

export default FaqRow