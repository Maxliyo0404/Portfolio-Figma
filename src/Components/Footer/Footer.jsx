import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'

function Footer() {
    const [t, i18n] = useTranslation();
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <a className="footer-link" href="#">{t("footer.footer-link")}</a>
                <div className="footer-icon">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer