import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import ConnectedPage from "./components/ConnectedPage";
import {Card} from "@mui/material";
import MarkdownPage from "./components/MarkdownPage";
import researchMD from "./markdown_content/research";
import aboutMD from "./markdown_content/about";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ConnectedPage child={<div>Home</div>}/>,
    },
    {
        path: '/about',
        element: <ConnectedPage child={<MarkdownPage markdown={aboutMD}/>}/>,
    },
    {
        path: '/research',
        element: <ConnectedPage child={<MarkdownPage markdown={researchMD}/>}/>,
    },
    {
        path: '/teaching',
        element: <ConnectedPage child={<div>Teaching</div>}/>,
    },
    {
        path: '/awards-honors',
        element: <ConnectedPage child={<div>Awards & Honors</div>}/>,
    },
    {
        path: '/resume',
        element: <ConnectedPage child={<div>CV</div>}/>,
    },
    {
        path: '/learn-r',
        element: <ConnectedPage child={<div>R with Alex <Card><Link to="/learn-r/M8_CorrelationRegression">GO GO</Link></Card></div>}/>,
    },
    {
        path: '/learn-r/M8_CorrelationRegression',
        element: <ConnectedPage child={<div><iframe
            id="moduleStyle"
            src="../pages/M8_CorrelationRegression.html"
            title="M8Correlation Page"
        ></iframe></div>}/>,
    },
    {
        path: '/blogs',
        element: <ConnectedPage child={<div>Blogs</div>}/>,
    },
]);

export default router;
