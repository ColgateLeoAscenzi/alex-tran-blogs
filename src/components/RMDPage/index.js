import React from 'react';
import "./index.css";
import PropTypes from "prop-types";

const RMDPage = ({rmdName}) => {
    return (
        <div id="rmd-page-wrapper">
            {rmdName}
        </div>
    )
}

RMDPage.propTypes = {
    rmdName: PropTypes.string
}

export default RMDPage;
