import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
 
    const {t} = useTranslation()


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_06ma7b7', 'template_q6ai2gq', form.current, {
        publicKey: 'mWlWmieta6GBimPT2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{t("con.name")}</label><br/>
      <input type="text" name="from_name" /><br/>
      <label>Email</label><br/>
      <input type="email" name="from_email" /><br/>
      <label>{t("con.message")}</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value={t("con.send")} /><br/>
    </form>
    
  );
};
