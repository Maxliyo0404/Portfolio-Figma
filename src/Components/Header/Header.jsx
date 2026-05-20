import { useTranslation } from "react-i18next";
import "./Header.css";
import React from 'react'
import i18next from "i18next";
function Header() {
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = (event) =>{
        i18n.changeLanguage(event.target.value)
    }
  return (
    <div className="header">
        <div className="container">
            <div className="header-container">
              <a className="logo" href="#">{t("header.logo")}</a>
              <ul className="header-list">
                <li><a className="header-link" href="#">{t("header.home")}</a></li>
                <li><a className="header-link" href="#">{t("header.logo")}</a></li>
                <li><a className="header-link" href="#">{t("header.logo")}</a></li>
                <li><a className="header-link" href="#">{t("header.logo")}</a></li>
                <li><a className="header-link" href="#">{t("header.logo")}</a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Header