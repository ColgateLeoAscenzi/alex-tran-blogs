import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ConnectedPage from "./components/ConnectedPage";
import MarkdownPage from "./components/MarkdownPage";
import researchMD from "./markdown_content/research";
import aboutMD from "./markdown_content/about";
import teachingMD from "./markdown_content/teaching";
import awardsMD from "./markdown_content/awards";
import petalsMD from "./markdown_content/blogs/petals";
import BlogsPage from "./pages/BlogsPage";
import RBlogsPage from "./pages/RBlogsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ConnectedPage><div>Home</div></ConnectedPage>,
    },
    {
        path: '/about',
        element: <ConnectedPage><MarkdownPage>{aboutMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/research',
        element: <ConnectedPage><MarkdownPage>{researchMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/teaching',
        element: <ConnectedPage><MarkdownPage>{teachingMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/awards-honors',
        element: <ConnectedPage><MarkdownPage>{awardsMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/resume',
        element: <ConnectedPage><div><a href ="/cv.pdf">Download my Resume!</a></div></ConnectedPage>,
    },
    {
        path: '/learn-r',
        element: <ConnectedPage><RBlogsPage/></ConnectedPage>,
    },
    {
        path: '/learn-r/M8_CorrelationRegression',
        element: <ConnectedPage><div><iframe
            id="moduleStyle"
            src="../rmd_html/M8_CorrelationRegression.html"
            title="M8Correlation Page"
        ></iframe></div></ConnectedPage>,
    },
    {
        path: '/blogs',
        element: <ConnectedPage><BlogsPage/></ConnectedPage>,
    },
    {
        path: '/blogs/petals',
        element: <ConnectedPage><MarkdownPage>{petalsMD}</MarkdownPage></ConnectedPage>,
    },
]);

export default router;
