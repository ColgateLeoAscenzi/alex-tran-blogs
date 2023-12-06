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
        element: <ConnectedPage><div>Home</div></ConnectedPage>,
    },
    {
        path: '/about',
        element: <ConnectedPage><MarkdownPage markdown={aboutMD}/></ConnectedPage>,
    },
    {
        path: '/research',
        element: <ConnectedPage><MarkdownPage markdown={researchMD}/></ConnectedPage>,
    },
    {
        path: '/teaching',
        element: <ConnectedPage><div>Teaching</div></ConnectedPage>,
    },
    {
        path: '/awards-honors',
        element: <ConnectedPage><div>Awards & Honors</div></ConnectedPage>,
    },
    {
        path: '/resume',
        element: <ConnectedPage><div>CV</div></ConnectedPage>,
    },
    {
        path: '/learn-r',
        element: <ConnectedPage><div>R with Alex <Card><Link to="/learn-r/M8_CorrelationRegression">GO GO</Link></Card></div></ConnectedPage>,
    },
    {
        path: '/learn-r/M8_CorrelationRegression',
        element: <ConnectedPage><div><iframe
            id="moduleStyle"
            src="../pages/M8_CorrelationRegression.html"
            title="M8Correlation Page"
        ></iframe></div></ConnectedPage>,
    },
    {
        path: '/blogs',
        element: <ConnectedPage><div>Blogs</div></ConnectedPage>,
    },
]);

export default router;
