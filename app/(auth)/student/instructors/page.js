






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
  },

  // PAGE 2
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
  },

  // PAGE 3
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
  },
];

export default function InstructorPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const cardsPerPage = 6;

  const totalPages = Math.ceil(
    instructors.length / cardsPerPage
  );

  const startIndex = (currentPage - 1) * cardsPerPage;

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

  return (
    <main className="instructor-page">

      {/* HEADER */}

      <div className="instructor-heading">
        <div>
          <h1>Instructors</h1>
          <p>
            Meet our professional instructors and explore
            their classes.
          </p>
        </div>

        <span>
          {instructors.length} Instructors
        </span>
      </div>

      {/* CARDS */}

      <div className="instructor-grid">

        {currentInstructors.map((instructor) => (

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
                    onClick={() => {
                      setSelectedInstructor(
                        instructor
                      );
                      setOpenMenu(null);
                    }}
                  >
                    <MdChat />
                    Message
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedInstructor(
                        instructor
                      );
                      setOpenMenu(null);
                    }}
                  >
                    <MdPerson />
                    View Profile
                  </button>

                </div>

              )}

            </div>

            {/* IMAGE */}

            <div className="instructor-image">

              <img
                src={instructor.image}
                alt={instructor.name}
              />

            </div>

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

              {instructor.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

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
                setSelectedInstructor(
                  instructor
                )
              }
            >
              View Class
            </button>

          </article>

        ))}

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

      {/* CLASS / PROFILE MODAL */}

      {selectedInstructor && (

        <div
          className="instructor-overlay"
          onClick={() =>
            setSelectedInstructor(null)
          }
        >

          <div
            className="instructor-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              type="button"
              className="modal-close"
              onClick={() =>
                setSelectedInstructor(null)
              }
            >
              <MdClose />
            </button>

            <div className="modal-image">

              <img
                src={
                  selectedInstructor.image
                }
                alt={
                  selectedInstructor.name
                }
              />

            </div>

            <h2>
              {selectedInstructor.name}
            </h2>

            <div className="modal-rating">
              ★ {selectedInstructor.rating}
              <span>
                Review (
                {selectedInstructor.reviews}
                )
              </span>
            </div>

            <h3>
              {selectedInstructor.className}
            </h3>

            <p>
              Join this class and learn from
              {` ${selectedInstructor.name}`}
              . This instructor provides
              practical lessons and beginner
              friendly guidance.
            </p>

            <div className="modal-info">

              <div>
                <MdSchool />
                <span>
                  Achievement
                  <strong>
                    {
                      selectedInstructor.achievement
                    }
                  </strong>
                </span>
              </div>

              <div>
                <MdWorkspacePremium />
                <span>
                  Certificate
                  <strong>
                    {
                      selectedInstructor.certificate
                    }
                  </strong>
                </span>
              </div>

            </div>

            <button
              type="button"
              className="modal-class-button"
              onClick={() =>
                alert(
                  `${selectedInstructor.className} opened`
                )
              }
            >
              Open Class
              <MdArrowForward />
            </button>

          </div>

        </div>

      )}

    </main>
  );
}












// "use client";

// import { useState } from "react";

// import {
//   MdMoreHoriz,
//   MdClose,
//   MdChat,
//   MdPerson,
//   MdArrowBack,
//   MdArrowForward,
//   MdSchool,
//   MdWorkspacePremium,
//   MdCall,
//   MdVideocam,
//   MdSend,
//   MdAttachFile,
// } from "react-icons/md";

// import "./Instructor.scss";

// const instructors = [
//   {
//     id: 1,
//     name: "Samantha William",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "UI Design Basic",
//   },
//   {
//     id: 2,
//     name: "Nadila Adja",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "UI/UX Design",
//   },
//   {
//     id: 3,
//     name: "Johnny Ahmad",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Web Development",
//   },
//   {
//     id: 4,
//     name: "Angelina Crispy",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Graphic Design",
//   },
//   {
//     id: 5,
//     name: "Tony Soap",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Frontend Development",
//   },
//   {
//     id: 6,
//     name: "Jordan Nico",
//     image: "https://randomuser.me/api/portraits/men/75.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "3D Character Design",
//   },

