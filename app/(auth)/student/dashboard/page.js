





// "use client";

// import { useState } from "react";

// import {
//   MdChevronLeft,
//   MdChevronRight,
//   MdMoreHoriz,
//   MdMenuBook,
//   MdCheckCircle,
//   MdAccessTime,
//   MdCalendarMonth,
//   MdArrowForward,
//   MdPlayArrow,
//   MdTrendingUp,
// } from "react-icons/md";

// import "./dashboard.scss";

// export default function StudentDashboard() {
//   /* -----------------------------
//      Learning Activity
//   ----------------------------- */

//   const [learningTab, setLearningTab] = useState("week");

//   const learningData = {
//     week: [38, 50, 60, 44, 72, 48, 68],
//     thisWeek: [48, 62, 52, 68, 82, 58, 76],
//   };

//   const currentLearningData =
//     learningData[learningTab];

//   /* -----------------------------
//      Score Activity
//   ----------------------------- */

//   const [scoreTab, setScoreTab] = useState("month");

//   const scoreData = {
//     month: [
//       [82, 72],
//       [62, 48],
//       [38, 30],
//       [45, 55],
//       [28, 42],
//       [76, 62],
//       [58, 82],
//       [36, 30],
//       [42, 52],
//       [30, 24],
//       [88, 58],
//       [62, 72],
//     ],

//     thisMonth: [
//       [70, 82],
//       [55, 62],
//       [48, 42],
//       [62, 52],
//       [42, 68],
//       [82, 72],
//       [65, 88],
//       [52, 44],
//       [58, 70],
//       [42, 35],
//       [78, 66],
//       [72, 82],
//     ],
//   };

//   /* -----------------------------
//      Calendar
//   ----------------------------- */

//   const [calendarDate, setCalendarDate] = useState(
//     new Date(2022, 0, 1)
//   );

//   const [selectedDate, setSelectedDate] = useState(17);

//   const monthNames = [
//     "JANUARY",
//     "FEBRUARY",
//     "MARCH",
//     "APRIL",
//     "MAY",
//     "JUNE",
//     "JULY",
//     "AUGUST",
//     "SEPTEMBER",
//     "OCTOBER",
//     "NOVEMBER",
//     "DECEMBER",
//   ];

//   const year = calendarDate.getFullYear();
//   const month = calendarDate.getMonth();

//   const firstDay = new Date(
//     year,
//     month,
//     1
//   ).getDay();

//   const daysInMonth = new Date(
//     year,
//     month + 1,
//     0
//   ).getDate();

//   const calendarDays = [];

//   const mondayStart =
//     firstDay === 0 ? 6 : firstDay - 1;

//   for (let i = 0; i < mondayStart; i++) {
//     calendarDays.push(null);
//   }

//   for (let i = 1; i <= daysInMonth; i++) {
//     calendarDays.push(i);
//   }

//   const previousMonth = () => {
//     setCalendarDate(
//       new Date(year, month - 1, 1)
//     );
//     setSelectedDate(null);
//   };

//   const nextMonth = () => {
//     setCalendarDate(
//       new Date(year, month + 1, 1)
//     );
//     setSelectedDate(null);
//   };

//   /* -----------------------------
//      Homework
//   ----------------------------- */

//   const [homework, setHomework] = useState([
//     {
//       name: "Web Design",
//       progress: 80,
//       color: "#ffc44d",
//     },
//     {
//       name: "Graphic Design",
//       progress: 45,
//       color: "#48bea3",
//     },
//   ]);

//   const increaseHomework = () => {
//     setHomework((items) =>
//       items.map((item, index) => {
//         if (index !== 0) return item;

//         return {
//           ...item,
//           progress:
//             item.progress >= 100
//               ? 0
//               : item.progress + 10,
//         };
//       })
//     );
//   };

//   /* -----------------------------
//      Schedule
//   ----------------------------- */

//   const [showAllSchedule, setShowAllSchedule] =
//     useState(false);

