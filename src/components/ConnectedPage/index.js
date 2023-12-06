import React from 'react';
import Navbar from "../Navbar";
import "./index.css";
import PropTypes from "prop-types";
import Footer from "../Footer";

const ConnectedPage = ({children}) => {
    return (
        <div id="page-wrapper">
            <a id="header-title" href="/">Quang-Anh Ngo Tran</a>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

ConnectedPage.propTypes = {
    children: PropTypes.any
}

export default ConnectedPage;
