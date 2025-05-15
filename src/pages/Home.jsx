import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css"
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className='page-container'>
            
            <h1>{t('bemVindo')}</h1>
            <h3>{t('ideas_come')}</h3>
            <section>
                <p>{t('p1')}</p>
                <ul>
                    <li>🔹 {t("branding_identity")}</li>
                    <li>🔹 {t("ux/ui")}</li>
                    <li>🔹 {t("illust_design")}</li>
                    <li>🔹 {t("md_cv")}</li>
                </ul>
            </section>
            
            <section>
                <h2>{t("why_choose")}</h2>
                <ul>
                    <li>✅ {t("customized_solution")}</li>
                    <li>✅ {t("limitless_creat")}</li>
                    <li>✅ {t("impactResults")}</li>
                </ul>
            </section>
            <section>
                <h3>{t("readyTurn")}</h3>
                <Link to='/contacto'><h4>{t("contactUS")}</h4></Link>
            </section>
        </div>
    );
};


export default Home;