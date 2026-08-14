// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   MdArrowBack,
//   MdPlayCircle,
//   MdLock,
//   MdKeyboardArrowDown,
//   MdCheckCircle,
// } from "react-icons/md";

// import "./CourseContent.scss";

// const courses = {
//   "1": {
//     title: "Full-Stack Web Developer",
//     rating: "5.0",
//     reviews: "1k",
//     students: "10k",
//     video: "https://www.youtube.com/embed/nu_pCVPKzTk",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "Getting Started",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Tools",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Install Tools",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Plugins",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "2": {
//     title: "UI Design Beginner",
//     rating: "5.0",
//     reviews: "800",
//     students: "8k",
//     video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "UI Design Basics",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Color Theory",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Typography",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Wireframing",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "3": {
//     title: "How to be Freelancer",
//     rating: "5.0",
//     reviews: "700",
//     students: "7k",
//     video: "https://www.youtube.com/embed/6h2QYq6f6n8",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "Finding Clients",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Building Portfolio",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Communication",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Getting Paid",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "4": {
//     title: "UX Research",
//     rating: "5.0",
//     reviews: "900",
//     students: "9k",
//     video: "https://www.youtube.com/embed/Ovj4hFxko7c",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "User Research",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "User Interviews",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Personas",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Usability Testing",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "5": {
//     title: "Basic Web Design",
//     rating: "5.0",
//     reviews: "650",
//     students: "6k",
//     video: "https://www.youtube.com/embed/1Rs2ND1ryYc",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "HTML Basics",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "CSS Basics",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Responsive Design",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Website Layout",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "6": {
//     title: "3D Character Design",
//     rating: "5.0",
//     reviews: "500",
//     students: "5k",
//     video: "https://www.youtube.com/embed/3q3FV65ZrUs",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "3D Basics",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Character Modelling",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Materials",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Lighting",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "7": {
//     title: "React Development",
//     rating: "5.0",
//     reviews: "1.2k",
//     students: "12k",
//     video: "https://www.youtube.com/embed/SqcY0GlETPk",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "React Components",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Props",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "State",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Hooks",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "8": {
//     title: "JavaScript Masterclass",
//     rating: "5.0",
//     reviews: "950",
//     students: "10k",
//     video: "https://www.youtube.com/embed/PkZNo7MFNFg",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "JavaScript Basics",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Functions",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Arrays",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "Objects",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },

//   "9": {
//     title: "Next.js Beginner",
//     rating: "5.0",
//     reviews: "600",
//     students: "6k",
//     video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",

//     videos: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         unlocked: true,
//       },
//       {
//         id: 2,
//         title: "App Router",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 3,
//         title: "Layouts",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 4,
//         title: "Server Components",
//         duration: "1:00",
//         unlocked: false,
//       },
//       {
//         id: 5,
//         title: "API Routes",
//         duration: "1:00",
//         unlocked: false,
//       },
//     ],
//   },
// };

// export default function CourseContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const courseId = searchParams.get("id") || "1";

//   const course = courses[courseId] || courses["1"];

//   const [activeVideo, setActiveVideo] = useState(course.videos[0]);

//   const [activeTab, setActiveTab] = useState("about");

//   const completedVideos = activeVideo.id;

//   const progress = Math.round(
//     (completedVideos / course.videos.length) * 100
//   );

//   const handleVideoClick = (video) => {
//     if (!video.unlocked) {
//       return;
//     }

//     setActiveVideo(video);
//   };

//   return (
//     <div className="course-content-page">

//       {/* TOP */}
//       <div className="content-topbar">

//         <button
//           type="button"
//           className="back-button"
//           onClick={() =>
//             router.push(`/student/course-overview?id=${courseId}`)
//           }
//         >
//           <MdArrowBack />
//           Back to Courses
//         </button>

//       </div>

//       {/* MAIN GRID */}
//       <div className="content-grid">

//         {/* CENTER */}
//         <main className="content-main">

