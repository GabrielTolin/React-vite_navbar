import { useTranslation } from "react-i18next";
import styles from "../../styles/Home.module.css";

const Sobre = () => {
    const { t } = useTranslation();


    return (
        <div className='page-container'>
            <h1>{t("aboutGt")}</h1>
            <h4>{t("moreThanAgency")}</h4>

            <h2>{t("mission")}</h2>
            <p>{t("p2")}</p>

            <h2>{t("journey")}</h2>
            <p>{t("p3")}</p>

            <h2>{t("whatSetUs")}</h2>
            <ul>
                <li>✨ {t("collab")}</li>
                <li>✨ {t("purposefulDesign")}</li>
                <li>✨ {t("upToDateVision")}</li>
            </ul>

            <h2>{t("ourValues")}</h2>
            <ul>
                <li>🔹 {t("creativityWhitOut")}</li>
                <li>🔹 {t("transparecy")}</li>
                <li>🔹 {t("passionForDetails")}</li>
            </ul>

            <h2>{t("shallWeCreate")}</h2>
        </div>
    );
};


export default Sobre;