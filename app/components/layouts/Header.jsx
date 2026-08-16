"use client";

import {
  MdSearch,
  MdNotificationsNone,
  MdSettings,
  MdKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";

import { useRouter } from "next/navigation";

import "./Header.scss";

export default function Header({ pageTitle = "Dashboard" }) {
  const router = useRouter();

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("maxskills_role");

    router.push("/");
  };

  return (
    <header className="dashboard-header">

      {/* =========================
          LEFT - PAGE TITLE
      ========================= */}

      <div className="header-left">
        <h1>{pageTitle}</h1>
      </div>

      {/* =========================
          CENTER - SEARCH
      ========================= */}

      <div className="header-search">
        <MdSearch />

        <input
          type="text"
          placeholder="Search here..."
        />
      </div>

      {/* =========================
          RIGHT
      ========================= */}

      <div className="header-actions">

        {/* LANGUAGE */}
        <button
          type="button"
          className="language"
        >
          🇬🇧 Eng (US)
          <MdKeyboardArrowDown />
        </button>

        {/* NOTIFICATION */}
        <button
          type="button"
          className="header-button notification-button"
        >
          <MdNotificationsNone />

          <span className="notification-dot" />
        </button>

        {/* SETTINGS */}
        <div className="settings-wrapper">

          <button
            type="button"
            className="header-button"
            onClick={() =>
              document
                .querySelector(".settings-menu")
                ?.classList.toggle("show")
            }
          >
            <MdSettings />
          </button>

          <div className="settings-menu">

            <button type="button">
              <MdSettings />
              Settings
            </button>

            <button
              type="button"
              onClick={handleLogout}
            >
              <MdLogout />
              Logout
            </button>

          </div>
        </div>

        {/* USER AVATAR */}
        <div className="profile-avatar">
          S
        </div>

      </div>
    </header>
  );
}