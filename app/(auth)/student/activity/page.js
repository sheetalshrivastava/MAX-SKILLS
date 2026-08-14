"use client";

import { useState } from "react";

import {
  MdMoreHoriz,
  MdKeyboardArrowDown,
  MdDescription,
  MdClose,
} from "react-icons/md";

import "./Activity.scss";

const activities = {
  today: [
    {
      id: 1,
      time: "10:10 AM",
      initials: "KH",
      color: "pink",
      name: "Karen Hope",
      action: "attached 2 files to",
      target: "Graphic Design Courses",
      targetColor: "orange",
      type: "Files",
      files: [
        {
          name: "Module1_GraphicDesign.doc",
          size: "1.5 MB",
        },
        {
          name: "Module2_GraphicDesign.doc",
          size: "1.5 MB",
        },
      ],
    },
    {
      id: 2,
      time: "09:30 AM",
      initials: "JN",
      color: "yellow",
      name: "Jordan Nico",
      action: "has invited you to",
      target: "Graphic Design Group Chat",
      targetColor: "orange",
      type: "Groups",
    },
    {
      id: 3,
      time: "09:10 AM",
      initials: "JA",
      color: "blue",
      name: "Johnny Ahmad",
      action: "accepted your invitation to",
      target: "Fullstack Developer Courses",
      targetColor: "green",
      type: "Courses",
    },
    {
      id: 4,
      time: "08:45 AM",
      initials: "SW",
      color: "green",
      name: "Samantha William",
      action: "removed you from",
      target: "UI Design Courses groups chat",
      targetColor: "red",
      type: "Groups",
    },
  ],

  yesterday: [
    {
      id: 5,
      time: "12:10 AM",
      initials: "NA",
      color: "red",
      name: "Nadila Adja",
      action: "mentioned you in discussion chat in",
      target: "UX Researcher Courses",
      targetColor: "blue",
      type: "Discussion",
    },
    {
      id: 6,
      time: "10:40 AM",
      initials: "TS",
      color: "dark",
      name: "Tony Soap",
      action: "has commented on your topic in",
      target: "Graphic Design Group Chat",
      targetColor: "green",
      type: "Discussion",
    },
    {
      id: 7,
      time: "08:10 AM",
      initials: "DH",
      color: "blue",
      name: "Dulla Hann",
      action: "joined",
      target: "Graphic Design Courses",
      targetColor: "blue",
      type: "Courses",
    },
  ],
};

