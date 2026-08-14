



// "use client";

// import { useState } from "react";
// import {
//   MdMoreHoriz,
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdKeyboardArrowDown,
//   MdClose,
// } from "react-icons/md";

// import "./Dashboard.scss";

// const events = [
//   {
//     id: 1,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Introduction Wireframe",
//     color: "green",
//   },
//   {
//     id: 2,
//     date: "5 Jan",
//     time: "10.00 AM",
//     category: "Graphic Design",
//     title: "Golden Ratio",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     date: "5 Jan",
//     time: "01.00 PM",
//     category: "Web Design",
//     title: "Basic HTML",
//     color: "red",
//   },
//   {
//     id: 4,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Prototyping",
//     color: "green",
//   },
//   {
//     id: 5,
//     date: "5 Jan",
//     time: "11.00 AM",
//     category: "Graphic Design",
//     title: "Photo Manipulation",
//     color: "yellow",
//   },
//   {
//     id: 6,
//     date: "5 Jan",
//     time: "02.00 PM",
//     category: "UI Design",
//     title: "Interaction Design",
//     color: "green",
//   },
//   {
//     id: 7,
//     date: "5 Jan",
//     time: "04.00 PM",
//     category: "Programming",
//     title: "Basic React.js",
//     color: "red",
//   },
// ];

// const chartData = [
//   { month: "Jan", green: 72, yellow: 25, gray: 96 },
//   { month: "Feb", green: 60, yellow: 35, gray: 85 },
//   { month: "Mar", green: 50, yellow: 25, gray: 80 },
//   { month: "Apr", green: 63, yellow: 25, gray: 88 },
//   { month: "May", green: 38, yellow: 10, gray: 58 },
//   { month: "Jun", green: 50, yellow: 25, gray: 70 },
//   { month: "Jul", green: 63, yellow: 25, gray: 78 },
//   { month: "Aug", green: 50, yellow: 25, gray: 86 },
//   { month: "Sep", green: 63, yellow: 25, gray: 88 },
//   { month: "Oct", green: 38, yellow: 10, gray: 62 },
//   { month: "Nov", green: 50, yellow: 25, gray: 60 },
//   { month: "Dec", green: 63, yellow: 25, gray: 78 },
// ];

// export default function InstructorDashboardPage() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [calendarMenu, setCalendarMenu] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState("January, 2022");

//   const cardClick = (type) => {
//     setSelectedCard(type);
//   };

//   const closeCard = () => {
//     setSelectedCard(null);
//   };

//   const toggleEventMenu = (id) => {
//     setOpenMenu((current) => (current === id ? null : id));
//   };

//   const previousMonth = () => {
//     setSelectedMonth("December, 2021");
//   };

//   const nextMonth = () => {
//     setSelectedMonth("February, 2022");
//   };

//   return (
//     <main className="instructor-dashboard">
//       {/* =========================
//           TOP AREA
//       ========================= */}

//       <div className="dashboard-main-grid">
//         {/* LEFT CONTENT */}
//         <div className="dashboard-left">
//           {/* =========================
//               STAT CARDS
//           ========================= */}

//           <div className="dashboard-stats">
//             {/* TOTAL STUDENTS */}
//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "students" ? "active" : ""
//               }`}
//               onClick={() => cardClick("students")}
//             >
//               <h3>Total Students</h3>

//               <div className="students-bars">
//                 <span style={{ height: "42px" }} />
//                 <span style={{ height: "31px" }} />
//                 <span style={{ height: "25px" }} />
//                 <span style={{ height: "50px" }} />
//                 <span style={{ height: "30px" }} />
//                 <span style={{ height: "44px" }} />
//               </div>

//               <div className="stat-bottom">
//                 <strong>12.345</strong>
//                 <span>
//                   <b>5.4%</b> than last year
//                 </span>
//               </div>
//             </button>

//             {/* COURSES */}
//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "courses" ? "active" : ""
//               }`}
//               onClick={() => cardClick("courses")}
//             >
//               <h3>Courses</h3>

//               <div className="course-count">
//                 <span>⌃</span>
//                 <strong>100</strong>
//                 <small>+15%</small>
//                 <em>than last year</em>
//               </div>

//               <svg
//                 className="mini-course-chart"
//                 viewBox="0 0 180 80"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,55 25,38 45,58 65,15 83,57 105,34 125,70 145,80 160,67 180,40"
//                   fill="none"
//                   stroke="#ffbd45"
//                   strokeWidth="3"
//                 />
//               </svg>
//             </button>

//             {/* EARNINGS */}
//             <button
//               type="button"
//               className={`dashboard-stat-card earnings-card ${
//                 selectedCard === "earnings" ? "active" : ""
//               }`}
//               onClick={() => cardClick("earnings")}
//             >
//               <h3>Earnings</h3>

//               <svg
//                 className="earning-chart"
//                 viewBox="0 0 220 90"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,62 45,25 88,52 130,18 170,45 215,20"
//                   fill="none"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle cx="0" cy="62" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//                 <circle cx="45" cy="25" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//                 <circle cx="88" cy="52" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//                 <circle cx="130" cy="18" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//                 <circle cx="170" cy="45" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//                 <circle cx="215" cy="20" r="4" fill="#fff" stroke="#4cc4a8" strokeWidth="3" />
//               </svg>

//               <strong className="earning-value">$45,741</strong>

//               <span className="earning-percent">+15% ↑</span>
//             </button>
//           </div>

//           {/* =========================
//               CLICK CARD DETAILS
//           ========================= */}

//           {selectedCard && (
//             <div className="card-detail">
//               <div>
//                 <strong>
//                   {selectedCard === "students"
//                     ? "Total Students"
//                     : selectedCard === "courses"
//                     ? "Courses"
//                     : "Earnings"}
//                 </strong>

//                 <p>
//                   {selectedCard === "students"
//                     ? "You currently have 12,345 students enrolled."
//                     : selectedCard === "courses"
//                     ? "You currently have 100 active courses."
//                     : "Your current total earnings are $45,741."}
//                 </p>
//               </div>

//               <button type="button" onClick={closeCard}>
//                 <MdClose />
//               </button>
//             </div>
//           )}

//           {/* =========================
//               WORKING ACTIVITY
//           ========================= */}

//           <section className="working-activity">
//             <div className="activity-header">
//               <h2>Working Activity</h2>

//               <div className="activity-legend">
//                 <div className="legend-box green">
//                   <span>↗</span>

//                   <div>
//                     <small>Performance</small>
//                     <strong>14.988</strong>
//                   </div>
//                 </div>

//                 <div className="legend-box yellow">
//                   <span>⌁</span>

//                   <div>
//                     <small>Impression</small>
//                     <strong>12.890</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="activity-chart">
//               <div className="chart-y-axis">
//                 <span>100</span>
//                 <span>75</span>
//                 <span>50</span>
//                 <span>25</span>
//                 <span>0</span>
//               </div>

//               <div className="chart-content">
//                 <div className="chart-grid">
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                 </div>

//                 <div className="bars">
//                   {chartData.map((item) => (
//                     <div className="month-column" key={item.month}>
//                       <div className="bar-area">
//                         <span
//                           className="gray-bar"
//                           style={{
//                             height: `${item.gray}%`,
//                           }}
//                         />

//                         <span
//                           className="green-bar"
//                           style={{
//                             height: `${item.green}%`,
//                           }}
//                         />

//                         <span
//                           className="yellow-bar"
//                           style={{
//                             height: `${item.yellow}%`,
//                           }}
//                         />
//                       </div>

//                       <small>{item.month}</small>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* =========================
//             RIGHT SIDEBAR
//         ========================= */}

//         <aside className="dashboard-right">
//           {/* CALENDAR */}
//           <section className="calendar-section">
//             <div className="calendar-header">
//               <strong>{selectedMonth}</strong>

//               <div>
//                 <button type="button" onClick={previousMonth}>
//                   <MdKeyboardArrowLeft />
//                 </button>

//                 <button type="button" onClick={nextMonth}>
//                   <MdKeyboardArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div className="calendar-week">
//               <span>M</span>
//               <span>T</span>
//               <span>W</span>
//               <span>T</span>
//               <span>F</span>
//               <span>S</span>
//               <span>S</span>
//             </div>

//             <div className="calendar-days">
//               <span>1</span>
//               <span>2</span>
//               <span>3</span>
//               <span>4</span>
//               <span className="today">5</span>
//               <span>6</span>
//               <span className="sunday">7</span>
//             </div>
//           </section>

//           {/* UPCOMING EVENTS */}
//           <section className="events-section">
//             <div className="events-heading">
//               <h2>Upcoming Events</h2>

//               <button
//                 type="button"
//                 className="calendar-menu-button"
//                 onClick={() => setCalendarMenu((value) => !value)}
//               >
//                 <MdMoreHoriz />
//               </button>

//               {calendarMenu && (
//                 <div className="calendar-menu">
//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     View All Events
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     Add Event
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     Calendar Settings
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="event-list">
//               {events.map((event) => (
//                 <div className="event-item" key={event.id}>
//                   <div className="event-time">{event.time}</div>

//                   <div className={`event-line ${event.color}`} />

//                   <div className="event-info">
//                     <small>{event.category}</small>
//                     <strong>{event.title}</strong>
//                   </div>

//                   <div className="event-action">
//                     <button
//                       type="button"
//                       onClick={() => toggleEventMenu(event.id)}
//                       aria-label={`Options for ${event.title}`}
//                     >
//                       <MdMoreHoriz />
//                     </button>

//                     {openMenu === event.id && (
//                       <div className="event-menu">
//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           View Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           Edit Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           Delete Event
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </aside>
//       </div>
//     </main>
//   );
// }







// "use client";

// import { useState } from "react";

// import {
//   MdMoreHoriz,
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdClose,
// } from "react-icons/md";

// import "./Dashboard.scss";

// const events = [
//   {
//     id: 1,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Introduction Wireframe",
//     color: "green",
//   },
//   {
//     id: 2,
//     date: "5 Jan",
//     time: "10.00 AM",
//     category: "Graphic Design",
//     title: "Golden Ratio",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     date: "5 Jan",
//     time: "01.00 PM",
//     category: "Web Design",
//     title: "Basic HTML",
//     color: "red",
//   },
//   {
//     id: 4,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Prototyping",
//     color: "green",
//   },
//   {
//     id: 5,
//     date: "5 Jan",
//     time: "11.00 AM",
//     category: "Graphic Design",
//     title: "Photo Manipulation",
//     color: "yellow",
//   },
//   {
//     id: 6,
//     date: "5 Jan",
//     time: "02.00 PM",
//     category: "UI Design",
//     title: "Interaction Design",
//     color: "green",
//   },
//   {
//     id: 7,
//     date: "5 Jan",
//     time: "04.00 PM",
//     category: "Programming",
//     title: "Basic React.js",
//     color: "red",
//   },
// ];

// const chartData = [
//   { month: "Jan", green: 72, yellow: 25, gray: 96 },
//   { month: "Feb", green: 60, yellow: 35, gray: 85 },
//   { month: "Mar", green: 50, yellow: 25, gray: 80 },
//   { month: "Apr", green: 63, yellow: 25, gray: 88 },
//   { month: "May", green: 38, yellow: 10, gray: 58 },
//   { month: "Jun", green: 50, yellow: 25, gray: 70 },
//   { month: "Jul", green: 63, yellow: 25, gray: 78 },
//   { month: "Aug", green: 50, yellow: 25, gray: 86 },
//   { month: "Sep", green: 63, yellow: 25, gray: 88 },
//   { month: "Oct", green: 38, yellow: 10, gray: 62 },
//   { month: "Nov", green: 50, yellow: 25, gray: 60 },
//   { month: "Dec", green: 63, yellow: 25, gray: 78 },
// ];

// export default function InstructorDashboardPage() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [calendarMenu, setCalendarMenu] = useState(false);
//   const [selectedMonth, setSelectedMonth] = useState("January, 2022");

//   // Working Activity tooltip
//   const [activeActivity, setActiveActivity] = useState(null);

//   const cardClick = (type) => {
//     setSelectedCard(type);
//   };

//   const closeCard = () => {
//     setSelectedCard(null);
//   };

//   const toggleEventMenu = (id) => {
//     setOpenMenu((current) => (current === id ? null : id));
//   };

//   const previousMonth = () => {
//     setSelectedMonth("December, 2021");
//   };

//   const nextMonth = () => {
//     setSelectedMonth("February, 2022");
//   };

//   return (
//     <main className="instructor-dashboard">
//       {/* =========================
//           TOP AREA
//       ========================= */}

//       <div className="dashboard-main-grid">
//         {/* =========================
//             LEFT CONTENT
//         ========================= */}

//         <div className="dashboard-left">
//           {/* =========================
//               STAT CARDS
//           ========================= */}

//           <div className="dashboard-stats">
//             {/* TOTAL STUDENTS */}

//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "students" ? "active" : ""
//               }`}
//               onClick={() => cardClick("students")}
//             >
//               <h3>Total Students</h3>

//               <div className="students-bars">
//                 <span style={{ height: "42px" }} />
//                 <span style={{ height: "31px" }} />
//                 <span style={{ height: "25px" }} />
//                 <span style={{ height: "50px" }} />
//                 <span style={{ height: "30px" }} />
//                 <span style={{ height: "44px" }} />
//               </div>

//               <div className="stat-bottom">
//                 <strong>12.345</strong>

//                 <span>
//                   <b>5.4%</b> than last year
//                 </span>
//               </div>
//             </button>

//             {/* COURSES */}

//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "courses" ? "active" : ""
//               }`}
//               onClick={() => cardClick("courses")}
//             >
//               <h3>Courses</h3>

//               <div className="course-count">
//                 <span>⌃</span>
//                 <strong>100</strong>
//                 <small>+15%</small>
//                 <em>than last year</em>
//               </div>

//               <svg
//                 className="mini-course-chart"
//                 viewBox="0 0 180 80"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,55 25,38 45,58 65,15 83,57 105,34 125,70 145,80 160,67 180,40"
//                   fill="none"
//                   stroke="#ffbd45"
//                   strokeWidth="3"
//                 />
//               </svg>
//             </button>

//             {/* EARNINGS */}

//             <button
//               type="button"
//               className={`dashboard-stat-card earnings-card ${
//                 selectedCard === "earnings" ? "active" : ""
//               }`}
//               onClick={() => cardClick("earnings")}
//             >
//               <h3>Earnings</h3>

//               <svg
//                 className="earning-chart"
//                 viewBox="0 0 220 90"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,62 45,25 88,52 130,18 170,45 215,20"
//                   fill="none"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="0"
//                   cy="62"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="45"
//                   cy="25"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="88"
//                   cy="52"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="130"
//                   cy="18"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="170"
//                   cy="45"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="215"
//                   cy="20"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />
//               </svg>

//               <strong className="earning-value">$45,741</strong>

//               <span className="earning-percent">+15% ↑</span>
//             </button>
//           </div>

//           {/* =========================
//               CLICK CARD DETAILS
//           ========================= */}

//           {selectedCard && (
//             <div className="card-detail">
//               <div>
//                 <strong>
//                   {selectedCard === "students"
//                     ? "Total Students"
//                     : selectedCard === "courses"
//                     ? "Courses"
//                     : "Earnings"}
//                 </strong>

//                 <p>
//                   {selectedCard === "students"
//                     ? "You currently have 12,345 students enrolled."
//                     : selectedCard === "courses"
//                     ? "You currently have 100 active courses."
//                     : "Your current total earnings are $45,741."}
//                 </p>
//               </div>

//               <button type="button" onClick={closeCard}>
//                 <MdClose />
//               </button>
//             </div>
//           )}

//           {/* =========================
//               WORKING ACTIVITY
//           ========================= */}

//           <section className="working-activity">
//             <div className="activity-header">
//               <h2>Working Activity</h2>

//               <div className="activity-legend">
//                 {/* PERFORMANCE */}

//                 <div className="legend-box green">
//                   <span>↗</span>

//                   <div>
//                     <small>Performance</small>
//                     <strong>14.988</strong>
//                   </div>
//                 </div>

//                 {/* IMPRESSION */}

//                 <div className="legend-box yellow">
//                   <span>⌁</span>

//                   <div>
//                     <small>Impression</small>
//                     <strong>12.890</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="activity-chart">
//               {/* Y AXIS */}

//               <div className="chart-y-axis">
//                 <span>100</span>
//                 <span>75</span>
//                 <span>50</span>
//                 <span>25</span>
//                 <span>0</span>
//               </div>

//               <div className="chart-content">
//                 {/* GRID */}

//                 <div className="chart-grid">
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                 </div>

//                 {/* BARS */}

//                 <div className="bars">
//                   {chartData.map((item) => (
//                     <div
//                       className={`month-column ${
//                         activeActivity === item.month ? "active" : ""
//                       }`}
//                       key={item.month}
//                       onMouseEnter={() => {
//                         setActiveActivity(item.month);
//                       }}
//                       onMouseLeave={() => {
//                         setActiveActivity(null);
//                       }}
//                       onClick={() => {
//                         setActiveActivity((current) =>
//                           current === item.month ? null : item.month
//                         );
//                       }}
//                     >
//                       {/* TOOLTIP */}

//                       {activeActivity === item.month && (
//                         <div
//                           className="activity-tooltip"
//                           onClick={(event) => event.stopPropagation()}
//                         >
//                           <strong>{item.month}</strong>

//                           <div className="tooltip-row">
//                             <span className="tooltip-dot green-dot" />
//                             <span>Performance</span>
//                             <b>{item.green}</b>
//                           </div>

//                           <div className="tooltip-row">
//                             <span className="tooltip-dot yellow-dot" />
//                             <span>Impression</span>
//                             <b>{item.yellow}</b>
//                           </div>
//                         </div>
//                       )}

//                       <div className="bar-area">
//                         {/* GRAY */}

//                         <span
//                           className="gray-bar"
//                           style={{
//                             height: `${item.gray}%`,
//                           }}
//                         />

//                         {/* PERFORMANCE */}

//                         <span
//                           className="green-bar"
//                           style={{
//                             height: `${item.green}%`,
//                           }}
//                         />

//                         {/* IMPRESSION */}

//                         <span
//                           className="yellow-bar"
//                           style={{
//                             height: `${item.yellow}%`,
//                           }}
//                         />
//                       </div>

//                       <small>{item.month}</small>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* =========================
//             RIGHT SIDEBAR
//         ========================= */}

//         <aside className="dashboard-right">
//           {/* CALENDAR */}

//           <section className="calendar-section">
//             <div className="calendar-header">
//               <strong>{selectedMonth}</strong>

//               <div>
//                 <button type="button" onClick={previousMonth}>
//                   <MdKeyboardArrowLeft />
//                 </button>

//                 <button type="button" onClick={nextMonth}>
//                   <MdKeyboardArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div className="calendar-week">
//               <span>M</span>
//               <span>T</span>
//               <span>W</span>
//               <span>T</span>
//               <span>F</span>
//               <span>S</span>
//               <span>S</span>
//             </div>

//             <div className="calendar-days">
//               <span>1</span>
//               <span>2</span>
//               <span>3</span>
//               <span>4</span>
//               <span className="today">5</span>
//               <span>6</span>
//               <span className="sunday">7</span>
//             </div>
//           </section>

//           {/* UPCOMING EVENTS */}

//           <section className="events-section">
//             <div className="events-heading">
//               <h2>Upcoming Events</h2>

//               <button
//                 type="button"
//                 className="calendar-menu-button"
//                 onClick={() => setCalendarMenu((value) => !value)}
//               >
//                 <MdMoreHoriz />
//               </button>

//               {calendarMenu && (
//                 <div className="calendar-menu">
//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     View All Events
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     Add Event
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setCalendarMenu(false)}
//                   >
//                     Calendar Settings
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="event-list">
//               {events.map((event) => (
//                 <div className="event-item" key={event.id}>
//                   <div className="event-time">{event.time}</div>

//                   <div className={`event-line ${event.color}`} />

//                   <div className="event-info">
//                     <small>{event.category}</small>
//                     <strong>{event.title}</strong>
//                   </div>

//                   <div className="event-action">
//                     <button
//                       type="button"
//                       onClick={() => toggleEventMenu(event.id)}
//                       aria-label={`Options for ${event.title}`}
//                     >
//                       <MdMoreHoriz />
//                     </button>

//                     {openMenu === event.id && (
//                       <div className="event-menu">
//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           View Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           Edit Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => setOpenMenu(null)}
//                         >
//                           Delete Event
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </aside>
//       </div>
//     </main>
//   );
// }







// "use client";

// import { useState } from "react";

// import {
//   MdMoreHoriz,
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdClose,
// } from "react-icons/md";

// import "./Dashboard.scss";

// const events = [
//   {
//     id: 1,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Introduction Wireframe",
//     color: "green",
//   },
//   {
//     id: 2,
//     date: "5 Jan",
//     time: "10.00 AM",
//     category: "Graphic Design",
//     title: "Golden Ratio",
//     color: "yellow",
//   },
//   {
//     id: 3,
//     date: "5 Jan",
//     time: "01.00 PM",
//     category: "Web Design",
//     title: "Basic HTML",
//     color: "red",
//   },
//   {
//     id: 4,
//     date: "5 Jan",
//     time: "08.00 AM",
//     category: "UI Design",
//     title: "Prototyping",
//     color: "green",
//   },
//   {
//     id: 5,
//     date: "5 Jan",
//     time: "11.00 AM",
//     category: "Graphic Design",
//     title: "Photo Manipulation",
//     color: "yellow",
//   },
//   {
//     id: 6,
//     date: "5 Jan",
//     time: "02.00 PM",
//     category: "UI Design",
//     title: "Interaction Design",
//     color: "green",
//   },
//   {
//     id: 7,
//     date: "5 Jan",
//     time: "04.00 PM",
//     category: "Programming",
//     title: "Basic React.js",
//     color: "red",
//   },
// ];

// const chartData = [
//   { month: "Jan", green: 72, yellow: 25, gray: 96 },
//   { month: "Feb", green: 60, yellow: 35, gray: 85 },
//   { month: "Mar", green: 50, yellow: 25, gray: 80 },
//   { month: "Apr", green: 63, yellow: 25, gray: 88 },
//   { month: "May", green: 38, yellow: 10, gray: 58 },
//   { month: "Jun", green: 50, yellow: 25, gray: 70 },
//   { month: "Jul", green: 63, yellow: 25, gray: 78 },
//   { month: "Aug", green: 50, yellow: 25, gray: 86 },
//   { month: "Sep", green: 63, yellow: 25, gray: 88 },
//   { month: "Oct", green: 38, yellow: 10, gray: 62 },
//   { month: "Nov", green: 50, yellow: 25, gray: 60 },
//   { month: "Dec", green: 63, yellow: 25, gray: 78 },
// ];

// const calendarMonths = [
//   {
//     name: "December, 2021",
//     days: Array.from({ length: 31 }, (_, index) => index + 1),
//   },
//   {
//     name: "January, 2022",
//     days: Array.from({ length: 31 }, (_, index) => index + 1),
//   },
//   {
//     name: "February, 2022",
//     days: Array.from({ length: 28 }, (_, index) => index + 1),
//   },
// ];

// export default function InstructorDashboardPage() {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const [openMenu, setOpenMenu] = useState(null);

//   const [calendarMenu, setCalendarMenu] = useState(false);

//   const [selectedMonthIndex, setSelectedMonthIndex] = useState(1);

//   const [selectedDay, setSelectedDay] = useState(5);

//   // Working Activity
//   const [activeActivity, setActiveActivity] = useState(null);

//   // Performance / Impression buttons
//   const [activeMetric, setActiveMetric] = useState("performance");

//   // Upcoming event action popup
//   const [eventAction, setEventAction] = useState(null);

//   const selectedMonth = calendarMonths[selectedMonthIndex];

//   const cardClick = (type) => {
//     setSelectedCard(type);
//   };

//   const closeCard = () => {
//     setSelectedCard(null);
//   };

//   const toggleEventMenu = (id) => {
//     setOpenMenu((current) => (current === id ? null : id));

//     // Close other popup
//     setEventAction(null);
//   };

//   // =========================
//   // CALENDAR
//   // =========================

//   const previousMonth = () => {
//     setSelectedMonthIndex((current) => {
//       const nextIndex = Math.max(0, current - 1);

//       // Reset selected day when month changes
//       setSelectedDay(1);

//       return nextIndex;
//     });
//   };

//   const nextMonth = () => {
//     setSelectedMonthIndex((current) => {
//       const nextIndex = Math.min(calendarMonths.length - 1, current + 1);

//       // Reset selected day when month changes
//       setSelectedDay(1);

//       return nextIndex;
//     });
//   };

//   const selectDay = (day) => {
//     setSelectedDay(day);
//   };

//   // =========================
//   // UPCOMING EVENTS MENU
//   // =========================

//   const handleCalendarAction = (action) => {
//     setCalendarMenu(false);
//     setEventAction(action);
//   };

//   const closeEventAction = () => {
//     setEventAction(null);
//   };

//   // =========================
//   // ACTIVITY TOOLTIP
//   // =========================

//   const showActivity = (month) => {
//     setActiveActivity(month);
//   };

//   const hideActivity = () => {
//     setActiveActivity(null);
//   };

//   const toggleActivity = (month) => {
//     setActiveActivity((current) =>
//       current === month ? null : month
//     );
//   };

//   return (
//     <main className="instructor-dashboard">
//       {/* =========================
//           TOP AREA
//       ========================= */}

//       <div className="dashboard-main-grid">
//         {/* =========================
//             LEFT CONTENT
//         ========================= */}

//         <div className="dashboard-left">
//           {/* =========================
//               STAT CARDS
//           ========================= */}

//           <div className="dashboard-stats">
//             {/* TOTAL STUDENTS */}

//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "students" ? "active" : ""
//               }`}
//               onClick={() => cardClick("students")}
//             >
//               <h3>Total Students</h3>

//               <div className="students-bars">
//                 <span style={{ height: "42px" }} />
//                 <span style={{ height: "31px" }} />
//                 <span style={{ height: "25px" }} />
//                 <span style={{ height: "50px" }} />
//                 <span style={{ height: "30px" }} />
//                 <span style={{ height: "44px" }} />
//               </div>

//               <div className="stat-bottom">
//                 <strong>12.345</strong>

//                 <span>
//                   <b>5.4%</b> than last year
//                 </span>
//               </div>
//             </button>

//             {/* COURSES */}

//             <button
//               type="button"
//               className={`dashboard-stat-card ${
//                 selectedCard === "courses" ? "active" : ""
//               }`}
//               onClick={() => cardClick("courses")}
//             >
//               <h3>Courses</h3>

//               <div className="course-count">
//                 <span>⌃</span>
//                 <strong>100</strong>
//                 <small>+15%</small>
//                 <em>than last year</em>
//               </div>

//               <svg
//                 className="mini-course-chart"
//                 viewBox="0 0 180 80"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,55 25,38 45,58 65,15 83,57 105,34 125,70 145,80 160,67 180,40"
//                   fill="none"
//                   stroke="#ffbd45"
//                   strokeWidth="3"
//                 />
//               </svg>
//             </button>

//             {/* EARNINGS */}

//             <button
//               type="button"
//               className={`dashboard-stat-card earnings-card ${
//                 selectedCard === "earnings" ? "active" : ""
//               }`}
//               onClick={() => cardClick("earnings")}
//             >
//               <h3>Earnings</h3>

//               <svg
//                 className="earning-chart"
//                 viewBox="0 0 220 90"
//                 preserveAspectRatio="none"
//               >
//                 <polyline
//                   points="0,62 45,25 88,52 130,18 170,45 215,20"
//                   fill="none"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="0"
//                   cy="62"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="45"
//                   cy="25"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="88"
//                   cy="52"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="130"
//                   cy="18"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="170"
//                   cy="45"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />

//                 <circle
//                   cx="215"
//                   cy="20"
//                   r="4"
//                   fill="#fff"
//                   stroke="#4cc4a8"
//                   strokeWidth="3"
//                 />
//               </svg>

//               <strong className="earning-value">$45,741</strong>

//               <span className="earning-percent">+15% ↑</span>
//             </button>
//           </div>

//           {/* =========================
//               CLICK CARD DETAILS
//           ========================= */}

//           {selectedCard && (
//             <div className="card-detail">
//               <div>
//                 <strong>
//                   {selectedCard === "students"
//                     ? "Total Students"
//                     : selectedCard === "courses"
//                     ? "Courses"
//                     : "Earnings"}
//                 </strong>

//                 <p>
//                   {selectedCard === "students"
//                     ? "You currently have 12,345 students enrolled."
//                     : selectedCard === "courses"
//                     ? "You currently have 100 active courses."
//                     : "Your current total earnings are $45,741."}
//                 </p>
//               </div>

//               <button type="button" onClick={closeCard}>
//                 <MdClose />
//               </button>
//             </div>
//           )}

//           {/* =========================
//               WORKING ACTIVITY
//           ========================= */}

//           <section className="working-activity">
//             <div className="activity-header">
//               <h2>Working Activity</h2>

//               {/* =========================
//                   PERFORMANCE / IMPRESSION
//               ========================= */}

//               <div className="activity-legend">
//                 <button
//                   type="button"
//                   className={`legend-box green ${
//                     activeMetric === "performance" ? "selected" : ""
//                   }`}
//                   onClick={() => setActiveMetric("performance")}
//                 >
//                   <span>↗</span>

//                   <div>
//                     <small>Performance</small>
//                     <strong>14.988</strong>
//                   </div>
//                 </button>

//                 <button
//                   type="button"
//                   className={`legend-box yellow ${
//                     activeMetric === "impression" ? "selected" : ""
//                   }`}
//                   onClick={() => setActiveMetric("impression")}
//                 >
//                   <span>⌁</span>

//                   <div>
//                     <small>Impression</small>
//                     <strong>12.890</strong>
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* SELECTED METRIC INFO */}

//             <div className="activity-selected-info">
//               {activeMetric === "performance" ? (
//                 <>
//                   <span className="selected-dot performance-dot" />
//                   <strong>Performance</strong>
//                   <span>14.988</span>
//                 </>
//               ) : (
//                 <>
//                   <span className="selected-dot impression-dot" />
//                   <strong>Impression</strong>
//                   <span>12.890</span>
//                 </>
//               )}
//             </div>

//             <div className="activity-chart">
//               {/* Y AXIS */}

//               <div className="chart-y-axis">
//                 <span>100</span>
//                 <span>75</span>
//                 <span>50</span>
//                 <span>25</span>
//                 <span>0</span>
//               </div>

//               <div className="chart-content">
//                 {/* GRID */}

//                 <div className="chart-grid">
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                   <span />
//                 </div>

//                 {/* BARS */}

//                 <div className="bars">
//                   {chartData.map((item) => (
//                     <div
//                       className={`month-column ${
//                         activeActivity === item.month ? "active" : ""
//                       }`}
//                       key={item.month}
//                       onMouseEnter={() => showActivity(item.month)}
//                       onMouseLeave={hideActivity}
//                       onClick={() => toggleActivity(item.month)}
//                     >
//                       {/* TOOLTIP */}

//                       {activeActivity === item.month && (
//                         <div
//                           className="activity-tooltip"
//                           onClick={(event) => event.stopPropagation()}
//                         >
//                           <strong>{item.month}</strong>

//                           <div className="tooltip-row">
//                             <span className="tooltip-dot green-dot" />
//                             <span>Performance</span>
//                             <b>{item.green}</b>
//                           </div>

//                           <div className="tooltip-row">
//                             <span className="tooltip-dot yellow-dot" />
//                             <span>Impression</span>
//                             <b>{item.yellow}</b>
//                           </div>
//                         </div>
//                       )}

//                       <div className="bar-area">
//                         {/* GRAY */}

//                         <span
//                           className="gray-bar"
//                           style={{
//                             height: `${item.gray}%`,
//                           }}
//                         />

//                         {/* PERFORMANCE */}

//                         <span
//                           className={`green-bar ${
//                             activeMetric === "performance"
//                               ? "metric-active"
//                               : ""
//                           }`}
//                           style={{
//                             height: `${item.green}%`,
//                           }}
//                         />

//                         {/* IMPRESSION */}

//                         <span
//                           className={`yellow-bar ${
//                             activeMetric === "impression"
//                               ? "metric-active"
//                               : ""
//                           }`}
//                           style={{
//                             height: `${item.yellow}%`,
//                           }}
//                         />
//                       </div>

//                       <small>{item.month}</small>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* =========================
//             RIGHT SIDEBAR
//         ========================= */}

//         <aside className="dashboard-right">
//           {/* =========================
//               CALENDAR
//           ========================= */}

//           <section className="calendar-section">
//             <div className="calendar-header">
//               <strong>{selectedMonth.name}</strong>

//               <div>
//                 <button
//                   type="button"
//                   onClick={previousMonth}
//                   disabled={selectedMonthIndex === 0}
//                   aria-label="Previous month"
//                 >
//                   <MdKeyboardArrowLeft />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={nextMonth}
//                   disabled={
//                     selectedMonthIndex === calendarMonths.length - 1
//                   }
//                   aria-label="Next month"
//                 >
//                   <MdKeyboardArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div className="calendar-week">
//               <span>M</span>
//               <span>T</span>
//               <span>W</span>
//               <span>T</span>
//               <span>F</span>
//               <span>S</span>
//               <span>S</span>
//             </div>

//             <div className="calendar-days">
//               {selectedMonth.days.map((day) => (
//                 <button
//                   type="button"
//                   key={day}
//                   className={`
//                     ${selectedDay === day ? "today" : ""}
//                     ${day === 7 ? "sunday" : ""}
//                   `}
//                   onClick={() => selectDay(day)}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>

//             {/* SELECTED DATE */}

//             <div className="selected-date">
//               Selected:{" "}
//               <strong>
//                 {selectedDay} {selectedMonth.name}
//               </strong>
//             </div>
//           </section>

//           {/* =========================
//               UPCOMING EVENTS
//           ========================= */}

//           <section className="events-section">
//             <div className="events-heading">
//               <h2>Upcoming Events</h2>

//               <button
//                 type="button"
//                 className="calendar-menu-button"
//                 onClick={() => {
//                   setCalendarMenu((value) => !value);
//                   setOpenMenu(null);
//                   setEventAction(null);
//                 }}
//                 aria-label="Upcoming events menu"
//               >
//                 <MdMoreHoriz />
//               </button>

//               {/* =========================
//                   CALENDAR 3 DOT MENU
//               ========================= */}

//               {calendarMenu && (
//                 <div className="calendar-menu">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleCalendarAction("view-all")
//                     }
//                   >
//                     View All Events
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleCalendarAction("add-event")
//                     }
//                   >
//                     Add Event
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       handleCalendarAction("settings")
//                     }
//                   >
//                     Calendar Settings
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* =========================
//                 CALENDAR MENU RESULT
//             ========================= */}

//             {eventAction && (
//               <div className="event-action-panel">
//                 <div>
//                   <strong>
//                     {eventAction === "view-all"
//                       ? "All Events"
//                       : eventAction === "add-event"
//                       ? "Add Event"
//                       : "Calendar Settings"}
//                   </strong>

//                   <p>
//                     {eventAction === "view-all"
//                       ? "Here you can view all upcoming events."
//                       : eventAction === "add-event"
//                       ? "Add Event option is selected."
//                       : "Calendar Settings option is selected."}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={closeEventAction}
//                   aria-label="Close"
//                 >
//                   <MdClose />
//                 </button>
//               </div>
//             )}

//             <div className="event-list">
//               {events.map((event) => (
//                 <div className="event-item" key={event.id}>
//                   <div className="event-time">
//                     {event.time}
//                   </div>

//                   <div className={`event-line ${event.color}`} />

//                   <div className="event-info">
//                     <small>{event.category}</small>
//                     <strong>{event.title}</strong>
//                   </div>

//                   <div className="event-action">
//                     <button
//                       type="button"
//                       onClick={() => toggleEventMenu(event.id)}
//                       aria-label={`Options for ${event.title}`}
//                     >
//                       <MdMoreHoriz />
//                     </button>

//                     {/* =========================
//                         EVENT 3 DOT MENU
//                     ========================= */}

