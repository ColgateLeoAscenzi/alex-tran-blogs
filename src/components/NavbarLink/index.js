import React from 'react';
import "./index.css";
import {Link} from "@mui/material";
import PropTypes from "prop-types";

const NavbarLink = ({path, children}) => {
    return (
        <Link href={path} underline="none" id="nav-link">
            {children}
        </Link>
    )
}

NavbarLink.propTypes = {
    path: PropTypes.string,
    children: PropTypes.string
}

export default NavbarLink;
