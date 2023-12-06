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
]

const BlogsPage = () => {
    return (
        <div id="blogs-page-wrapper">
            {blogInfo.map(({title, url}, k) => {
                return (<div  key={k}><a href={url}>{title}</a><br/></div>)
            })}
        </div>
    )
}


export default BlogsPage;