//           {/* COURSE HEADER */}
//           <div className="content-header">

//             <h1>{course.title}</h1>

//             <div className="course-meta">

//               <span>
//                 {course.rating} ⭐
//               </span>

//               <span>
//                 Review ({course.reviews})
//               </span>

//               <span>
//                 {course.students} Students
//               </span>

//             </div>

//           </div>

//           {/* VIDEO */}
//           <div className="main-video">

//             <iframe
//               src={course.video}
//               title={course.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />

//           </div>

//           {/* TABS */}
//           <div className="content-tabs">

//             <button
//               type="button"
//               className={
//                 activeTab === "about" ? "active" : ""
//               }
//               onClick={() => setActiveTab("about")}
//             >
//               About
//             </button>

//             <button
//               type="button"
//               className={
//                 activeTab === "reviews" ? "active" : ""
//               }
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews
//             </button>

//             <button
//               type="button"
//               className={
//                 activeTab === "discussion" ? "active" : ""
//               }
//               onClick={() => setActiveTab("discussion")}
//             >
//               Discussion
//             </button>

//           </div>

//           {/* ABOUT */}
//           {activeTab === "about" && (
//             <section className="about-course">

//               <h2>About Course</h2>

//               <p>
//                 Learn modern skills through this complete
//                 course. Follow the lessons step by step and
//                 build your knowledge from beginner level.
//               </p>

//               <p>
//                 This course contains practical lessons,
//                 examples and exercises to help you understand
//                 the concepts easily.
//               </p>

//             </section>
//           )}

//           {/* REVIEWS */}
//           {activeTab === "reviews" && (
//             <section className="tab-content">

//               <h2>Reviews</h2>

//               <p>
//                 Students have given this course a {course.rating}
//                 star rating.
//               </p>

//             </section>
//           )}

//           {/* DISCUSSION */}
//           {activeTab === "discussion" && (
//             <section className="tab-content">

//               <h2>Discussion</h2>

//               <p>
//                 Join the discussion and share your questions
//                 about this course.
//               </p>

//             </section>
//           )}

//         </main>

//         {/* RIGHT SIDEBAR */}
//         <aside className="content-sidebar">

//           {/* PROGRESS */}
//           <div className="sidebar-card progress-card">

//             <div className="card-heading">

//               <h3>Progress</h3>

//               <span>...</span>

//             </div>

//             <div className="progress-title">
//               {course.title}
//             </div>

//             <div className="progress-bar">

//               <span
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               />

//             </div>

//             <div className="progress-text">
//               {completedVideos}/{course.videos.length}
//             </div>

//           </div>

//           {/* VIDEO COURSES */}
//           <div className="sidebar-card">

//             <div className="card-heading">

//               <h3>Video Courses</h3>

//               <span>
//                 ({activeVideo.id}/{course.videos.length})
//               </span>

//             </div>

//             <div className="video-list">

//               {course.videos.map((video) => (

//                 <button
//                   type="button"
//                   key={video.id}
//                   className={
//                     activeVideo.id === video.id
//                       ? "video-item active"
//                       : "video-item"
//                   }
//                   onClick={() =>
//                     handleVideoClick(video)
//                   }
//                   disabled={!video.unlocked}
//                 >

//                   <span className="video-icon">

//                     {video.unlocked ? (
//                       <MdPlayCircle />
//                     ) : (
//                       <MdLock />
//                     )}

//                   </span>

//                   <span className="video-name">
//                     {video.title}
//                   </span>

//                   <span className="video-duration">
//                     {video.duration}
//                   </span>

//                 </button>

//               ))}

//             </div>

//           </div>

//           {/* AUDIO */}
//           <button
//             type="button"
//             className="content-collapse"
//           >
//             <strong>Audio</strong>

//             <span>
//               (1/25)
//               <MdKeyboardArrowDown />
//             </span>
//           </button>

//           {/* MODULE */}
//           <button
//             type="button"
//             className="content-collapse"
//           >
//             <strong>Module</strong>

