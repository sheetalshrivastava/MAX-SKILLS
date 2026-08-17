"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  MdPlayArrow,
  MdLock,
  MdCheckCircle,
  MdExpandMore,
  MdArrowBack,
  MdStar,
  MdSend,
} from "react-icons/md";

import "./CourseContent.scss";

const courses = {
  "1": {
    title: "Full-Stack Web Developer",
    rating: "5.0",
    reviews: "1k",
    students: "10k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/nu_pCVPKzTk",
      },
      {
        id: 2,
        title: "Getting Started",
        duration: "1:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 3,
        title: "Tools",
        duration: "1:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 4,
        title: "Install Tools",
        duration: "1:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 5,
        title: "Plugins",
        duration: "1:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
    ],
  },

  "2": {
    title: "UI Design Beginner",
    rating: "5.0",
    reviews: "800",
    students: "8k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 2,
        title: "UI Design Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 3,
        title: "Typography",
        duration: "2:00",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 4,
        title: "Wireframe",
        duration: "2:00",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: 5,
        title: "Design System",
        duration: "2:00",
        video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
    ],
  },

  "3": {
    title: "How to be Freelancer",
    rating: "5.0",
    reviews: "700",
    students: "7k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
      {
        id: 2,
        title: "Finding Clients",
        duration: "2:00",
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
      {
        id: 3,
        title: "Building Portfolio",
        duration: "2:00",
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
      {
        id: 4,
        title: "Communication",
        duration: "2:00",
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
      {
        id: 5,
        title: "Getting Paid",
        duration: "2:00",
        video: "https://www.youtube.com/embed/6h2QYq6f6n8",
      },
    ],
  },

  "4": {
    title: "UX Research",
    rating: "5.0",
    reviews: "900",
    students: "9k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      },
      {
        id: 2,
        title: "User Research",
        duration: "2:00",
        video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      },
      {
        id: 3,
        title: "User Interviews",
        duration: "2:00",
        video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      },
      {
        id: 4,
        title: "Personas",
        duration: "2:00",
        video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      },
      {
        id: 5,
        title: "Usability Testing",
        duration: "2:00",
        video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      },
    ],
  },

  "5": {
    title: "Basic Web Design",
    rating: "5.0",
    reviews: "650",
    students: "6k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
      {
        id: 2,
        title: "HTML Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
      {
        id: 3,
        title: "CSS Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
      {
        id: 4,
        title: "Responsive Design",
        duration: "2:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
      {
        id: 5,
        title: "Website Layout",
        duration: "2:00",
        video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
    ],
  },

  "6": {
    title: "3D Character Design",
    rating: "5.0",
    reviews: "500",
    students: "5k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/3q3FV65ZrUs",
      },
      {
        id: 2,
        title: "3D Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/3q3FV65ZrUs",
      },
      {
        id: 3,
        title: "Character Modelling",
        duration: "2:00",
        video: "https://www.youtube.com/embed/3q3FV65ZrUs",
      },
      {
        id: 4,
        title: "Materials",
        duration: "2:00",
        video: "https://www.youtube.com/embed/3q3FV65ZrUs",
      },
      {
        id: 5,
        title: "Rendering",
        duration: "2:00",
        video: "https://www.youtube.com/embed/3q3FV65ZrUs",
      },
    ],
  },

  "7": {
    title: "React Development",
    rating: "5.0",
    reviews: "1.2k",
    students: "12k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 2,
        title: "React Components",
        duration: "2:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 3,
        title: "Props",
        duration: "2:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 4,
        title: "State and Hooks",
        duration: "2:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
      {
        id: 5,
        title: "API Integration",
        duration: "2:00",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
      },
    ],
  },

  "8": {
    title: "JavaScript Masterclass",
    rating: "5.0",
    reviews: "950",
    students: "10k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 2,
        title: "JavaScript Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 3,
        title: "Functions",
        duration: "2:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 4,
        title: "Arrays and Objects",
        duration: "2:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
      {
        id: 5,
        title: "DOM and Async JavaScript",
        duration: "2:00",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      },
    ],
  },

  "9": {
    title: "Next.js Beginner",
    rating: "5.0",
    reviews: "600",
    students: "6k Students",
    lessons: [
      {
        id: 1,
        title: "Introduction",
        duration: "1:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 2,
        title: "Next.js Basics",
        duration: "2:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 3,
        title: "App Router",
        duration: "2:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 4,
        title: "Layouts",
        duration: "2:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
      {
        id: 5,
        title: "Deployment",
        duration: "2:00",
        video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
      },
    ],
  },
};

function CourseContentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const courseId = searchParams.get("id") || "1";
  const course = courses[courseId] || courses["1"];

  const [checkingPurchase, setCheckingPurchase] = useState(true);

  const [activeLesson, setActiveLesson] = useState(
    course.lessons[0]
  );

  const [activeTab, setActiveTab] = useState("about");

  const [completedLessons, setCompletedLessons] = useState([]);

  const [openAudio, setOpenAudio] = useState(false);

  const [openModule, setOpenModule] = useState(false);

  const [openQuiz, setOpenQuiz] = useState(false);

  const [discussionText, setDiscussionText] = useState("");

  const [discussions, setDiscussions] = useState([
    {
      name: "Karen Hope",
      text: "This course is very easy to understand.",
      time: "1 day ago",
    },
    {
      name: "Tony Soap",
      text: "The lessons are really helpful for beginners.",
      time: "2 days ago",
    },
  ]);

  const [reviews] = useState([
    {
      name: "Karen Hope",
      rating: "5.0",
      text:
        "Very useful course. The explanation is easy to understand.",
      time: "1 Month Ago",
    },
    {
      name: "Tony Soap",
      rating: "5.0",
      text:
        "Great course for beginners. I learned a lot from this.",
      time: "1 Month Ago",
    },
  ]);

  useEffect(() => {
    const purchasedCourses = JSON.parse(
      localStorage.getItem(
        "maxskills_purchased_courses"
      ) || "[]"
    );

    const hasPurchased = purchasedCourses.includes(
      String(courseId)
    );

    if (!hasPurchased) {
      router.replace(
        `/student/course-overview?id=${courseId}`
      );
      return;
    }

    setCheckingPurchase(false);
  }, [courseId, router]);

  useEffect(() => {
    setActiveLesson(course.lessons[0]);
    setCompletedLessons([]);
  }, [courseId, course.lessons]);

  const completedCount = completedLessons.length;

  const progress =
    course.lessons.length > 0
      ? Math.round(
          (completedCount / course.lessons.length) * 100
        )
      : 0;

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);

    if (!completedLessons.includes(lesson.id)) {
      setCompletedLessons((previous) => [
        ...previous,
        lesson.id,
      ]);
    }
  };

  const handleDiscussionSubmit = (e) => {
    e.preventDefault();

    if (!discussionText.trim()) {
      return;
    }

    const newDiscussion = {
      name: "You",
      text: discussionText.trim(),
      time: "Just Now",
    };

    setDiscussions((previous) => [
      ...previous,
      newDiscussion,
    ]);

    setDiscussionText("");
  };

  const handleBack = () => {
    router.push(
      `/student/course-overview?id=${courseId}`
    );
  };

  if (checkingPurchase) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          color: "#4cc4a8",
          fontSize: "14px",
        }}
      >
        Opening course...
      </div>
    );
  }

  return (
    <div className="course-content-page">
      <button
        type="button"
        className="content-back"
        onClick={handleBack}
      >
        <MdArrowBack />
        <span>Back to Course</span>
      </button>

      <div className="content-layout">
        <main className="content-main">
          <div className="content-header">
            <h1>{course.title}</h1>

            <div className="course-meta">
              <strong>{course.rating}</strong>

              <span className="meta-star">★</span>

              <span>
                Review ({course.reviews})
              </span>

              <span>|</span>

              <span>{course.students}</span>
            </div>
          </div>

          <div className="main-video">
            <iframe
              key={activeLesson.id}
              src={activeLesson.video}
              title={activeLesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="video-play-icon">
              <MdPlayArrow />
            </div>
          </div>

          <div className="content-tabs">
            <button
              type="button"
              className={
                activeTab === "about" ? "active" : ""
              }
              onClick={() => setActiveTab("about")}
            >
              About
            </button>

            <button
              type="button"
              className={
                activeTab === "reviews" ? "active" : ""
              }
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({reviews.length})
            </button>

            <button
              type="button"
              className={
                activeTab === "discussion"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("discussion")
              }
            >
              Discussion ({discussions.length})
            </button>
          </div>

          {activeTab === "about" && (
            <section className="about-course">
              <h2>About Course</h2>

              <p>
                Welcome to{" "}
                <strong>{course.title}</strong> course.
              </p>

              <p>
                This course is designed for beginners.
                You can learn step by step and watch
                every lesson from the video course
                section.
              </p>

              <h3>Current Lesson</h3>

              <div className="current-lesson-box">
                <MdPlayArrow />

                <div>
                  <strong>
                    {activeLesson.title}
                  </strong>

                  <span>
                    Duration: {activeLesson.duration}
                  </span>
                </div>
              </div>
            </section>
          )}

          {activeTab === "reviews" && (
            <section className="reviews-section">
              <div className="tab-content-header">
                <div>
                  <h2>Course Reviews</h2>

                  <p>
                    See what other students think
                    about this course.
                  </p>
                </div>

                <div className="average-rating">
                  <strong>{course.rating}</strong>

                  <span>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                  </span>
                </div>
              </div>

              <div className="reviews-list">
                {reviews.map((review, index) => (
                  <div
                    className="content-review-item"
                    key={index}
                  >
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div className="review-body">
                      <div className="review-name-row">
                        <strong>
                          {review.name}
                        </strong>

                        <span>
                          ★ {review.rating}
                        </span>

                        <small>
                          {review.time}
                        </small>
                      </div>

                      <p>{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "discussion" && (
            <section className="discussion-section">
              <div className="tab-content-header">
                <div>
                  <h2>Discussion</h2>

                  <p>
                    Ask questions and discuss the
                    course with other students.
                  </p>
                </div>
              </div>

              <div className="discussion-list">
                {discussions.map(
                  (discussion, index) => (
                    <div
                      className="discussion-item"
                      key={index}
                    >
                      <div className="discussion-avatar">
                        {discussion.name.charAt(0)}
                      </div>

                      <div>
                        <div className="discussion-name">
                          <strong>
                            {discussion.name}
                          </strong>

                          <small>
                            {discussion.time}
                          </small>
                        </div>

                        <p>{discussion.text}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <form
                className="discussion-form"
                onSubmit={handleDiscussionSubmit}
              >
                <input
                  type="text"
                  placeholder="Write your question..."
                  value={discussionText}
                  onChange={(e) =>
                    setDiscussionText(
                      e.target.value
                    )
                  }
                />

                <button type="submit">
                  <MdSend />
                </button>
              </form>
            </section>
          )}
        </main>

        <aside className="content-sidebar">
          <div className="sidebar-card progress-card">
            <div className="card-title-row">
              <h3>Progress</h3>

              <strong>{progress}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p>
              {completedCount} of{" "}
              {course.lessons.length} lessons completed
            </p>
          </div>

          <div className="sidebar-card">
            <div
              className="card-title-row"
              onClick={() =>
                setOpenModule(!openModule)
              }
              style={{ cursor: "pointer" }}
            >
              <h3>Course Content</h3>

              <MdExpandMore
                style={{
                  transform: openModule
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "0.2s",
                }}
              />
            </div>

            <div className="lesson-list">
              {course.lessons.map(
                (lesson, index) => {
                  const completed =
                    completedLessons.includes(
                      lesson.id
                    );

                  const active =
                    activeLesson.id === lesson.id;

                  return (
                    <button
                      type="button"
                      key={lesson.id}
                      className={`lesson-item ${
                        active ? "active" : ""
                      }`}
                      onClick={() =>
                        handleLessonClick(lesson)
                      }
                    >
                      <span className="lesson-number">
                        {completed ? (
                          <MdCheckCircle />
                        ) : (
                          index + 1
                        )}
                      </span>

                      <span className="lesson-info">
                        <strong>
                          {lesson.title}
                        </strong>

                        <small>
                          {lesson.duration}
                        </small>
                      </span>

                      {completed ? (
                        <MdCheckCircle className="lesson-check" />
                      ) : (
                        <MdPlayArrow />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="sidebar-card">
            <div className="card-title-row">
              <h3>Extra Resources</h3>

              <MdExpandMore
                onClick={() =>
                  setOpenAudio(!openAudio)
                }
                style={{
                  cursor: "pointer",
                  transform: openAudio
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>

            {openAudio && (
              <div className="resource-content">
                <button
                  type="button"
                  onClick={() =>
                    alert("Audio resource opened")
                  }
                >
                  <MdPlayArrow />
                  Audio Lesson
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Quiz opened")
                  }
                >
                  <MdCheckCircle />
                  Practice Quiz
                </button>
              </div>
            )}
          </div>

          <div className="sidebar-card">
            <div className="card-title-row">
              <h3>Quiz</h3>

              <MdExpandMore
                onClick={() =>
                  setOpenQuiz(!openQuiz)
                }
                style={{
                  cursor: "pointer",
                  transform: openQuiz
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>

            {openQuiz && (
              <div className="quiz-content">
                <p>
                  Test your knowledge after
                  completing the lessons.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    alert("Quiz started")
                  }
                >
                  Start Quiz
                </button>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CourseContent() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            color: "#4cc4a8",
            fontSize: "14px",
          }}
        >
          Opening course...
        </div>
      }
    >
      <CourseContentContent />
    </Suspense>
  );
}