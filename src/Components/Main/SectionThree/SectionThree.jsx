import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'

function SectionThree() {
    const [t, i18n] = useTranslation
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="three-wrapper">
            <h2 className="three-title" dangerouslySetInnerHTML={{ __html: t('sectionThree.three-title') }} /> 
            <form className="form">
                <input className="input" type="text"required placeholder={t("sectionThree.name-placeholder")} />
                <input className="input" type="email"required placeholder={t("sectionThree.email-placeholder")} />
                <input className="input" type="number"required placeholder={t("sectionThree.phone-placeholder")} />
                <input className="input" type="text"required placeholder={t("sectionThree.subject-placeholder")} />
                <textarea  className="textarea"></textarea>
                <button className="three-btn">{t("sectionThree.btn-send")}</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default SectionThree

   