import React from 'react';
import "./index.css";

const blogInfo = [
    {
        title: "Petals",
        url: "/blogs/petals"
    }
]

const BlogsPage = () => {
    return (
        <div id="blogs-page-wrapper">
            {blogInfo.map(({title, url}, k) => {
                return (<a href={url} key={k}>{title}</a>)
            })}
        </div>
    )
}


export default BlogsPage;
