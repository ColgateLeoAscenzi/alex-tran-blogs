import React from 'react';
import Navbar from "../Navbar";
import "./index.css";
import PropTypes from "prop-types";

const ConnectedPage = ({child}) => {
    return (
        <div id="page-wrapper">
            <Navbar/>
            {child}
        </div>
    )
}

ConnectedPage.propTypes = {
    child: PropTypes.any
}

export default ConnectedPage;
