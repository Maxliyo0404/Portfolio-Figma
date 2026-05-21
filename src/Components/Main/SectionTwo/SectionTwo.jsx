import { useTranslation } from "react-i18next";
import "./SectionTwo.css";
import React from 'react';
import two_lee from "./image/two_lee.svg"

function SectionTwo() {
    const [t, i18n] = useTranslation();

  return (
    <div className="sectionTwo">
        <div className="container">
            <div className="two-wrapper">
              <h2 className="two-title" dangerouslySetInnerHTML={{ __html: t('sectiontwo.two-title') }} />
              <ul className="two-list">
            {Array(6).fill(0).map((_, indeks) => (
              <li className="two-item" key={indeks}>
                <img src={two_lee} alt="rasm" className="two-img" />
              </li>
            ))}
          </ul>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo