"use client";

import { useMemo, useState } from "react";
import {
  MdMoreHoriz,
  MdSearch,
  MdPeople,
  MdClose,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import "./Students.scss";

const studentsData = [
  {
    id: 1,
    name: "Samantha William",
    studentId: "1234567890",
    rollNumber: "ST-1001",
    course: "UI Design Courses",
    joinDate: "January 2, 2020",
    status: "Completed",
    address: "12 Green Street",
    city: "New York",
    role: "Student",
    email: "samantha@example.com",
  },
  {
    id: 2,
    name: "Jordan Nico",
    studentId: "1234567890",
    rollNumber: "ST-1002",
    course: "Fullstack Developer",
    joinDate: "January 2, 2020",
    status: "On Progress",
    address: "25 King Road",
    city: "London",
    role: "Student",
    email: "jordan@example.com",
  },
  {
    id: 3,
    name: "Nadila Adja",
    studentId: "1234567890",
    rollNumber: "ST-1003",
    course: "UX Research",
    joinDate: "January 2, 2020",
    status: "No Progress",
    address: "18 Main Avenue",
    city: "Paris",
    role: "Student",
    email: "nadila@example.com",
  },
  {
    id: 4,
    name: "Johnny Ahmad",
    studentId: "1234567891",
    rollNumber: "ST-1004",
    course: "Graphic Design",
    joinDate: "March 12, 2021",
    status: "Completed",
    address: "42 Lake Street",
    city: "Toronto",
    role: "Student",
    email: "johnny@example.com",
  },
  {
    id: 5,
    name: "Karen Hope",
    studentId: "1234567892",
    rollNumber: "ST-1005",
    course: "Web Development",
    joinDate: "June 8, 2021",
    status: "On Progress",
    address: "11 Park Avenue",
    city: "Chicago",
    role: "Student",
    email: "karen@example.com",
  },
];

const activityData = [
  { day: "01", lastWeek: 25, thisWeek: 42 },
  { day: "02", lastWeek: 35, thisWeek: 58 },
  { day: "03", lastWeek: 48, thisWeek: 72 },
  { day: "04", lastWeek: 68, thisWeek: 45 },
  { day: "05", lastWeek: 55, thisWeek: 82 },
  { day: "06", lastWeek: 38, thisWeek: 64 },
  { day: "07", lastWeek: 72, thisWeek: 50 },
  { day: "08", lastWeek: 48, thisWeek: 76 },
  { day: "09", lastWeek: 35, thisWeek: 60 },
  { day: "10", lastWeek: 65, thisWeek: 85 },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getStatusClass(status) {
  if (status === "Completed") return "completed";
  if (status === "On Progress") return "progress";
  return "no-progress";
}

export default function InstructorStudentsPage() {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [activeActivity, setActiveActivity] = useState(null);

  const [page, setPage] = useState(1);

  const filteredStudents = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return studentsData;
    }

    return studentsData.filter((student) => {
      return (
        student.name.toLowerCase().includes(value) ||
        student.studentId.toLowerCase().includes(value) ||
        student.course.toLowerCase().includes(value) ||
        student.status.toLowerCase().includes(value)
      );
    });
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleMenu = (id) => {
    setOpenMenu((current) => (current === id ? null : id));
  };

  const handleProfile = (student) => {
    setSelectedStudent(student);
    setOpenMenu(null);
  };

  const closeProfile = () => {
    setSelectedStudent(null);
  };

  return (
    <main className="students-page">
      {/* =====================================
          TOP CARDS
      ====================================== */}

      <section className="students-top-cards">
        <div className="total-students-card">
          <div className="total-icon">
            <MdPeople />
          </div>

          <div className="total-info">
            <strong>43.322</strong>
            <span>Total Students</span>
          </div>

          <div className="student-mini-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* NEW USERS */}

        <div className="new-users-card">
          <div>
            <h3>New Users</h3>

            <strong>+12.890</strong>

            <span className="increase">
              ● +15%
            </span>
          </div>

          <svg
            className="new-user-chart"
            viewBox="0 0 150 90"
            preserveAspectRatio="none"
          >
            <path
              d="M0 68 C10 30, 15 75, 25 40 S40 70, 50 55 S62 10, 72 40 S85 78, 95 30 S112 5, 120 50 S138 65, 150 18"
              fill="none"
              stroke="#4cc4a8"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* STUDENT ACTIVITY */}

        <div className="student-activity-card">
          <div className="activity-top">
            <h3>Students Activity</h3>

            <div className="activity-options">
              <span>
                <i className="yellow-dot" />
                Last Week
              </span>

              <span>
                <i className="green-dot" />
                This Week
              </span>

              <button type="button">
                <MdMoreHoriz />
              </button>
            </div>
          </div>

          <div className="activity-chart">
            <div className="activity-y-axis">
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            <div className="activity-graph">
              <div className="horizontal-line line-1" />
              <div className="horizontal-line line-2" />
              <div className="horizontal-line line-3" />

              <div className="vertical-lines">
                {activityData.map((item) => (
                  <span key={item.day} />
                ))}
              </div>

              <svg
                className="activity-svg"
                viewBox="0 0 600 150"
                preserveAspectRatio="none"
              >
                <polyline
                  points="
                    0,112
                    65,88
                    130,55
                    195,70
                    260,38
                    325,65
                    390,32
                    455,72
                    520,50
                    600,68
                  "
                  fill="none"
                  stroke="#ffbd45"
                  strokeWidth="3"
                />

                <polyline
                  points="
                    0,112
                    65,72
                    130,50
                    195,65
                    260,90
                    325,42
                    390,62
                    455,28
                    520,72
                    600,38
                  "
                  fill="none"
                  stroke="#4cc4a8"
                  strokeWidth="3"
                />
              </svg>

              {/* HOVER POINTS */}

              <div className="activity-points">
                {activityData.map((item, index) => (
                  <button
                    type="button"
                    key={item.day}
                    className={`activity-point point-${index}`}
                    onMouseEnter={() => setActiveActivity(index)}
                    onMouseLeave={() => setActiveActivity(null)}
                    aria-label={`Activity ${item.day}`}
                  >
                    {activeActivity === index && (
                      <div className="activity-tooltip">
                        <strong>{item.day} This Month</strong>

                        <div>
                          <span className="tooltip-green" />
                          This Week
                          <b>{item.thisWeek}</b>
                        </div>

                        <div>
                          <span className="tooltip-yellow" />
                          Last Week
                          <b>{item.lastWeek}</b>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          STUDENT LIST
      ====================================== */}

      <section className="students-list-section">
        <div className="students-list-header">
          <h2>Students List</h2>

          <div className="student-search">
            <MdSearch />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
        </div>

        <div className="students-table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>Name ↕</th>
                <th>Student ID ↕</th>
                <th>Courses ↕</th>
                <th>Join Date ↕</th>
                <th>Status ↕</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="student-name">
                      <div className="student-avatar">
                        {getInitials(student.name)}
                      </div>

                      <strong>{student.name}</strong>
                    </div>
                  </td>

                  <td>{student.studentId}</td>

                  <td>{student.course}</td>

                  <td>{student.joinDate}</td>

                  <td>
                    <span
                      className={`student-status ${getStatusClass(
                        student.status
                      )}`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <div className="student-actions">
                      <button
                        type="button"
                        onClick={() => handleMenu(student.id)}
                        aria-label={`Options for ${student.name}`}
                      >
                        <MdMoreHoriz />
                      </button>

                      {openMenu === student.id && (
                        <div className="student-menu">
                          <button
                            type="button"
                            onClick={() => handleProfile(student)}
                          >
                            View Profile
                          </button>

                          <button
                            type="button"
                            onClick={() => setOpenMenu(null)}
                          >
                            Edit Student
                          </button>

                          <button
                            type="button"
                            onClick={() => setOpenMenu(null)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="6">
                    <div className="no-student">
                      No student found
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="students-footer">
          <span>
            Showing {filteredStudents.length > 0 ? 1 : 0}-
            {filteredStudents.length} from {studentsData.length} data
          </span>

          <div className="pagination">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              <MdKeyboardArrowLeft />
            </button>

            <button
              type="button"
              className={page === 1 ? "active" : ""}
              onClick={() => setPage(1)}
            >
              1
            </button>

            <button
              type="button"
              className={page === 2 ? "active" : ""}
              onClick={() => setPage(2)}
            >
              2
            </button>

            <button
              type="button"
              className={page === 3 ? "active" : ""}
              onClick={() => setPage(3)}
            >
              3
            </button>

            <button
              type="button"
              onClick={() => setPage((current) => Math.min(3, current + 1))}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          PROFILE MODAL
      ====================================== */}

      {selectedStudent && (
        <div className="profile-overlay" onClick={closeProfile}>
          <div
            className="student-profile"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="profile-close"
              onClick={closeProfile}
              aria-label="Close profile"
            >
              <MdClose />
            </button>

            <div className="profile-top">
              <div className="profile-avatar">
                {getInitials(selectedStudent.name)}
              </div>

              <div>
                <h2>{selectedStudent.name}</h2>

                <span>{selectedStudent.role}</span>
              </div>
            </div>

            <div className="profile-details">
              <div>
                <small>Student ID</small>
                <strong>{selectedStudent.studentId}</strong>
              </div>

              <div>
                <small>Roll Number</small>
                <strong>{selectedStudent.rollNumber}</strong>
              </div>

              <div>
                <small>Email</small>
                <strong>{selectedStudent.email}</strong>
              </div>

              <div>
                <small>Course</small>
                <strong>{selectedStudent.course}</strong>
              </div>

              <div>
                <small>Address</small>
                <strong>{selectedStudent.address}</strong>
              </div>

              <div>
                <small>City</small>
                <strong>{selectedStudent.city}</strong>
              </div>

              <div>
                <small>Join Date</small>
                <strong>{selectedStudent.joinDate}</strong>
              </div>

              <div>
                <small>Status</small>

                <strong
                  className={`profile-status ${getStatusClass(
                    selectedStudent.status
                  )}`}
                >
                  {selectedStudent.status}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}