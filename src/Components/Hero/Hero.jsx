import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const {t, i18n} = useTranslation();
  return (
    <div>
        <div className="hero">
            <div className="container"></div>
            <div className="hero-wrapper">
                
            </div>
        </div>

    </div>
  )
}

export default Hero