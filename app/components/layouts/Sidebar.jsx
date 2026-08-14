// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   MdDashboard,
//   MdMenuBook,
//   MdCalendarMonth,
//   MdPeople,
//   MdPerson,
//   MdShowChart,
//   MdGridView,
// } from "react-icons/md";

// import "./Sidebar.scss";

// export default function Sidebar() {
//   const pathname = usePathname();

//   const menuItems = [
//     {
//       name: "Dashboard",
//       href: "/student/dashboard",
//       icon: <MdGridView />,
//     },
//     {
//       name: "Courses",
//       href: "/student/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/student/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Instructors",
//       href: "/student/instructors",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/student/profile",
//       icon: <MdPerson />,
//     },
//     {
//       name: "Activity",
//       href: "/student/activity",
//       icon: <MdShowChart />,
//     },
//   ];

//   return (
//     <aside className="sidebar">

//       {/* Logo */}
//       <div className="sidebar-logo">
//         <span>Max</span>Skills.
//       </div>

//       {/* Navigation */}
//       <nav className="sidebar-nav">
//         {menuItems.map((item) => {
//           const active = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`sidebar-link ${active ? "active" : ""}`}
//             >
//               <span className="sidebar-icon">
//                 {item.icon}
//               </span>

//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Upgrade Card */}
//       <div className="upgrade-card">

//         <div className="upgrade-dots">
//           · · · ·
//         </div>

//         <div className="upgrade-title">
//           Upgrade your
//           <br />
//           Account to Pro
//           <span className="medal">🏅</span>
//         </div>

//         <p>
//           Upgrade to premium
//           <br />
//           to get premium features
//         </p>

//         <button>
//           Upgrade
//         </button>

//       </div>

//     </aside>
//   );
// }





// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   MdDashboard,
//   MdMenuBook,
//   MdCalendarMonth,
//   MdPeople,
//   MdPerson,
//   MdShowChart,
// } from "react-icons/md";

// import "./Sidebar.scss";

// export default function Sidebar({ role = "student" }) {
//   const pathname = usePathname();

//   const isInstructor = role === "instructor";

//   const menuItems = isInstructor
//     ? [
//         {
//           name: "Dashboard",
//           href: "/instructor/dashboard",
//           icon: <MdDashboard />,
//         },
//         {
//           name: "Courses",
//           href: "/instructor/courses",
//           icon: <MdMenuBook />,
//         },
//         {
//           name: "Schedule",
//           href: "/instructor/schedule",
//           icon: <MdCalendarMonth />,
//         },
//         {
//           name: "Students",
//           href: "/instructor/students",
//           icon: <MdPeople />,
//         },
//         {
//           name: "Profile",
//           href: "/instructor/profile",
//           icon: <MdPerson />,
//         },
//         {
//           name: "Activity",
//           href: "/instructor/activity",
//           icon: <MdShowChart />,
//         },
//       ]
//     : [
//         {
//           name: "Dashboard",
//           href: "/student/dashboard",
//           icon: <MdDashboard />,
//         },
//         {
//           name: "Courses",
//           href: "/student/courses",
//           icon: <MdMenuBook />,
//         },
//         {
//           name: "Schedule",
//           href: "/student/schedule",
//           icon: <MdCalendarMonth />,
//         },
//         {
//           name: "Instructors",
//           href: "/student/instructors",
//           icon: <MdPeople />,
//         },
//         {
//           name: "Profile",
//           href: "/student/profile",
//           icon: <MdPerson />,
//         },
//         {
//           name: "Activity",
//           href: "/student/activity",
//           icon: <MdShowChart />,
//         },
//       ];

//   return (
//     <aside className="sidebar">

//       {/* Logo */}
//       <div className="sidebar-logo">
//         <span>Max</span>Skills.
//       </div>

//       {/* Navigation */}
//       <nav className="sidebar-nav">
//         {menuItems.map((item) => {
//           const active = pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`sidebar-link ${active ? "active" : ""}`}
//             >
//               <span className="sidebar-icon">
//                 {item.icon}
//               </span>

//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Upgrade Card */}
//       {!isInstructor && (
//         <div className="upgrade-card">

//           <div className="upgrade-dots">
//             · · · ·
//           </div>

//           <div className="upgrade-title">
//             Upgrade your
//             <br />
//             Account to Pro
//             <span className="medal">🏅</span>
//           </div>