//   const scheduleItems = [
//     {
//       title: "Web Design",
//       date: "January 5, 2022",
//       time: "09:00 - 10:00 AM",
//       teacher: "Ms. Samantha William",
//       color: "#33465c",
//     },
//     {
//       title: "Interaction Design",
//       date: "January 17, 2022",
//       time: "09:00 - 10:00 AM",
//       teacher: "Mr. Tony Soreco",
//       color: "#48bea3",
//     },
//     {
//       title: "Basic Programming",
//       date: "January 17, 2022",
//       time: "09:00 - 10:00 AM",
//       teacher: "Ms. Samantha William",
//       color: "#ffc44d",
//     },
//     {
//       title: "UI / UX Design",
//       date: "January 20, 2022",
//       time: "11:00 - 12:00 AM",
//       teacher: "Mr. David Smith",
//       color: "#8c7cf0",
//     },
//   ];

//   const visibleSchedule = showAllSchedule
//     ? scheduleItems
//     : scheduleItems.slice(0, 3);

//   return (
//     <div className="student-dashboard">

//       {/* =========================
//           PAGE TITLE
//       ========================== */}

//       <div className="page-heading">
//         <div>
//           <h1>Dashboard</h1>
//           <p>
//             Welcome back! Here is your learning overview.
//           </p>
//         </div>
//       </div>

//       {/* =========================
//           TOP AREA
//       ========================== */}

//       <div className="top-dashboard-grid">

//         {/* LEFT */}
//         <div className="dashboard-main">

//           {/* Banner */}

//           <section className="welcome-banner">

//             <div className="banner-content">
//               <h2>
//                 Join Now and Get Discount
//                 <br />
//                 Voucher Up To 20%
//               </h2>

//               <p>
//                 Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit.
//               </p>
//             </div>

//             <div className="banner-icons">
//               <MdMenuBook />
//               <MdCalendarMonth />
//             </div>

//           </section>

//           {/* Stats */}

//           <section className="stats-grid">

//             <div className="stat-card green">

//               <div className="stat-icon">
//                 <MdCheckCircle />
//               </div>

//               <div className="stat-number">
//                 1.500
//               </div>

//               <div className="stat-label">
//                 Completed
//                 <br />
//                 Courses
//               </div>

//               <MdCheckCircle className="stat-bg-icon" />

//             </div>

//             <div className="stat-card yellow">

//               <div className="stat-icon">
//                 <MdAccessTime />
//               </div>

//               <div className="stat-number">
//                 903
//               </div>

//               <div className="stat-label">
//                 In Progress
//                 <br />
//                 Courses
//               </div>

//               <MdAccessTime className="stat-bg-icon" />

//             </div>

//             <div className="stat-card dark">

//               <div className="stat-icon">
//                 <MdMenuBook />
//               </div>

//               <div className="stat-number">
//                 1.112
//               </div>

//               <div className="stat-label">
//                 Upcoming
//                 <br />
//                 Courses
//               </div>

//               <MdMenuBook className="stat-bg-icon" />

//             </div>

//           </section>

//           {/* Charts row */}

//           <section className="activity-grid">

//             {/* Learning Activity */}

//             <div className="dashboard-card learning-card">

//               <div className="card-title-row">

//                 <h3>
//                   Learning Activity
//                 </h3>

//                 <div className="chart-actions">

//                   <button
//                     className={
//                       learningTab === "week"
//                         ? "active"
//                         : ""
//                     }
//                     onClick={() =>
//                       setLearningTab("week")
//                     }
//                   >
//                     <span className="orange-dot" />
//                     Last Week
//                   </button>

//                   <button
//                     className={
//                       learningTab === "thisWeek"
//                         ? "active"
//                         : ""
//                     }
//                     onClick={() =>
//                       setLearningTab("thisWeek")
//                     }
//                   >
//                     <span className="green-dot" />
//                     This Week
//                   </button>

//                   <MdMoreHoriz />

//                 </div>

//               </div>

//               <div className="line-chart">

