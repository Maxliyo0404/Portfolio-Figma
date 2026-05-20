import { useTranslation } from "react-i18next";
import "./Header.css";
import React from 'react'
import i18next from "i18next";
function Header() {
    const {t, i18n} = useTranslation();

  return (
    <div className="header">
        <div className="container">
            <div className="header-container">

            </div>
        </div>
    </div>
  )
}

export default Header