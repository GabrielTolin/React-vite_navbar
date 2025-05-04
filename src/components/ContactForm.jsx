import { useState } from 'react';
import styles from "../styles/contact.module.css";
import { useTranslation } from 'react-i18next';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpType: 'branding'
  });
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">{t("name")} </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">{t("phone")}</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="helpType">{t("howCanWeHelpYou")}</label>
        <select
          id="helpType"
          name="helpType"
          value={formData.helpType}
          onChange={handleChange}
        >
          <option value="branding">Branding</option>
          <option value="web">Web Design</option>
          <option value="motion">Motion Design</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>

        {t("submit")}
      </button>
    </form>
  );
};

export default ContactForm;