import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div class="social-container" className="justify-content-right py-3" fluid = {true}>
            <a href="https://www.linkedin.com/in/rhojohn/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://www.instagram.com/john7rho/?hl=en"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </div>
    );
}