import React from 'react';
import "./index.css";
import BlogCard from "../../components/BlogCard";
import {rBlogs} from "./consts";


const RBlogsPage = () => {
    return (
        <div id="r-blogs-page-wrapper">
            <div id="r-blogs-cards-wrapper">
                {rBlogs.map((props, k) => {
                    return (
                        <BlogCard {...props} key={k}/>
                )
                })}
            </div>
        </div>
    )
}


export default RBlogsPage;
