import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <a className="footer-link" href="#">{t("footer.footer-link")}</a>
                <div className="footer-icon"><FaArrowUp /></div>
            </div>
        </div>
    </div>
  )
}

export default Footer