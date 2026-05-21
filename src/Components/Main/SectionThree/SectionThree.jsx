import { useTranslation } from "react-i18next";
import "./SectionThree.css";
import React from 'react'
import axios from "axios";

function SectionThree() {
    const [t, i18n] = useTranslation();
    const sendMessage = (event) =>{
        event.preventDefault();
         const token = `8799654997:AAFXbpKmshRxD_WcqAShMxtcHeU-IMsZ2OE`
        const chat_id =  647264939
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("username").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const text = document.getElementById("text").value
        const textarea = document.getElementById("textarea").value
        
         const messageContent = `Name : ${name}\n Email: ${email} \n Phone number: ${phone}\n Text: ${text} \n Textarea: ${textarea}`;
          axios({
               url:url,
               method:"POST",
               data :{
                    chat_id:chat_id,
                    text:messageContent,
              }
                 })
                 .then(()=>{
                   alert("Successfully sent!✅");
                 }).catch((error)=>{
                   console.log(error);
    
             })
  
    }
  return (
    <div className="sectionThree">
        <div className="container">
            <div className="three-wrapper">
            <h2 className="three-title" dangerouslySetInnerHTML={{ __html: t('sectionThree.three-title') }} /> 
            <form className="form" onSubmit={sendMessage}>
            <div className="input-group">
              <input id="username" className="input" type="text" required placeholder={t("sectionThree.name-placeholder")} />
              <input id="email" className="input" type="email" required placeholder={t("sectionThree.email-placeholder")} />
            </div>
        
            <div className="input-group">
              <input id="phone" className="input" type="number" required placeholder={t("sectionThree.phone-placeholder")} />
              <input id="text" className="input" type="text" required placeholder={t("sectionThree.subject-placeholder")} />
            </div>
                <textarea id="textarea" className="textarea" required placeholder={t("sectionThree.message-placeholder")}></textarea>
                <button type="submit" className="three-btn">{t("sectionThree.btn-send")}</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default SectionThree

