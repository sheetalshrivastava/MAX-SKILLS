


"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  MdSearch,
  MdMenuBook,
  MdArrowForward,
  MdPlayCircle,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

import "./course.scss";

const popularCourses = [
  {
    id: 1,
    title: "Graphic Design",
    icon: "🎨",
    description: "Learn graphic design from basics.",
  },
  {
    id: 2,
    title: "Programming",
    icon: "💻",
    description: "Start programming from beginner level.",
  },
  {
    id: 3,
    title: "Soft Skill",
    icon: "💡",
    description: "Improve communication and soft skills.",
  },
  {
    id: 4,
    title: "Science",
    icon: "🔬",
    description: "Explore science concepts easily.",
  },
  {
    id: 5,
    title: "UI/UX Design",
    icon: "🖌️",
    description: "Learn modern UI/UX design.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    icon: "📱",
    description: "Learn digital marketing strategies.",
  },
];

const allCourses = [
  {
    id: 1,
    title: "Fullstack Developer",
    author: "Samantha William",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Learn full-stack web development from beginner level using HTML, CSS, JavaScript, React and Next.js.",
    video: "https://www.youtube.com/embed/nu_pCVPKzTk",
  },
  {
    id: 2,
    title: "UI Design Beginner",
    author: "Karen Hope",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Learn the basics of UI design and create beautiful interfaces.",
    video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
  },
  {
    id: 3,
    title: "How to be Freelancer",
    author: "Jack and Sally",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Learn how to start freelancing and find clients online.",
    video: "https://www.youtube.com/embed/6h2QYq6f6n8",
  },
  {
    id: 4,
    title: "UX Research",
    author: "Cahaya Khairi",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Understand users and learn professional UX research.",
    video: "https://www.youtube.com/embed/Ovj4hFxko7c",
  },
  {
    id: 5,
    title: "Basic Web Design",
    author: "Johnny Ahmad",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Learn how to create beautiful responsive websites.",
    video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
  },
  {
    id: 6,
    title: "3D Character Design",
    author: "Jordan Nico",
    rating: "5.0",
    price: "50.99",
    content: "110+ Content",
    description:
      "Learn the fundamentals of 3D character design.",
    video: "https://www.youtube.com/embed/3q3FV65ZrUs",
  },
  {
    id: 7,
    title: "React Development",
    author: "Alex Morgan",
    rating: "5.0",
    price: "55.99",
    content: "120+ Content",
    description:
      "Learn React and build modern interactive web applications.",
    video: "https://www.youtube.com/embed/SqcY0GlETPk",
  },
  {
    id: 8,
    title: "JavaScript Masterclass",
    author: "Robert Smith",
    rating: "5.0",
    price: "45.99",
    content: "100+ Content",
    description:
      "Master JavaScript fundamentals and modern development.",
    video: "https://www.youtube.com/embed/PkZNo7MFNFg",
  },
  {
    id: 9,
    title: "Next.js Beginner",
    author: "Sarah Wilson",
    rating: "5.0",
    price: "60.99",
    content: "90+ Content",
    description:
      "Learn Next.js and create modern full-stack applications.",
    video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
  },
];

export default function StudentCourses() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [page, setPage] = useState(1);

  const coursesPerPage = 6;

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / coursesPerPage)
  );

  const currentCourses = filteredCourses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage
  );

  const visiblePopular = showAllPopular
    ? popularCourses
    : popularCourses.slice(0, 4);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  // COURSE OVERVIEW OPEN
  const openCourse = (course) => {
    router.push(`/student/course-overview?id=${course.id}`);
  };

  return (
    <div className="courses-page">

      {/* TOP */}
      <div className="courses-topbar">
        <div>
          <h1>Courses</h1>
          <p>Learn something new today.</p>
        </div>

        <div className="course-search">
          <MdSearch />

          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* POPULAR */}
      <section className="popular-section">

        <div className="section-heading">
          <h2>Popular This Week</h2>

          <button
            type="button"
            onClick={() => setShowAllPopular(!showAllPopular)}
          >
            {showAllPopular ? "Show less" : "View all"}
            <MdArrowForward />
          </button>
        </div>

        <div className="popular-grid">

          {visiblePopular.map((course) => (
            <button
              type="button"
              className="popular-card"
              key={course.id}
              onClick={() => {
                const matchedCourse = allCourses.find(
                  (item) => item.id === course.id
                );

                if (matchedCourse) {
                  openCourse(matchedCourse);
                }
              }}
            >
              <div className="popular-icon">
                {course.icon}
              </div>

              <div className="popular-content">
                <strong>{course.title}</strong>
                <span>{course.description}</span>
              </div>

              <MdArrowForward className="popular-arrow" />
            </button>
          ))}

        </div>
      </section>

      {/* ALL COURSES */}
      <section className="all-courses-section">

        <div className="section-heading">
          <h2>All Courses</h2>

          <span className="course-count">
            {filteredCourses.length} courses
          </span>
        </div>

        {currentCourses.length > 0 ? (
          <div className="course-grid">

            {currentCourses.map((course) => (
              <article
                className="course-card"
                key={course.id}
              >

                {/* VIDEO PREVIEW */}
                <button
                  type="button"
                  className="course-image"
                  onClick={() => openCourse(course)}
                >
                  <div className="image-placeholder" />

                  <div className="play-button">
                    <MdPlayCircle />
                  </div>
                </button>

                {/* INFO */}
                <div className="course-info">

                  <div className="course-title-row">
                    <h3>{course.title}</h3>

                    <strong className="course-price">
                      <span>$</span>
                      {course.price}
                    </strong>
                  </div>

                  <div className="course-author">
                    <span>{course.author}</span>

                    <span className="rating">
                      ★ {course.rating}
                    </span>
                  </div>

                  <div className="course-bottom">

                    <span className="course-content">
                      <MdMenuBook />
                      {course.content}
                    </span>

                    <button
                      type="button"
                      onClick={() => openCourse(course)}
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        ) : (
          <div className="no-courses">
            <h3>No courses found</h3>

            <p>
              Try searching with another course name.
            </p>
          </div>
        )}

        {/* PAGINATION */}
        {filteredCourses.length > 0 && (
          <div className="pagination">

            <button
              type="button"
              className="pagination-arrow"
              disabled={page === 1}
              onClick={() =>
                setPage((prev) => Math.max(1, prev - 1))
              }
            >
              <MdChevronLeft />
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => {
                const pageNumber = index + 1;

                return (
                  <button
                    type="button"
                    key={pageNumber}
                    className={
                      page === pageNumber ? "active" : ""
                    }
                    onClick={() =>
                      setPage(pageNumber)
                    }
                  >
                    {pageNumber}
                  </button>
                );
              }
            )}

            <button
              type="button"
              className="pagination-arrow"
              disabled={page === totalPages}
              onClick={() =>
                setPage((prev) =>
                  Math.min(totalPages, prev + 1)
                )
              }
            >
              <MdChevronRight />
            </button>

          </div>
        )}

      </section>

    </div>
  );
}