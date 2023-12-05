import React from 'react';
import {mainRoutes} from "../../routes";
import "./index.css";
import NavbarLink from "../NavbarLink";

const Navbar = () => {
    return (
        <div id="nav-wrapper">
            {
                mainRoutes.map(({name, path}, i) => {
                    return (
                        <NavbarLink path={path} name={name} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default Navbar;