//             <span>
//               (1/50)
//               <MdKeyboardArrowDown />
//             </span>
//           </button>

//           {/* QUIZ */}
//           <button
//             type="button"
//             className="content-collapse"
//           >
//             <strong>Quiz</strong>

//             <span>
//               (1/10)
//               <MdKeyboardArrowDown />
//             </span>
//           </button>

//         </aside>

//       </div>

//     </div>
//   );
// }







// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   MdPlayArrow,
//   MdLock,
//   MdCheckCircle,
//   MdExpandMore,
//   MdArrowBack,
// } from "react-icons/md";

// import "./CourseContent.scss";

// const courses = {
//   "1": {
//     title: "Full-Stack Web Developer",
//     rating: "5.0",
//     reviews: "1k",
//     students: "10k Students",
//     video: "https://www.youtube.com/embed/nu_pCVPKzTk",
//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/nu_pCVPKzTk",
//       },
//       {
//         id: 2,
//         title: "Getting Started",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/SqcY0GlETPk",
//       },
//       {
//         id: 3,
//         title: "Tools",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//       },
//       {
//         id: 4,
//         title: "Install Tools",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//       },
//       {
//         id: 5,
//         title: "Plugins",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//       },
//     ],
//   },

//   "2": {
//     title: "UI Design Beginner",
//     rating: "5.0",
//     reviews: "800",
//     students: "8k Students",
//     video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//       },
//       {
//         id: 2,
//         title: "UI Design Basics",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//       },
//       {
//         id: 3,
//         title: "Typography",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//       },
//       {
//         id: 4,
//         title: "Wireframe",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//       },
//       {
//         id: 5,
//         title: "Design System",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//       },
//     ],
//   },

//   "3": {
//     title: "How to be Freelancer",
//     rating: "5.0",
//     reviews: "700",
//     students: "7k Students",
//     video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//       },
//       {
//         id: 2,
//         title: "Finding Clients",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//       },
//       {
//         id: 3,
//         title: "Building Portfolio",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//       },
//       {
//         id: 4,
//         title: "Communication",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//       },
//       {
//         id: 5,
//         title: "Getting Paid",
//         duration: "2:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//       },
//     ],
//   },
// };

// export default function CourseContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const courseId = searchParams.get("id") || "1";

//   const course = courses[courseId] || courses["1"];

//   const [activeLesson, setActiveLesson] = useState(course.lessons[0]);

//   const [completedLessons, setCompletedLessons] = useState([]);

//   const [openAudio, setOpenAudio] = useState(false);
//   const [openModule, setOpenModule] = useState(false);
//   const [openQuiz, setOpenQuiz] = useState(false);

//   const completedCount = completedLessons.length;

//   const progress =
//     Math.round(
//       (completedCount / course.lessons.length) * 100
//     );

//   const handleLessonClick = (lesson) => {
//     setActiveLesson(lesson);

//     if (!completedLessons.includes(lesson.id)) {
//       setCompletedLessons((previous) => [
//         ...previous,
//         lesson.id,
//       ]);
//     }
//   };

//   return (
//     <div className="course-content-page">

//       {/* BACK */}
//       <button
//         type="button"
//         className="content-back"
//         onClick={() =>
//           router.push(`/student/course-overview?id=${courseId}`)
//         }
//       >
//         <MdArrowBack />
//         Back to Course
//       </button>

//       <div className="content-layout">

//         {/* ================= LEFT / MAIN ================= */}

//         <main className="content-main">

//           <div className="content-header">

//             <div>
//               <h1>{course.title}</h1>

//               <div className="course-meta">
//                 <span>{course.rating}</span>
//                 <span>★</span>
//                 <span>Review ({course.reviews})</span>
//                 <span>|</span>
//                 <span>{course.students}</span>
//               </div>
//             </div>

//           </div>

//           {/* VIDEO */}

//           <div className="main-video">