//   {
//     id: 7,
//     name: "Karen Hope",
//     image: "https://randomuser.me/api/portraits/women/49.jpg",
//     rating: "5.0",
//     reviews: "900",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 95,
//     certificate: 48,
//     className: "UI Design Beginner",
//   },
//   {
//     id: 8,
//     name: "Alex Morgan",
//     image: "https://randomuser.me/api/portraits/men/22.jpg",
//     rating: "5.0",
//     reviews: "850",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 98,
//     certificate: 49,
//     className: "React Development",
//   },
//   {
//     id: 9,
//     name: "Sarah Wilson",
//     image: "https://randomuser.me/api/portraits/women/55.jpg",
//     rating: "5.0",
//     reviews: "800",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 96,
//     certificate: 47,
//     className: "Next.js Development",
//   },
//   {
//     id: 10,
//     name: "Robert Smith",
//     image: "https://randomuser.me/api/portraits/men/41.jpg",
//     rating: "5.0",
//     reviews: "750",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 94,
//     certificate: 46,
//     className: "JavaScript Masterclass",
//   },
//   {
//     id: 11,
//     name: "Cahaya Khairi",
//     image: "https://randomuser.me/api/portraits/women/63.jpg",
//     rating: "5.0",
//     reviews: "700",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 92,
//     certificate: 45,
//     className: "UX Research",
//   },
//   {
//     id: 12,
//     name: "Jack Anderson",
//     image: "https://randomuser.me/api/portraits/men/52.jpg",
//     rating: "5.0",
//     reviews: "650",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 90,
//     certificate: 44,
//     className: "Freelancing Basics",
//   },

//   {
//     id: 13,
//     name: "Sofia Martin",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     rating: "5.0",
//     reviews: "600",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 90,
//     certificate: 43,
//     className: "Product Design",
//   },
//   {
//     id: 14,
//     name: "Daniel Lee",
//     image: "https://randomuser.me/api/portraits/men/18.jpg",
//     rating: "5.0",
//     reviews: "580",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 89,
//     certificate: 42,
//     className: "Backend Development",
//   },
//   {
//     id: 15,
//     name: "Emma Johnson",
//     image: "https://randomuser.me/api/portraits/women/25.jpg",
//     rating: "5.0",
//     reviews: "560",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 88,
//     certificate: 41,
//     className: "Digital Marketing",
//   },
//   {
//     id: 16,
//     name: "Michael Brown",
//     image: "https://randomuser.me/api/portraits/men/35.jpg",
//     rating: "5.0",
//     reviews: "540",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 87,
//     certificate: 40,
//     className: "Python Development",
//   },
//   {
//     id: 17,
//     name: "Olivia Taylor",
//     image: "https://randomuser.me/api/portraits/women/32.jpg",
//     rating: "5.0",
//     reviews: "520",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 86,
//     certificate: 39,
//     className: "Illustration Design",
//   },
//   {
//     id: 18,
//     name: "William Davis",
//     image: "https://randomuser.me/api/portraits/men/60.jpg",
//     rating: "5.0",
//     reviews: "500",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 85,
//     certificate: 38,
//     className: "Full Stack Development",
//   },
// ];

// export default function InstructorPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openMenu, setOpenMenu] = useState(null);

//   const [selectedInstructor, setSelectedInstructor] = useState(null);

//   // CHAT
//   const [chatInstructor, setChatInstructor] = useState(null);
//   const [message, setMessage] = useState("");

//   const [messages, setMessages] = useState({
//     1: [
//       {
//         id: 1,
//         sender: "instructor",
//         text: "Hello! How can I help you?",
//         time: "12:45 PM",
//       },
//     ],
//   });

//   const cardsPerPage = 6;

//   const totalPages = Math.ceil(
//     instructors.length / cardsPerPage
//   );

//   const startIndex = (currentPage - 1) * cardsPerPage;

//   const currentInstructors = instructors.slice(
//     startIndex,
//     startIndex + cardsPerPage
//   );

