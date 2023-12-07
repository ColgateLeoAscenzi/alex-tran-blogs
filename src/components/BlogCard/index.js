import React from 'react';
import "./index.css";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const BlogCard = ({fileName, imgSrc, title, description}) => {
    return (
        <Card id="blog-card-wrapper">
            <CardActionArea
                component={Link} to={`/learn-r/${fileName}`}
                onClick={() => window.scrollTo(0,0)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={imgSrc}
                    alt={imgSrc}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

BlogCard.propTypes = {
    fileName: PropTypes.string,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default BlogCard;
