import React from 'react';
import "./index.css";

const blogInfo = [
    {
        title: "Petals",
        url: "/blogs/petals"
    },
    {
        title: "On Friendship",
        url: "/blogs/onfriendship"
    },
    {
        title: "On Teaching and Gardening",
        url: "/blogs/onteachingandgardening"
    },
]

const BlogsPage = () => {
    return (
        <div id="blogs-page-wrapper">
            <ul>
            {blogInfo.map(({title, url}, k) => {
                return (<li className="blog-link-li" key={k}><a className="blog-link-a" href={url}>{title}</a><br/></li>)
            })}
            </ul>
        </div>
    )
}


export default BlogsPage;