//   const changePage = (page) => {
//     setCurrentPage(page);
//     setOpenMenu(null);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       changePage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       changePage(currentPage + 1);
//     }
//   };

//   // OPEN CHAT
//   const openChat = (instructor) => {
//     setChatInstructor(instructor);
//     setOpenMenu(null);

//     if (!messages[instructor.id]) {
//       setMessages((prev) => ({
//         ...prev,
//         [instructor.id]: [],
//       }));
//     }
//   };

//   // SEND MESSAGE
//   const sendMessage = () => {
//     const cleanMessage = message.trim();

//     if (!cleanMessage || !chatInstructor) {
//       return;
//     }

//     const newMessage = {
//       id: Date.now(),
//       sender: "student",
//       text: cleanMessage,
//       time: "12:45 PM",
//     };

//     setMessages((prev) => ({
//       ...prev,
//       [chatInstructor.id]: [
//         ...(prev[chatInstructor.id] || []),
//         newMessage,
//       ],
//     }));

//     setMessage("");
//   };

//   const currentMessages =
//     chatInstructor
//       ? messages[chatInstructor.id] || []
//       : [];

//   return (
//     <main className="instructor-page">

//       {/* TOP BAR */}

//       <div className="instructor-topbar">

//         <div>
//           <p>
//             Explore our professional instructors
//           </p>
//         </div>

//         <button
//           type="button"
//           className="top-message-button"
//           onClick={() =>
//             openChat(instructors[0])
//           }
//           aria-label="Open messages"
//         >
//           <MdChat />
//           <span />
//         </button>

//       </div>

//       {/* CARDS */}

//       <div className="instructor-grid">

//         {currentInstructors.map(
//           (instructor) => (
//             <article
//               className="instructor-card"
//               key={instructor.id}
//             >

//               {/* TOP */}

//               <div className="card-top">

//                 <button
//                   type="button"
//                   className="more-button"
//                   onClick={() =>
//                     setOpenMenu(
//                       openMenu === instructor.id
//                         ? null
//                         : instructor.id
//                     )
//                   }
//                 >
//                   <MdMoreHoriz />
//                 </button>

//                 {openMenu ===
//                   instructor.id && (
//                   <div className="more-menu">

//                     <button
//                       type="button"
//                       onClick={() =>
//                         openChat(instructor)
//                       }
//                     >
//                       <MdChat />
//                       Message
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSelectedInstructor(
//                           instructor
//                         );
//                         setOpenMenu(null);
//                       }}
//                     >
//                       <MdPerson />
//                       View Profile
//                     </button>

//                   </div>
//                 )}

//               </div>

//               {/* IMAGE */}

//               <button
//                 type="button"
//                 className="instructor-image"
//                 onClick={() =>
//                   openChat(instructor)
//                 }
//               >
//                 <img
//                   src={instructor.image}
//                   alt={instructor.name}
//                 />
//               </button>

//               {/* NAME */}

//               <button
//                 type="button"
//                 className="instructor-name-button"
//                 onClick={() =>
//                   openChat(instructor)
//                 }
//               >
//                 <h2>{instructor.name}</h2>
//               </button>

//               {/* RATING */}

//               <div className="rating">

//                 <span>
//                   {instructor.rating}
//                 </span>

//                 <span className="star">
//                   ★
//                 </span>

//                 <span>
//                   Review ({instructor.reviews})
//                 </span>

//               </div>

//               {/* TAGS */}

//               <div className="tags">

//                 {instructor.tags.map(
//                   (tag) => (
//                     <span key={tag}>
//                       {tag}
//                     </span>
//                   )
//                 )}

//               </div>

//               {/* STATS */}

//               <div className="instructor-stats">

//                 <div>
//                   <MdSchool />

//                   <small>
//                     Achievement
//                   </small>

//                   <strong>
//                     {instructor.achievement}%
//                   </strong>
//                 </div>

//                 <div>
//                   <MdWorkspacePremium />

//                   <small>
//                     Certificate
//                   </small>

//                   <strong>
//                     {instructor.certificate}%
//                   </strong>
//                 </div>

//               </div>

//               {/* VIEW CLASS */}

//               <button
//                 type="button"
//                 className="view-class-button"
//                 onClick={() =>
//                   setSelectedInstructor(
//                     instructor
//                   )
//                 }
//               >
//                 View Class
//               </button>

//             </article>
//           )
//         )}

//       </div>

//       {/* PAGINATION */}

//       <div className="pagination">

//         <button
//           type="button"
//           className="pagination-arrow"
//           disabled={currentPage === 1}
//           onClick={handlePrevious}
//         >
//           <MdArrowBack />
//         </button>

//         {[1, 2, 3].map(
//           (page) => (
//             <button
//               type="button"
//               key={page}
//               className={
//                 currentPage === page
//                   ? "page-number active"
//                   : "page-number"
//               }
//               onClick={() =>
//                 changePage(page)
//               }
//             >
//               {page}
//             </button>
//           )
//         )}

//         <button
//           type="button"
//           className="pagination-arrow"
//           disabled={
//             currentPage === totalPages
//           }
//           onClick={handleNext}
//         >
//           <MdArrowForward />
//         </button>

//       </div>

//       {/* PROFILE MODAL */}

//       {selectedInstructor && (
//         <div
//           className="instructor-overlay"
//           onClick={() =>
//             setSelectedInstructor(null)
//           }
//         >

//           <div
//             className="instructor-modal"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             <button
//               type="button"
//               className="modal-close"
//               onClick={() =>
//                 setSelectedInstructor(null)
//               }
//             >
//               <MdClose />
//             </button>

//             <div className="modal-image">
//               <img
//                 src={
//                   selectedInstructor.image
//                 }
//                 alt={
//                   selectedInstructor.name
//                 }
//               />
//             </div>

//             <h2>
//               {selectedInstructor.name}
//             </h2>

//             <div className="modal-rating">
//               ★ {selectedInstructor.rating}

//               <span>
//                 Review (
//                 {
//                   selectedInstructor.reviews
//                 }
//                 )
//               </span>
//             </div>

//             <h3>
//               {
//                 selectedInstructor.className
//               }
//             </h3>

//             <p>
//               Join this class and learn
//               from{" "}
//               {
//                 selectedInstructor.name
//               }
//               . This instructor provides
//               practical lessons and
//               beginner friendly guidance.
//             </p>

//             <div className="modal-info">

//               <div>
//                 <MdSchool />

//                 <span>
//                   Achievement
//                   <strong>
//                     {
//                       selectedInstructor.achievement
//                     }%
//                   </strong>
//                 </span>
//               </div>

//               <div>
//                 <MdWorkspacePremium />

//                 <span>
//                   Certificate
//                   <strong>
//                     {
//                       selectedInstructor.certificate
//                     }%
//                   </strong>
//                 </span>
//               </div>

//             </div>

//             <button
//               type="button"
//               className="modal-class-button"
//               onClick={() =>
//                 alert(
//                   `${selectedInstructor.className} opened`
//                 )
//               }
//             >
//               Open Class
//               <MdArrowForward />
//             </button>

//           </div>

//         </div>
//       )}

//       {/* CHAT MODAL */}

//       {chatInstructor && (
//         <div
//           className="chat-overlay"
//           onClick={() =>
//             setChatInstructor(null)
//           }
//         >

//           <div
//             className="chat-window"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             {/* CHAT LEFT */}

//             <aside className="chat-sidebar">

//               <div className="chat-profile">

//                 <div className="chat-avatar">
//                   <img
//                     src={chatInstructor.image}
//                     alt={
//                       chatInstructor.name
//                     }
//                   />
//                 </div>

//                 <div>
//                   <strong>
//                     Student
//                   </strong>

//                   <span>
//                     Student
//                   </span>
//                 </div>

//               </div>

//               <div className="chat-sidebar-title">
//                 <h3>Instructors</h3>
//               </div>

//               <div className="chat-contact-list">

//                 {instructors
//                   .slice(0, 8)
//                   .map((instructor) => (
//                     <button
//                       type="button"
//                       key={instructor.id}
//                       className={
//                         chatInstructor.id ===
//                         instructor.id
//                           ? "chat-contact active"
//                           : "chat-contact"
//                       }
//                       onClick={() =>
//                         openChat(instructor)
//                       }
//                     >

//                       <div className="contact-image">
//                         <img
//                           src={
//                             instructor.image
//                           }
//                           alt={
//                             instructor.name
//                           }
//                         />
//                       </div>

//                       <div className="contact-info">

//                         <strong>
//                           {instructor.name}
//                         </strong>

//                         <span>
//                           {instructor.className}
//                         </span>

//                       </div>

//                     </button>
//                   ))}

//               </div>

//             </aside>

//             {/* CHAT CENTER */}

//             <section className="chat-main">

//               {/* HEADER */}

//               <header className="chat-header">

//                 <div className="chat-header-user">

//                   <div className="chat-header-image">
//                     <img
//                       src={
//                         chatInstructor.image
//                       }
//                       alt={
//                         chatInstructor.name
//                       }
//                     />

//                     <span />
//                   </div>

//                   <div>
//                     <h2>
//                       {
//                         chatInstructor.name
//                       }
//                     </h2>

//                     <p>
//                       <span />
//                       Online
//                     </p>
//                   </div>

//                 </div>

//                 <div className="chat-actions">

//                   <button type="button">
//                     <MdCall />
//                   </button>

//                   <button type="button">
//                     <MdVideocam />
//                   </button>

//                   <button type="button">
//                     <MdMoreHoriz />
//                   </button>

//                   <button
//                     type="button"
//                     className="chat-close"
//                     onClick={() =>
//                       setChatInstructor(null)
//                     }
//                   >
//                     <MdClose />
//                   </button>

//                 </div>

//               </header>

//               {/* MESSAGES */}

//               <div className="messages-area">

//                 <div className="message-date">
//                   Today
//                 </div>

//                 {currentMessages.map(
//                   (item) => (
//                     <div
//                       key={item.id}
//                       className={
//                         item.sender ===
//                         "student"
//                           ? "message-row sent"
//                           : "message-row received"
//                       }
//                     >

//                       <div className="message-bubble">
//                         {item.text}
//                       </div>

//                       <span className="message-time">
//                         {item.time}
//                       </span>

//                     </div>
//                   )
//                 )}

//               </div>

//               {/* INPUT */}

//               <div className="chat-input-area">

//                 <input
//                   type="text"
//                   placeholder="Write your message..."
//                   value={message}
//                   onChange={(e) =>
//                     setMessage(
//                       e.target.value
//                     )
//                   }
//                   onKeyDown={(e) => {
//                     if (
//                       e.key === "Enter"
//                     ) {
//                       sendMessage();
//                     }
//                   }}
//                 />

//                 <button
//                   type="button"
//                   className="attach-button"
//                 >
//                   <MdAttachFile />
//                 </button>

//                 <button
//                   type="button"
//                   className="send-button"
//                   onClick={sendMessage}
//                 >
//                   Send
//                   <MdSend />
//                 </button>

//               </div>

//             </section>

//           </div>

//         </div>
//       )}

//     </main>
//   );
// }












// "use client";

// import { useState } from "react";
// import {
//   MdMoreHoriz,
//   MdClose,
//   MdChat,
//   MdPerson,
//   MdArrowBack,
//   MdArrowForward,
//   MdSchool,
//   MdWorkspacePremium,
//   MdMessage,
//   MdSend,
// } from "react-icons/md";

// import "./Instructor.scss";

// const instructors = [
//   {
//     id: 1,
//     name: "Samantha William",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "UI Design Basic",
//   },
//   {
//     id: 2,
//     name: "Nadila Adja",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "UI/UX Design",
//   },
//   {
//     id: 3,
//     name: "Johnny Ahmad",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Web Development",
//   },
//   {
//     id: 4,
//     name: "Angelina Crispy",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Graphic Design",
//   },
//   {
//     id: 5,
//     name: "Tony Soap",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "Frontend Development",
//   },
//   {
//     id: 6,
//     name: "Jordan Nico",
//     image: "https://randomuser.me/api/portraits/men/75.jpg",
//     rating: "5.0",
//     reviews: "1k",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 100,
//     certificate: 50,
//     className: "3D Character Design",
//   },

//   {
//     id: 7,
//     name: "Karen Hope",
//     image: "https://randomuser.me/api/portraits/women/49.jpg",
//     rating: "5.0",
//     reviews: "900",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 95,
//     certificate: 48,
//     className: "UI Design Beginner",
//   },
//   {
//     id: 8,
//     name: "Alex Morgan",
//     image: "https://randomuser.me/api/portraits/men/22.jpg",
//     rating: "5.0",
//     reviews: "850",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 98,
//     certificate: 49,
//     className: "React Development",
//   },
//   {
//     id: 9,
//     name: "Sarah Wilson",
//     image: "https://randomuser.me/api/portraits/women/55.jpg",
//     rating: "5.0",
//     reviews: "800",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 96,
//     certificate: 47,
//     className: "Next.js Development",
//   },
//   {
//     id: 10,
//     name: "Robert Smith",
//     image: "https://randomuser.me/api/portraits/men/41.jpg",
//     rating: "5.0",
//     reviews: "750",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 94,
//     certificate: 46,
//     className: "JavaScript Masterclass",
//   },
//   {
//     id: 11,
//     name: "Cahaya Khairi",
//     image: "https://randomuser.me/api/portraits/women/63.jpg",
//     rating: "5.0",
//     reviews: "700",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 92,
//     certificate: 45,
//     className: "UX Research",
//   },
//   {
//     id: 12,
//     name: "Jack Anderson",
//     image: "https://randomuser.me/api/portraits/men/52.jpg",
//     rating: "5.0",
//     reviews: "650",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 90,
//     certificate: 44,
//     className: "Freelancing Basics",
//   },

//   {
//     id: 13,
//     name: "Sofia Martin",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     rating: "5.0",
//     reviews: "600",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 90,
//     certificate: 43,
//     className: "Product Design",
//   },
//   {
//     id: 14,
//     name: "Daniel Lee",
//     image: "https://randomuser.me/api/portraits/men/18.jpg",
//     rating: "5.0",
//     reviews: "580",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 89,
//     certificate: 42,
//     className: "Backend Development",
//   },
//   {
//     id: 15,
//     name: "Emma Johnson",
//     image: "https://randomuser.me/api/portraits/women/25.jpg",
//     rating: "5.0",
//     reviews: "560",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 88,
//     certificate: 41,
//     className: "Digital Marketing",
//   },
//   {
//     id: 16,
//     name: "Michael Brown",
//     image: "https://randomuser.me/api/portraits/men/35.jpg",
//     rating: "5.0",
//     reviews: "540",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 87,
//     certificate: 40,
//     className: "Python Development",
//   },
//   {
//     id: 17,
//     name: "Olivia Taylor",
//     image: "https://randomuser.me/api/portraits/women/32.jpg",
//     rating: "5.0",
//     reviews: "520",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 86,
//     certificate: 39,
//     className: "Illustration Design",
//   },
//   {
//     id: 18,
//     name: "William Davis",
//     image: "https://randomuser.me/api/portraits/men/60.jpg",
//     rating: "5.0",
//     reviews: "500",
//     tags: ["Design", "Tech", "Research"],
//     achievement: 85,
//     certificate: 38,
//     className: "Full Stack Development",
//   },
// ];

// export default function InstructorPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [selectedInstructor, setSelectedInstructor] = useState(null);

//   // CHAT
//   const [showChat, setShowChat] = useState(false);
//   const [activeChat, setActiveChat] = useState(null);
//   const [message, setMessage] = useState("");

//   const cardsPerPage = 6;

//   const totalPages = Math.ceil(
//     instructors.length / cardsPerPage
//   );

//   const startIndex = (currentPage - 1) * cardsPerPage;

//   const currentInstructors = instructors.slice(
//     startIndex,
//     startIndex + cardsPerPage
//   );

//   const changePage = (page) => {
//     setCurrentPage(page);
//     setOpenMenu(null);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       changePage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       changePage(currentPage + 1);
//     }
//   };

//   const openInstructorChat = (instructor) => {
//     setActiveChat(instructor);
//     setShowChat(true);
//   };

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     setMessage("");
//   };

//   return (
//     <main className="instructor-page">

//       {/* TOP HEADER */}

//       <div className="instructor-heading">

//         <div />

//         <button
//           type="button"
//           className="message-icon-button"
//           onClick={() => {
//             setShowChat(true);

//             if (!activeChat) {
//               setActiveChat(instructors[0]);
//             }
//           }}
//           title="Messages"
//         >
//           <MdMessage />
//           <span className="message-dot" />
//         </button>

//       </div>

//       {/* CARDS */}

//       <div className="instructor-grid">

//         {currentInstructors.map((instructor) => (

//           <article
//             className="instructor-card"
//             key={instructor.id}
//           >

//             {/* TOP */}

//             <div className="card-top">

//               <button
//                 type="button"
//                 className="more-button"
//                 onClick={() =>
//                   setOpenMenu(
//                     openMenu === instructor.id
//                       ? null
//                       : instructor.id
//                   )
//                 }
//               >
//                 <MdMoreHoriz />
//               </button>

//               {openMenu === instructor.id && (

//                 <div className="more-menu">

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setOpenMenu(null);
//                       openInstructorChat(instructor);
//                     }}
//                   >
//                     <MdChat />
//                     Message
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSelectedInstructor(instructor);
//                       setOpenMenu(null);
//                     }}
//                   >
//                     <MdPerson />
//                     View Profile
//                   </button>

//                 </div>

//               )}

//             </div>

//             {/* IMAGE */}

//             <div className="instructor-image">

//               <img
//                 src={instructor.image}
//                 alt={instructor.name}
//               />

//             </div>

//             {/* NAME */}

//             <h2>{instructor.name}</h2>

//             {/* RATING */}

//             <div className="rating">

//               <span>{instructor.rating}</span>

//               <span className="star">
//                 ★
//               </span>

//               <span>
//                 Review ({instructor.reviews})
//               </span>

//             </div>

//             {/* TAGS */}

//             <div className="tags">

//               {instructor.tags.map((tag) => (
//                 <span key={tag}>
//                   {tag}
//                 </span>
//               ))}

//             </div>

//             {/* STATS */}

//             <div className="instructor-stats">

//               <div>
//                 <MdSchool />

//                 <small>
//                   Achievement
//                 </small>

//                 <strong>
//                   {instructor.achievement}
//                 </strong>
//               </div>

//               <div>
//                 <MdWorkspacePremium />

//                 <small>
//                   Certificate
//                 </small>

//                 <strong>
//                   {instructor.certificate}
//                 </strong>
//               </div>

//             </div>

//             {/* VIEW CLASS */}

//             <button
//               type="button"
//               className="view-class-button"
//               onClick={() =>
//                 setSelectedInstructor(instructor)
//               }
//             >
//               View Class
//             </button>

//           </article>

//         ))}

//       </div>

//       {/* PAGINATION */}

//       <div className="pagination">

//         <button
//           type="button"
//           className="pagination-arrow"
//           disabled={currentPage === 1}
//           onClick={handlePrevious}
//         >
//           <MdArrowBack />
//         </button>

//         {[1, 2, 3].map((page) => (

//           <button
//             type="button"
//             key={page}
//             className={
//               currentPage === page
//                 ? "page-number active"
//                 : "page-number"
//             }
//             onClick={() => changePage(page)}
//           >
//             {page}
//           </button>

//         ))}

//         <button
//           type="button"
//           className="pagination-arrow"
//           disabled={currentPage === totalPages}
//           onClick={handleNext}
//         >
//           <MdArrowForward />
//         </button>

//       </div>

//       {/* PROFILE MODAL */}

//       {selectedInstructor && (

//         <div
//           className="instructor-overlay"
//           onClick={() =>
//             setSelectedInstructor(null)
//           }
//         >

//           <div
//             className="instructor-modal"
//             onClick={(e) =>
//               e.stopPropagation()
//             }
//           >

//             <button
//               type="button"
//               className="modal-close"
//               onClick={() =>
//                 setSelectedInstructor(null)
//               }
//             >
//               <MdClose />
//             </button>

//             <div className="modal-image">

//               <img
//                 src={selectedInstructor.image}
//                 alt={selectedInstructor.name}
//               />

//             </div>

//             <h2>
//               {selectedInstructor.name}
//             </h2>

//             <div className="modal-rating">
//               ★ {selectedInstructor.rating}

//               <span>
//                 Review (
//                 {selectedInstructor.reviews}
//                 )
//               </span>
//             </div>

//             <h3>
//               {selectedInstructor.className}
//             </h3>

//             <p>
//               Join this class and learn from{" "}
//               {selectedInstructor.name}.
//               This instructor provides practical
//               lessons and beginner friendly guidance.
//             </p>

//             <div className="modal-info">

//               <div>
//                 <MdSchool />

//                 <span>
//                   Achievement
//                   <strong>
//                     {selectedInstructor.achievement}
//                   </strong>
//                 </span>
//               </div>

//               <div>
//                 <MdWorkspacePremium />

//                 <span>
//                   Certificate
//                   <strong>
//                     {selectedInstructor.certificate}
//                   </strong>
//                 </span>
//               </div>

//             </div>

//             <button
//               type="button"
//               className="modal-class-button"
//               onClick={() =>
//                 alert(
//                   `${selectedInstructor.className} opened`
//                 )
//               }
//             >
//               Open Class
//               <MdArrowForward />
//             </button>

//           </div>

//         </div>

//       )}

//       {/* ================= CHAT ================= */}

//       {showChat && (

//         <div
//           className="chat-overlay"
//           onClick={() => setShowChat(false)}
//         >

//           <div
//             className="chat-window"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CHAT LIST */}

//             <div className="chat-sidebar">

//               <div className="chat-sidebar-header">
//                 <h2>Message</h2>
//               </div>

//               <div className="chat-list">

//                 {instructors.map((instructor) => (

//                   <button
//                     type="button"
//                     className={
//                       activeChat?.id === instructor.id
//                         ? "chat-user active"
//                         : "chat-user"
//                     }
//                     key={instructor.id}
//                     onClick={() =>
//                       setActiveChat(instructor)
//                     }
//                   >

//                     <img
//                       src={instructor.image}
//                       alt={instructor.name}
//                     />

//                     <span>
//                       <strong>
//                         {instructor.name}
//                       </strong>

//                       <small>
//                         {instructor.className}
//                       </small>
//                     </span>

//                   </button>

//                 ))}

//               </div>

//             </div>

//             {/* CHAT CONTENT */}

//             <div className="chat-main">

//               <div className="chat-header">

//                 {activeChat && (
//                   <>
//                     <img
//                       src={activeChat.image}
//                       alt={activeChat.name}
//                     />

//                     <div>
//                       <strong>
//                         {activeChat.name}
//                       </strong>

//                       <small>
//                         ● Online
//                       </small>
//                     </div>
//                   </>
//                 )}

//                 <button
//                   type="button"
//                   className="chat-close"
//                   onClick={() =>
//                     setShowChat(false)
//                   }
//                 >
//                   <MdClose />
//                 </button>

//               </div>

//               <div className="chat-body">

//                 <div className="received-message">
//                   Hello! How can I help you?
//                 </div>

//                 <div className="received-time">
//                   12:45 PM
//                 </div>

//                 <div className="sent-message">
//                   Hello! I have a question about the class.
//                 </div>

//                 <div className="sent-time">
//                   12:45 PM
//                 </div>

//               </div>

//               <div className="chat-input-area">

//                 <input
//                   type="text"
//                   placeholder="Write your message..."
//                   value={message}
//                   onChange={(e) =>
//                     setMessage(e.target.value)
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       sendMessage();
//                     }
//                   }}
//                 />

//                 <button
//                   type="button"
//                   onClick={sendMessage}
//                 >
//                   Send
//                   <MdSend />
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}

//     </main>
//   );
// }