//           <p>
//             Upgrade to premium
//             <br />
//             to get premium features
//           </p>

//           <button type="button">
//             Upgrade
//           </button>

//         </div>
//       )}

//     </aside>
//   );
// }













// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

// import {
//   MdDashboard,
//   MdMenuBook,
//   MdCalendarMonth,
//   MdPeople,
//   MdPerson,
//   MdShowChart,
//   MdLogout,
// } from "react-icons/md";

// import "./Sidebar.scss";

// export default function Sidebar({ role = "student" }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const isInstructor = role === "instructor";

//   const studentMenu = [
//     {
//       name: "Dashboard",
//       href: "/student/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/student/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/student/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Instructors",
//       href: "/student/instructors",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/student/profile",
//       icon: <MdPerson />,
//     },
//     {
//       name: "Activity",
//       href: "/student/activity",
//       icon: <MdShowChart />,
//     },
//   ];

//   const instructorMenu = [
//     {
//       name: "Dashboard",
//       href: "/instructor/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/instructor/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/instructor/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Students",
//       href: "/instructor/students",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/instructor/profile",
//       icon: <MdPerson />,
//     },
//     {
//       name: "Activity",
//       href: "/instructor/activity",
//       icon: <MdShowChart />,
//     },
//   ];

//   const menuItems = isInstructor
//     ? instructorMenu
//     : studentMenu;

//   const handleLogout = () => {
//     localStorage.removeItem("maxskills_role");

//     router.push("/");
//   };

//   return (
//     <aside className="sidebar">

//       {/* Logo */}
//       <div className="sidebar-logo">
//         <span>Max</span>Skills.
//       </div>

//       {/* Navigation */}
//       <nav className="sidebar-nav">

//         {menuItems.map((item) => {
//           const active =
//             pathname === item.href ||
//             pathname.startsWith(`${item.href}/`);

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`sidebar-link ${
//                 active ? "active" : ""
//               }`}
//             >
//               <span className="sidebar-icon">
//                 {item.icon}
//               </span>

//               <span>{item.name}</span>
//             </Link>
//           );
//         })}

//       </nav>

//       {/* Student Upgrade */}
//       {!isInstructor && (
//         <div className="upgrade-card">

//           <div className="upgrade-dots">
//             · · · ·
//           </div>

//           <div className="upgrade-title">
//             Upgrade your
//             <br />
//             Account to Pro
//             <span className="medal">🏅</span>
//           </div>

//           <p>
//             Upgrade to premium
//             <br />
//             to get premium features
//           </p>

//           <button type="button">
//             Upgrade
//           </button>

//         </div>
//       )}

//       {/* Logout */}
//       <button
//         type="button"
//         className="logout-button"
//         onClick={handleLogout}
//       >
//         <MdLogout />

//         <span>Logout</span>
//       </button>

//     </aside>
//   );
// }







// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   MdDashboard,
//   MdMenuBook,
//   MdCalendarMonth,
//   MdPeople,
//   MdPerson,
//   MdShowChart,
// } from "react-icons/md";

// import "./Sidebar.scss";

// export default function Sidebar({ role = "student" }) {
//   const pathname = usePathname();

//   const isInstructor = role === "instructor";

//   const studentMenu = [
//     {
//       name: "Dashboard",
//       href: "/student/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/student/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/student/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Instructors",
//       href: "/student/instructors",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/student/profile",
//       icon: <MdPerson />,
//     },
//     {
//       name: "Activity",
//       href: "/student/activity",
//       icon: <MdShowChart />,
//     },
//   ];

//   const instructorMenu = [
//     {
//       name: "Dashboard",
//       href: "/instructor/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/instructor/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/instructor/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Students",
//       href: "/instructor/students",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/instructor/profile",
//       icon: <MdPerson />,
//     },
//     {
//       name: "Activity",
//       href: "/instructor/activity",
//       icon: <MdShowChart />,
//     },
//   ];

//   const menuItems = isInstructor
//     ? instructorMenu
//     : studentMenu;

//   return (
//     <aside className="sidebar">

//       {/* =================================
//           LOGO
//       ================================= */}

//       <div className="sidebar-logo">
//         <span>Max</span>Skills.
//       </div>

//       {/* =================================
//           NAVIGATION
//       ================================= */}

//       <nav className="sidebar-nav">

