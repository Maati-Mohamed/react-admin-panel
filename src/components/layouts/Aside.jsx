import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { t } from "i18next";

export default function Aside() {
  const settings = useSelector((state) => state.settings);

  return (
    <>
      <div className="offcanvas offcanvas-start" id="abc">
        <div className="offcanvas-header">
          <h6 className="offcanvas-title text-muted w-100">{t("Dashboard")}</h6>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="header bg-light p-2 text-center rounded-2">
          <h5 className="text-secondary mb-0">{settings.siteName}</h5>
          <span className="fs-10 text-muted">{settings.siteEmail}</span>
        </div>

        <div className="aside-body mt-4">
          <ul className="list-unstyled">
            <Link to="/dashboard" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-house text-dark"></i>
                </span>
                {t("Home")}
              </li>
            </Link>
            <Link href="/admin/products" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-bag text-dark"></i>
                </span>
                {t("Products")}
              </li>
            </Link>
            <Link to="/users" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-person text-dark"></i>
                </span>
                {t("Users")}
              </li>
            </Link>
            <Link to="/settings" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-gear text-dark"></i>
                </span>
                {t("Settings")}
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="aside p-3">
        <div className="aside-header p-2 text-center rounded-2">
          <h5 className="fw-bold mb-0">{t(settings.siteName)}</h5>
          <span className="fs-10 text-muted">{settings.siteEmail}</span>
        </div>
        <div className="aside-body mt-4">
          <ul className="list-unstyled">
            <Link to="/dashboard" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-house text-dark"></i>
                </span>
                {t("Home")}
              </li>
            </Link>
            <Link href="/admin/products" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-bag text-dark"></i>
                </span>
                {t("Products")}
              </li>
            </Link>
            <Link to="/users" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-person text-dark"></i>
                </span>
                {t("Users")}
              </li>
            </Link>
            <Link to="/settings" className="">
              <li className="p-1">
                <span className="me-3 fs-5">
                  <i className="bi bi-gear text-dark"></i>
                </span>
                {t("Settings")}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