//                 <div className="y-axis">
//                   <span>100</span>
//                   <span>80</span>
//                   <span>60</span>
//                   <span>40</span>
//                   <span>20</span>
//                   <span>0</span>
//                 </div>

//                 <div className="chart-area">

//                   <div className="chart-grid-lines">
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                   </div>

//                   <svg
//                     viewBox="0 0 700 240"
//                     preserveAspectRatio="none"
//                   >

//                     <polygon
//                       points={`
//                         0,170
//                         110,125
//                         220,150
//                         330,92
//                         440,42
//                         550,125
//                         700,60
//                         700,240
//                         0,240
//                       `}
//                       fill="rgba(72,190,163,.12)"
//                     />

//                     <polyline
//                       points={`
//                         0,170
//                         110,125
//                         220,150
//                         330,92
//                         440,42
//                         550,125
//                         700,60
//                       `}
//                       fill="none"
//                       stroke="#48bea3"
//                       strokeWidth="4"
//                     />

//                     <polyline
//                       points={`
//                         0,120
//                         110,95
//                         220,68
//                         330,92
//                         440,125
//                         550,160
//                         700,60
//                       `}
//                       fill="none"
//                       stroke="#ffc44d"
//                       strokeWidth="3"
//                     />

//                     {currentLearningData.map(
//                       (value, index) => {

//                         const x =
//                           (index / 6) * 700;

//                         const y =
//                           240 -
//                           (value / 100) * 200;

//                         return (
//                           <circle
//                             key={index}
//                             cx={x}
//                             cy={y}
//                             r="5"
//                             fill="#fff"
//                             stroke={
//                               index % 2 === 0
//                                 ? "#48bea3"
//                                 : "#ffc44d"
//                             }
//                             strokeWidth="3"
//                           />
//                         );
//                       }
//                     )}

//                   </svg>

//                   <div className="x-axis">
//                     <span>Mon</span>
//                     <span>Tue</span>
//                     <span>Wed</span>
//                     <span>Thu</span>
//                     <span>Fri</span>
//                     <span>Sat</span>
//                     <span>Sun</span>
//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* My Progress */}

//             <div className="dashboard-card progress-card">

//               <div className="card-title-row">
//                 <h3>My Progress</h3>
//                 <MdMoreHoriz />
//               </div>

//               <div className="progress-circle">

//                 <svg viewBox="0 0 120 120">

//                   <circle
//                     cx="60"
//                     cy="60"
//                     r="48"
//                     className="circle-bg"
//                   />

//                   <circle
//                     cx="60"
//                     cy="60"
//                     r="48"
//                     className="circle-value"
//                   />

//                 </svg>

//                 <strong>75%</strong>

//               </div>

//               <h4>My Progress</h4>

//               <p>
//                 Lorem ipsum dolor sit amet,
//                 consectetur adipiscing elit.
//               </p>

//               <button className="details-btn">
//                 More Details
//                 <MdArrowForward />
//               </button>

//             </div>

//           </section>

//           {/* Score Activity */}

//           <section className="dashboard-card score-card">

//             <div className="card-title-row">

//               <h3>
//                 Score Activity
//               </h3>

//               <div className="chart-actions">

//                 <button
//                   className={
//                     scoreTab === "month"
//                       ? "active"
//                       : ""
//                   }
//                   onClick={() =>
//                     setScoreTab("month")
//                   }
//                 >
//                   <span className="orange-dot" />
//                   Last Month
//                 </button>

//                 <button
//                   className={
//                     scoreTab === "thisMonth"
//                       ? "active"
//                       : ""
//                   }
//                   onClick={() =>
//                     setScoreTab("thisMonth")
//                   }
//                 >
//                   <span className="green-dot" />
//                   This Month
//                 </button>

//                 <button className="year-button">
//                   This Years
//                   <MdChevronRight />
//                 </button>

//                 <MdMoreHoriz />

//               </div>

//             </div>

//             <div className="bar-chart">

//               {scoreData[scoreTab].map(
//                 (item, index) => (
//                   <div
//                     className="bar-group"
//                     key={index}
//                   >

//                     <div className="bars">

//                       <span
//                         className="bar orange"
//                         style={{
//                           height: `${item[0]}%`,
//                         }}
//                       />

//                       <span
//                         className="bar green"
//                         style={{
//                           height: `${item[1]}%`,
//                         }}
//                       />

//                     </div>

//                     <small>
//                       {
//                         [
//                           "Jan",
//                           "Feb",
//                           "Mar",
//                           "Apr",
//                           "May",
//                           "Jun",
//                           "Jul",
//                           "Aug",
//                           "Sep",
//                           "Oct",
//                           "Nov",
//                           "Dec",
//                         ][index]
//                       }
//                     </small>

//                   </div>
//                 )
//               )}

//             </div>

//           </section>

//         </div>

//         {/* =========================
//             RIGHT SIDE
//         ========================== */}

//         <aside className="dashboard-sidebar">

//           {/* Calendar */}

//           <section className="dashboard-card calendar-card">

//             <div className="calendar-header">

//               <button
//                 onClick={previousMonth}
//                 aria-label="Previous month"
//               >
//                 <MdChevronLeft />
//               </button>

//               <h3>
//                 {monthNames[month]}, {year}
//               </h3>

//               <button
//                 onClick={nextMonth}
//                 aria-label="Next month"
//               >
//                 <MdChevronRight />
//               </button>

//             </div>

//             <div className="calendar-grid">

//               {[
//                 "M",
//                 "T",
//                 "W",
//                 "T",
//                 "F",
//                 "S",
//                 "S",
//               ].map((day, index) => (
//                 <span
//                   key={index}
//                   className="calendar-weekday"
//                 >
//                   {day}
//                 </span>
//               ))}

//               {calendarDays.map(
//                 (day, index) => (

//                   <button
//                     key={index}
//                     disabled={!day}
//                     className={
//                       day === selectedDate
//                         ? "selected-date"
//                         : ""
//                     }
//                     onClick={() =>
//                       day &&
//                       setSelectedDate(day)
//                     }
//                   >
//                     {day || ""}
//                   </button>

//                 )
//               )}

//             </div>

//           </section>

//           {/* Homework */}

//           <section className="dashboard-card homework-card">

//             <div className="card-title-row">

//               <h3>Home Work</h3>

//               <button
//                 className="icon-button"
//                 onClick={increaseHomework}
//               >
//                 <MdTrendingUp />
//               </button>

//             </div>

//             {homework.map(
//               (item, index) => (

//                 <div
//                   className="homework-item"
//                   key={index}
//                 >

//                   <div className="homework-info">

//                     <span>
//                       {item.name}
//                     </span>

//                     <small>
//                       {item.progress}/10
//                     </small>

//                   </div>

//                   <div className="homework-progress">

//                     <span
//                       style={{
//                         width: `${item.progress}%`,
//                         background:
//                           item.color,
//                       }}
//                     />

//                   </div>

//                 </div>

//               )
//             )}

//           </section>

//           {/* Schedule */}

//           <section className="schedule-section">

//             <div className="schedule-heading">

//               <div>
//                 <h3>
//                   Upcoming Schedule
//                 </h3>

//                 <p>
//                   Thursday, April 21, 2022
//                 </p>
//               </div>

//               <button
//                 className="add-schedule"
//                 onClick={() =>
//                   alert(
//                     "Add Schedule clicked"
//                   )
//                 }
//               >
//                 +
//               </button>

//             </div>

//             {visibleSchedule.map(
//               (item, index) => (

//                 <div
//                   className="schedule-card"
//                   key={index}
//                   style={{
//                     borderLeftColor:
//                       item.color,
//                   }}
//                 >

//                   <div className="schedule-top">

//                     <div>
//                       <strong>
//                         {item.title}
//                       </strong>

//                       <p>
//                         <MdCalendarMonth />
//                         {item.date}
//                       </p>
//                     </div>

//                     <MdPlayArrow
//                       className="play-icon"
//                     />

