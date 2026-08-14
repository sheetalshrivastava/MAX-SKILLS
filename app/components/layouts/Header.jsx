// "use client";

// import {
//   MdSearch,
//   MdNotificationsNone,
//   MdSettings,
//   MdKeyboardArrowDown,
// } from "react-icons/md";

// import "./Header.scss";

// export default function Header() {
//   return (
//     <header className="dashboard-header">

//       {/* Search */}
//       <div className="header-search">
//         <MdSearch />

//         <input
//           type="text"
//           placeholder="Search here..."
//         />
//       </div>

//       {/* Right Side */}
//       <div className="header-actions">

//         <button className="language">
//           🇬🇧 Eng (US)
//           <MdKeyboardArrowDown />
//         </button>

//         <button className="header-button">
//           <MdNotificationsNone />
//           <span className="notification-dot"></span>
//         </button>

//         <button className="header-button">
//           <MdSettings />
//         </button>

//         <div className="profile-avatar">
//           S
//         </div>

//       </div>

//     </header>
//   );
// }





// "use client";

// import {
//   MdSearch,
//   MdNotificationsNone,
//   MdSettings,
//   MdKeyboardArrowDown,
// } from "react-icons/md";

// import "./Header.scss";

// export default function Header() {
//   return (
//     <header className="dashboard-header">

//       <div className="header-search">
//         <MdSearch />

//         <input
//           type="text"
//           placeholder="Search here..."
//         />
//       </div>

//       <div className="header-actions">

//         <button className="language" type="button">
//           🇬🇧 Eng (US)
//           <MdKeyboardArrowDown />
//         </button>

//         <button
//           className="header-button"
//           type="button"
//         >
//           <MdNotificationsNone />

//           <span className="notification-dot"></span>
//         </button>

//         <button
//           className="header-button"
//           type="button"
//         >
//           <MdSettings />
//         </button>

//         <div className="profile-avatar">
//           S
//         </div>

//       </div>

//     </header>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   MdSearch,
//   MdNotificationsNone,
//   MdSettings,
//   MdKeyboardArrowDown,
//   MdLogout,
//   MdPerson,
// } from "react-icons/md";

// import "./Header.scss";

// export default function Header({ role = "student" }) {
//   const router = useRouter();

//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("maxskills_email");

//     if (savedEmail) {
//       setEmail(savedEmail);
//     } else {
//       setEmail(
//         role === "instructor"
//           ? "instructor@maxskills.com"
//           : "student@maxskills.com"
//       );
//     }
//   }, [role]);

//   const handleLogout = () => {
//     localStorage.removeItem("maxskills_role");
//     localStorage.removeItem("maxskills_email");

//     setSettingsOpen(false);

//     router.push("/");
//   };

//   const getInitial = () => {
//     if (!email) return role === "instructor" ? "I" : "S";

//     return email.charAt(0).toUpperCase();
//   };

//   return (
//     <header className="dashboard-header">

//       {/* LEFT */}
//       <div className="header-left">
//         <span className="current-role">
//           {role === "instructor" ? "Instructor Panel" : "Student Panel"}
//         </span>
//       </div>

//       {/* CENTER SEARCH */}
//       <div className="header-search">
//         <MdSearch />

//         <input
//           type="text"
//           placeholder="Search here..."
//         />
//       </div>

//       {/* RIGHT */}
//       <div className="header-actions">

//         <button
//           className="language"
//           type="button"
//         >
//           🇬🇧 Eng (US)
//           <MdKeyboardArrowDown />
//         </button>

//         <button
//           className="header-button notification-button"
//           type="button"
//           aria-label="Notifications"
//         >
//           <MdNotificationsNone />
//           <span className="notification-dot" />
//         </button>

//         {/* SETTINGS */}
//         <div className="settings-wrapper">

//           <button
//             className={`header-button ${
//               settingsOpen ? "settings-active" : ""
//             }`}
//             type="button"
//             onClick={() =>
//               setSettingsOpen((current) => !current)
//             }
//             aria-label="Settings"
//           >
//             <MdSettings />
//           </button>

