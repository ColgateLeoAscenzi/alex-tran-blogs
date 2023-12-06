import React from 'react';
import "./index.css";
import PropTypes from "prop-types";
import Markdown from "react-markdown";

const MarkdownPage = ({markdown}) => {
    return (
        <div id="md-page-wrapper">
            <div id="md-wrapper"><Markdown >{markdown}</Markdown></div>
        </div>
    )
}

MarkdownPage.propTypes = {
    markdown: PropTypes.string
}

export default MarkdownPage;
