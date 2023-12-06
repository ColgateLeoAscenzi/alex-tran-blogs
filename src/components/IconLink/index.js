import React from 'react';
import "./index.css";
import PropTypes from "prop-types";

const IconLink = ({children, link}) => {
    return (
        <div id="icon-link-wrapper"
             onClick={() => {window.location.href=link}}
        >
            {children}
        </div>
    )
}

IconLink.propTypes = {
    children: PropTypes.any,
    link: PropTypes.string
}


export default IconLink;
