"use client";

import { useState } from "react";
import {
  MdMoreHoriz,
  MdMic,
  MdVideocam,
  MdCallEnd,
  MdScreenShare,
  MdPlayArrow,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSend,
  MdAttachFile,
} from "react-icons/md";

import "./LiveClass.scss";

const chapters = [
  {
    title: "Chapter 1: Intro",
    open: true,
    lessons: [
      {
        title: "Introduction",
        duration: "1:00",
      },
      {
        title: "Tools & Plugins",
        duration: "1:00",
      },
    ],
  },
  {
    title: "Chapter 2: Basic HTML",
    open: false,
    lessons: [],
  },
];

const initialMessages = [
  {
    id: 1,
    user: "Samantha",
    message: "Lorem ipsum dolor sit amet ut labore et",
    time: "12:45 PM",
    type: "received",
  },
  {
    id: 2,
    user: "You",
    message: "Lorem ipsum dolor sit amet ut labore et",
    time: "12:45 PM",
    type: "sent",
  },
];

export default function LiveClassPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
  const [isSharing, setIsSharing] = useState(false);

  const [activeChapter, setActiveChapter] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);

  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const [ended, setEnded] = useState(false);

  const sendMessage = () => {
    const text = message.trim();

    if (!text) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        user: "You",
        message: text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "sent",
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleLessonClick = (chapterIndex, lessonIndex) => {
    setActiveChapter(chapterIndex);
    setActiveLesson(lessonIndex);
  };

  return (
    <section className="live-class-page">
      {/* =====================================
          CENTER LIVE CLASS
      ====================================== */}

      <div className="live-main-card">
        {/* HEADER */}

        <div className="live-class-header">
          <div>
            <h1>Full-Stack Web Developer</h1>

            <div className="live-meta">
              <span>Angelina Crispy</span>

              <span className="meta-separator">|</span>

              <span>♟</span>

              <span>10k Students</span>
            </div>
          </div>

          <button
            type="button"
            className="more-button"
            aria-label="More options"
          >
            <MdMoreHoriz />
          </button>
        </div>

        {/* VIDEO */}

        <div className="video-container">
          {!ended ? (
            <>
              <div className="live-badge">
                <span />
                Live
              </div>

              <div className="video-placeholder">
                <div className="video-play">
                  <MdPlayArrow />
                </div>
              </div>
            </>
          ) : (
            <div className="class-ended">
              <strong>Live Class Ended</strong>
              <span>Thank you for attending the class.</span>

              <button
                type="button"
                onClick={() => setEnded(false)}
              >
                Start Again
              </button>
            </div>
          )}
        </div>

        {/* BOTTOM */}

        <div className="live-bottom">
          {/* STUDENTS */}

          <div className="students-section">
            <span className="students-title">Students</span>

            <div className="student-avatars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <b>99+</b>
            </div>
          </div>

          {/* CONTROLS */}

          <div className="live-controls">
            <button
              type="button"
              className={isMuted ? "control active" : "control"}
              onClick={() => setIsMuted((current) => !current)}
              title={isMuted ? "Unmute" : "Mute"}
            >
              <MdMic />
            </button>

            <button
              type="button"
              className={
                isSharing ? "control active" : "control"
              }
              onClick={() =>
                setIsSharing((current) => !current)
              }
              title="Share screen"
            >
              <MdScreenShare />
            </button>

            <button
              type="button"
              className={
                cameraOn ? "control" : "control active"
              }
              onClick={() =>
                setCameraOn((current) => !current)
              }
              title={cameraOn ? "Turn camera off" : "Turn camera on"}
            >
              <MdVideocam />
            </button>

            <button
              type="button"
              className="end-call"
              onClick={() => setEnded(true)}
              title="End class"
            >
              <MdCallEnd />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================
          RIGHT SIDEBAR
      ====================================== */}

      <aside className="live-right-sidebar">
        {/* COURSES CONTENT */}

        <div className="course-content-card">
          <h2>Courses Content</h2>

          <div className="chapters">
            {chapters.map((chapter, chapterIndex) => {
              const isOpen = activeChapter === chapterIndex;

              return (
                <div
                  className="chapter"
                  key={chapter.title}
                >
                  <button
                    type="button"
                    className="chapter-header"
                    onClick={() =>
                      setActiveChapter(
                        isOpen ? -1 : chapterIndex
                      )
                    }
                  >
                    <span>{chapter.title}</span>

                    {isOpen ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </button>

                  {isOpen && chapter.lessons.length > 0 && (
                    <div className="lesson-list">
                      {chapter.lessons.map(
                        (lesson, lessonIndex) => {
                          const active =
                            activeChapter === chapterIndex &&
                            activeLesson === lessonIndex;

                          return (
                            <button
                              type="button"
                              key={lesson.title}
                              className={
                                active
                                  ? "lesson active"
                                  : "lesson"
                              }
                              onClick={() =>
                                handleLessonClick(
                                  chapterIndex,
                                  lessonIndex
                                )
                              }
                            >
                              <span className="lesson-play">
                                <MdPlayArrow />
                              </span>

                              <span className="lesson-name">
                                {lesson.title}
                              </span>

                              <span className="lesson-time">
                                {lesson.duration}
                              </span>
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* LIVE CHAT */}

        <div className="live-chat-card">
          <div className="chat-header">
            <h2>Live Chat</h2>

            <button
              type="button"
              className="chat-more"
            >
              <MdMoreHoriz />
            </button>
          </div>

          {/* MESSAGES */}

          <div className="chat-messages">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`chat-message ${item.type}`}
              >
                <span className="chat-user">
                  {item.user}
                </span>

                <div className="message-bubble">
                  {item.message}
                </div>

                <span className="message-time">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* CHAT INPUT */}

          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Type here..."
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              className="attach-button"
              title="Attach file"
            >
              <MdAttachFile />
            </button>

            <button
              type="button"
              className="send-button"
              onClick={sendMessage}
              title="Send message"
            >
              <MdSend />
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}