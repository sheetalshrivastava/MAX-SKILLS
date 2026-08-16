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

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(5);

  // Selected date ko readable format me convert karna
  const selectedDate = `January ${selectedDay}, 2021`;

  return (
    <div className="schedule-content">
      <div className="schedule-grid">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="schedule-left">

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
                  <strong>{item.title}</strong>

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

          {/* =========================
              TODAY SCHEDULE
          ========================= */}

          <div className="today-section">

            <h2>Today Schedule</h2>

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
                  <span>{time}</span>

                  <div className="timeline-line" />
                </div>
              ))}

              <div className="class-event red">
                <strong>UX Research</strong>
                <span>A/B Testing</span>

                <div className="event-dots">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="class-event green">
                <strong>UI Design Beginner</strong>
                <span>Wireframe</span>

                <div className="event-dots">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="class-event yellow">
                <strong>Fullstack Developer</strong>
                <span>FormRequest</span>

                <div className="event-dots">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="schedule-right">

          {/* =========================
              CALENDAR
          ========================= */}

          <section>

            <h2>Calendar</h2>

            <div className="calendar-card">

              <div className="calendar-header">

                <button type="button">
                  <MdChevronLeft />
                </button>

                <strong>January</strong>

                <button type="button">
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

                {Array.from(
                  { length: 31 },
                  (_, index) => index + 1
                ).map((day) => (
                  <button
                    type="button"
                    key={day}
                    className={
                      selectedDay === day
                        ? "selected"
                        : day === 17
                        ? "orange"
                        : ""
                    }
                    onClick={() => {
                      setSelectedDay(day);
                    }}
                  >
                    {day}
                  </button>
                ))}

              </div>

              {/* MONTH PROGRESS */}

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

          {/* =========================
              UPCOMING SCHEDULE
          ========================= */}

          <section className="upcoming">

            <div className="upcoming-title">

              <h2>Upcoming Schedule</h2>

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

                    {/* SELECTED CALENDAR DATE */}

                    <span>
                      <MdCalendarMonth />

                      {selectedDate}
                    </span>

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