//             <iframe
//               key={activeLesson.video}
//               src={activeLesson.video}
//               title={activeLesson.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />

//             <div className="video-play-icon">
//               <MdPlayArrow />
//             </div>

//           </div>

//           {/* TABS */}

//           <div className="content-tabs">

//             <button
//               type="button"
//               className="active"
//             >
//               About
//             </button>

//             <button type="button">
//               Reviews
//             </button>

//             <button type="button">
//               Discussion
//             </button>

//           </div>

//           {/* ABOUT */}

//           <section className="about-course">

//             <h2>About Course</h2>

//             <p>
//               Lorem ipsum dolor sit amet, consectetur
//               adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua.
//               Ut enim ad minim veniam, quis nostrud
//               exercitation ullamco laboris nisi ut aliquip
//               ex ea commodo consequat.
//             </p>

//             <p>
//               Duis aute irure dolor in reprehenderit in
//               voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur.
//             </p>

//           </section>

//         </main>

//         {/* ================= RIGHT ================= */}

//         <aside className="content-sidebar">

//           {/* PROGRESS */}

//           <div className="sidebar-card progress-card">

//             <div className="card-title-row">

//               <h3>Progress</h3>

//               <span>•••</span>

//             </div>

//             <div className="progress-bar">

//               <span
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               />

//             </div>

//             <div className="progress-text">

//               <span>{course.title}</span>

//               <strong>
//                 {completedCount}/{course.lessons.length}
//               </strong>

//             </div>

//           </div>

//           {/* VIDEO COURSES */}

//           <div className="sidebar-card">

//             <div className="card-title-row">

//               <h3>Video Courses</h3>

//               <span>
//                 ({completedCount}/{course.lessons.length})
//               </span>

//             </div>

//             <div className="lesson-list">

//               {course.lessons.map((lesson, index) => {

//                 const isActive =
//                   activeLesson.id === lesson.id;

//                 const isCompleted =
//                   completedLessons.includes(lesson.id);

//                 return (
//                   <button
//                     type="button"
//                     key={lesson.id}
//                     className={`lesson-item ${
//                       isActive ? "active" : ""
//                     }`}
//                     onClick={() =>
//                       handleLessonClick(lesson)
//                     }
//                   >

//                     <span className="lesson-icon">

//                       {isCompleted ? (
//                         <MdCheckCircle />
//                       ) : index === 0 ? (
//                         <MdPlayArrow />
//                       ) : (
//                         <MdLock />
//                       )}

//                     </span>

//                     <span className="lesson-name">
//                       {lesson.title}
//                     </span>

//                     <span className="lesson-duration">
//                       {lesson.duration}
//                     </span>

//                   </button>
//                 );
//               })}

//             </div>

//           </div>

//           {/* AUDIO */}

//           <div className="sidebar-card collapsed-card">

//             <button
//               type="button"
//               onClick={() =>
//                 setOpenAudio(!openAudio)
//               }
//             >

//               <strong>Audio</strong>

//               <span>
//                 (1/25)
//                 <MdExpandMore
//                   className={
//                     openAudio ? "rotate" : ""
//                   }
//                 />
//               </span>

//             </button>

//             {openAudio && (
//               <div className="collapsed-content">
//                 Audio lessons will appear here.
//               </div>
//             )}

//           </div>

//           {/* MODULE */}

//           <div className="sidebar-card collapsed-card">

//             <button
//               type="button"
//               onClick={() =>
//                 setOpenModule(!openModule)
//               }
//             >

//               <strong>Module</strong>

//               <span>
//                 (1/50)
//                 <MdExpandMore
//                   className={
//                     openModule ? "rotate" : ""
//                   }
//                 />
//               </span>

//             </button>

//             {openModule && (
//               <div className="collapsed-content">
//                 Course modules will appear here.
//               </div>
//             )}

//           </div>

//           {/* QUIZ */}

//           <div className="sidebar-card collapsed-card">

