import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import hero_1 from "./image/hero_1.svg";

function Hero() {
    const {t, i18n} = useTranslation();
  return (
    <div>
        <div className="hero">
            <div className="container">
            <div className="hero-wrapper">
                <div className="hero-left">
                    <h6 className="hero-helo">{t("hero.hero-helo")}</h6>
                    <h2 className="hero-name">{t("hero.hero-name")}</h2> 
                   <h4 className="hero-titles" dangerouslySetInnerHTML={{ __html: t('hero.hero-titles') }} />
                    <p className="hero-text">{t("hero.hero-text")}</p>
                    <div className="hero-icons">
                        <div className="hero-icon"><FaFacebookF /></div>
                        <div className="hero-icon"><FaTwitter /></div>
                        <div className="hero-icon"><FaInstagram /></div>
                        <div className="hero-icon"><FaLinkedinIn /></div>
                    </div>
                    <button className="hero-btn">{t("hero.hero-btn")}</button>
                </div>
                <div className="hero-right">
                    <img className="hero-rasm" src={hero_1} alt="" />
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Hero