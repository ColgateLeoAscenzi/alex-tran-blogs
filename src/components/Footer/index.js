import React from 'react';
import "./index.css";
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import IconLink from "../IconLink";

const Footer = () => {

    const size = 20;
    return (
        <div id="footer-wrapper">
            <div id="icon-wrapper">
                <IconLink link="mailto:quatran@iu.edu"><EmailIcon sx={{ fontSize: size }}/></IconLink>
                <IconLink link="https://scholar.google.com/citations?user=DZCxUJAAAAAJ"><SchoolIcon sx={{ fontSize: size }}/></IconLink>
                <IconLink link="https://www.linkedin.com/in/quang-anh-tran-345696173/"><LinkedInIcon sx={{ fontSize: size }}/></IconLink>
                <IconLink link="https://twitter.com/QuangAnhTranNgo"><TwitterIcon sx={{ fontSize: size }}/></IconLink>
                <IconLink link="https://socialroles.lab.indiana.edu/people/index.html"><AccountBalanceIcon sx={{ fontSize: size }}/></IconLink>
            </div>
        </div>
    )
}


export default Footer;
