import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle } from "react-icons/fa"

const ServicesRow = (props) => {
    return (
       <Fragment>
            <div className="services-row">
                <div className="services-item">
                    <span>
                        <FaCheckCircle className="services-icon" />
                    </span>               
                    <b>{props.item['SERVICES_COLUMNS_ITEMS_TITLE']}{' : '}</b>{props.item['SERVICES_COLUMNS_ITEMS_CONTENT']}
                </div>
            </div>
        </Fragment>
    )
}

ServicesRow.propTypes = {
    item: PropTypes.object.isRequired
}

export default ServicesRow
