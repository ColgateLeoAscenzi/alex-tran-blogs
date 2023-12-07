import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ConnectedPage from "./components/ConnectedPage";
import MarkdownPage from "./components/MarkdownPage";
import researchMD from "./markdown_content/research";
import homeMD from "./markdown_content/home";
import aboutMD from "./markdown_content/about";
import teachingMD from "./markdown_content/teaching";
import awardsMD from "./markdown_content/awards";
import petalsMD from "./markdown_content/blogs/petals";
import BlogsPage from "./pages/BlogsPage";
import RBlogsPage from "./pages/RBlogsPage";
import onfriendshipMD from "./markdown_content/blogs/onfriendship";
import onteachingandgardeningMD from "./markdown_content/blogs/onteachingandgardening";
import {rBlogs} from "./pages/RBlogsPage/consts";


let routes = [
    {
        path: '/',
        element: <ConnectedPage><MarkdownPage>{homeMD}</MarkdownPage></ConnectedPage>,
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
        path: '/blogs',
        element: <ConnectedPage><BlogsPage/></ConnectedPage>,
    },
    {
        path: '/blogs/petals',
        element: <ConnectedPage><MarkdownPage>{petalsMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/blogs/onfriendship',
        element: <ConnectedPage><MarkdownPage>{onfriendshipMD}</MarkdownPage></ConnectedPage>,
    },
    {
        path: '/blogs/onteachingandgardening',
        element: <ConnectedPage><MarkdownPage>{onteachingandgardeningMD}</MarkdownPage></ConnectedPage>,
    },
];

// add blog routes
routes = routes.concat(rBlogs.map(({fileName,title}) => {
    return (
        {
            path: `/learn-r/${fileName}`,
            element: <ConnectedPage><div><iframe
                id="moduleStyle"
                src={`../rmd_html/${fileName}.html`}
                title={title}
            ></iframe></div></ConnectedPage>,
        }
    )
}));

const router = createBrowserRouter(routes);

export default router;
