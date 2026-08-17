"use client";

import { useMemo, useState } from "react";

import {
  MdChevronLeft,
  MdChevronRight,
  MdAdd,
  MdAccessTime,
  MdClose,
  MdKeyboardArrowRight,
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

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const initialEvents = [
  {
    id: 1,
    date: "2022-01-04",
    title: "UX Research",
    time: "10.00 AM",
    color: "red",
    category: "UI Design",
  },
  {
    id: 2,
    date: "2022-01-10",
    title: "UX Research",
    time: "10.00 AM",
    color: "yellow",
    category: "Research",
  },
  {
    id: 3,
    date: "2022-01-18",
    title: "UX Research",
    time: "10.00 AM",
    color: "red",
    category: "UI Design",
  },
  {
    id: 4,
    date: "2022-01-26",
    title: "UX Research",
    time: "10.00 AM",
    color: "green",
    category: "Research",
  },
];

const initialUpcoming = [
  {
    id: 1,
    date: "5",
    month: "Jan",
    title: "UX Research",
    time: "07.00 - 08.00 AM",
    color: "green",
  },
  {
    id: 2,
    date: "5",
    month: "Jan",
    title: "UX Research",
    time: "07.00 - 08.00 AM",
    color: "yellow",
  },
];

const tasks = [
  {
    id: 1,
    day: "Mon",
    time: "8 AM",
    title: "",
    color: "",
  },
  {
    id: 2,
    day: "Tue",
    time: "9 AM",
    title: "Meeting",
    color: "green",
  },
  {
    id: 3,
    day: "Wed",
    time: "10 AM",
    title: "",
    color: "",
  },
  {
    id: 4,
    day: "Thu",
    time: "11 AM",
    title: "Web Design",
    color: "yellow",
  },
  {
    id: 5,
    day: "Fri",
    time: "12 PM",
    title: "Evaluate",
    color: "red",
  },
  {
    id: 6,
    day: "Sat",
    time: "",
    title: "",
    color: "",
  },
  {
    id: 7,
    day: "Sun",
    time: "",
    title: "",
    color: "",
  },
];

export default function InstructorSchedulePage() {
  const [currentDate, setCurrentDate] = useState(
    new Date(2022, 0, 1)
  );

  const [selectedDate, setSelectedDate] =
    useState("2022-01-05");

  const [events, setEvents] =
    useState(initialEvents);

  const [upcomingSchedule, setUpcomingSchedule] =
    useState(initialUpcoming);

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [selectedTask, setSelectedTask] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [newTitle, setNewTitle] =
    useState("");

  const [newTime, setNewTime] =
    useState("10.00 AM");

  const [newColor, setNewColor] =
    useState("green");

  /*
   * =========================================
   * CURRENT MONTH DATA
   * =========================================
   */

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  // Sunday = 0
  // Calendar Monday se start hoga
  const mondayStartIndex =
    firstDay === 0
      ? 6
      : firstDay - 1;

  const calendarDays = useMemo(() => {
    const previousMonthDays = new Date(
      year,
      month,
      0
    ).getDate();

    const days = [];

    // Previous month dates
    for (
      let i = mondayStartIndex - 1;
      i >= 0;
      i--
    ) {
      days.push({
        day: previousMonthDays - i,
        currentMonth: false,
        date: null,
      });
    }

    // Current month
    for (
      let day = 1;
      day <= daysInMonth;
      day++
    ) {
      const dateString = `${year}-${String(
        month + 1
      ).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;

      days.push({
        day,
        currentMonth: true,
        date: dateString,
      });
    }

    // Next month
    let nextDay = 1;

    while (days.length < 42) {
      days.push({
        day: nextDay,
        currentMonth: false,
        date: null,
      });

      nextDay++;
    }

    return days;
  }, [
    year,
    month,
    daysInMonth,
    mondayStartIndex,
  ]);

  /*
   * =========================================
   * MONTH NAVIGATION
   * =========================================
   */

  const previousMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  };

  /*
   * =========================================
   * DATE CLICK
   * =========================================
   */

  const handleDateClick = (dayData) => {
    if (
      !dayData.currentMonth ||
      !dayData.date
    ) {
      return;
    }

    setSelectedDate(dayData.date);

    // Date click karne par popup nahi khulega.
    // Sirf selected date change hogi.
    setSelectedEvent(null);
  };

  /*
   * =========================================
   * ADD NEW SCHEDULE
   * =========================================
   */

  const openNewSchedule = () => {
    setNewTitle("");
    setNewTime("10.00 AM");
    setNewColor("green");

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNewSchedule = (event) => {
    event.preventDefault();

    if (!newTitle.trim()) {
      return;
    }

    const newEvent = {
      id: Date.now(),

      // Calendar me selected date par event add hoga
      date: selectedDate,

      title: newTitle.trim(),

      // Modal me jo time enter hoga wahi show hoga
      time: newTime,

      color: newColor,

      category: "New Schedule",
    };

    /*
     * IMPORTANT:
     *
     * Pehle yahan:
     *
     * setSelectedEvent(newEvent);
     *
     * tha.
     *
     * Isi wajah se Save karte hi Delete popup
     * open ho raha tha.
     *
     * Ab hum selectedEvent ko set nahi karenge.
     */

    setEvents((currentEvents) => [
      ...currentEvents,
      newEvent,
    ]);

    // Popup band rahega
    setSelectedEvent(null);

    // New Schedule modal close
    setShowModal(false);

    // Form reset
    setNewTitle("");
    setNewTime("10.00 AM");
    setNewColor("green");
  };

  /*
   * =========================================
   * TASK CLICK
   * =========================================
   */

  const handleTaskClick = (task) => {
    if (!task.title) {
      return;
    }

    setSelectedTask(task);
  };

  /*
   * =========================================
   * UPCOMING CLICK
   * =========================================
   */

  const handleUpcomingClick = (item) => {
    const event = events.find(
      (eventItem) =>
        eventItem.title === item.title
    );

    if (event) {
      setSelectedEvent(event);
      setSelectedDate(event.date);
    }
  };

  /*
   * =========================================
   * DELETE EVENT
   * =========================================
   */

  const deleteSelectedEvent = () => {
    if (!selectedEvent) {
      return;
    }

    setEvents((currentEvents) =>
      currentEvents.filter(
        (item) =>
          item.id !== selectedEvent.id
      )
    );

    // Delete ke baad popup close
    setSelectedEvent(null);
  };

  /*
   * =========================================
   * FORMAT DATE
   * =========================================
   */

  const formatSelectedDate = (dateString) => {
    if (!dateString) {
      return "";
    }

    const date = new Date(
      `${dateString}T00:00:00`
    );

    return date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <main className="schedule-page">

      <div className="schedule-layout">

        {/* =====================================
            MAIN CALENDAR
        ===================================== */}

        <section className="schedule-main-card">

          {/* HEADER */}

          <div className="schedule-topbar">

            <div className="month-navigation">

              <button
                type="button"
                className="month-arrow"
                onClick={previousMonth}
                aria-label="Previous month"
              >
                <MdChevronLeft />
              </button>

              <h1>
                {monthNames[month]}, {year}
              </h1>

              <button
                type="button"
                className="month-arrow"
                onClick={nextMonth}
                aria-label="Next month"
              >
                <MdChevronRight />
              </button>

            </div>

            <button
              type="button"
              className="new-schedule-button"
              onClick={openNewSchedule}
            >
              <MdAdd />
              New Schedule
            </button>

          </div>

          {/* WEEK DAYS */}

          <div className="calendar-weekdays">

            {weekDays.map((day) => (
              <div
                className="weekday"
                key={day}
              >
                {day}
              </div>
            ))}

          </div>

          {/* CALENDAR */}

          <div className="calendar-grid">

            {calendarDays.map(
              (dayData, index) => {

                /*
                 * IMPORTANT:
                 *
                 * Pehle find() tha jisse ek date par
                 * sirf ek event show hota tha.
                 *
                 * Ab filter() use kiya hai.
                 *
                 * Isse same date par multiple
                 * schedules bhi show honge.
                 */

                const dayEvents =
                  events.filter(
                    (event) =>
                      event.date ===
                      dayData.date
                  );

                const isSelected =
                  selectedDate ===
                  dayData.date;

                return (
                  <button
                    type="button"
                    key={`${dayData.date}-${index}`}
                    className={`
                      calendar-day
                      ${
                        !dayData.currentMonth
                          ? "outside"
                          : ""
                      }
                      ${
                        isSelected
                          ? "selected"
                          : ""
                      }
                    `}
                    onClick={() =>
                      handleDateClick(dayData)
                    }
                  >

                    <span className="day-number">
                      {dayData.day}
                    </span>

                    {/* ALL EVENTS FOR THIS DATE */}

                    {dayEvents.length > 0 && (
                      <div className="calendar-events">

                        {dayEvents.map(
                          (dayEvent) => (
                            <span
                              key={
                                dayEvent.id
                              }
                              className={`
                                calendar-event
                                ${dayEvent.color}
                              `}
                              onClick={(
                                event
                              ) => {

                                /*
                                 * Parent date button
                                 * ko click hone se roko
                                 */

                                event.stopPropagation();

                                /*
                                 * Sirf event click
                                 * hone par popup open
                                 */

                                setSelectedEvent(
                                  dayEvent
                                );

                                setSelectedDate(
                                  dayEvent.date
                                );
                              }}
                            >

                              <strong>
                                {
                                  dayEvent.title
                                }
                              </strong>

                              <small>
                                {
                                  dayEvent.time
                                }
                              </small>

                            </span>
                          )
                        )}

                      </div>
                    )}

                  </button>
                );
              }
            )}

          </div>

        </section>

        {/* =====================================
            RIGHT SIDEBAR
        ===================================== */}

        <aside className="schedule-sidebar">

          {/* =================================
              UPCOMING TASK
          ================================= */}

          <section className="upcoming-task-card">

            <h2>Upcoming Task</h2>

            <div className="task-hours">

              <span></span>

              <span>8 AM</span>

              <span>9 AM</span>

              <span>10 AM</span>

              <span>11 AM</span>

              <span>12 PM</span>

            </div>

            <div className="task-list">

              {tasks.map((task) => (

                <button
                  type="button"
                  key={task.id}
                  className="task-row"
                  onClick={() =>
                    handleTaskClick(task)
                  }
                >

                  <span className="task-day">
                    {task.day}
                  </span>

                  <span className="task-line">

                    {task.title && (
                      <span
                        className={`
                          task-pill
                          ${task.color}
                        `}
                      >
                        <b>•</b>

                        {task.title}
                      </span>
                    )}

                  </span>

                </button>

              ))}

            </div>

          </section>

          {/* =================================
              UPCOMING SCHEDULE
          ================================= */}

          <section className="upcoming-schedule-card">

            <h2>
              Upcoming Schedule
            </h2>

            <div className="upcoming-list">

              {upcomingSchedule.map(
                (item) => (

                  <button
                    type="button"
                    className={`
                      upcoming-item
                      ${item.color}
                    `}
                    key={item.id}
                    onClick={() =>
                      handleUpcomingClick(item)
                    }
                  >

                    <span className="upcoming-date">

                      <strong>
                        {item.date}
                      </strong>

                      <small>
                        {item.month}
                      </small>

                    </span>

                    <span className="upcoming-info">

                      <strong>
                        {item.title}
                      </strong>

                      <small>

                        <MdAccessTime />

                        {item.time}

                      </small>

                    </span>

                    <MdKeyboardArrowRight
                      className="upcoming-arrow"
                    />

                  </button>

                )
              )}

            </div>

          </section>

        </aside>

      </div>

      {/* =====================================
          SELECTED EVENT POPUP
      ===================================== */}

      {selectedEvent && (

        <div className="schedule-popup-overlay">

          <div className="schedule-popup">

            <button
              type="button"
              className="popup-close"
              onClick={() =>
                setSelectedEvent(null)
              }
            >
              <MdClose />
            </button>

            <span
              className={`
                popup-color
                ${selectedEvent.color}
              `}
            />

            <h2>
              {selectedEvent.title}
            </h2>

            <p>
              {selectedEvent.category}
            </p>

            <div className="popup-time">

              <MdAccessTime />

              {selectedEvent.time}

            </div>

            <p className="popup-date">
              {formatSelectedDate(
                selectedEvent.date
              )}
            </p>

            <button
              type="button"
              className="popup-delete"
              onClick={
                deleteSelectedEvent
              }
            >
              Delete Schedule
            </button>

          </div>

        </div>

      )}

      {/* =====================================
          TASK POPUP
      ===================================== */}

      {selectedTask && (

        <div className="schedule-popup-overlay">

          <div className="schedule-popup">

            <button
              type="button"
              className="popup-close"
              onClick={() =>
                setSelectedTask(null)
              }
            >
              <MdClose />
            </button>

            <h2>
              {selectedTask.title}
            </h2>

            <p>
              Upcoming Task
            </p>

            <div className="popup-time">

              <MdAccessTime />

              {selectedTask.time}

            </div>

            <button
              type="button"
              className="popup-ok"
              onClick={() =>
                setSelectedTask(null)
              }
            >
              Done
            </button>

          </div>

        </div>

      )}

      {/* =====================================
          NEW SCHEDULE MODAL
      ===================================== */}

      {showModal && (

        <div className="schedule-popup-overlay">

          <form
            className="new-schedule-modal"
            onSubmit={addNewSchedule}
          >

            <div className="modal-header">

              <h2>
                New Schedule
              </h2>

              <button
                type="button"
                onClick={closeModal}
              >
                <MdClose />
              </button>

            </div>

            {/* TITLE */}

            <label>

              Schedule Title

              <input
                type="text"
                value={newTitle}
                onChange={(event) =>
                  setNewTitle(
                    event.target.value
                  )
                }
                placeholder="Enter schedule title"
                required
              />

            </label>

            {/* TIME */}

            <label>

              Time

              <input
                type="text"
                value={newTime}
                onChange={(event) =>
                  setNewTime(
                    event.target.value
                  )
                }
                placeholder="10.00 AM"
              />

            </label>

            {/* COLOR */}

            <label>

              Color

              <select
                value={newColor}
                onChange={(event) =>
                  setNewColor(
                    event.target.value
                  )
                }
              >

                <option value="green">
                  Green
                </option>

                <option value="yellow">
                  Yellow
                </option>

                <option value="red">
                  Red
                </option>

              </select>

            </label>

            {/* SAVE */}

            <button
              type="submit"
              className="save-schedule"
            >
              Save Schedule
            </button>

          </form>

        </div>

      )}

    </main>
  );
}