//                   </div>

//                   <div className="schedule-bottom">

//                     <span>
//                       🕘 {item.time}
//                     </span>

//                     <span>
//                       👤 {item.teacher}
//                     </span>

//                   </div>

//                 </div>

//               )
//             )}

//             <button
//               className="more-schedule"
//               onClick={() =>
//                 setShowAllSchedule(
//                   !showAllSchedule
//                 )
//               }
//             >
//               {showAllSchedule
//                 ? "Show Less"
//                 : "More Schedule"}

//               <MdArrowForward />

//             </button>

//           </section>

//         </aside>

//       </div>

//     </div>
//   );
// }











"use client";

import { useState } from "react";

import {
  MdChevronLeft,
  MdChevronRight,
  MdMoreHoriz,
  MdMenuBook,
  MdCheckCircle,
  MdAccessTime,
  MdCalendarMonth,
  MdArrowForward,
  MdPlayArrow,
  MdTrendingUp,
  MdClose,
} from "react-icons/md";

import "./dashboard.scss";

export default function StudentDashboard() {
  /* =========================
     LEARNING ACTIVITY
  ========================= */

  const [learningTab, setLearningTab] = useState("week");
  const [learningHover, setLearningHover] = useState(null);

  const learningData = {
    week: [38, 50, 60, 44, 72, 48, 68],
    thisWeek: [48, 62, 52, 68, 82, 58, 76],
  };

  const currentLearningData = learningData[learningTab];

  const learningDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  /* =========================
     SCORE ACTIVITY
  ========================= */

  const [scoreTab, setScoreTab] = useState("month");
  const [scoreHover, setScoreHover] = useState(null);

  const scoreData = {
    month: [
      [82, 72],
      [62, 48],
      [38, 30],
      [45, 55],
      [28, 42],
      [76, 62],
      [58, 82],
      [36, 30],
      [42, 52],
      [30, 24],
      [88, 58],
      [62, 72],
    ],

    thisMonth: [
      [70, 82],
      [55, 62],
      [48, 42],
      [62, 52],
      [42, 68],
      [82, 72],
      [65, 88],
      [52, 44],
      [58, 70],
      [42, 35],
      [78, 66],
      [72, 82],
    ],
  };

  const scoreMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  /* =========================
     MY PROGRESS
  ========================= */

  const [showProgress, setShowProgress] = useState(false);

  /* =========================
     CALENDAR
  ========================= */

  const [calendarDate, setCalendarDate] = useState(
    new Date(2022, 0, 1)
  );

  const [selectedDate, setSelectedDate] = useState(17);

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const calendarDays = [];

  const mondayStart =
    firstDay === 0 ? 6 : firstDay - 1;

  for (let i = 0; i < mondayStart; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const previousMonth = () => {
    setCalendarDate(
      new Date(year, month - 1, 1)
    );
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCalendarDate(
      new Date(year, month + 1, 1)
    );
    setSelectedDate(null);
  };

  /* =========================
     HOMEWORK
  ========================= */

  const [homework, setHomework] = useState([
    {
      name: "Web Design",
      progress: 80,
      color: "#ffc44d",
    },
    {
      name: "Graphic Design",
      progress: 45,
      color: "#48bea3",
    },
  ]);

  const increaseHomework = () => {
    setHomework((items) =>
      items.map((item, index) => {
        if (index !== 0) return item;

        return {
          ...item,
          progress:
            item.progress >= 100
              ? 0
              : item.progress + 10,
        };
      })
    );
  };

  /* =========================
     SCHEDULE
  ========================= */

  const [showAllSchedule, setShowAllSchedule] =
    useState(false);

  const scheduleItems = [
    {
      title: "Web Design",
      date: "January 5, 2022",
      time: "09:00 - 10:00 AM",
      teacher: "Ms. Samantha William",
      color: "#33465c",
    },
    {
      title: "Interaction Design",
      date: "January 17, 2022",
      time: "09:00 - 10:00 AM",
      teacher: "Mr. Tony Soreco",
      color: "#48bea3",
    },
    {
      title: "Basic Programming",
      date: "January 17, 2022",
      time: "09:00 - 10:00 AM",
      teacher: "Ms. Samantha William",
      color: "#ffc44d",
    },
    {
      title: "UI / UX Design",
      date: "January 20, 2022",
      time: "11:00 - 12:00 AM",
      teacher: "Mr. David Smith",
      color: "#8c7cf0",
    },
  ];

  const visibleSchedule = showAllSchedule
    ? scheduleItems
    : scheduleItems.slice(0, 3);

  return (
    <div className="student-dashboard">

      {/* =========================
          DASHBOARD CONTENT
      ========================= */}

      <div className="top-dashboard-grid">

        {/* =========================
            LEFT
        ========================= */}

        <div className="dashboard-main">

          {/* Banner */}

          <section className="welcome-banner">

            <div className="banner-content">
              <h2>
                Join Now and Get Discount
                <br />
                Voucher Up To 20%
              </h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>

            <div className="banner-icons">
              <MdMenuBook />
              <MdCalendarMonth />
            </div>

          </section>

          {/* Stats */}

          <section className="stats-grid">

            <div className="stat-card green">

              <div className="stat-icon">
                <MdCheckCircle />
              </div>

              <div className="stat-number">
                1.500
              </div>

              <div className="stat-label">
                Completed
                <br />
                Courses
              </div>

              <MdCheckCircle className="stat-bg-icon" />

            </div>

            <div className="stat-card yellow">

              <div className="stat-icon">
                <MdAccessTime />
              </div>

              <div className="stat-number">
                903
              </div>

              <div className="stat-label">
                In Progress
                <br />
                Courses
              </div>

              <MdAccessTime className="stat-bg-icon" />

            </div>

            <div className="stat-card dark">

              <div className="stat-icon">
                <MdMenuBook />
              </div>

              <div className="stat-number">
                1.112
              </div>

              <div className="stat-label">
                Upcoming
                <br />
                Courses
              </div>

              <MdMenuBook className="stat-bg-icon" />

            </div>

          </section>

          {/* =========================
              CHARTS ROW
          ========================= */}

          <section className="activity-grid">

            {/* LEARNING ACTIVITY */}

            <div className="dashboard-card learning-card">

              <div className="card-title-row">

                <h3>
                  Learning Activity
                </h3>

                <div className="chart-actions">

                  <button
                    className={
                      learningTab === "week"
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setLearningTab("week")
                    }
                  >
                    <span className="orange-dot" />
                    Last Week
                  </button>

                  <button
                    className={
                      learningTab === "thisWeek"
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setLearningTab("thisWeek")
                    }
                  >
                    <span className="green-dot" />
                    This Week
                  </button>

                  <MdMoreHoriz />

                </div>

              </div>

              <div className="line-chart">

                <div className="y-axis">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>

                <div className="chart-area">

                  <div className="chart-grid-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <svg
                    viewBox="0 0 700 240"
                    preserveAspectRatio="none"
                  >

                    <polygon
                      points={`
                        0,170
                        110,125
                        220,150
                        330,92
                        440,42
                        550,125
                        700,60
                        700,240
                        0,240
                      `}
                      fill="rgba(72,190,163,.12)"
                    />

                    <polyline
                      points={`
                        0,170
                        110,125
                        220,150
                        330,92
                        440,42
                        550,125
                        700,60
                      `}
                      fill="none"
                      stroke="#48bea3"
                      strokeWidth="4"
                    />

                    <polyline
                      points={`
                        0,120
                        110,95
                        220,68
                        330,92
                        440,125
                        550,160
                        700,60
                      `}
                      fill="none"
                      stroke="#ffc44d"
                      strokeWidth="3"
                    />

                    {currentLearningData.map(
                      (value, index) => {

                        const x =
                          (index / 6) * 700;

                        const y =
                          240 -
                          (value / 100) * 200;

                        return (
                          <circle
                            key={index}
                            cx={x}
                            cy={y}
                            r="6"
                            fill="#fff"
                            stroke={
                              index % 2 === 0
                                ? "#48bea3"
                                : "#ffc44d"
                            }
                            strokeWidth="3"
                            className="chart-point"
                            onMouseEnter={() =>
                              setLearningHover({
                                index,
                                value,
                              })
                            }
                            onMouseLeave={() =>
                              setLearningHover(null)
                            }
                          />
                        );
                      }
                    )}

                  </svg>

                  {learningHover && (
                    <div
                      className="learning-tooltip"
                      style={{
                        left: `${(
                          learningHover.index / 6
                        ) * 100}%`,
                      }}
                    >
                      <strong>
                        {learningHover.value}
                      </strong>

                      <span>
                        {learningDays[
                          learningHover.index
                        ]} Learning Score
                      </span>
                    </div>
                  )}

                  <div className="x-axis">

                    {learningDays.map(
                      (day) => (
                        <span key={day}>
                          {day}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* MY PROGRESS */}

            <div className="dashboard-card progress-card">

              <div className="card-title-row">

                <h3>
                  My Progress
                </h3>

                <MdMoreHoriz />

              </div>

              <div className="progress-circle">

                <svg viewBox="0 0 120 120">

                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    className="circle-bg"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    className="circle-value"
                  />

                </svg>

                <strong>
                  75%
                </strong>

              </div>

              <h4>
                My Progress
              </h4>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>

              <button
                className="details-btn"
                type="button"
                onClick={() =>
                  setShowProgress(true)
                }
              >
                More Details
                <MdArrowForward />
              </button>

              {/* PROGRESS POPUP */}

              {showProgress && (
                <div className="progress-modal">

                  <div className="progress-modal-box">

                    <button
                      type="button"
                      className="progress-close"
                      onClick={() =>
                        setShowProgress(false)
                      }
                    >
                      <MdClose />
                    </button>

                    <h3>
                      My Progress Details
                    </h3>

                    <p>
                      Your overall course
                      progress is 75%.
                    </p>

                    <div className="detail-progress">

                      <div>
                        <span>
                          Web Design
                        </span>

                        <strong>
                          80%
                        </strong>
                      </div>

                      <div className="detail-progress-bar">
                        <span
                          style={{
                            width: "80%",
                          }}
                        />
                      </div>

                    </div>

                    <div className="detail-progress">

                      <div>
                        <span>
                          Graphic Design
                        </span>

                        <strong>
                          65%
                        </strong>
                      </div>

                      <div className="detail-progress-bar">
                        <span
                          style={{
                            width: "65%",
                          }}
                        />
                      </div>

                    </div>

                    <div className="detail-progress">

                      <div>
                        <span>
                          Programming
                        </span>

                        <strong>
                          70%
                        </strong>
                      </div>

                      <div className="detail-progress-bar">
                        <span
                          style={{
                            width: "70%",
                          }}
                        />
                      </div>

                    </div>

                  </div>

                </div>
              )}

            </div>

          </section>

          {/* =========================
              SCORE ACTIVITY
          ========================= */}

          <section className="dashboard-card score-card">

            <div className="card-title-row">

              <h3>
                Score Activity
              </h3>

              <div className="chart-actions">

                <button
                  className={
                    scoreTab === "month"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setScoreTab("month")
                  }
                >
                  <span className="orange-dot" />
                  Last Month
                </button>

                <button
                  className={
                    scoreTab === "thisMonth"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setScoreTab("thisMonth")
                  }
                >
                  <span className="green-dot" />
                  This Month
                </button>

                <button className="year-button">
                  This Years
                  <MdChevronRight />
                </button>

                <MdMoreHoriz />

              </div>

            </div>

            <div className="bar-chart">

              {scoreData[scoreTab].map(
                (item, index) => (

                  <div
                    className="bar-group"
                    key={index}
                    onMouseEnter={() =>
                      setScoreHover(index)
                    }
                    onMouseLeave={() =>
                      setScoreHover(null)
                    }
                  >

                    <div className="bars">

                      <span
                        className="bar orange"
                        style={{
                          height: `${item[0]}%`,
                        }}
                      />

                      <span
                        className="bar green"
                        style={{
                          height: `${item[1]}%`,
                        }}
                      />

                    </div>

                    {scoreHover === index && (
                      <div className="score-tooltip">

                        <strong>
                          {scoreMonths[index]}
                        </strong>

                        <span>
                          Last: {item[0]}
                        </span>

                        <span>
                          Current: {item[1]}
                        </span>

                      </div>
                    )}

                    <small>
                      {scoreMonths[index]}
                    </small>

                  </div>

                )
              )}

            </div>

          </section>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <aside className="dashboard-sidebar">

          {/* CALENDAR */}

          <section className="dashboard-card calendar-card">

            <div className="calendar-header">

              <button
                onClick={previousMonth}
                aria-label="Previous month"
              >
                <MdChevronLeft />
              </button>

              <h3>
                {monthNames[month]}, {year}
              </h3>

              <button
                onClick={nextMonth}
                aria-label="Next month"
              >
                <MdChevronRight />
              </button>

            </div>

            <div className="calendar-grid">

              {[
                "M",
                "T",
                "W",
                "T",
                "F",
                "S",
                "S",
              ].map((day, index) => (

                <span
                  key={index}
                  className="calendar-weekday"
                >
                  {day}
                </span>

              ))}

              {calendarDays.map(
                (day, index) => (

                  <button
                    key={index}
                    disabled={!day}
                    className={
                      day === selectedDate
                        ? "selected-date"
                        : ""
                    }
                    onClick={() =>
                      day &&
                      setSelectedDate(day)
                    }
                  >
                    {day || ""}
                  </button>

                )
              )}

            </div>

          </section>

          {/* HOMEWORK */}

          <section className="dashboard-card homework-card">

            <div className="card-title-row">

              <h3>
                Home Work
              </h3>

              <button
                className="icon-button"
                onClick={increaseHomework}
                type="button"
              >
                <MdTrendingUp />
              </button>

            </div>

            {homework.map(
              (item, index) => (

                <div
                  className="homework-item"
                  key={index}
                >

                  <div className="homework-info">

                    <span>
                      {item.name}
                    </span>

                    <small>
                      {item.progress}/100
                    </small>

                  </div>

                  <div className="homework-progress">

                    <span
                      style={{
                        width: `${item.progress}%`,
                        background:
                          item.color,
                      }}
                    />

                  </div>

                </div>

              )
            )}

          </section>

          {/* SCHEDULE */}

          <section className="schedule-section">

            <div className="schedule-heading">

              <div>

                <h3>
                  Upcoming Schedule
                </h3>

                <p>
                  Thursday, April 21, 2022
                </p>

              </div>

              <button
                className="add-schedule"
                onClick={() =>
                  alert(
                    "Add Schedule clicked"
                  )
                }
                type="button"
              >
                +
              </button>

            </div>

            {visibleSchedule.map(
              (item, index) => (

                <div
                  className="schedule-card"
                  key={index}
                  style={{
                    borderLeftColor:
                      item.color,
                  }}
                >

                  <div className="schedule-top">

                    <div>

                      <strong>
                        {item.title}
                      </strong>

                      <p>
                        <MdCalendarMonth />
                        {item.date}
                      </p>

                    </div>

                    <MdPlayArrow
                      className="play-icon"
                    />

                  </div>

                  <div className="schedule-bottom">

                    <span>
                      🕘 {item.time}
                    </span>

                    <span>
                      👤 {item.teacher}
                    </span>

                  </div>

                </div>

              )
            )}

            <button
              className="more-schedule"
              onClick={() =>
                setShowAllSchedule(
                  !showAllSchedule
                )
              }
              type="button"
            >

              {showAllSchedule
                ? "Show Less"
                : "More Schedule"}

              <MdArrowForward />

            </button>

          </section>

        </aside>

      </div>

    </div>
  );
}