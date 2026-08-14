// import "./DashboardLayout.scss";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function DashboardLayout({ children, role }) {
//   return (
//     <div className="dashboard-layout">

//       <Sidebar role={role} />

//       <div className="dashboard-right">

//         <Header />

//         <main className="dashboard-content">
//           {children}
//         </main>

//       </div>

//     </div>
//   );
// }







// "use client";

// import "./DashboardLayout.scss";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function DashboardLayout({ children, role }) {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar role={role} />

//       <div className="dashboard-right">
//         <Header />

//         <main className="dashboard-content">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }



// "use client";

// import "./DashboardLayout.scss";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function DashboardLayout({ children, role }) {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar role={role} />

//       <div className="dashboard-right">
//         <Header />

//         <main className="dashboard-content">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }





// "use client";

// import "./DashboardLayout.scss";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function DashboardLayout({ children, role }) {
//   return (
//     <div className="dashboard-layout">

//       <Sidebar role={role} />

//       <div className="dashboard-right">

//         <Header />

//         <main className="dashboard-content">
//           {children}
//         </main>

//       </div>

//     </div>
//   );
// }





// "use client";

// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import "./DashboardLayout.scss";

// export default function DashboardLayout({
//   children,
//   role = "student",
// }) {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar role={role} />

//       <div className="dashboard-content">
//         <Header role={role} />

//         <main className="dashboard-main">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { usePathname } from "next/navigation";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// import "./DashboardLayout.scss";

// export default function DashboardLayout({
//   children,
//   role = "student",
// }) {
//   const pathname = usePathname();

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

//   return (
//     <div className="dashboard-layout">

//       {/* SIDEBAR */}
//       <Sidebar role={role} />

//       {/* RIGHT SIDE */}
//       <div className="dashboard-content">

//         {/* HEADER */}
//         <Header
//           role={role}
//           pageTitle={pageTitle}
//         />

//         {/* PAGE */}
//         <main className="dashboard-main">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }







// "use client";

// import { usePathname } from "next/navigation";

// import Sidebar from "./Sidebar";
// import Header from "./Header";

// import "./DashboardLayout.scss";

// export default function DashboardLayout({
//   children,
//   role = "student",
// }) {
//   const pathname = usePathname();

//   const getPageTitle = () => {
//     if (pathname === "/student/dashboard" || pathname === "/instructor/dashboard") {
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

//     if (pathname.includes("/resource")) {
//       return "Resource";
//     }

//     if (pathname.includes("/transaction")) {
//       return "Transaction";
//     }

//     if (pathname.includes("/live-class")) {
//       return "Live Class";
//     }

//     if (pathname.includes("/profile")) {
//       return "Profile";
//     }

//     if (pathname.includes("/activity")) {
//       return "Activity";
//     }

//     return "Dashboard";
//   };

  
//   return (
//     <div className="dashboard-layout">

//       {/* LEFT SIDEBAR */}
//       <Sidebar role={role} />

//       {/* RIGHT CONTENT */}
//       <div className="dashboard-content">

//         {/* HEADER */}
//         <Header
//           role={role}
//           pageTitle={getPageTitle()}
//         />

//         {/* CURRENT PAGE */}
//         <main className="dashboard-main">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }







"use client";

import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./DashboardLayout.scss";

export default function DashboardLayout({
  children,
  role = "student",
}) {
  const pathname = usePathname();

  const getPageTitle = () => {
    // =========================
    // DASHBOARD
    // =========================
    if (
      pathname === "/student/dashboard" ||
      pathname === "/instructor/dashboard"
    ) {
      return "Dashboard";
    }

    // =========================
    // COMMON PAGES
    // =========================
    if (pathname.includes("/courses")) {
      return "Courses";
    }

    if (pathname.includes("/schedule")) {
      return "Schedule";
    }

    // =========================
    // STUDENT
    // =========================
    if (pathname.includes("/instructors")) {
      return "Instructors";
    }

    if (pathname.includes("/profile")) {
      return "Profile";
    }

    if (pathname.includes("/activity")) {
      return "Activity";
    }

    // =========================
    // INSTRUCTOR
    // =========================
    if (pathname.includes("/students")) {
      return "Students";
    }

    if (pathname.includes("/resource")) {
      return "Resource";
    }

    if (pathname.includes("/transaction")) {
      return "Transaction";
    }

    if (pathname.includes("/live-class")) {
      return "Live Class";
    }

    return "Dashboard";
  };

  return (
    <div className="dashboard-layout">

      {/* =========================
          LEFT SIDEBAR
      ========================= */}
      <Sidebar role={role} />

      {/* =========================
          RIGHT CONTENT
      ========================= */}
      <div className="dashboard-content">

        {/* =========================
            HEADER
        ========================= */}
        <Header
          role={role}
          pageTitle={getPageTitle()}
        />

        {/* =========================
            CURRENT PAGE
        ========================= */}
        <main className="dashboard-main">
          {children}
        </main>

      </div>
    </div>
  );
}