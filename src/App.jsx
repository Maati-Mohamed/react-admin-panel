import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Users from "./pages/users";
import Settings from "./pages/settings";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../styles/global.css";

function App() {
  const settings = useSelector((state) => {
    return state.settings;
  });

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(settings.siteLang);
    // Set HTML direction attribute
    const isRTL = settings.siteLang === "ar";
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Dynamically inject the correct direction CSS
    const head = document.head;
    let styleLink = document.getElementById("dir-style");

    if (styleLink) {
      styleLink.href = isRTL ? "/styles/rtl.css" : "/styles/ltr.css";
    } else {
      styleLink = document.createElement("link");
      styleLink.rel = "stylesheet";
      styleLink.id = "dir-style";
      styleLink.href = isRTL ? "/styles/rtl.css" : "/styles/ltr.css";
      head.appendChild(styleLink);
    }
  }, [settings]);
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        rtl={true}
        pauseOnHover
      />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
