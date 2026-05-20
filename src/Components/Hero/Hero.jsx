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
                <div className="hero-left">
                    <h5 className="hero-title"></h5>
                    <h2 className="hero-titles"></h2> 
                    <p className="hero=text"></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero