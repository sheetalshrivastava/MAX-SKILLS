"use client";

import { useState } from "react";

import {
  MdMoreHoriz,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

import "./Profile.scss";

const courses = [
  {
    id: 1,
    name: "UI Design Beginner",
    progress: 80,
    completed: 90,
    total: 110,
    color: "green",
  },
  {
    id: 2,
    name: "UX Research",
    progress: 62,
    completed: 50,
    total: 80,
    color: "yellow",
  },
];

const weeklyData = {
  "This Week": {
    green: [40, 60, 50, 42, 30, 72, 80],
    yellow: [72, 55, 30, 65, 28, 15, 55],
    greenValue: "+32%",
    yellowValue: "+24%",
  },

  "Last Week": {
    green: [30, 50, 45, 38, 25, 60, 70],
    yellow: [65, 48, 25, 58, 35, 20, 48],
    greenValue: "+24%",
    yellowValue: "+18%",
  },
};

export default function ProfilePage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [period, setPeriod] = useState("This Week");
  const [periodOpen, setPeriodOpen] = useState(false);

  // Separate menus
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [chartMenuOpen, setChartMenuOpen] = useState(false);

  const [showCompleted, setShowCompleted] = useState(false);
  const [showProgressCourses, setShowProgressCourses] = useState(false);
  const [showProgressDetails, setShowProgressDetails] = useState(false);

  const data = weeklyData[period];

  /* =========================
     COMPLETED COURSES
  ========================= */

  const handleCompletedClick = () => {
    setShowCompleted((value) => !value);
    setShowProgressCourses(false);
    setSelectedCard(null);
  };

  /* =========================
     PROGRESS COURSES
  ========================= */

  const handleProgressClick = () => {
    setShowProgressCourses((value) => !value);
    setShowCompleted(false);
  };

  /* =========================
     COURSE CLICK
  ========================= */

  const handleCurrentCourse = (course) => {
    setSelectedCard(course);
    setShowCompleted(false);
    setShowProgressCourses(false);
  };

  /* =========================
     GRAPH POINTS
  ========================= */

  const getPoints = (values) => {
    const width = 700;
    const height = 220;

    const horizontalGap = width / (values.length - 1);

    return values
      .map((value, index) => {
        const x = index * horizontalGap;
        const y = height - (value / 100) * height;

        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <main className="profile-page">
      <div className="profile-grid">
        {/* =========================
            PROFILE CARD
        ========================= */}

        <section className="profile-card">
          <div className="profile-card-top">
            <div className="profile-avatar">
              <span>NV</span>
            </div>

            <button
              type="button"
              className="profile-menu-button"
              onClick={() =>
                setProfileMenuOpen((value) => !value)
              }
            >
              <MdMoreHoriz />
            </button>

            {profileMenuOpen && (
              <div className="profile-menu">
                <button type="button">
                  Edit Profile
                </button>

                <button type="button">
                  Account Settings
                </button>

                <button type="button">
                  Change Password
                </button>
              </div>
            )}
          </div>

          <h2>Nella Vita</h2>

          <p className="member-text">
            Member Since 2020
          </p>

          <div className="profile-stats">
            <div>
              <span>Points</span>
              <strong>2300</strong>
            </div>

            <div>
              <span>Certificate</span>
              <strong>50</strong>
            </div>
          </div>

          {/* ACHIEVEMENTS */}

          <div className="achievement-section">
            <h3>Achievements</h3>

            <div className="achievement-list">
              <span>🏆</span>
              <span>🧩</span>
              <span>🪐</span>
              <span>🎨</span>
              <span>♟️</span>
            </div>
          </div>

          {/* BIO */}

          <div className="bio-section">
            <h3>Bio</h3>

            <div className="bio-box">
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
              </p>

              <p>
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <section className="profile-right">
          {/* STAT CARDS */}

          <div className="stat-cards">
            {/* COMPLETED */}

            <button
              type="button"
              className="stat-card"
              onClick={handleCompletedClick}
            >
              <div className="stat-icon completed-icon">
                🎓
              </div>

              <div className="stat-info">
                <strong>100</strong>
                <span>Courses Completed</span>
              </div>

              <MdKeyboardArrowRight />
            </button>

            {/* IN PROGRESS */}

            <button
              type="button"
              className="stat-card"
              onClick={handleProgressClick}
            >
              <div className="stat-icon progress-icon">
                🕘
              </div>

              <div className="stat-info">
                <strong>34</strong>
                <span>Courses In Progress</span>
              </div>

              <MdKeyboardArrowRight />
            </button>
          </div>

          {/* =========================
              COMPLETED PANEL
          ========================= */}

          {showCompleted && (
            <div className="expand-panel">
              <div className="expand-panel-header">
                <div>
                  <h3>Completed Courses</h3>
                  <p>
                    You have completed 100 courses.
                  </p>
                </div>

                <span>100 Courses</span>
              </div>

              <div className="completed-list">
                <div>
                  <strong>
                    Full-Stack Web Developer
                  </strong>
                  <span>Completed</span>
                </div>

                <div>
                  <strong>
                    UI Design Beginner
                  </strong>
                  <span>Completed</span>
                </div>

                <div>
                  <strong>
                    JavaScript Masterclass
                  </strong>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          )}

          {/* =========================
              PROGRESS COURSES PANEL
          ========================= */}

          {showProgressCourses && (
            <div className="expand-panel">
              <div className="expand-panel-header">
                <div>
                  <h3>Courses In Progress</h3>
                  <p>
                    Continue learning your current
                    courses.
                  </p>
                </div>

                <span>34 Courses</span>
              </div>

              <div className="completed-list">
                <div>
                  <strong>
                    UI Design Beginner
                  </strong>

                  <span>80% completed</span>
                </div>

                <div>
                  <strong>
                    UX Research
                  </strong>

                  <span>62% completed</span>
                </div>

                <div>
                  <strong>
                    Fullstack Developer
                  </strong>

                  <span>50% completed</span>
                </div>
              </div>
            </div>
          )}

          {/* =========================
              CURRENT COURSES
          ========================= */}

          <div className="section-heading">
            <h2>Current Courses</h2>

            <button
              type="button"
              onClick={handleProgressClick}
            >
              View all
              <MdKeyboardArrowRight />
            </button>
          </div>

          <div className="current-courses">
            {courses.map((course) => (
              <button
                type="button"
                key={course.id}
                className="current-course-card"
                onClick={() =>
                  handleCurrentCourse(course)
                }
              >
                <div
                  className={`course-circle ${course.color}`}
                  style={{
                    "--progress": `${course.progress}%`,
                  }}
                >
                  <span>{course.progress}%</span>
                </div>

                <div className="course-info">
                  <small>Class</small>

                  <strong>{course.name}</strong>

                  <small>Total Courses</small>

                  <b>
                    {course.completed} /{" "}
                    {course.total}
                  </b>
                </div>

                <MdKeyboardArrowRight />
              </button>
            ))}
          </div>

          {/* =========================
              COURSE DETAIL
          ========================= */}

          {selectedCard && (
            <div className="course-detail-panel">
              <div>
                <h3>{selectedCard.name}</h3>

                <p>
                  You have completed{" "}
                  {selectedCard.progress}% of this
                  course.
                </p>
              </div>

              <div className="detail-progress">
                <span
                  style={{
                    width: `${selectedCard.progress}%`,
                  }}
                />
              </div>

              <div className="detail-footer">
                <span>
                  {selectedCard.completed} /{" "}
                  {selectedCard.total} lessons
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* =========================
              PROGRESS HEADER
          ========================= */}

          <div className="progress-header">
            <button
              type="button"
              className="progress-title-button"
              onClick={() =>
                setShowProgressDetails(
                  (value) => !value
                )
              }
            >
              <h2>Progress</h2>

              <MdKeyboardArrowDown
                className={
                  showProgressDetails
                    ? "arrow-up"
                    : ""
                }
              />
            </button>

            <div className="progress-actions">
              {/* PERIOD */}

              <div className="period-wrapper">
                <button
                  type="button"
                  className="period-button"
                  onClick={() =>
                    setPeriodOpen(
                      (value) => !value
                    )
                  }
                >
                  {period}
                  <MdKeyboardArrowDown />
                </button>

                {periodOpen && (
                  <div className="period-menu">
                    <button
                      type="button"
                      onClick={() => {
                        setPeriod("This Week");
                        setPeriodOpen(false);
                      }}
                    >
                      This Week
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPeriod("Last Week");
                        setPeriodOpen(false);
                      }}
                    >
                      Last Week
                    </button>
                  </div>
                )}
              </div>

              {/* THREE DOT */}

              <div className="chart-menu-wrapper">
                <button
                  type="button"
                  className="chart-menu-button"
                  onClick={() =>
                    setChartMenuOpen(
                      (value) => !value
                    )
                  }
                >
                  <MdMoreHoriz />
                </button>

                {chartMenuOpen && (
                  <div className="chart-menu">
                    <button type="button">
                      View Details
                    </button>

                    <button type="button">
                      Download Report
                    </button>

                    <button type="button">
                      Share Progress
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* =========================
              PROGRESS DETAILS
          ========================= */}

          {showProgressDetails && (
            <div className="progress-detail-box">
              <div>
                <strong>Weekly Progress</strong>
                <span>{period}</span>
              </div>

              <div>
                <strong>
                  {data.greenValue}
                </strong>
                <span>Learning Growth</span>
              </div>

              <div>
                <strong>12 Hours</strong>
                <span>Learning Time</span>
              </div>
            </div>
          )}

          {/* =========================
              GRAPH
          ========================= */}

          <div className="progress-card">
            <div className="chart-summary">
              <div className="summary-item">
                <span className="green-dot" />

                <div>
                  <small>This Week</small>

                  <strong>
                    {data.greenValue}
                  </strong>
                </div>
              </div>

              <div className="summary-item">
                <span className="yellow-dot" />

                <div>
                  <small>Last Week</small>

                  <strong className="yellow-text">
                    {data.yellowValue}
                  </strong>
                </div>
              </div>
            </div>

            <div className="chart-wrapper">
              <div className="y-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="chart-area">
                <div className="grid-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  className="progress-svg"
                  viewBox="0 0 700 220"
                  preserveAspectRatio="none"
                >
                  {/* GREEN LINE */}

                  <polyline
                    points={getPoints(data.green)}
                    fill="none"
                    stroke="#4cc4a8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* YELLOW LINE */}

                  <polyline
                    points={getPoints(data.yellow)}
                    fill="none"
                    stroke="#ffbd45"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* GREEN POINTS */}

                  {data.green.map((value, index) => {
                    const x =
                      index *
                      (700 / (data.green.length - 1));

                    const y =
                      220 -
                      (value / 100) * 220;

                    return (
                      <circle
                        key={`green-${index}`}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#4cc4a8"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                    );
                  })}

                  {/* YELLOW POINTS */}

                  {data.yellow.map((value, index) => {
                    const x =
                      index *
                      (700 / (data.yellow.length - 1));

                    const y =
                      220 -
                      (value / 100) * 220;

                    return (
                      <circle
                        key={`yellow-${index}`}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#ffbd45"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                    );
                  })}
                </svg>

                <div className="x-axis">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}