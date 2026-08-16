"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MdDashboard,
  MdMenuBook,
  MdCalendarMonth,
  MdPeople,
  MdLink,
  MdAccountBalanceWallet,
  MdVideoCameraFront,
} from "react-icons/md";

import "./Sidebar.scss";

export default function Sidebar({ role = "student" }) {
  const pathname = usePathname();

  const isInstructor = role === "instructor";

  // =========================================
  // STUDENT MENU — SAME
  // =========================================

  const studentMenu = [
    {
      name: "Dashboard",
      href: "/student/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Courses",
      href: "/student/courses",
      icon: <MdMenuBook />,
    },
    {
      name: "Schedule",
      href: "/student/schedule",
      icon: <MdCalendarMonth />,
    },
    {
      name: "Instructors",
      href: "/student/instructors",
      icon: <MdPeople />,
    },
    {
      name: "Profile",
      href: "/student/profile",
      icon: <MdPeople />,
    },
    {
      name: "Activity",
      href: "/student/activity",
      icon: <MdDashboard />,
    },
  ];

  // =========================================
  // INSTRUCTOR MENU
  // =========================================

  const instructorMenu = [
    {
      name: "Dashboard",
      href: "/instructor/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Courses",
      href: "/instructor/courses",
      icon: <MdMenuBook />,
    },
    {
      name: "Schedule",
      href: "/instructor/schedule",
      icon: <MdCalendarMonth />,
    },
    {
      name: "Students",
      href: "/instructor/students",
      icon: <MdPeople />,
    },
    {
      name: "Resource",
      href: "/instructor/resource",
      icon: <MdLink />,
    },
    {
      name: "Transaction",
      href: "/instructor/transaction",
      icon: <MdAccountBalanceWallet />,
    },
    {
      name: "Live Class",
      href: "/instructor/live-class",
      icon: <MdVideoCameraFront />,
    },
  ];

  const menuItems = isInstructor ? instructorMenu : studentMenu;

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <span>Max</span>Skills.
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const active =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${active ? "active" : ""}`}
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span className="sidebar-text">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* =========================================
          UPGRADE CARD
          STUDENT + INSTRUCTOR BOTH
      ========================================= */}

      <div className="upgrade-card">

        <div className="upgrade-dots">
          · · · ·
        </div>

        <div className="upgrade-title">
          Upgrade your
          <br />
          Account to Pro

          <span className="medal">
            🏅
          </span>
        </div>

        <p>
          Upgrade to premium
          <br />
          to get premium features
        </p>

        <button type="button">
          Upgrade
        </button>

      </div>

    </aside>
  );
}