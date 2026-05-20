import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
    const {t, i18n} = useTranslation();
  return (
    <div>
        <div className="hero">
            <div className="container"></div>
            <div className="hero-wrapper">
                <div className="hero-left">
                    <h6 className="hero-helo">{t("hero.hero-helo")}</h6>
                    <h2 className="hero-name">{t("hero.hero-name")}</h2> 
                   <h4 className="hero-titles" dangerouslySetInnerHTML={{ __html: t('hero.hero-titles') }} />
                    <p className="hero-text">{t("hero.hero-text")}</p>
                    <div className="icons">
                        <div className="icon"><FaFacebookF /></div>
                        <div className="icon"><FaTwitter /></div>
                        <div className="icon"><FaInstagram /></div>
                        <div className="icon"><FaLinkedinIn /></div>
                    </div>
                    <button className="hero-btn"></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero