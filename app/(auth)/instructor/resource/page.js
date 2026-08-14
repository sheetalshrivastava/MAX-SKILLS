"use client";

import { useMemo, useState } from "react";

import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdPlayCircleOutline,
  MdClose,
  MdSearch,
  MdMoreHoriz,
} from "react-icons/md";

import "./Resource.scss";

const resourcesData = [
  {
    id: 1,
    title: "Here 10 Tips to become better in UI/UX Design.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2 January 2022",
    category: "UI/UX",
    video: "https://www.youtube.com/embed/FTFaQWZBqQ8",
  },
  {
    id: 2,
    title: "Best 10 font pairing for web design with example.",
    description:
      "Learn how to select beautiful font combinations and create professional looking websites with better typography.",
    date: "2 January 2022",
    category: "Design",
    video: "https://www.youtube.com/embed/wfaDzSL6ll0",
  },
  {
    id: 3,
    title: "Create A Real-Time E-Commerce App With React Native",
    description:
      "Learn how modern e-commerce applications are created using React and React Native with practical examples.",
    date: "2 January 2022",
    category: "Development",
    video: "https://www.youtube.com/embed/SqcY0GlETPk",
  },
  {
    id: 4,
    title: "How to create a modern dashboard design.",
    description:
      "Understand dashboard layouts, cards, spacing, typography and responsive design techniques.",
    date: "5 January 2022",
    category: "UI/UX",
    video: "https://www.youtube.com/embed/6Qn2x0hB7kM",
  },
  {
    id: 5,
    title: "React Components Every Beginner Should Know.",
    description:
      "A beginner friendly guide to reusable React components and how to structure a React application.",
    date: "8 January 2022",
    category: "Development",
    video: "https://www.youtube.com/embed/SqcY0GlETPk",
  },
  {
    id: 6,
    title: "Responsive Website Design Complete Guide.",
    description:
      "Learn how to make your website responsive for desktop, tablet and mobile screens.",
    date: "10 January 2022",
    category: "Frontend",
    video: "https://www.youtube.com/embed/srvUrASNj0s",
  },
  {
    id: 7,
    title: "JavaScript Fundamentals for Beginners.",
    description:
      "Understand variables, functions, arrays, objects and important JavaScript concepts.",
    date: "12 January 2022",
    category: "JavaScript",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
  {
    id: 8,
    title: "SCSS Complete Beginner Guide.",
    description:
      "Learn variables, nesting, mixins and reusable styles using SCSS.",
    date: "15 January 2022",
    category: "SCSS",
    video: "https://www.youtube.com/embed/Zz6eOVaaelI",
  },
  {
    id: 9,
    title: "Next.js App Router Beginner Guide.",
    description:
      "Learn the basic structure of a Next.js application using the App Router.",
    date: "18 January 2022",
    category: "Next.js",
    video: "https://www.youtube.com/embed/NgayZAuTgwM",
  },
];

const faqData = [
  {
    question: "Is there a free trial?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How the I get payment?",
    answer:
      "Payment related information is available from your instructor account and transaction section.",
  },
  {
    question: "Can I rewatch the live courses?",
    answer:
      "Yes. Available course recordings can be watched again whenever they are available.",
  },
  {
    question: "What different Free account and Premium?",
    answer:
      "Premium accounts provide additional learning features and premium resources.",
  },
];

const ITEMS_PER_PAGE = 3;

export default function InstructorResourcePage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredResources = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return resourcesData;
    }

    return resourcesData.filter((resource) => {
      return (
        resource.title.toLowerCase().includes(value) ||
        resource.description.toLowerCase().includes(value) ||
        resource.category.toLowerCase().includes(value)
      );
    });
  }, [search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResources.length / ITEMS_PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleResources = filteredResources.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const goToPage = (number) => {
    setPage(number);
  };

  const previousPage = () => {
    setPage((current) => Math.max(1, current - 1));
  };

  const nextPage = () => {
    setPage((current) => Math.min(totalPages, current + 1));
  };

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <>
      <div className="resource-page">
        {/* =================================
            MAIN RESOURCE CONTENT
        ================================= */}

        <div className="resource-main">
          <div className="blogs-heading-row">
            <h2>Blogs</h2>

            <div className="resource-search">
              <MdSearch />

              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search"
              />
            </div>
          </div>

          {/* BLOG LIST */}

          <div className="resource-list">
            {visibleResources.map((resource) => (
              <article className="resource-blog" key={resource.id}>
                {/* IMAGE / VIDEO AREA */}

                <div className="resource-thumbnail">
                  <div className="thumbnail-placeholder" />

                  <button
                    type="button"
                    className="video-button"
                    onClick={() => setSelectedVideo(resource)}
                    aria-label={`Watch ${resource.title}`}
                  >
                    <MdPlayCircleOutline />
                  </button>
                </div>

                {/* BLOG CONTENT */}

                <div className="resource-blog-content">
                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <div className="resource-meta">
                    <span className="admin">Admin</span>

                    <span> - {resource.date}</span>
                  </div>

                  <button
                    type="button"
                    className="watch-button"
                    onClick={() => setSelectedVideo(resource)}
                  >
                    <MdPlayCircleOutline />
                    Watch Video
                  </button>
                </div>
              </article>
            ))}

            {visibleResources.length === 0 && (
              <div className="resource-empty">
                <h3>No resource found</h3>
                <p>Try another search.</p>
              </div>
            )}
          </div>

          {/* FOOTER + PAGINATION */}

          <div className="resource-pagination-row">
            <span className="resource-count">
              Showing{" "}
              {filteredResources.length > 0
                ? (currentPage - 1) * ITEMS_PER_PAGE + 1
                : 0}
              -
              {Math.min(
                currentPage * ITEMS_PER_PAGE,
                filteredResources.length
              )}{" "}
              from {filteredResources.length} data
            </span>

            <div className="resource-pagination">
              <button
                type="button"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                <MdKeyboardArrowLeft />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const number = index + 1;

                return (
                  <button
                    type="button"
                    key={number}
                    className={currentPage === number ? "active" : ""}
                    onClick={() => goToPage(number)}
                  >
                    {number}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* =================================
            RIGHT SIDEBAR
        ================================= */}

        <aside className="resource-right">
          {/* CONTACT */}

          <section className="contact-card">
            <h2>Contact</h2>

            <button type="button" className="contact-item">
              <MdLocationOn />

              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </span>
            </button>

            <a href="tel:+1234567890" className="contact-item">
              <MdPhone />

              <span>+1234567890</span>
            </a>

            <a
              href="mailto:livia@support.com"
              className="contact-item"
            >
              <MdEmail />

              <span>livia@support.com</span>
            </a>
          </section>

          {/* FAQ */}

          <section className="faq-section">
            <div className="faq-title-row">
              <h2>FAQS</h2>

              <button type="button" aria-label="More options">
                <MdMoreHoriz />
              </button>
            </div>

            <div className="faq-list">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>

                      <span className="faq-arrow">
                        <MdKeyboardArrowDown />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </aside>
      </div>

      {/* =================================
          VIDEO MODAL
      ================================= */}

      {selectedVideo && (
        <div
          className="video-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="video-modal-header">
              <h2>{selectedVideo.title}</h2>

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
              >
                <MdClose />
              </button>
            </div>

            <div className="video-wrapper">
              <iframe
                src={`${selectedVideo.video}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}