import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>{t("Home Page")}</h1>

        <Link to="/dashboard">
          <button className="btn btn-primary">{t("Dashboard")}</button>
        </Link>
      </div>
    </>
  );
}
