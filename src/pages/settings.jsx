import { t } from "i18next";
import Aside from "../components/layouts/Aside";
import Header from "../components/layouts/header";
import { useDispatch, useSelector } from "react-redux";
import { editWebsite } from "../features/settingsSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Settings() {
  const settings = useSelector((state) => {
    return state.settings;
  });

  const [mySetting, setMySetting] = useState({
    siteName: settings.siteName,
    siteEmail: settings.siteEmail,
    siteLang: settings.siteLang,
  });

  const dispatch = useDispatch();

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(editWebsite(mySetting));
    toast.success(t("Updated Successfly"));
  }
  return (
    <>
      <Header />
      <Aside />
      <div className="content">
        <div className="settings w-50">
          <form action="#" onSubmit={handelSubmit}>
            <div className="form-group">
              <label>{t("Website name")}</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={mySetting.siteName}
                onChange={(e) => {
                  setMySetting({ ...mySetting, siteName: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>{t("Email")}</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={mySetting.siteEmail}
                onChange={(e) => {
                  setMySetting({ ...mySetting, siteEmail: e.target.value });
                }}
              />
            </div>
            <label htmlFor="" className="mt-2">
              {t("Language")}
            </label>
            <select
              className="form-control  mb-3"
              value={mySetting.siteLang}
              onChange={(e) => {
                setMySetting({ ...mySetting, siteLang: e.target.value });
              }}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
