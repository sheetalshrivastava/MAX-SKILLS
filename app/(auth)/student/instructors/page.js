"use client";

import { useState } from "react";

import {
  MdMoreHoriz,
  MdClose,
  MdChat,
  MdPerson,
  MdArrowBack,
  MdArrowForward,
  MdSchool,
  MdWorkspacePremium,
  MdSend,
  MdAttachFile,
  MdPhone,
  MdVideocam,
  MdCalendarMonth,
  MdMenuBook,
  MdEmojiEvents,
  MdFavorite,
  MdFavoriteBorder,
  MdSchedule,
  MdArrowBackIosNew,
} from "react-icons/md";

import "./Instructor.scss";

const instructors = [
  {
    id: 1,
    name: "Samantha William",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "UI Design Basic",
    experience: "8 Years",
    students: "2.4k",
  },
  {
    id: 2,
    name: "Nadila Adja",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "UI/UX Design",
    experience: "7 Years",
    students: "2.1k",
  },
  {
    id: 3,
    name: "Johnny Ahmad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "Web Development",
    experience: "9 Years",
    students: "3.2k",
  },
  {
    id: 4,
    name: "Angelina Crispy",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "Graphic Design",
    experience: "6 Years",
    students: "1.8k",
  },
  {
    id: 5,
    name: "Tony Soap",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "Frontend Development",
    experience: "8 Years",
    students: "2.8k",
  },
  {
    id: 6,
    name: "Jordan Nico",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: "5.0",
    reviews: "1k",
    tags: ["Design", "Tech", "Research"],
    achievement: 100,
    certificate: 50,
    className: "3D Character Design",
    experience: "5 Years",
    students: "1.5k",
  },

  {
    id: 7,
    name: "Karen Hope",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    rating: "5.0",
    reviews: "900",
    tags: ["Design", "Tech", "Research"],
    achievement: 95,
    certificate: 48,
    className: "UI Design Beginner",
    experience: "6 Years",
    students: "1.9k",
  },
  {
    id: 8,
    name: "Alex Morgan",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: "5.0",
    reviews: "850",
    tags: ["Design", "Tech", "Research"],
    achievement: 98,
    certificate: 49,
    className: "React Development",
    experience: "7 Years",
    students: "2.5k",
  },
  {
    id: 9,
    name: "Sarah Wilson",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: "5.0",
    reviews: "800",
    tags: ["Design", "Tech", "Research"],
    achievement: 96,
    certificate: 47,
    className: "Next.js Development",
    experience: "6 Years",
    students: "2.2k",
  },
  {
    id: 10,
    name: "Robert Smith",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: "5.0",
    reviews: "750",
    tags: ["Design", "Tech", "Research"],
    achievement: 94,
    certificate: 46,
    className: "JavaScript Masterclass",
    experience: "8 Years",
    students: "2.7k",
  },
  {
    id: 11,
    name: "Cahaya Khairi",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: "5.0",
    reviews: "700",
    tags: ["Design", "Tech", "Research"],
    achievement: 92,
    certificate: 45,
    className: "UX Research",
    experience: "5 Years",
    students: "1.7k",
  },
  {
    id: 12,
    name: "Jack Anderson",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: "5.0",
    reviews: "650",
    tags: ["Design", "Tech", "Research"],
    achievement: 90,
    certificate: 44,
    className: "Freelancing Basics",
    experience: "5 Years",
    students: "1.4k",
  },

  {
    id: 13,
    name: "Sofia Martin",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: "5.0",
    reviews: "600",
    tags: ["Design", "Tech", "Research"],
    achievement: 90,
    certificate: 43,
    className: "Product Design",
    experience: "6 Years",
    students: "1.6k",
  },
  {
    id: 14,
    name: "Daniel Lee",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: "5.0",
    reviews: "580",
    tags: ["Design", "Tech", "Research"],
    achievement: 89,
    certificate: 42,
    className: "Backend Development",
    experience: "8 Years",
    students: "2.3k",
  },
  {
    id: 15,
    name: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: "5.0",
    reviews: "560",
    tags: ["Design", "Tech", "Research"],
    achievement: 88,
    certificate: 41,
    className: "Digital Marketing",
    experience: "6 Years",
    students: "1.9k",
  },
  {
    id: 16,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: "5.0",
    reviews: "540",
    tags: ["Design", "Tech", "Research"],
    achievement: 87,
    certificate: 40,
    className: "Python Development",
    experience: "7 Years",
    students: "2.1k",
  },
  {
    id: 17,
    name: "Olivia Taylor",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: "5.0",
    reviews: "520",
    tags: ["Design", "Tech", "Research"],
    achievement: 86,
    certificate: 39,
    className: "Illustration Design",
    experience: "5 Years",
    students: "1.3k",
  },
  {
    id: 18,
    name: "William Davis",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: "5.0",
    reviews: "500",
    tags: ["Design", "Tech", "Research"],
    achievement: 85,
    certificate: 38,
    className: "Full Stack Development",
    experience: "9 Years",
    students: "3.1k",
  },
];

