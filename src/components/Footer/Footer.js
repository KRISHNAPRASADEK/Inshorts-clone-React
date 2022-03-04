import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="http://www.linkedin.com/in/krishnaprasadek" target="__blank">
          Krishnaprasad E K
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/_krrish_na_38" target="__blank">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="http://www.linkedin.com/in/krishnaprasadek" target="__blank">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://krishnaprasadek.github.io/ws/" target="__blank">
          <LinkIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