//             <button
//               type="button"
//               onClick={() =>
//                 setOpenQuiz(!openQuiz)
//               }
//             >

//               <strong>Quiz</strong>

//               <span>
//                 (1/10)
//                 <MdExpandMore
//                   className={
//                     openQuiz ? "rotate" : ""
//                   }
//                 />
//               </span>

//             </button>

//             {openQuiz && (
//               <div className="collapsed-content">
//                 Course quiz will appear here.
//               </div>
//             )}

//           </div>

//         </aside>

//       </div>

//     </div>
//   );
// }








"use client";

import { useState } from "react";
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
};

export default function CourseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const courseId = searchParams.get("id") || "1";
  const course = courses[courseId] || courses["1"];

  // Active lesson
  const [activeLesson, setActiveLesson] = useState(course.lessons[0]);

  // Active tab
  const [activeTab, setActiveTab] = useState("about");

  // Completed lessons
  const [completedLessons, setCompletedLessons] = useState([]);

  // Sidebar dropdowns
  const [openAudio, setOpenAudio] = useState(false);
  const [openModule, setOpenModule] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);

  // Discussion
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

  // Reviews
  const [reviews, setReviews] = useState([
    {
      name: "Karen Hope",
      rating: "5.0",
      text: "Very useful course. The explanation is easy to understand.",
      time: "1 Month Ago",
    },
    {
      name: "Tony Soap",
      rating: "5.0",
      text: "Great course for beginners. I learned a lot from this.",
      time: "1 Month Ago",
    },
  ]);

  const completedCount = completedLessons.length;

  const progress =
    course.lessons.length > 0
      ? Math.round(
          (completedCount / course.lessons.length) * 100
        )
      : 0;

  // Lesson click
  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);

    if (!completedLessons.includes(lesson.id)) {
      setCompletedLessons((previous) => [
        ...previous,
        lesson.id,
      ]);
    }
  };

  // Discussion submit
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

  // Back
  const handleBack = () => {
    router.push(`/student/course-overview?id=${courseId}`);
  };

  return (
    <div className="course-content-page">

      {/* BACK */}
      <button
        type="button"
        className="content-back"
        onClick={handleBack}
      >
        <MdArrowBack />
        <span>Back to Course</span>
      </button>

      <div className="content-layout">

        {/* ================= MAIN ================= */}

        <main className="content-main">

          {/* HEADER */}

          <div className="content-header">

            <h1>{course.title}</h1>

            <div className="course-meta">

              <strong>{course.rating}</strong>

              <span className="meta-star">
                ★
              </span>

              <span>
                Review ({course.reviews})
              </span>

              <span>|</span>

              <span>{course.students}</span>

            </div>

          </div>

          {/* VIDEO */}

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

          {/* ================= TABS ================= */}

          <div className="content-tabs">

            <button
              type="button"
              className={
                activeTab === "about"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("about")
              }
            >
              About
            </button>

            <button
              type="button"
              className={
                activeTab === "reviews"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("reviews")
              }
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

          {/* ================= ABOUT ================= */}

          {activeTab === "about" && (
            <section className="about-course">

              <h2>About Course</h2>

              <p>
                Welcome to the{" "}
                <strong>
                  {course.title}
                </strong>{" "}
                course.
              </p>

              <p>
                This course is designed for
                beginners. You can learn step by
                step and watch every lesson from
                the video course section.
              </p>

              <h3>
                Current Lesson
              </h3>

              <div className="current-lesson-box">
                <MdPlayArrow />

                <div>
                  <strong>
                    {activeLesson.title}
                  </strong>

                  <span>
                    Duration:{" "}
                    {activeLesson.duration}
                  </span>
                </div>
              </div>

            </section>
          )}

          {/* ================= REVIEWS ================= */}

          {activeTab === "reviews" && (
            <section className="reviews-section">

              <div className="tab-content-header">
                <div>
                  <h2>Course Reviews</h2>

                  <p>
                    See what other students
                    think about this course.
                  </p>
                </div>

                <div className="average-rating">
                  <strong>
                    {course.rating}
                  </strong>

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

                {reviews.map(
                  (review, index) => (
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

                        <p>
                          {review.text}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </section>
          )}

          {/* ================= DISCUSSION ================= */}

          {activeTab === "discussion" && (
            <section className="discussion-section">

              <div className="tab-content-header">

                <div>
                  <h2>
                    Discussion
                  </h2>

                  <p>
                    Ask questions and discuss
                    the course with other
                    students.
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
                        {discussion.name.charAt(
                          0
                        )}
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

                        <p>
                          {discussion.text}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

              <form
                className="discussion-form"
                onSubmit={
                  handleDiscussionSubmit
                }
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

        {/* ================= RIGHT SIDEBAR ================= */}

        <aside className="content-sidebar">

          {/* PROGRESS */}

          <div className="sidebar-card progress-card">

            <div className="card-title-row">

              <h3>Progress</h3>

              <strong>
                {progress}%
              </strong>

            </div>

            <div className="progress-bar">

              <span
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="progress-text">

              <span>
                {course.title}
              </span>

              <strong>
                {completedCount}/
                {course.lessons.length}
              </strong>

            </div>

          </div>

          {/* VIDEO COURSES */}

          <div className="sidebar-card">

            <div className="card-title-row">

              <h3>
                Video Courses
              </h3>

              <span>
                ({completedCount}/
                {course.lessons.length})
              </span>

            </div>

            <div className="lesson-list">

              {course.lessons.map(
                (lesson, index) => {

                  const isActive =
                    activeLesson.id ===
                    lesson.id;

                  const isCompleted =
                    completedLessons.includes(
                      lesson.id
                    );

                  return (
                    <button
                      type="button"
                      key={lesson.id}
                      className={`lesson-item ${
                        isActive
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleLessonClick(
                          lesson
                        )
                      }
                    >

                      <span className="lesson-icon">

                        {isCompleted ? (
                          <MdCheckCircle />
                        ) : index === 0 ? (
                          <MdPlayArrow />
                        ) : (
                          <MdLock />
                        )}

                      </span>

                      <span className="lesson-name">
                        {lesson.title}
                      </span>

                      <span className="lesson-duration">
                        {lesson.duration}
                      </span>

                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* AUDIO */}

          <div className="sidebar-card collapsed-card">

            <button
              type="button"
              onClick={() =>
                setOpenAudio(
                  (value) => !value
                )
              }
            >

              <strong>
                Audio
              </strong>

              <span>

                (1/25)

                <MdExpandMore
                  className={
                    openAudio
                      ? "rotate"
                      : ""
                  }
                />

              </span>

            </button>

            {openAudio && (
              <div className="collapsed-content">
                Audio lessons will appear
                here.
              </div>
            )}

          </div>

          {/* MODULE */}

          <div className="sidebar-card collapsed-card">

            <button
              type="button"
              onClick={() =>
                setOpenModule(
                  (value) => !value
                )
              }
            >

              <strong>
                Module
              </strong>

              <span>

                (1/50)

                <MdExpandMore
                  className={
                    openModule
                      ? "rotate"
                      : ""
                  }
                />

              </span>

            </button>

            {openModule && (
              <div className="collapsed-content">
                Course modules will
                appear here.
              </div>
            )}

          </div>

          {/* QUIZ */}

          <div className="sidebar-card collapsed-card">

            <button
              type="button"
              onClick={() =>
                setOpenQuiz(
                  (value) => !value
                )
              }
            >

              <strong>
                Quiz
              </strong>

              <span>

                (1/10)

                <MdExpandMore
                  className={
                    openQuiz
                      ? "rotate"
                      : ""
                  }
                />

              </span>

            </button>

            {openQuiz && (
              <div className="collapsed-content">
                Course quiz will appear
                here.
              </div>
            )}

          </div>

        </aside>

      </div>
    </div>
  );
}