"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  MdArrowBack,
  MdPlayArrow,
  MdCheckCircle,
  MdLock,
  MdExpandMore,
  MdExpandLess,
  MdAccessTime,
  MdForum,
  MdStar,
} from "react-icons/md";

import "./CourseDetails.scss";

const courses = {
  "1": {
    title: "Full-Stack Web Developer",
    rating: "5.0",
    reviews: "1k",
    students: "10k Students",
    description:
      "Learn full-stack web development from beginner level. Build modern websites and applications using HTML, CSS, JavaScript, React and Next.js.",
    video: "https://www.youtube.com/embed/nu_pCVPKzTk",

    videos: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/nu_pCVPKzTk",
      },
      {
        id: 2,
        title: "Getting Started",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 3,
        title: "Tools",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 4,
        title: "Install Tools",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 5,
        title: "Plugins",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
    ],
  },

  "2": {
    title: "UI Design Beginner",
    rating: "5.0",
    reviews: "800",
    students: "8k Students",
    description:
      "Learn the basics of UI design and create beautiful interfaces.",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",

    videos: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 2,
        title: "UI Design Basics",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 3,
        title: "Color Theory",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
    ],
  },

  "3": {
    title: "How to be Freelancer",
    rating: "5.0",
    reviews: "700",
    students: "7k Students",
    description:
      "Learn how to start freelancing and find clients online.",
    video: "https://www.youtube.com/embed/6h2QYq6f6n8",

    videos: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
      {
        id: 2,
        title: "Finding Clients",
        duration: "1:00",
        unlocked: true,
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
    ],
  },
};

function CourseDetailsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const courseId = searchParams.get("id") || "1";
  const course = courses[courseId] || courses["1"];

  const [activeTab, setActiveTab] = useState("about");
  const [activeVideo, setActiveVideo] = useState(course.videos[0]);
  const [openSection, setOpenSection] = useState("videos");

  const [comments, setComments] = useState([
    {
      name: "Karen Hope",
      text: "Very useful course. The explanation is easy to understand.",
    },
    {
      name: "Tony Soap",
      text: "Great course for beginners. I learned a lot from this.",
    },
  ]);

  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    setComments([
      ...comments,
      {
        name: "You",
        text: comment.trim(),
      },
    ]);

    setComment("");
  };

  const selectVideo = (video) => {
    if (!video.unlocked) return;

    setActiveVideo(video);
  };

  return (
    <div className="course-content-page">
      {/* TOP */}
      <div className="content-top">
        <button
          type="button"
          className="back-course"
          onClick={() =>
            router.push(`/student/course-overview?id=${courseId}`)
          }
        >
          <MdArrowBack />
          Back to Course
        </button>

        <div className="content-title">
          <h1>{course.title}</h1>

          <div className="course-meta">
            <span>{course.rating} ⭐</span>
            <span>|</span>
            <span>Review ({course.reviews})</span>
            <span>|</span>
            <span>{course.students}</span>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="content-grid">
        {/* LEFT */}
        <main className="content-main">
          {/* VIDEO */}
          <div className="main-video">
            <iframe
              key={activeVideo.video}
              src={activeVideo.video}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* VIDEO TITLE */}
          <div className="current-video-info">
            <div>
              <span>NOW PLAYING</span>
              <h2>{activeVideo.title}</h2>
            </div>

            <div className="lesson-time">
              <MdAccessTime />
              {activeVideo.duration}
            </div>
          </div>

          {/* TABS */}
          <div className="content-tabs">
            <button
              type="button"
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>

            <button
              type="button"
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>

            <button
              type="button"
              className={activeTab === "discussion" ? "active" : ""}
              onClick={() => setActiveTab("discussion")}
            >
              Discussion
            </button>
          </div>

          {/* ABOUT */}
          {activeTab === "about" && (
            <section className="tab-content">
              <h3>About Course</h3>

              <p>{course.description}</p>

              <p>
                This course covers everything you need to start developing
                modern websites and web applications. You will learn
                practical concepts step by step.
              </p>

              <h3>What You Will Learn</h3>

              <div className="learn-items">
                <span>
                  <MdCheckCircle />
                  Basic Programming
                </span>

                <span>
                  <MdCheckCircle />
                  Create a Website
                </span>

                <span>
                  <MdCheckCircle />
                  Basic HTML & CSS
                </span>

                <span>
                  <MdCheckCircle />
                  Wireframe
                </span>

                <span>
                  <MdCheckCircle />
                  User Interface Design
                </span>

                <span>
                  <MdCheckCircle />
                  Create Responsive Website
                </span>
              </div>
            </section>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <section className="tab-content">
              <div className="tab-heading">
                <h3>Course Reviews</h3>

                <span>
                  <MdStar />
                  {course.rating}
                </span>
              </div>

              <div className="reviews-list">
                {comments.map((item, index) => (
                  <div className="review-item" key={index}>
                    <div className="review-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="review-body">
                      <strong>{item.name}</strong>

                      <div className="review-stars">★★★★★</div>

                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="discussion-form"
                onSubmit={handleComment}
              >
                <input
                  type="text"
                  placeholder="Write a review..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit">Send</button>
              </form>
            </section>
          )}

          {/* DISCUSSION */}
          {activeTab === "discussion" && (
            <section className="tab-content">
              <div className="discussion-title">
                <MdForum />

                <div>
                  <h3>Course Discussion</h3>
                  <p>
                    Ask questions and discuss this course with other
                    students.
                  </p>
                </div>
              </div>

              <div className="discussion-box">
                <div className="discussion-avatar">S</div>

                <div>
                  <strong>Student Discussion</strong>

                  <p>
                    Have a question about this lesson? Start a discussion
                    here.
                  </p>
                </div>
              </div>

              <form
                className="discussion-form"
                onSubmit={handleComment}
              >
                <input
                  type="text"
                  placeholder="Start a discussion..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit">Send</button>
              </form>
            </section>
          )}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="course-content-sidebar">
          {/* PROGRESS */}
          <div className="side-card progress-card">
            <div className="side-card-heading">
              <h3>Progress</h3>

              <button type="button">...</button>
            </div>

            <div className="progress-course-name">
              {course.title}
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${Math.round(
                    ((activeVideo.id - 1) / course.videos.length) * 100
                  )}%`,
                }}
              />
            </div>

            <div className="progress-text">
              <span>
                {activeVideo.id - 1}/{course.videos.length}
              </span>

              <span>
                {Math.round(
                  ((activeVideo.id - 1) / course.videos.length) * 100
                )}
                %
              </span>
            </div>
          </div>

          {/* VIDEO COURSES */}
          <div className="side-card">
            <button
              type="button"
              className="section-toggle"
              onClick={() =>
                setOpenSection(
                  openSection === "videos" ? "" : "videos"
                )
              }
            >
              <span>Video Courses</span>

              <span>
                ({activeVideo.id}/{course.videos.length})
                {openSection === "videos" ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </span>
            </button>

            {openSection === "videos" && (
              <div className="lesson-list">
                {course.videos.map((video) => (
                  <button
                    type="button"
                    key={video.id}
                    className={`lesson-item ${
                      activeVideo.id === video.id ? "active" : ""
                    }`}
                    onClick={() => selectVideo(video)}
                  >
                    <span className="lesson-icon">
                      {video.unlocked ? (
                        <MdPlayArrow />
                      ) : (
                        <MdLock />
                      )}
                    </span>

                    <span className="lesson-name">
                      {video.title}
                    </span>

                    <span className="lesson-duration">
                      {video.duration}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AUDIO */}
          <div className="side-card collapsed-card">
            <button
              type="button"
              className="section-toggle"
              onClick={() =>
                setOpenSection(
                  openSection === "audio" ? "" : "audio"
                )
              }
            >
              <span>Audio</span>

              <span>
                (1/25)
                {openSection === "audio" ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </span>
            </button>

            {openSection === "audio" && (
              <div className="empty-section">
                Audio lessons will appear here.
              </div>
            )}
          </div>

          {/* MODULE */}
          <div className="side-card collapsed-card">
            <button
              type="button"
              className="section-toggle"
              onClick={() =>
                setOpenSection(
                  openSection === "module" ? "" : "module"
                )
              }
            >
              <span>Module</span>

              <span>
                (1/50)
                {openSection === "module" ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </span>
            </button>

            {openSection === "module" && (
              <div className="empty-section">
                Course modules will appear here.
              </div>
            )}
          </div>

          {/* QUIZ */}
          <div className="side-card collapsed-card">
            <button
              type="button"
              className="section-toggle"
              onClick={() =>
                setOpenSection(
                  openSection === "quiz" ? "" : "quiz"
                )
              }
            >
              <span>Quiz</span>

              <span>
                (1/10)
                {openSection === "quiz" ? (
                  <MdExpandLess />
                ) : (
                  <MdExpandMore />
                )}
              </span>
            </button>

            {openSection === "quiz" && (
              <div className="empty-section">
                Quiz will appear here.
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CourseDetails() {
  return (
    <Suspense
      fallback={
        <div className="course-content-page">
          <p>Loading course...</p>
        </div>
      }
    >
      <CourseDetailsContent />
    </Suspense>
  );
}