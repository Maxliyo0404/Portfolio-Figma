import { useTranslation } from "react-i18next";
import "./SectionOne.css";
import React from 'react'

function SectionOne() {
  const [t, i18n] = useTranslation();
  return (
    <div className="sectionOne">
      <div className="container">
        <div className="sectionOne-wrapper">
          <h2 className="one-title">{t("sectionOne.one-title")}</h2>
          <ul className="one-list">
            <li className="one-item">
              <div className="icon"></div>
              <h3 className="">{t("sectionOne.one-btn")}</h3>
              <p className="one-text">{t("sectionOne.one-text")}</p>
              <button className="one-btn">{t("sectionOne.one-btn")}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionOne