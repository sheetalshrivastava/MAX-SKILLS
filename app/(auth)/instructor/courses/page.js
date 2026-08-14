

"use client";

import { useState } from "react";

import {
  MdMenuBook,
  MdDescription,
  MdThumbUp,
  MdMoreHoriz,
  MdInsights,
  MdClose,
} from "react-icons/md";

import "./Courses.scss";

const weeklyData = {
  thisWeek: [
    { label: "W4", value: 170 },
    { label: "W3", value: 75 },
    { label: "W2", value: 70 },
    { label: "W1", value: 125 },
  ],
  lastWeek: [
    { label: "W4", value: 180 },
    { label: "W3", value: 85 },
    { label: "W2", value: 95 },
    { label: "W1", value: 130 },
  ],
};

const reviews = [
  {
    id: 1,
    name: "Karen Hope",
    rating: "★★★★★",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    id: 2,
    name: "Johnny Ahmad",
    rating: "★★★★★",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    id: 3,
    name: "Jordan Nico",
    rating: "★★★★★",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
];

const popularClasses = [
  {
    name: "Design",
    percentage: 27,
    count: 763,
    color: "yellow",
  },
  {
    name: "Programming",
    percentage: 50,
    count: 321,
    color: "red",
  },
  {
    name: "Science",
    percentage: 23,
    count: 69,
    color: "green",
  },
];

const topCourses = [
  {
    id: 1,
    category: "UI Design",
    count: "12.345",
    color: "green",
  },
  {
    id: 2,
    category: "Programming",
    count: "13.345",
    color: "yellow",
  },
];

export default function InstructorCoursesPage() {
  const [activeWeek, setActiveWeek] = useState("thisWeek");
  const [activeView, setActiveView] = useState("selling");

  const [openMenu, setOpenMenu] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [menuMessage, setMenuMessage] = useState("");

  const handleMenu = (menu) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  const handleMenuAction = (message) => {
    setMenuMessage(message);
    setOpenMenu(null);
  };

  const closeDetails = () => {
    setSelectedCard(null);
  };

  return (
    <main className="courses-page">
      <div className="courses-layout">
        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <div className="courses-left-column">
          {/* TOP STAT CARDS */}

          <section className="course-stat-grid">
            {/* TOTAL COURSES */}

            <button
              type="button"
              className="course-stat-card green-card"
              onClick={() => setSelectedCard("courses")}
            >
              <div className="stat-icon">
                <MdMenuBook />
              </div>

              <div className="stat-content">
                <strong>23,940</strong>
                <span>Total Courses</span>
              </div>

              <div className="stat-circle">
                <span />
              </div>
            </button>

            {/* COURSE CONTENT */}

            <button
              type="button"
              className="course-stat-card yellow-card"
              onClick={() => setSelectedCard("content")}
            >
              <div className="stat-icon">
                <MdDescription />
              </div>

              <div className="stat-content">
                <strong>32,567</strong>
                <span>Courses Content</span>
              </div>

              <div className="stat-circle">
                <span />
              </div>
            </button>

            {/* REVIEW */}

            <button
              type="button"
              className="course-stat-card red-card"
              onClick={() => setSelectedCard("review")}
            >
              <div className="stat-icon">
                <MdThumbUp />
              </div>

              <div className="stat-content">
                <strong>94,230</strong>
                <span>Review</span>
              </div>

              <div className="stat-circle">
                <span />
              </div>
            </button>
          </section>

          {/* CARD DETAIL */}

          {selectedCard && (
            <div className="course-card-detail">
              <div>
                <strong>
                  {selectedCard === "courses"
                    ? "Total Courses"
                    : selectedCard === "content"
                    ? "Courses Content"
                    : "Reviews"}
                </strong>

                <p>
                  {selectedCard === "courses"
                    ? "There are currently 23,940 total courses."
                    : selectedCard === "content"
                    ? "There are currently 32,567 course contents."
                    : "There are currently 94,230 reviews."}
                </p>
              </div>

              <button type="button" onClick={closeDetails}>
                <MdClose />
              </button>
            </div>
          )}

          {/* =====================================
              SELLING ACTIVITY
          ===================================== */}

          <section className="selling-card">
            <div className="selling-header">
              <h2>Selling Activity</h2>

              <div className="selling-controls">
                {/* THIS WEEK / LAST WEEK */}

                <div className="week-toggle">
                  <button
                    type="button"
                    className={activeWeek === "thisWeek" ? "active" : ""}
                    onClick={() => setActiveWeek("thisWeek")}
                  >
                    <span className="green-dot" />
                    This Week
                  </button>

                  <button
                    type="button"
                    className={activeWeek === "lastWeek" ? "active" : ""}
                    onClick={() => setActiveWeek("lastWeek")}
                  >
                    <span className="yellow-dot" />
                    Last Week
                  </button>
                </div>

                {/* INSIGHT / SELLING */}

                <div className="view-toggle">
                  <button
                    type="button"
                    className={activeView === "insight" ? "active" : ""}
                    onClick={() => setActiveView("insight")}
                  >
                    Insight
                  </button>

                  <button
                    type="button"
                    className={activeView === "selling" ? "active" : ""}
                    onClick={() => setActiveView("selling")}
                  >
                    Selling
                  </button>
                </div>
              </div>
            </div>

            <div className="activity-info">
              <MdInsights />

              <span>
                {activeView === "selling"
                  ? activeWeek === "thisWeek"
                    ? "This Week Selling"
                    : "Last Week Selling"
                  : activeWeek === "thisWeek"
                  ? "This Week Insight"
                  : "Last Week Insight"}
              </span>
            </div>

            {/* CHART */}

            <div className="selling-chart">
              <div className="selling-y-axis">
                <span>W4</span>
                <span>W3</span>
                <span>W2</span>
                <span>W1</span>
              </div>

              <div className="selling-chart-area">
                <div className="selling-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="selling-bars">
                  {weeklyData[activeWeek].map((item, index) => {
                    const lastWeekValue =
                      weeklyData.lastWeek[index].value;

                    const currentValue =
                      activeView === "selling"
                        ? item.value
                        : Math.round(item.value * 0.78);

                    const comparisonValue =
                      activeView === "selling"
                        ? lastWeekValue
                        : Math.round(lastWeekValue * 0.7);

                    return (
                      <div className="selling-row" key={item.label}>
                        <div className="bar-pair">
                          <span
                            className="this-week-bar"
                            style={{
                              width: `${(currentValue / 280) * 100}%`,
                            }}
                          />

                          <span
                            className="last-week-bar"
                            style={{
                              width: `${(comparisonValue / 280) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="selling-x-axis">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                  <span>125</span>
                  <span>150</span>
                  <span>175</span>
                  <span>200</span>
                  <span>225</span>
                  <span>250</span>
                  <span>275</span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================
              USER REVIEWS
          ===================================== */}

          <section className="reviews-section">
            <div className="section-title">
              <h2>User Reviews</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.id}>
                  <div className="review-user">
                    <div className="review-avatar" />

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.rating}</span>
                    </div>
                  </div>

                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* =====================================
            RIGHT SIDE
        ===================================== */}

        <aside className="courses-right-column">
          {/* =====================================
              POPULAR CLASS
          ===================================== */}

          <section className="popular-card">
            <div className="right-card-header">
              <h2>Popular Class</h2>

              <button
                type="button"
                onClick={() => handleMenu("popular")}
                aria-label="Popular class menu"
              >
                <MdMoreHoriz />
              </button>

              {openMenu === "popular" && (
                <div className="right-menu">
                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Showing all popular classes")
                    }
                  >
                    View Classes
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Add Class selected")
                    }
                  >
                    Add Class
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Class Settings selected")
                    }
                  >
                    Class Settings
                  </button>
                </div>
              )}
            </div>

            {/* DONUT */}

            <div className="donut-wrapper">
              <div className="donut-chart">
                <div className="donut-center">
                  <span />
                </div>

                <span className="donut-label label-yellow">
                  27%
                </span>

                <span className="donut-label label-red">
                  50%
                </span>

                <span className="donut-label label-green">
                  23%
                </span>
              </div>
            </div>

            {/* LEGEND */}

            <div className="popular-list">
              {popularClasses.map((item) => (
                <div className="popular-item" key={item.name}>
                  <span
                    className={`popular-color ${item.color}`}
                  />

                  <span className="popular-name">
                    {item.name} ({item.percentage}%)
                  </span>

                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================
              TOP COURSES
          ===================================== */}

          <section className="top-courses-card">
            <div className="right-card-header">
              <h2>Top Courses</h2>

              <button
                type="button"
                onClick={() => handleMenu("top")}
                aria-label="Top courses menu"
              >
                <MdMoreHoriz />
              </button>

              {openMenu === "top" && (
                <div className="right-menu">
                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Showing all courses")
                    }
                  >
                    View Courses
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Add Course selected")
                    }
                  >
                    Add Course
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleMenuAction("Course Settings selected")
                    }
                  >
                    Course Settings
                  </button>
                </div>
              )}
            </div>

            <div className="top-course-list">
              {topCourses.map((course) => (
                <button
                  type="button"
                  className="top-course-item"
                  key={course.id}
                  onClick={() => setSelectedCard(course.category)}
                >
                  <div
                    className={`top-course-icon ${course.color}`}
                  >
                    <MdMenuBook />
                  </div>

                  <div className="top-course-info">
                    <small>{course.category}</small>
                    <strong>{course.count}</strong>
                  </div>

                  <div className="mini-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </button>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* MENU ACTION MESSAGE */}

      {menuMessage && (
        <div className="menu-message">
          <span>{menuMessage}</span>

          <button
            type="button"
            onClick={() => setMenuMessage("")}
          >
            <MdClose />
          </button>
        </div>
      )}
    </main>
  );
}