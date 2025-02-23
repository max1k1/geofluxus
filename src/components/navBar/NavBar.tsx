import { Link, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import HomePage from "../../pages/homePage/HomePage";
import ReportPage from "../../pages/reportPage/ReportPage";
import s from "./Navbar.module.css";

export default function NavBar() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  return (
    <>
      {showNavbar && (
        <nav className={s.navbar}>
          <Link to="/report">Go to Report Page</Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </>
  );
}