const filterOptions = [
  "All Type",
  "Courses",
  "Groups",
  "Discussion",
  "Files",
];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("following");
  const [filter, setFilter] = useState("All Type");
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filterActivities = (items) => {
    if (filter === "All Type") {
      return items;
    }

    return items.filter((item) => item.type === filter);
  };

  const todayActivities = filterActivities(activities.today);
  const yesterdayActivities = filterActivities(activities.yesterday);

  const handleFilter = (value) => {
    setFilter(value);
    setFilterOpen(false);
  };

  const handleMenuAction = (action) => {
    setMenuOpen(false);

    if (action === "clear") {
      setSelectedActivity(null);
    }

    if (action === "mark") {
      alert("All activities marked as read.");
    }
  };

  const renderActivity = (item) => {
    return (
      <div className="activity-item" key={item.id}>
        <div className="activity-time">
          {item.time}
        </div>

        <div className="activity-line">
          <span />
        </div>

        <div className={`activity-avatar ${item.color}`}>
          {item.initials}
        </div>

        <div className="activity-content">
          <div className="activity-text">
            <strong>{item.name}</strong>{" "}
            <span>{item.action} </span>

            <button
              type="button"
              className={`activity-target ${item.targetColor}`}
              onClick={() => setSelectedActivity(item)}
            >
              {item.target}
            </button>
          </div>

          {item.files && (
            <div className="activity-files">
              {item.files.map((file) => (
                <button
                  type="button"
                  className="file-card"
                  key={file.name}
                  onClick={() => setSelectedActivity(item)}
                >
                  <span className="file-icon">
                    <MdDescription />
                  </span>

                  <span className="file-info">
                    <strong>{file.name}</strong>
                    <small>{file.size}</small>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <main className="activity-page">
      {/* TOP BAR */}
      <div className="activity-toolbar">
        {/* TABS */}
        <div className="activity-tabs">
          <button
            type="button"
            className={activeTab === "following" ? "active" : ""}
            onClick={() => setActiveTab("following")}
          >
            Following
            {activeTab === "following" && (
              <span className="tab-dot" />
            )}
          </button>

          <button
            type="button"
            className={activeTab === "you" ? "active" : ""}
            onClick={() => setActiveTab("you")}
          >
            You
          </button>
        </div>

        {/* FILTER */}
        <div className="toolbar-actions">
          <span className="view-label">
            View:
          </span>

          <div className="filter-wrapper">
            <button
              type="button"
              className="filter-button"
              onClick={() =>
                setFilterOpen((value) => !value)
              }
            >
              <span>{filter}</span>
              <MdKeyboardArrowDown
                className={filterOpen ? "rotate" : ""}
              />
            </button>

            {filterOpen && (
              <div className="filter-menu">
                {filterOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={
                      filter === option ? "selected" : ""
                    }
                    onClick={() =>
                      handleFilter(option)
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* THREE DOTS */}
          <div className="more-wrapper">
            <button
              type="button"
              className="more-button"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label="More options"
            >
              <MdMoreHoriz />
            </button>

            {menuOpen && (
              <div className="more-menu">
                <button
                  type="button"
                  onClick={() =>
                    handleMenuAction("mark")
                  }
                >
                  Mark all as read
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleMenuAction("clear")
                  }
                >
                  Clear selection
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Settings
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ACTIVITY CONTENT */}
      <div className="activity-content-area">
        {activeTab === "following" ? (
          <>
            {/* TODAY */}
            <section className="activity-section">
              <h2>Today</h2>

              {todayActivities.length > 0 ? (
                todayActivities.map(renderActivity)
              ) : (
                <div className="empty-activity">
                  No activities found for this type.
                </div>
              )}
            </section>

            {/* YESTERDAY */}
            {yesterdayActivities.length > 0 && (
              <section className="activity-section">
                <h2>Yesterday</h2>

                {yesterdayActivities.map(renderActivity)}
              </section>
            )}
          </>
        ) : (
          /* YOU TAB */
          <section className="activity-section">
            <h2>You</h2>

            <div className="you-activity">
              <div className="you-icon">Y</div>

              <div>
                <strong>You</strong>
                <p>
                  Your recent activities will appear here.
                </p>
              </div>
            </div>

            <div className="you-activity">
              <div className="you-icon green">✓</div>

              <div>
                <strong>Course Activity</strong>
                <p>
                  You recently interacted with your
                  courses.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* DETAIL POPUP */}
      {selectedActivity && (
        <div
          className="activity-modal-overlay"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="activity-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Activity Details</h3>

              <button
                type="button"
                onClick={() =>
                  setSelectedActivity(null)
                }
              >
                <MdClose />
              </button>
            </div>

            <div className="modal-user">
              <div
                className={`activity-avatar ${selectedActivity.color}`}
              >
                {selectedActivity.initials}
              </div>

              <div>
                <strong>
                  {selectedActivity.name}
                </strong>

                <p>
                  {selectedActivity.action}{" "}
                  {selectedActivity.target}
                </p>
              </div>
            </div>

            {selectedActivity.files && (
              <div className="modal-files">
                <h4>Attached Files</h4>

                {selectedActivity.files.map((file) => (
                  <div
                    className="modal-file"
                    key={file.name}
                  >
                    <MdDescription />

                    <div>
                      <strong>{file.name}</strong>
                      <small>{file.size}</small>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              className="modal-close"
              onClick={() =>
                setSelectedActivity(null)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}