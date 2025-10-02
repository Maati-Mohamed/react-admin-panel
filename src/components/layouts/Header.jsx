import { t } from "i18next";
import { useSelector } from "react-redux";

export default function Header() {
  const settings = useSelector((state) => {
    return state.settings;
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg px-2">
        <a
          href="#abc"
          data-bs-toggle="offcanvas"
          className="navbar-toggler mx-2"
        >
          <span className="">
            <i className="bi bi-list fs-4 mt-1 text-muted"></i>
          </span>
        </a>

        <div className=" d-flex align-items-center justify-content-end">
          <div className="nav-date text-right">
            <div className="role-name">
              <p className="mb-0 fw-bold name text-secondary">Maati Mohamed</p>
              <p className="mb-0 role">{t("Admin")}</p>
            </div>
          </div>
        </div>

        <div className="dropdown user-dropdown">
          <div
            className="custom-small-image cursor-pointer"
            data-bs-toggle="dropdown"
            id="dropdownBtn"
            role="button"
            aria-expanded="false"
          >
            <img src="/images/icons8-user-48.png" alt="user" />
          </div>
          <ul
            className={
              settings.siteLang == "ar"
                ? "dropdown-menu dropdown-menu-start"
                : "dropdown-menu dropdown-menu-end"
            }
            aria-labelledby="dropdownBtn"
          >
            <li>
              <a href="/" className="dropdown-item text-secondary">
                {t("Website")}
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item text-secondary">
                {t("Change Password")}
              </a>
            </li>
            <li>
              <div className="dropdown-item btn">{t("Logout")}</div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
