import React from 'react';
import "./index.css";
import BlogCard from "../../components/BlogCard";

const cardContent = [
    {
        fileName: "M8_CorrelationRegression",
        imgSrc: "/Petals.png",
        title: "M8: Correlation Regression",
        description: "Learn about Correlation Regression. It's blah blah blah stats"
    },
    {
        fileName: "M8_CorrelationRegression",
        imgSrc: "/Petals.png",
        title: "M8: Correlation Regression",
        description: "Learn about Correlation Regression. It's blah blah blah stats"
    },
    {
        fileName: "M8_CorrelationRegression",
        imgSrc: "/Petals.png",
        title: "M8: Correlation Regression",
        description: "Learn about Correlation Regression. It's blah blah blah stats"
    },
    {
        fileName: "M8_CorrelationRegression",
        imgSrc: "/Petals.png",
        title: "M8: Correlation Regression",
        description: "Learn about Correlation Regression. It's blah blah blah stats"
    },
    {
        fileName: "M8_CorrelationRegression",
        imgSrc: "/Petals.png",
        title: "M8: Correlation Regression",
        description: "Learn about Correlation Regression. It's blah blah blah stats"
    },
]
const RBlogsPage = () => {
    return (
        <div id="r-blogs-page-wrapper">
            <div id="r-blogs-cards-wrapper">
                {cardContent.map((props, k) => {
                    return (
                        <BlogCard {...props} key={k}/>
                )
                })}
            </div>
        </div>
    )
}


export default RBlogsPage;