//                     {openMenu === event.id && (
//                       <div className="event-menu">
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setOpenMenu(null);
//                             setEventAction(
//                               `view-${event.id}`
//                             );
//                           }}
//                         >
//                           View Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => {
//                             setOpenMenu(null);
//                             setEventAction(
//                               `edit-${event.id}`
//                             );
//                           }}
//                         >
//                           Edit Event
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => {
//                             setOpenMenu(null);
//                             setEventAction(
//                               `delete-${event.id}`
//                             );
//                           }}
//                         >
//                           Delete Event
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </aside>
//       </div>
//     </main>
//   );
// }












"use client";

import { useState } from "react";

import {
  MdMoreHoriz,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose,
} from "react-icons/md";

import "./Dashboard.scss";

const events = [
  {
    id: 1,
    date: "5 Jan",
    time: "08.00 AM",
    category: "UI Design",
    title: "Introduction Wireframe",
    color: "green",
  },
  {
    id: 2,
    date: "5 Jan",
    time: "10.00 AM",
    category: "Graphic Design",
    title: "Golden Ratio",
    color: "yellow",
  },
  {
    id: 3,
    date: "5 Jan",
    time: "01.00 PM",
    category: "Web Design",
    title: "Basic HTML",
    color: "red",
  },
  {
    id: 4,
    date: "5 Jan",
    time: "08.00 AM",
    category: "UI Design",
    title: "Prototyping",
    color: "green",
  },
  {
    id: 5,
    date: "5 Jan",
    time: "11.00 AM",
    category: "Graphic Design",
    title: "Photo Manipulation",
    color: "yellow",
  },
  {
    id: 6,
    date: "5 Jan",
    time: "02.00 PM",
    category: "UI Design",
    title: "Interaction Design",
    color: "green",
  },
  {
    id: 7,
    date: "5 Jan",
    time: "04.00 PM",
    category: "Programming",
    title: "Basic React.js",
    color: "red",
  },
];

const chartData = [
  { month: "Jan", green: 72, yellow: 25, gray: 96 },
  { month: "Feb", green: 60, yellow: 35, gray: 85 },
  { month: "Mar", green: 50, yellow: 25, gray: 80 },
  { month: "Apr", green: 63, yellow: 25, gray: 88 },
  { month: "May", green: 38, yellow: 10, gray: 58 },
  { month: "Jun", green: 50, yellow: 25, gray: 70 },
  { month: "Jul", green: 63, yellow: 25, gray: 78 },
  { month: "Aug", green: 50, yellow: 25, gray: 86 },
  { month: "Sep", green: 63, yellow: 25, gray: 88 },
  { month: "Oct", green: 38, yellow: 10, gray: 62 },
  { month: "Nov", green: 50, yellow: 25, gray: 60 },
  { month: "Dec", green: 63, yellow: 25, gray: 78 },
];

export default function InstructorDashboardPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [openMenu, setOpenMenu] = useState(null);

  const [calendarMenu, setCalendarMenu] = useState(false);

  // Calendar month
  const [currentDate, setCurrentDate] = useState(
    new Date(2022, 0, 1)
  );

  // Selected calendar day
  const [selectedDay, setSelectedDay] = useState(5);

  // Working activity
  const [activeActivity, setActiveActivity] = useState(null);

  // Performance / Impression filter
  const [activeMetric, setActiveMetric] = useState("both");

  // Small action message
  const [actionMessage, setActionMessage] = useState("");

  const cardClick = (type) => {
    setSelectedCard(type);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  const toggleEventMenu = (id) => {
    setOpenMenu((current) => (current === id ? null : id));
  };

  // =========================================
  // CALENDAR
  // =========================================

  const previousMonth = () => {
    setCurrentDate(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() - 1,
          1
        )
    );

    setSelectedDay(null);
  };

  const nextMonth = () => {
    setCurrentDate(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() + 1,
          1
        )
    );

    setSelectedDay(null);
  };

  const monthName = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  // Monday = 0
  const mondayFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < mondayFirstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // =========================================
  // ACTION MESSAGE
  // =========================================

  const showAction = (message) => {
    setActionMessage(message);
    setCalendarMenu(false);

    setTimeout(() => {
      setActionMessage("");
    }, 2500);
  };

  // =========================================
  // EVENT MENU
  // =========================================

  const handleEventAction = (action, event) => {
    setOpenMenu(null);

    if (action === "view") {
      showAction(`Viewing event: ${event.title}`);
    }

    if (action === "edit") {
      showAction(`Editing event: ${event.title}`);
    }

    if (action === "delete") {
      showAction(`Delete selected: ${event.title}`);
    }
  };

  // =========================================
  // ACTIVITY BUTTON
  // =========================================

  const handleMetricClick = (metric) => {
    setActiveMetric((current) =>
      current === metric ? "both" : metric
    );
  };

  return (
    <main className="instructor-dashboard">
      {/* ACTION MESSAGE */}

      {actionMessage && (
        <div className="dashboard-action-message">
          {actionMessage}
        </div>
      )}

      <div className="dashboard-main-grid">
        {/* =========================================
            LEFT
        ========================================= */}

        <div className="dashboard-left">
          {/* =========================================
              STAT CARDS
          ========================================= */}

          <div className="dashboard-stats">
            {/* TOTAL STUDENTS */}

            <button
              type="button"
              className={`dashboard-stat-card ${
                selectedCard === "students" ? "active" : ""
              }`}
              onClick={() => cardClick("students")}
            >
              <h3>Total Students</h3>

              <div className="students-bars">
                <span style={{ height: "42px" }} />
                <span style={{ height: "31px" }} />
                <span style={{ height: "25px" }} />
                <span style={{ height: "50px" }} />
                <span style={{ height: "30px" }} />
                <span style={{ height: "44px" }} />
              </div>

              <div className="stat-bottom">
                <strong>12.345</strong>

                <span>
                  <b>5.4%</b> than last year
                </span>
              </div>
            </button>

            {/* COURSES */}

            <button
              type="button"
              className={`dashboard-stat-card ${
                selectedCard === "courses" ? "active" : ""
              }`}
              onClick={() => cardClick("courses")}
            >
              <h3>Courses</h3>

              <div className="course-count">
                <span>⌃</span>
                <strong>100</strong>
                <small>+15%</small>
                <em>than last year</em>
              </div>

              <svg
                className="mini-course-chart"
                viewBox="0 0 180 80"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,55 25,38 45,58 65,15 83,57 105,34 125,70 145,80 160,67 180,40"
                  fill="none"
                  stroke="#ffbd45"
                  strokeWidth="3"
                />
              </svg>
            </button>

            {/* EARNINGS */}

            <button
              type="button"
              className={`dashboard-stat-card earnings-card ${
                selectedCard === "earnings" ? "active" : ""
              }`}
              onClick={() => cardClick("earnings")}
            >
              <h3>Earnings</h3>

              <svg
                className="earning-chart"
                viewBox="0 0 220 90"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,62 45,25 88,52 130,18 170,45 215,20"
                  fill="none"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="0"
                  cy="62"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="45"
                  cy="25"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="88"
                  cy="52"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="130"
                  cy="18"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="170"
                  cy="45"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />

                <circle
                  cx="215"
                  cy="20"
                  r="4"
                  fill="#fff"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />
              </svg>

              <strong className="earning-value">$45,741</strong>

              <span className="earning-percent">
                +15% ↑
              </span>
            </button>
          </div>

          {/* CARD DETAIL */}

          {selectedCard && (
            <div className="card-detail">
              <div>
                <strong>
                  {selectedCard === "students"
                    ? "Total Students"
                    : selectedCard === "courses"
                    ? "Courses"
                    : "Earnings"}
                </strong>

                <p>
                  {selectedCard === "students"
                    ? "You currently have 12,345 students enrolled."
                    : selectedCard === "courses"
                    ? "You currently have 100 active courses."
                    : "Your current total earnings are $45,741."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeCard}
              >
                <MdClose />
              </button>
            </div>
          )}

          {/* =========================================
              WORKING ACTIVITY
          ========================================= */}

          <section className="working-activity">
            <div className="activity-header">
              <h2>Working Activity</h2>

              <div className="activity-legend">
                {/* PERFORMANCE BUTTON */}

                <button
                  type="button"
                  className={`legend-box green ${
                    activeMetric === "performance" ||
                    activeMetric === "both"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleMetricClick("performance")
                  }
                >
                  <span>↗</span>

                  <div>
                    <small>Performance</small>
                    <strong>14.988</strong>
                  </div>
                </button>

                {/* IMPRESSION BUTTON */}

                <button
                  type="button"
                  className={`legend-box yellow ${
                    activeMetric === "impression" ||
                    activeMetric === "both"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleMetricClick("impression")
                  }
                >
                  <span>⌁</span>

                  <div>
                    <small>Impression</small>
                    <strong>12.890</strong>
                  </div>
                </button>
              </div>
            </div>

            {/* ACTIVITY CHART */}

            <div className="activity-chart">
              <div className="chart-y-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="chart-content">
                <div className="chart-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="bars">
                  {chartData.map((item) => (
                    <div
                      className={`month-column ${
                        activeActivity === item.month
                          ? "active"
                          : ""
                      }`}
                      key={item.month}
                      onMouseEnter={() =>
                        setActiveActivity(item.month)
                      }
                      onMouseLeave={() => {
                        if (
                          activeActivity ===
                          `clicked-${item.month}`
                        ) {
                          return;
                        }

                        setActiveActivity(null);
                      }}
                      onClick={() =>
                        setActiveActivity((current) =>
                          current ===
                          `clicked-${item.month}`
                            ? null
                            : `clicked-${item.month}`
                        )
                      }
                    >
                      {/* TOOLTIP */}

                      {(activeActivity === item.month ||
                        activeActivity ===
                          `clicked-${item.month}`) && (
                        <div
                          className="activity-tooltip"
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                        >
                          <strong>{item.month}</strong>

                          {/* PERFORMANCE */}

                          {(activeMetric === "performance" ||
                            activeMetric === "both") && (
                            <div className="tooltip-row">
                              <span className="tooltip-dot green-dot" />

                              <span>Performance</span>

                              <b>{item.green}</b>
                            </div>
                          )}

                          {/* IMPRESSION */}

                          {(activeMetric === "impression" ||
                            activeMetric === "both") && (
                            <div className="tooltip-row">
                              <span className="tooltip-dot yellow-dot" />

                              <span>Impression</span>

                              <b>{item.yellow}</b>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="bar-area">
                        {/* GRAY */}

                        <span
                          className="gray-bar"
                          style={{
                            height: `${item.gray}%`,
                          }}
                        />

                        {/* PERFORMANCE */}

                        {(activeMetric === "performance" ||
                          activeMetric === "both") && (
                          <span
                            className="green-bar"
                            style={{
                              height: `${item.green}%`,
                            }}
                          />
                        )}

                        {/* IMPRESSION */}

                        {(activeMetric === "impression" ||
                          activeMetric === "both") && (
                          <span
                            className="yellow-bar"
                            style={{
                              height: `${item.yellow}%`,
                            }}
                          />
                        )}
                      </div>

                      <small>{item.month}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* =========================================
            RIGHT SIDEBAR
        ========================================= */}

        <aside className="dashboard-right">
          {/* CALENDAR */}

          <section className="calendar-section">
            <div className="calendar-header">
              <strong>{monthName}</strong>

              <div>
                <button
                  type="button"
                  onClick={previousMonth}
                >
                  <MdKeyboardArrowLeft />
                </button>

                <button
                  type="button"
                  onClick={nextMonth}
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>

            <div className="calendar-week">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>

            <div className="calendar-days">
              {calendarDays.map((day, index) => (
                day ? (
                  <button
                    type="button"
                    key={`${year}-${month}-${day}`}
                    className={`
                      ${
                        selectedDay === day
                          ? "selected-day"
                          : ""
                      }
                      ${
                        index % 7 === 6
                          ? "sunday"
                          : ""
                      }
                    `}
                    onClick={() => {
                      setSelectedDay(day);

                      showAction(
                        `${monthName} ${day} selected`
                      );
                    }}
                  >
                    {day}
                  </button>
                ) : (
                  <span
                    key={`empty-${index}`}
                    className="empty-day"
                  />
                )
              ))}
            </div>
          </section>

          {/* UPCOMING EVENTS */}

          <section className="events-section">
            <div className="events-heading">
              <h2>Upcoming Events</h2>

              <button
                type="button"
                className="calendar-menu-button"
                onClick={() =>
                  setCalendarMenu((value) => !value)
                }
              >
                <MdMoreHoriz />
              </button>

              {calendarMenu && (
                <div className="calendar-menu">
                  <button
                    type="button"
                    onClick={() =>
                      showAction("Viewing all events")
                    }
                  >
                    View All Events
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      showAction("Add Event selected")
                    }
                  >
                    Add Event
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      showAction("Calendar Settings selected")
                    }
                  >
                    Calendar Settings
                  </button>
                </div>
              )}
            </div>

            <div className="event-list">
              {events.map((event) => (
                <div
                  className="event-item"
                  key={event.id}
                >
                  <div className="event-time">
                    {event.time}
                  </div>

                  <div
                    className={`event-line ${event.color}`}
                  />

                  <div className="event-info">
                    <small>{event.category}</small>

                    <strong>{event.title}</strong>
                  </div>

                  <div className="event-action">
                    <button
                      type="button"
                      onClick={() =>
                        toggleEventMenu(event.id)
                      }
                      aria-label={`Options for ${event.title}`}
                    >
                      <MdMoreHoriz />
                    </button>

                    {openMenu === event.id && (
                      <div className="event-menu">
                        <button
                          type="button"
                          onClick={() =>
                            handleEventAction(
                              "view",
                              event
                            )
                          }
                        >
                          View Event
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleEventAction(
                              "edit",
                              event
                            )
                          }
                        >
                          Edit Event
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleEventAction(
                              "delete",
                              event
                            )
                          }
                        >
                          Delete Event
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}