const categoryData = {
  Design: [
    "UI Design Basic",
    "UI/UX Design",
    "Graphic Design",
    "Product Design",
  ],
  Tech: [
    "Web Development",
    "Frontend Development",
    "React Development",
    "Backend Development",
  ],
  Research: [
    "UX Research",
    "User Research",
    "A/B Testing",
    "Product Research",
  ],
};

const chatMessages = [
  {
    id: 1,
    text: "Hello! How can I help you?",
    mine: false,
    time: "12:42 PM",
  },
  {
    id: 2,
    text: "Can you arrange schedule for next meeting?",
    mine: false,
    time: "12:43 PM",
  },
  {
    id: 3,
    text: "Okay, I'll arrange it soon. I notify you when it's done.",
    mine: true,
    time: "12:45 PM",
  },
];

export default function InstructorPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const [selectedInstructor, setSelectedInstructor] =
    useState(null);

  const [detailTab, setDetailTab] = useState("Profile");

  const [followed, setFollowed] = useState({});

  const [showMessages, setShowMessages] = useState(false);

  const [selectedChat, setSelectedChat] =
    useState(instructors[0]);

  const [message, setMessage] = useState("");

  const cardsPerPage = 6;

  const totalPages = Math.ceil(
    instructors.length / cardsPerPage
  );

  const startIndex =
    (currentPage - 1) * cardsPerPage;

  const currentInstructors = instructors.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);
    setOpenMenu(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  const openInstructor = (
    instructor,
    tab = "Profile"
  ) => {
    setSelectedInstructor(instructor);
    setDetailTab(tab);
    setOpenMenu(null);
  };

  const openChat = (instructor) => {
    setSelectedChat(instructor);
    setShowMessages(true);
    setOpenMenu(null);
  };

  const toggleFollow = (id) => {
    setFollowed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessage("");
  };

  /* =========================
     MESSAGE PAGE
  ========================= */

  if (showMessages) {
    return (
      <main className="message-page">

        <div className="message-topbar">
          <div className="message-title">
            <h1>Message</h1>
          </div>

          <button
            type="button"
            className="message-close-button"
            onClick={() => setShowMessages(false)}
          >
            <MdClose />
          </button>
        </div>

        <div className="message-layout">

          {/* LEFT USER AREA */}

          <aside className="message-sidebar">

            <div className="message-user">

              <div className="message-avatar large">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Student"
                />
              </div>

              <div>
                <strong>Nella Vita</strong>
                <span>Student</span>
              </div>

            </div>

            <div className="contacts-section">

              <div className="message-section-title">
                <strong>Contacts</strong>
                <span>View All</span>
              </div>

              <div className="contact-dots">
                {instructors
                  .slice(0, 6)
                  .map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() =>
                        openChat(item)
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </button>
                  ))}
              </div>

            </div>

            <div className="chats-section">

              <div className="message-section-title">
                <strong>Chats</strong>

                <div>
                  <button className="chat-filter active">
                    Private
                  </button>

                  <button className="chat-filter">
                    Group
                  </button>
                </div>
              </div>

              <div className="chat-list">

                {instructors
                  .slice(0, 6)
                  .map((item) => (

                    <button
                      type="button"
                      className={
                        selectedChat.id === item.id
                          ? "chat-list-item active"
                          : "chat-list-item"
                      }
                      key={item.id}
                      onClick={() =>
                        openChat(item)
                      }
                    >

                      <div className="chat-avatar">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div className="chat-user-info">

                        <div className="chat-name-row">
                          <strong>
                            {item.name}
                          </strong>

                          <small>
                            12:45 PM
                          </small>
                        </div>

                        <div className="chat-preview-row">
                          <span>
                            Lorem ipsum dolor sit amet...
                          </span>

                          <b>2</b>
                        </div>

                      </div>

                    </button>

                  ))}

              </div>

            </div>

          </aside>

          {/* CENTER CHAT */}

          <section className="message-conversation">

            <div className="conversation-header">

              <div className="conversation-user">

                <div className="conversation-avatar">
                  <img
                    src={selectedChat.image}
                    alt={selectedChat.name}
                  />
                </div>

                <div>
                  <strong>
                    {selectedChat.name}
                  </strong>

                  <span>
                    <i />
                    Online
                  </span>
                </div>

              </div>

              <div className="conversation-actions">

                <button type="button">
                  <MdPhone />
                </button>

                <button type="button">
                  <MdVideocam />
                </button>

                <button type="button">
                  <MdMoreHoriz />
                </button>

              </div>

            </div>

            <div className="conversation-body">

              <div className="conversation-messages">

                {chatMessages.map((item) => (

                  <div
                    key={item.id}
                    className={
                      item.mine
                        ? "message-row mine"
                        : "message-row"
                    }
                  >

                    <div className="message-bubble">
                      {item.text}
                    </div>

                    <small>
                      {item.time}
                    </small>

                  </div>

                ))}

              </div>

              <div className="message-input-box">

                <input
                  type="text"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                />

                <button
                  type="button"
                  className="attach-button"
                >
                  <MdAttachFile />
                </button>

                <button
                  type="button"
                  className="send-message-button"
                  onClick={sendMessage}
                >
                  Send
                  <MdSend />
                </button>

              </div>

            </div>

          </section>

          {/* RIGHT FILES */}

          <aside className="message-rightbar">

            <div className="shared-section">

              <div className="shared-title">
                <strong>Shared Files</strong>
                <span>View All</span>
              </div>

              {[
                "File.doc",
                "File.jpg",
                "File.pdf",
                "File.doc",
              ].map((file, index) => (

                <div
                  className="shared-file"
                  key={`${file}-${index}`}
                >

                  <div className="file-icon">
                    📄
                  </div>

                  <div>
                    <strong>{file}</strong>
                    <small>
                      2 March 2021, 13:45 PM
                    </small>
                  </div>

                  <b>1,5 Mb</b>

                </div>

              ))}

            </div>

            <div className="shared-section links">

              <div className="shared-title">
                <strong>Shared Links</strong>
                <span>View All</span>
              </div>

              {[
                "facebook.com",
                "twitter.com",
                "google.com",
                "dribbble.com",
              ].map((link) => (

                <div
                  className="shared-link"
                  key={link}
                >

                  <div className="link-icon">
                    🔗
                  </div>

                  <div>
                    <strong>{link}</strong>
                    <small>
                      2 March 2021
                    </small>
                  </div>

                  <span>
                    13:45 PM
                  </span>

                </div>

              ))}

            </div>

          </aside>

        </div>

      </main>
    );
  }

  /* =========================
     INSTRUCTOR DETAIL PAGE
  ========================= */

  if (selectedInstructor) {
    const instructor =
      selectedInstructor;

    return (
      <main className="instructor-detail-page">

        <div className="detail-topbar">

          <button
            type="button"
            className="detail-back"
            onClick={() =>
              setSelectedInstructor(null)
            }
          >
            <MdArrowBackIosNew />
            Back to Instructors
          </button>

          <button
            type="button"
            className="detail-message-button"
            onClick={() => openChat(instructor)}
          >
            <MdChat />
            Message
          </button>

        </div>

        <div className="detail-card">

          {/* PROFILE HEADER */}

          <div className="detail-profile">

            <div className="detail-profile-left">

              <div className="detail-image">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                />
              </div>

              <div className="detail-profile-info">

                <span className="detail-label">
                  Instructor
                </span>

                <h1>
                  {instructor.name}
                </h1>

                <div className="detail-rating">
                  <strong>
                    {instructor.rating}
                  </strong>

                  <span className="detail-star">
                    ★
                  </span>

                  <span>
                    Review (
                    {instructor.reviews}
                    )
                  </span>
                </div>

                <div className="detail-tags">

                  {instructor.tags.map(
                    (tag) => (

                      <button
                        type="button"
                        key={tag}
                        className={
                          detailTab === tag
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          setDetailTab(tag)
                        }
                      >
                        {tag}
                      </button>

                    )
                  )}

                </div>

              </div>

            </div>

            <div className="detail-profile-actions">

              <button
                type="button"
                className={
                  followed[instructor.id]
                    ? "follow-button followed"
                    : "follow-button"
                }
                onClick={() =>
                  toggleFollow(instructor.id)
                }
              >
                {followed[instructor.id] ? (
                  <>
                    <MdFavorite />
                    Following
                  </>
                ) : (
                  <>
                    <MdFavoriteBorder />
                    Follow
                  </>
                )}
              </button>

              <button
                type="button"
                className="detail-chat-button"
                onClick={() =>
                  openChat(instructor)
                }
              >
                <MdChat />
                Message
              </button>

            </div>

          </div>

          {/* STATS */}

          <div className="detail-stats">

            <div>
              <MdSchool />
              <span>
                Achievement
                <strong>
                  {instructor.achievement}
                </strong>
              </span>
            </div>

            <div>
              <MdWorkspacePremium />
              <span>
                Certificate
                <strong>
                  {instructor.certificate}
                </strong>
              </span>
            </div>

            <div>
              <MdPerson />
              <span>
                Students
                <strong>
                  {instructor.students}
                </strong>
              </span>
            </div>

            <div>
              <MdWorkspacePremium />
              <span>
                Experience
                <strong>
                  {instructor.experience}
                </strong>
              </span>
            </div>

          </div>

          {/* TABS */}

          <div className="detail-tabs">

            {[
              "Profile",
              "Classes",
              "Schedule",
              "Courses",
              "Degrees",
            ].map((tab) => (

              <button
                type="button"
                key={tab}
                className={
                  detailTab === tab
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setDetailTab(tab)
                }
              >
                {tab}
              </button>

            ))}

          </div>

          {/* CONTENT */}

          <div className="detail-content">

            {/* PROFILE */}

            {detailTab === "Profile" && (
              <div className="profile-content">

                <h2>
                  About {instructor.name}
                </h2>

                <p>
                  {instructor.name} is a professional
                  instructor who provides practical,
                  beginner-friendly lessons and
                  real-world guidance. Students can
                  learn through structured classes,
                  projects and interactive sessions.
                </p>

                <div className="profile-info-grid">

                  <div>
                    <span>Specialization</span>
                    <strong>
                      {instructor.className}
                    </strong>
                  </div>

                  <div>
                    <span>Experience</span>
                    <strong>
                      {instructor.experience}
                    </strong>
                  </div>

                  <div>
                    <span>Total Students</span>
                    <strong>
                      {instructor.students}
                    </strong>
                  </div>

                  <div>
                    <span>Rating</span>
                    <strong>
                      {instructor.rating} ★
                    </strong>
                  </div>

                </div>

                <h2 className="content-heading">
                  Skills
                </h2>

                <div className="skill-buttons">

                  {instructor.tags.map(
                    (tag) => (

                      <button
                        type="button"
                        key={tag}
                        onClick={() =>
                          setDetailTab(tag)
                        }
                      >
                        {tag}
                      </button>

                    )
                  )}

                </div>

              </div>
            )}

            {/* CLASSES */}

            {detailTab === "Classes" && (
              <div className="detail-list-content">

                <div className="content-heading-row">
                  <div>
                    <h2>
                      {instructor.name}'s Classes
                    </h2>

                    <p>
                      Explore available classes
                      from this instructor.
                    </p>
                  </div>
                </div>

                <div className="class-detail-grid">

                  {[1, 2, 3].map((item) => (

                    <div
                      className="class-detail-card"
                      key={item}
                    >

                      <div className="class-icon">
                        <MdSchool />
                      </div>

                      <div>
                        <h3>
                          {item === 1
                            ? instructor.className
                            : item === 2
                            ? "Advanced Workshop"
                            : "Practical Project Class"}
                        </h3>

                        <p>
                          Beginner friendly
                          practical lessons.
                        </p>
                      </div>

                      <button type="button">
                        View Class
                      </button>

                    </div>

                  ))}

                </div>

              </div>
            )}

            {/* SCHEDULE */}

            {detailTab === "Schedule" && (
              <div className="detail-list-content">

                <h2>Schedule Classes</h2>

                <div className="schedule-list">

                  {[
                    ["07:00 AM", "UI Design Basic"],
                    ["09:00 AM", "Design Workshop"],
                    ["11:00 AM", "Student Discussion"],
                    ["02:00 PM", "Practical Project"],
                    ["04:00 PM", "Doubt Session"],
                  ].map(([time, title]) => (

                    <div
                      className="schedule-item"
                      key={time}
                    >

                      <div className="schedule-time">
                        <MdSchedule />
                        {time}
                      </div>

                      <div>
                        <strong>
                          {title}
                        </strong>

                        <span>
                          {instructor.name}
                        </span>
                      </div>

                      <button type="button">
                        Join
                      </button>

                    </div>

                  ))}

                </div>

              </div>
            )}

            {/* COURSES */}

            {detailTab === "Courses" && (
              <div className="detail-list-content">

                <h2>Courses</h2>

                <div className="course-detail-grid">

                  {categoryData.Tech.map(
                    (course) => (

                      <button
                        type="button"
                        className="course-detail-item"
                        key={course}
                      >
                        <MdMenuBook />

                        <span>
                          <strong>
                            {course}
                          </strong>

                          <small>
                            Learn with{" "}
                            {instructor.name}
                          </small>
                        </span>

                        <MdArrowForward />
                      </button>

                    )
                  )}

                </div>

              </div>
            )}

            {/* DEGREES */}

            {detailTab === "Degrees" && (
              <div className="detail-list-content">

                <h2>Degrees & Certifications</h2>

                <div className="degree-grid">

                  <div className="degree-card">
                    <MdEmojiEvents />
                    <div>
                      <strong>
                        Professional Certification
                      </strong>
                      <span>
                        Advanced learning
                        certification
                      </span>
                    </div>
                  </div>

                  <div className="degree-card">
                    <MdSchool />
                    <div>
                      <strong>
                        Expert Instructor Degree
                      </strong>
                      <span>
                        Professional teaching
                        qualification
                      </span>
                    </div>
                  </div>

                  <div className="degree-card">
                    <MdWorkspacePremium />
                    <div>
                      <strong>
                        Course Specialist
                      </strong>
                      <span>
                        Verified course specialist
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* DESIGN */}

            {detailTab === "Design" && (
              <div className="category-content">

                <h2>Design Classes</h2>

                <p>
                  Design related classes offered
                  by {instructor.name}.
                </p>

                <div className="category-course-list">

                  {categoryData.Design.map(
                    (course) => (

                      <button
                        type="button"
                        key={course}
                      >
                        <MdMenuBook />
                        {course}
                        <MdArrowForward />
                      </button>

                    )
                  )}

                </div>

              </div>
            )}

            {/* TECH */}

            {detailTab === "Tech" && (
              <div className="category-content">

                <h2>Technology Classes</h2>

                <p>
                  Technology and development
                  classes offered by{" "}
                  {instructor.name}.
                </p>

                <div className="category-course-list">

                  {categoryData.Tech.map(
                    (course) => (

                      <button
                        type="button"
                        key={course}
                      >
                        <MdMenuBook />
                        {course}
                        <MdArrowForward />
                      </button>

                    )
                  )}

                </div>

              </div>
            )}

            {/* RESEARCH */}

            {detailTab === "Research" && (
              <div className="category-content">

                <h2>Research Classes</h2>

                <p>
                  Research related classes
                  offered by {instructor.name}.
                </p>

                <div className="category-course-list">

                  {categoryData.Research.map(
                    (course) => (

                      <button
                        type="button"
                        key={course}
                      >
                        <MdMenuBook />
                        {course}
                        <MdArrowForward />
                      </button>

                    )
                  )}

                </div>

              </div>
            )}

          </div>

        </div>

      </main>
    );
  }

  /* =========================
     MAIN INSTRUCTOR LIST
  ========================= */

  return (
    <main className="instructor-page">

      {/* HEADER */}

      <div className="instructor-heading">

        <div>
          <h1>Instructors</h1>

          <p>
            Meet our professional instructors
            and explore their classes.
          </p>
        </div>

        <div className="instructor-header-actions">

          <span>
            {instructors.length} Instructors
          </span>

          {/* MESSAGE ICON */}

          <button
            type="button"
            className="top-message-button"
            onClick={() =>
              setShowMessages(true)
            }
            title="Messages"
          >
            <MdChat />
            <i />
          </button>

        </div>

      </div>

      {/* CARDS */}

      <div className="instructor-grid">

        {currentInstructors.map(
          (instructor) => (

            <article
              className="instructor-card"
              key={instructor.id}
            >

              {/* TOP */}

              <div className="card-top">

                <button
                  type="button"
                  className="more-button"
                  onClick={() =>
                    setOpenMenu(
                      openMenu === instructor.id
                        ? null
                        : instructor.id
                    )
                  }
                >
                  <MdMoreHoriz />
                </button>

                {openMenu === instructor.id && (
                  <div className="more-menu">

                    <button
                      type="button"
                      onClick={() =>
                        openChat(instructor)
                      }
                    >
                      <MdChat />
                      Message
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        openInstructor(
                          instructor,
                          "Profile"
                        )
                      }
                    >
                      <MdPerson />
                      View Profile
                    </button>

                  </div>
                )}

              </div>

              {/* IMAGE */}

              <button
                type="button"
                className="instructor-image"
                onClick={() =>
                  openInstructor(
                    instructor,
                    "Profile"
                  )
                }
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                />
              </button>

              {/* NAME */}

              <h2>{instructor.name}</h2>

              {/* RATING */}

              <div className="rating">

                <span>
                  {instructor.rating}
                </span>

                <span className="star">
                  ★
                </span>

                <span>
                  Review ({instructor.reviews})
                </span>

              </div>

              {/* TAGS */}

              <div className="tags">

                {instructor.tags.map(
                  (tag) => (

                    <button
                      type="button"
                      key={tag}
                      onClick={() =>
                        openInstructor(
                          instructor,
                          tag
                        )
                      }
                    >
                      {tag}
                    </button>

                  )
                )}

              </div>

              {/* STATS */}

              <div className="instructor-stats">

                <div>
                  <MdSchool />

                  <small>
                    Achievement
                  </small>

                  <strong>
                    {instructor.achievement}
                  </strong>
                </div>

                <div>
                  <MdWorkspacePremium />

                  <small>
                    Certificate
                  </small>

                  <strong>
                    {instructor.certificate}
                  </strong>
                </div>

              </div>

              {/* VIEW CLASS */}

              <button
                type="button"
                className="view-class-button"
                onClick={() =>
                  openInstructor(
                    instructor,
                    "Classes"
                  )
                }
              >
                View Class
              </button>

            </article>

          )
        )}

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          type="button"
          className="pagination-arrow"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          <MdArrowBack />
        </button>

        {[1, 2, 3].map((page) => (

          <button
            type="button"
            key={page}
            className={
              currentPage === page
                ? "page-number active"
                : "page-number"
            }
            onClick={() =>
              changePage(page)
            }
          >
            {page}
          </button>

        ))}

        <button
          type="button"
          className="pagination-arrow"
          disabled={
            currentPage === totalPages
          }
          onClick={handleNext}
        >
          <MdArrowForward />
        </button>

      </div>

    </main>
  );
}