import React from 'react';
import "./index.css";
import {Link} from "@mui/material";
import PropTypes from "prop-types";

const NavbarLink = ({path, children, index}) => {
    return (
        index > 0 ?
        <div id="nav-link-after"><Link href={path} underline="none" id="nav-link">
            {children}
        </Link></div>
             :
            <div><Link href={path} underline="none" id="nav-link">
                {children}
            </Link></div>
    )
}

NavbarLink.propTypes = {
    path: PropTypes.string,
    children: PropTypes.string,
    index: PropTypes.number
}

export default NavbarLink;
