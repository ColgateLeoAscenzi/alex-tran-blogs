import React from 'react';
import "./index.css";
import PropTypes from "prop-types";

const RMDCard = ({rmdName}) => {
    return (
        <div id="page-wrapper">
            {rmdName}
        </div>
    )
}

RMDCard.propTypes = {
    rmdName: PropTypes.string
}

export default RMDCard;