//         {menuItems.map((item) => {
//           const active =
//             pathname === item.href ||
//             pathname.startsWith(`${item.href}/`);

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`sidebar-link ${
//                 active ? "active" : ""
//               }`}
//             >
//               <span className="sidebar-icon">
//                 {item.icon}
//               </span>

//               <span className="sidebar-text">
//                 {item.name}
//               </span>
//             </Link>
//           );
//         })}

//       </nav>

//       {/* =================================
//           STUDENT UPGRADE CARD
//       ================================= */}

//       {!isInstructor && (
//         <div className="upgrade-card">

//           <div className="upgrade-dots">
//             · · · ·
//           </div>

//           <div className="upgrade-title">
//             Upgrade your
//             <br />
//             Account to Pro

//             <span className="medal">
//               🏅
//             </span>
//           </div>

//           <p>
//             Upgrade to premium
//             <br />
//             to get premium features
//           </p>

//           <button type="button">
//             Upgrade
//           </button>

//         </div>
//       )}

//     </aside>
//   );
// }











// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   MdDashboard,
//   MdMenuBook,
//   MdCalendarMonth,
//   MdPeople,
//   MdLink,
//   MdAccountBalanceWallet,
//   MdVideoCameraFront,
// } from "react-icons/md";

// import "./Sidebar.scss";

// export default function Sidebar({ role = "student" }) {
//   const pathname = usePathname();

//   const isInstructor = role === "instructor";

//   // =========================================
//   // STUDENT MENU
//   // IMPORTANT: STUDENT MENU SAME RAHEGA
//   // =========================================

//   const studentMenu = [
//     {
//       name: "Dashboard",
//       href: "/student/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/student/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/student/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Instructors",
//       href: "/student/instructors",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Profile",
//       href: "/student/profile",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Activity",
//       href: "/student/activity",
//       icon: <MdDashboard />,
//     },
//   ];

//   // =========================================
//   // INSTRUCTOR MENU
//   // ONLY INSTRUCTOR KO CHANGE KIYA HAI
//   // =========================================

//   const instructorMenu = [
//     {
//       name: "Dashboard",
//       href: "/instructor/dashboard",
//       icon: <MdDashboard />,
//     },
//     {
//       name: "Courses",
//       href: "/instructor/courses",
//       icon: <MdMenuBook />,
//     },
//     {
//       name: "Schedule",
//       href: "/instructor/schedule",
//       icon: <MdCalendarMonth />,
//     },
//     {
//       name: "Students",
//       href: "/instructor/students",
//       icon: <MdPeople />,
//     },
//     {
//       name: "Resource",
//       href: "/instructor/resource",
//       icon: <MdLink />,
//     },
//     {
//       name: "Transaction",
//       href: "/instructor/transaction",
//       icon: <MdAccountBalanceWallet />,
//     },
//     {
//       name: "Live Class",
//       href: "/instructor/live-class",
//       icon: <MdVideoCameraFront />,
//     },
//   ];

//   const menuItems = isInstructor
//     ? instructorMenu
//     : studentMenu;

//   return (
//     <aside className="sidebar">

//       {/* =================================
//           LOGO
//       ================================= */}

//       <div className="sidebar-logo">
//         <span>Max</span>Skills.
//       </div>

//       {/* =================================
//           NAVIGATION
//       ================================= */}

//       <nav className="sidebar-nav">

//         {menuItems.map((item) => {
//           const active =
//             pathname === item.href ||
//             pathname.startsWith(`${item.href}/`);

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`sidebar-link ${
//                 active ? "active" : ""
//               }`}
//             >
//               <span className="sidebar-icon">
//                 {item.icon}
//               </span>

//               <span className="sidebar-text">
//                 {item.name}
//               </span>
//             </Link>
//           );
//         })}

//       </nav>

//       {/* =================================
//           STUDENT UPGRADE CARD
//           INSTRUCTOR KO NAHI DIKHEGA
//       ================================= */}

//       {!isInstructor && (
//         <div className="upgrade-card">

//           <div className="upgrade-dots">
//             · · · ·
//           </div>

//           <div className="upgrade-title">
//             Upgrade your
//             <br />
//             Account to Pro

//             <span className="medal">
//               🏅
//             </span>
//           </div>

//           <p>
//             Upgrade to premium
//             <br />
//             to get premium features
//           </p>

//           <button type="button">
//             Upgrade
//           </button>

//         </div>
//       )}

//     </aside>
//   );
// }






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