//           {settingsOpen && (
//             <div className="settings-dropdown">

//               <div className="settings-profile">
//                 <div className="settings-avatar">
//                   {getInitial()}
//                 </div>

//                 <div className="settings-user">
//                   <strong>
//                     {role === "instructor"
//                       ? "Instructor"
//                       : "Student"}
//                   </strong>

//                   <span>{email}</span>
//                 </div>
//               </div>

//               <div className="settings-divider" />

//               <button
//                 type="button"
//                 className="settings-item"
//                 onClick={() => {
//                   setSettingsOpen(false);

//                   router.push(
//                     role === "instructor"
//                       ? "/instructor/profile"
//                       : "/student/profile"
//                   );
//                 }}
//               >
//                 <MdPerson />
//                 <span>Profile</span>
//               </button>

//               <button
//                 type="button"
//                 className="settings-item logout-item"
//                 onClick={handleLogout}
//               >
//                 <MdLogout />
//                 <span>Logout</span>
//               </button>

//             </div>
//           )}
//         </div>

//         {/* AVATAR */}
//         <div className="profile-avatar">
//           {getInitial()}
//         </div>

//       </div>
//     </header>
//   );
// }








// "use client";

// import {
//   MdSearch,
//   MdNotificationsNone,
//   MdSettings,
//   MdKeyboardArrowDown,
//   MdLogout,
// } from "react-icons/md";

// import { usePathname, useRouter } from "next/navigation";

// import "./Header.scss";

// export default function Header() {
//   const pathname = usePathname();
//   const router = useRouter();

//   /* =========================
//      PAGE TITLE
//   ========================= */

//   const getPageTitle = () => {
//     if (pathname.includes("/dashboard")) {
//       return "Dashboard";
//     }

//     if (pathname.includes("/courses")) {
//       return "Courses";
//     }

//     if (pathname.includes("/schedule")) {
//       return "Schedule";
//     }

//     if (pathname.includes("/students")) {
//       return "Students";
//     }

//     if (pathname.includes("/instructors")) {
//       return "Instructors";
//     }

//     if (pathname.includes("/profile")) {
//       return "Profile";
//     }

//     if (pathname.includes("/activity")) {
//       return "Activity";
//     }

//     return "Dashboard";
//   };

//   const pageTitle = getPageTitle();

//   /* =========================
//      LOGOUT
//   ========================= */

//   const handleLogout = () => {
//     localStorage.removeItem("maxskills_role");

//     router.push("/");
//   };

//   return (
//     <header className="dashboard-header">

//       {/* LEFT - PAGE TITLE */}

//       <div className="header-left">
//         <h1>{pageTitle}</h1>
//       </div>


//       {/* CENTER - SEARCH */}

//       <div className="header-search">
//         <MdSearch />

//         <input
//           type="text"
//           placeholder="Search here..."
//         />
//       </div>


//       {/* RIGHT */}

//       <div className="header-actions">

//         <button
//           type="button"
//           className="language"
//         >
//           🇬🇧 Eng (US)

//           <MdKeyboardArrowDown />
//         </button>


//         <button
//           type="button"
//           className="header-button notification-button"
//         >
//           <MdNotificationsNone />

//           <span className="notification-dot" />
//         </button>


//         {/* SETTINGS + LOGOUT */}

//         <div className="settings-wrapper">

//           <button
//             type="button"
//             className="header-button"
//             onClick={() =>
//               document
//                 .querySelector(".settings-menu")
//                 ?.classList.toggle("show")
//             }
//           >
//             <MdSettings />
//           </button>


//           <div className="settings-menu">

//             <button type="button">
//               <MdSettings />
//               Settings
//             </button>

//             <button
//               type="button"
//               onClick={handleLogout}
//             >
//               <MdLogout />
//               Logout
//             </button>

//           </div>

//         </div>


//         {/* USER AVATAR */}

//         <div className="profile-avatar">
//           S
//         </div>

//       </div>

//     </header>
//   );
// }







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