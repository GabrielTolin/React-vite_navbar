import { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import ContactForm from '../../components/ContactForm';
import styles from "../../styles/contact.module.css";

const ContactPage = () => {
  const { t } = useTranslation(); 

  const handleFormSubmit = (formData) => {
    console.log('Dados recebidos:', formData);
  };

  return (
    <div className={styles.container}>
      <h1>{t("shallWeCreateAmazing")}</h1>
      <h2>{t("getInTouch")}</h2>
      <p>{t("p4")}</p>

      <div className={styles.forms}>
        <h2>{t("sendYourMessage")}</h2>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>

      <h2>{t("ourCommitment")}</h2>
      <ul>
        <li>✨ {t("quickResponse")}</li>
        <li>✨ {t("completeConfident")}</li>
        <li>✨ {t("clearProcess")}</li>
      </ul>
    </div>
  );
};

export default ContactPage; 
