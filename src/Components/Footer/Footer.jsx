import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper" id="footer">
                <a className="footer-link" href="#">{t("footer.footer-link")}</a>
                <a className="footer-icon" href="footer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp /></a>      
            </div>
        </div>
    </div>
  )
}

export default Footer