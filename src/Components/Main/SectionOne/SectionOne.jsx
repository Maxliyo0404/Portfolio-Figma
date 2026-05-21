import { useTranslation } from "react-i18next";
import "./SectionOne.css";
import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { BiBarChartAlt } from "react-icons/bi";
function SectionOne() {
  const [t, i18n] = useTranslation();
  return (
    <div className="sectionOne">
      <div className="container">
        <div className="sectionOne-wrapper">
          <h2 className="one-titles" dangerouslySetInnerHTML={{ __html: t('sectionOne.one-title') }} />
          <ul className="one-list">
            <li className="one-item">
              <div className="one-icon"><FaCode /></div>
              <h3 className="one-title">{t("sectionOne.one-web")}</h3>
              <p className="one-text">{t("sectionOne.one-text")}</p>
              <button className="one-btn">{t("sectionOne.one-btn")}</button>
            </li>
            <li className="one-item">
              <div className="one-icon"><FaPaintBrush /></div>
              <h3 className="one-title">{t("sectionOne.one-graphic")}</h3>
              <p className="one-text">{t("sectionOne.one-text")}</p>
              <button className="one-btn">{t("sectionOne.one-btn")}</button>
            </li>
            <li className="one-item">
              <div className="one-icon"><BiBarChartAlt /></div>
              <h3 className="one-teetle">{t("sectionOne.one-digital")}</h3>
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