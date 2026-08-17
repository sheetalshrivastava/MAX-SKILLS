"use client";

import { useState } from "react";

import {
  MdChevronLeft,
  MdChevronRight,
  MdCalendarMonth,
  MdAccessTime,
} from "react-icons/md";

import "./Schedule.scss";

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

const upcomingSchedule = [
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

const todaySchedule = [
  {
    title: "UX Research",
    subtitle: "A/B Testing",
    time: "07:00 - 08:00 AM",
    color: "red",
  },
  {
    title: "UI Design Beginner",
    subtitle: "Wireframe",
    time: "08:00 - 09:00 AM",
    color: "green",
  },
  {
    title: "Fullstack Developer",
    subtitle: "FormRequest",
    time: "10:00 - 11:00 AM",
    color: "yellow",
  },
];

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

export default function SchedulePage() {
  /* =========================================
     SELECTED CALENDAR DATE
  ========================================= */

  const [calendarDate, setCalendarDate] = useState(
    new Date(2021, 0, 1)
  );

  const [selectedDay, setSelectedDay] = useState(5);

  const currentYear = calendarDate.getFullYear();
  const currentMonth = calendarDate.getMonth();

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

  /*
    Calendar ko Monday se start karne ke liye
  */
  const mondayStart =
    firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = [];

  for (let i = 0; i < mondayStart; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  /* =========================================
     SELECTED DATE
  ========================================= */

  const selectedDate = new Date(
    currentYear,
    currentMonth,
    selectedDay
  );

  const formattedSelectedDate =
    `${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`;

  const formattedShortDate =
    `${monthNames[currentMonth]} ${selectedDay}`;

  /* =========================================
     MONTH CHANGE
  ========================================= */

  const previousMonth = () => {
    const newDate = new Date(
      currentYear,
      currentMonth - 1,
      1
    );

    setCalendarDate(newDate);

    /*
      Previous month me selected date 5 rakhenge
    */
    setSelectedDay(5);
  };

  const nextMonth = () => {
    const newDate = new Date(
      currentYear,
      currentMonth + 1,
      1
    );

    setCalendarDate(newDate);

    /*
      Next month me selected date 5 rakhenge
    */
    setSelectedDay(5);
  };

  /* =========================================
     DATE SELECT
  ========================================= */

  const handleDateSelect = (day) => {
    if (!day) return;

    setSelectedDay(day);
  };

  return (
    <div className="schedule-content">
      <div className="schedule-grid">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="schedule-left">

          {/* =========================================
              ONGOING CLASS
          ========================================= */}

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

          {/* =========================================
              TODAY SCHEDULE
          ========================================= */}

          <div className="today-section">

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

                  <span>
                    {time}
                  </span>

                  <div className="timeline-line" />

                </div>

              ))}

              {/* =====================================
                  TODAY EVENTS
              ===================================== */}

              {todaySchedule.map((item) => (

                <div
                  className={`class-event ${item.color}`}
                  key={item.title}
                >

                  <div className="event-date">
                    <MdCalendarMonth />
                    {formattedSelectedDate}
                  </div>

                  <strong>
                    {item.title}
                  </strong>

                  <span>
                    {item.subtitle}
                  </span>

                  <small>
                    <MdAccessTime />
                    {item.time}
                  </small>

                  <div className="event-dots">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                </div>

              ))}

            </div>
          </div>

        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="schedule-right">

          {/* =========================================
              CALENDAR
          ========================================= */}

          <section>

            <h2>Calendar</h2>

            <div className="calendar-card">

              <div className="calendar-header">

                <button
                  type="button"
                  onClick={previousMonth}
                  aria-label="Previous month"
                >
                  <MdChevronLeft />
                </button>

                <strong>
                  {monthNames[currentMonth]}{" "}
                  {currentYear}
                </strong>

                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Next month"
                >
                  <MdChevronRight />
                </button>

              </div>

              <div className="calendar-grid">

                {/* DAYS */}

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

                {/* DATES */}

                {calendarDays.map(
                  (day, index) => (

                    <button
                      type="button"
                      key={
                        day
                          ? `date-${day}`
                          : `empty-${index}`
                      }
                      disabled={!day}
                      className={
                        day === selectedDay
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        handleDateSelect(day)
                      }
                    >
                      {day || ""}
                    </button>

                  )
                )}

              </div>

              {/* =====================================
                  MONTH PROGRESS
              ===================================== */}

              <div className="month-progress">

                <div className="progress-circle">
                  <span>+15%</span>
                </div>

                <small>
                  Your Progress this Month
                </small>

                <p>
                  Lorem ipsum dolor sit amet,
                  adipiscing elit.
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

          </section>

          {/* =========================================
              UPCOMING SCHEDULE
          ========================================= */}

          <section className="upcoming">

            <div className="upcoming-title">

              <div>
                <h2>
                  Upcoming Schedule
                </h2>

                <p>
                  {formattedSelectedDate}
                </p>
              </div>

              <button type="button">
                View all ›
              </button>

            </div>

            <div className="upcoming-list">

              {upcomingSchedule.map((item) => (

                <div
                  className={`upcoming-card ${item.color}`}
                  key={item.title}
                >

                  <div className="upcoming-info">

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      ◼ {item.teacher}
                    </small>

                  </div>

                  <div className="upcoming-meta">

                    {/* SELECTED DATE */}

                    <span
                      className={`schedule-date ${item.color}`}
                    >
                      <MdCalendarMonth />

                      {formattedSelectedDate}
                    </span>

                    {/* TIME */}

                    <span>
                      <MdAccessTime />

                      {item.time}
                    </span>

                  </div>

                  <MdChevronRight />

                </div>

              ))}

            </div>

          </section>

        </div>
      </div>
    </div>
  );
}