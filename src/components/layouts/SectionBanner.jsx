import React from 'react'
import PropTypes from 'prop-types'

const SectionBanner = (props) => {

    const styles = {
        background: 'url(./assets/img/frigian-bg.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }

    return (
        <div id="section-banner" style={styles}>
            <div id="section-banner-text">
                <h1>{props.title}</h1>
                <ul>
                    <li>
                        <a href={props.breadcrumbPrevLink}>{props.breadcrumbPrevText}</a>
                    </li>
                    <li>
                        <span>{'>'}</span>
                    </li>
                    <li>
                        <span>{props.breadcrumbCurrentText}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

SectionBanner.propTypes = {
    title: PropTypes.string.isRequired,
    breadcrumbPrevText: PropTypes.string.isRequired,
    breadcrumbPrevLink: PropTypes.string.isRequired,
    breadcrumbCurrentText: PropTypes.string.isRequired
}

export default SectionBanner