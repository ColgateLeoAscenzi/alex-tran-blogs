import React from 'react';
import "./index.css";
import {Link} from "@mui/material";
import PropTypes from "prop-types";

const NavbarLink = ({path, name}) => {
    return (
        <Link href={path} underline="none" id="nav-link">
            {name}
        </Link>
    )
}

NavbarLink.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string
}

export default NavbarLink;
