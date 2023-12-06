import React from 'react';
import "./index.css";
import PropTypes from "prop-types";
import Markdown from "react-markdown";

const MarkdownPage = ({children}) => {
    return (
        <div id="md-page-wrapper">
            <div id="md-wrapper"><Markdown >{children}</Markdown></div>
        </div>
    )
}

MarkdownPage.propTypes = {
    children: PropTypes.string
}

export default MarkdownPage;
