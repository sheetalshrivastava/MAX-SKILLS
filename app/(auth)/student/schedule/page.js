"use client";

import { useMemo, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdCalendarMonth,
  MdAccessTime,
} from "react-icons/md";

import "./Schedule.scss";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ongoingClasses = [
  {
    title: "UI Design Basic",
    progress: 75,
    color: "green",
  },
  {
    title: "Fullstack Developer",
    progress: 50,
    color: "yellow",
  },
];

/* =========================================
   DATE WISE SCHEDULE
========================================= */

const scheduleData = {
  "2021-01-05": [
    {
      title: "UX Research",
      subtitle: "A/B Testing",
      time: "07:00 - 08:00 AM",
      color: "red",
    },
    {
      title: "UI Design Beginner",
      subtitle: "Wireframe",
      time: "10:00 - 11:00 AM",
      color: "green",
    },
    {
      title: "Fullstack Developer",
      subtitle: "FormRequest",
      time: "03:00 - 04:00 PM",
      color: "yellow",
    },
  ],

  "2021-01-06": [
    {
      title: "UI Design Basic",
      subtitle: "Typography",
      time: "08:00 - 09:00 AM",
      color: "green",
    },
    {
      title: "UX Research",
      subtitle: "User Flow",
      time: "11:00 - 12:00 PM",
      color: "red",
    },
  ],

  "2021-01-07": [
    {
      title: "Fullstack Developer",
      subtitle: "API Integration",
      time: "09:00 - 10:00 AM",
      color: "yellow",
    },
    {
      title: "Icon Design",
      subtitle: "Design System",
      time: "02:00 - 03:00 PM",
      color: "red",
    },
  ],
};

/* =========================================
   UPCOMING CLASSES
========================================= */

const upcomingClasses = [
  {
    title: "UX Research",
    teacher: "Ms. Samantha William",
    time: "07:00 - 08:00 AM",
    color: "green",
  },
  {
    title: "Back-End Developer",
    teacher: "Ms. Samantha William",
    time: "08:00 - 09:00 AM",
    color: "yellow",
  },
  {
    title: "Icon Design",
    teacher: "Ms. Samantha William",
    time: "09:00 - 10:00 AM",
    color: "red",
  },
];

export default function SchedulePage() {
  /* =========================================
     CALENDAR STATE
  ========================================= */

  const [calendarDate, setCalendarDate] = useState(
    new Date(2021, 0, 1)
  );

  const [selectedDay, setSelectedDay] = useState(5);

  const currentYear = calendarDate.getFullYear();
  const currentMonth = calendarDate.getMonth();

  /* =========================================
     CALENDAR CALCULATION
  ========================================= */

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // Monday se calendar start
  const mondayStart =
    firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = useMemo(() => {
    const previousMonthDays = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();

    const days = [];

    // Previous month
    for (let i = mondayStart - 1; i >= 0; i--) {
      days.push({
        day: previousMonthDays - i,
        currentMonth: false,
      });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
      });
    }

    // Next month
    let nextDay = 1;

    while (days.length < 42) {
      days.push({
        day: nextDay,
        currentMonth: false,
      });

      nextDay++;
    }

    return days;
  }, [
    currentYear,
    currentMonth,
    daysInMonth,
    mondayStart,
  ]);

  /* =========================================
     SELECTED DATE
  ========================================= */

  const selectedDateKey =
    `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(selectedDay).padStart(2, "0")}`;

  const formattedSelectedDate =
    `${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`;

  const formattedShortDate =
    `${monthNames[currentMonth]} ${selectedDay}`;

  /* =========================================
     SELECTED DAY SCHEDULE
  ========================================= */

  const selectedSchedule =
    scheduleData[selectedDateKey] || [];

  /* =========================================
     MONTH NAVIGATION
  ========================================= */

  const previousMonth = () => {
    setCalendarDate(
      new Date(currentYear, currentMonth - 1, 1)
    );

    setSelectedDay(5);
  };

  const nextMonth = () => {
    setCalendarDate(
      new Date(currentYear, currentMonth + 1, 1)
    );

    setSelectedDay(5);
  };

  /* =========================================
     DATE SELECT
  ========================================= */

  const handleDateSelect = (day) => {
    if (!day) return;

    setSelectedDay(day);
  };

  /* =========================================
     GET EVENT POSITION
  ========================================= */

  const getEventPosition = (time) => {
    if (time.startsWith("07")) return "time-7";
    if (time.startsWith("08")) return "time-8";
    if (time.startsWith("09")) return "time-9";
    if (time.startsWith("10")) return "time-10";
    if (time.startsWith("11")) return "time-11";
    if (time.startsWith("12")) return "time-12";
    if (time.startsWith("01")) return "time-1";
    if (time.startsWith("02")) return "time-2";
    if (time.startsWith("03")) return "time-3";
    if (time.startsWith("04")) return "time-4";

    return "time-7";
  };

  return (
    <div className="schedule-content">

      <div className="schedule-grid">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="schedule-left">

          {/* ONGOING CLASS */}

          <section className="ongoing-section">

            <h2>Ongoing Class</h2>

            <div className="ongoing-list">

              {ongoingClasses.map((item) => (
                <div
                  className="ongoing-card"
                  key={item.title}
                >

                  <div
                    className={`percentage ${item.color}`}
                  >
                    {item.progress}%
                  </div>

                  <div className="ongoing-info">

                    <strong>
                      {item.title}
                    </strong>

                    <div className="mini-progress">

                      <span
                        className={item.color}
                        style={{
                          width: `${item.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                  <MdChevronRight />

                </div>
              ))}

            </div>

          </section>

          {/* =================================
              TODAY SCHEDULE
          ================================= */}

          <section className="today-section">

            <div className="today-heading">

              <div>
                <h2>Today Schedule</h2>

                <p>
                  {formattedSelectedDate}
                </p>
              </div>

              <div className="selected-date-badge">
                <MdCalendarMonth />
                {formattedShortDate}
              </div>

            </div>

            <div className="timeline">

              {/* TIME LINES */}

              {[
                "7 AM",
                "8 AM",
                "9 AM",
                "10 AM",
                "11 AM",
                "12 PM",
                "1 PM",
                "2 PM",
                "3 PM",
                "4 PM",
                "5 PM",
              ].map((time) => (
                <div
                  className="timeline-row"
                  key={time}
                >

                  <span>{time}</span>

                  <div className="timeline-line" />

                </div>
              ))}

              {/* EVENTS */}

              {selectedSchedule.map((item) => (
                <div
                  key={`${item.title}-${item.time}`}
                  className={`class-event ${item.color} ${getEventPosition(
                    item.time
                  )}`}
                >

                  <div className="event-top">

                    <strong>
                      {item.title}
                    </strong>

                    <span className="event-menu">
                      •••
                    </span>

                  </div>

                  <span className="event-subtitle">
                    {item.subtitle}
                  </span>

                  <div className="event-time">
                    <MdAccessTime />
                    {item.time}
                  </div>

                  <div className="event-dots">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                </div>
              ))}

              {/* NO SCHEDULE */}

              {selectedSchedule.length === 0 && (
                <div className="no-schedule">
                  <span>No class scheduled</span>
                  <small>
                    No classes are available for this date.
                  </small>
                </div>
              )}

            </div>

          </section>

        </div>

        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="schedule-right">

          {/* =================================
              CALENDAR
          ================================= */}

          <section className="calendar-section">

            <h2>Calendar</h2>

            <div className="calendar-card">

              {/* HEADER */}

              <div className="calendar-header">

                <button
                  type="button"
                  onClick={previousMonth}
                >
                  <MdChevronLeft />
                </button>

                <strong>
                  {monthNames[currentMonth]}
                </strong>

                <button
                  type="button"
                  onClick={nextMonth}
                >
                  <MdChevronRight />
                </button>

              </div>

              {/* CALENDAR + PROGRESS */}

              <div className="calendar-body">

                <div className="calendar-wrapper">

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
                        className="day-name"
                        key={`${day}-${index}`}
                      >
                        {day}
                      </span>
                    ))}

                    {calendarDays.map(
                      (item, index) => {

                        const selected =
                          item.currentMonth &&
                          item.day === selectedDay;

                        return (
                          <button
                            type="button"
                            key={`${item.day}-${index}`}
                            disabled={!item.currentMonth}
                            className={`
                              calendar-date
                              ${
                                !item.currentMonth
                                  ? "outside"
                                  : ""
                              }
                              ${
                                selected
                                  ? "selected"
                                  : ""
                              }
                            `}
                            onClick={() =>
                              handleDateSelect(
                                item.day
                              )
                            }
                          >
                            {item.day}
                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

                {/* PROGRESS */}

                <div className="month-progress">

                  <small>
                    Your Progress this Month
                  </small>

                  <div className="progress-circle">

                    <div className="progress-inner">
                      <span>↑</span>
                      <strong>+15%</strong>
                    </div>

                  </div>

                  <p>
                    Lorem ipsum dolor sit amet,
                    adipiscing elit, sed do
                    eiusmod tempor
                  </p>

                  <div className="legend">

                    <span>
                      <i className="green" />
                      Design
                    </span>

                    <span>
                      <i className="pink" />
                      Soft Skill
                    </span>

                    <span>
                      <i className="yellow" />
                      Developer
                    </span>

                    <span>
                      <i className="purple" />
                      Science
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================
              UPCOMING
          ================================= */}

          <section className="upcoming">

            <div className="upcoming-title">

              <div>
                <h2>Upcoming Schedule</h2>

                <p>
                  {formattedSelectedDate}
                </p>
              </div>

              <button type="button">
                View all
                <MdChevronRight />
              </button>

            </div>

            <div className="upcoming-list">

              {upcomingClasses.map((item) => (
                <div
                  className={`upcoming-card ${item.color}`}
                  key={item.title}
                >

                  <div className="upcoming-info">

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      <span className="teacher-dot" />
                      {item.teacher}
                    </small>

                  </div>

                  <div className="upcoming-meta">

                    <span>
                      <MdCalendarMonth />
                      {formattedSelectedDate}
                    </span>

                    <span>
                      <MdAccessTime />
                      {item.time}
                    </span>

                  </div>

                  <MdChevronRight className="upcoming-arrow" />

                </div>
              ))}

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}