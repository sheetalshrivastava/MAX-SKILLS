"use client";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  MdArrowBack,
  MdPlayArrow,
  MdFavoriteBorder,
  MdFavorite,
  MdShoppingCart,
  MdCheckCircle,
  MdStar,
  MdThumbUp,
  MdSend,
  MdLocalOffer,
  MdArrowForward,
  MdForum,
  MdBarChart,
} from "react-icons/md";

import "./CourseOverview.scss";

const courses = {
  "1": {
    title: "Full-Stack Web Developer for Beginner",
    author: "Samantha William",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "1k",
    students: "10k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/nu_pCVPKzTk",
    description:
      "Learn full-stack web development from beginner level. Build modern websites and applications using HTML, CSS, JavaScript, React and Next.js.",
    learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML & CSS",
      "Create Responsive Website",
    ],
  },

  "2": {
    title: "UI Design Beginner",
    author: "Karen Hope",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "800",
    students: "8k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    description:
      "Learn the basics of UI design and create beautiful interfaces for websites and applications.",
    learn: [
      "UI Design Basics",
      "Color Theory",
      "Typography",
      "Wireframing",
      "Design Systems",
      "Responsive Design",
    ],
  },

  "3": {
    title: "How to be Freelancer",
    author: "Jack and Sally",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "700",
    students: "7k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/6h2QYq6f6n8",
    description:
      "Learn how to start freelancing, find clients and build your professional career online.",
    learn: [
      "Freelancing Basics",
      "Finding Clients",
      "Building Portfolio",
      "Communication",
      "Project Management",
      "Getting Paid",
    ],
  },

  "4": {
    title: "UX Research",
    author: "Cahaya Khairi",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "900",
    students: "9k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/Ovj4hFxko7c",
    description:
      "Understand users and learn how to conduct professional UX research.",
    learn: [
      "User Research",
      "User Interviews",
      "Personas",
      "User Journey",
      "Usability Testing",
      "UX Strategy",
    ],
  },

  "5": {
    title: "Basic Web Design",
    author: "Johnny Ahmad",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "650",
    students: "6k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/1Rs2ND1ryYc",
    description:
      "Learn how to create beautiful and responsive websites from scratch.",
    learn: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Flexbox",
      "Grid",
      "Website Layout",
    ],
  },

  "6": {
    title: "3D Character Design",
    author: "Jordan Nico",
    price: "50.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "500",
    students: "5k",
    content: "110+ Content",
    video:
      "https://www.youtube.com/embed/3q3FV65ZrUs",
    description:
      "Learn the fundamentals of 3D character design and modelling.",
    learn: [
      "3D Basics",
      "Character Modelling",
      "Materials",
      "Lighting",
      "Rendering",
      "Character Design",
    ],
  },

  "7": {
    title: "React Development",
    author: "Alex Morgan",
    price: "55.99",
    oldPrice: "99.00",
    rating: "5.0",
    reviews: "1.2k",
    students: "12k",
    content: "120+ Content",
    video:
      "https://www.youtube.com/embed/SqcY0GlETPk",
    description:
      "Learn React and build modern interactive web applications.",
    learn: [
      "React Components",
      "Props",
      "State",
      "Hooks",
      "Forms",
      "API Integration",
    ],
  },

  "8": {
    title: "JavaScript Masterclass",
    author: "Robert Smith",
    price: "45.99",
    oldPrice: "89.00",
    rating: "5.0",
    reviews: "950",
    students: "10k",
    content: "100+ Content",
    video:
      "https://www.youtube.com/embed/PkZNo7MFNFg",
    description:
      "Master JavaScript fundamentals and modern JavaScript development.",
    learn: [
      "JavaScript Basics",
      "Functions",
      "Arrays",
      "Objects",
      "DOM",
      "Async JavaScript",
    ],
  },

  "9": {
    title: "Next.js Beginner",
    author: "Sarah Wilson",
    price: "60.99",
    oldPrice: "120.00",
    rating: "5.0",
    reviews: "600",
    students: "6k",
    content: "90+ Content",
    video:
      "https://www.youtube.com/embed/ZVnjOPwW4ZA",
    description:
      "Learn Next.js and create fast, modern full-stack applications.",
    learn: [
      "Next.js Basics",
      "App Router",
      "Layouts",
      "Server Components",
      "API Routes",
      "Deployment",
    ],
  },
};

export default function CourseOverview() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const courseId =
    searchParams.get("id") || "1";

  const course =
    courses[courseId] || courses["1"];

  const [activeTab, setActiveTab] =
    useState("about");

  const [isLiked, setIsLiked] =
    useState(false);

  const [isFavorite, setIsFavorite] =
    useState(false);

  const [cartAdded, setCartAdded] =
    useState(false);

  const [buyMessage, setBuyMessage] =
    useState("");

  const [coupon, setCoupon] =
    useState("");

  const [couponApplied, setCouponApplied] =
    useState(false);

  const [couponMessage, setCouponMessage] =
    useState("");

  const [comment, setComment] =
    useState("");

  const [comments, setComments] =
    useState([
      {
        name: "Karen Hope",
        text:
          "Very useful course. The explanation is easy to understand.",
        rating: "5.0",
        time: "1 Month Ago",
      },
      {
        name: "Tony Soap",
        text:
          "Great course for beginners. I learned a lot from this.",
        rating: "5.0",
        time: "1 Month Ago",
      },
    ]);

  const handleAddToCart = () => {
    setCartAdded(true);
    setBuyMessage(
      "Course added to cart!"
    );
  };

  // BUY NOW
  const handleBuyNow = () => {
    const purchasedCourses =
      JSON.parse(
        localStorage.getItem(
          "maxskills_purchased_courses"
        ) || "[]"
      );

    if (
      !purchasedCourses.includes(
        String(courseId)
      )
    ) {
      purchasedCourses.push(
        String(courseId)
      );
    }

    localStorage.setItem(
      "maxskills_purchased_courses",
      JSON.stringify(
        purchasedCourses
      )
    );

    setCartAdded(true);
    setBuyMessage(
      "Course purchased successfully! Opening course content..."
    );

    setTimeout(() => {
      router.push(
        `/student/course-content?id=${courseId}`
      );
    }, 700);
  };

  const handleCoupon = () => {
    const value =
      coupon.trim().toUpperCase();

    if (value === "MAX50") {
      setCouponApplied(true);

      setCouponMessage(
        "Coupon applied successfully! 50% discount added."
      );
    } else {
      setCouponApplied(false);

      setCouponMessage(
        "Invalid coupon. Try MAX50."
      );
    }
  };

  const handleComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    const newComment = {
      name: "You",
      text: comment.trim(),
      rating: "5.0",
      time: "Just Now",
    };

    setComments((previous) => [
      ...previous,
      newComment,
    ]);

    setComment("");
  };

  const displayPrice = couponApplied
    ? (Number(course.price) / 2).toFixed(2)
    : course.price;

  return (
    <div className="course-details-page">

      {/* BACK */}

      <button
        type="button"
        className="back-button"
        onClick={() => router.back()}
      >
        <MdArrowBack />
        <span>Back</span>
      </button>

      <div className="course-details-grid">

        {/* LEFT */}

        <section className="course-overview">

          <div className="course-main-info">

            <span className="overview-label">
              COURSE OVERVIEW
            </span>

            <h1>{course.title}</h1>

            <p className="course-description">
              {course.description}
            </p>

            <div className="course-rating">

              <strong>
                {course.rating}
              </strong>

              <span className="stars">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </span>

              <span className="rating-separator">
                |
              </span>

              <span>
                Review ({course.reviews})
              </span>

              <span className="rating-separator">
                |
              </span>

              <span>
                {course.students} Students
              </span>

            </div>

            <div className="instructor-info">

              <div className="instructor-avatar">
                {course.author.charAt(0)}
              </div>

              <span>
                {course.author}
              </span>

            </div>

          </div>

          {/* TABS */}

          <div className="course-tabs">

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
              Reviews
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
              <MdForum />
              Discussion
            </button>

            <button
              type="button"
              className={
                activeTab === "progress"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("progress")
              }
            >
              <MdBarChart />
              Progress
            </button>

          </div>

          {/* ABOUT */}

          {activeTab === "about" && (

            <div className="about-content">

              <h3>
                About This Course
              </h3>

              <p>
                {course.description}
              </p>

              <h3>
                What You Will Learn
              </h3>

              <div className="learn-list">

                {course.learn.map(
                  (item) => (
                    <div key={item}>
                      <MdCheckCircle />

                      <span>
                        {item}
                      </span>
                    </div>
                  )
                )}

              </div>

              {/* NO START COURSE BUTTON */}

              <div className="purchase-note">
                Buy this course to unlock
                the complete course content.
              </div>

            </div>
          )}

          {/* REVIEWS */}

          {activeTab === "reviews" && (

            <div className="reviews-content">

              <h3>
                Course Reviews
              </h3>

              {comments.map(
                (item, index) => (

                  <div
                    className="review-item"
                    key={index}
                  >

                    <div className="review-avatar">
                      {item.name.charAt(0)}
                    </div>

                    <div className="review-body">

                      <div className="review-top">

                        <strong>
                          {item.name}
                        </strong>

                        <span className="review-rating">
                          {item.rating}

                          <span className="stars">
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                          </span>
                        </span>

                        <small>
                          {item.time}
                        </small>

                      </div>

                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                )
              )}

              <form
                className="comment-form"
                onSubmit={handleComment}
              >

                <input
                  type="text"
                  placeholder="Write a review..."
                  value={comment}
                  onChange={(e) =>
                    setComment(e.target.value)
                  }
                />

                <button type="submit">
                  <MdSend />
                </button>

              </form>

            </div>
          )}

          {/* DISCUSSION */}

          {activeTab === "discussion" && (

            <div className="discussion-content">

              <h3>
                Course Discussion
              </h3>

              <p>
                Ask questions, share ideas
                and discuss this course
                with other students.
              </p>

              <div className="discussion-box">

                <div className="discussion-avatar">
                  S
                </div>

                <div>
                  <strong>
                    Students Discussion
                  </strong>

                  <p>
                    Start a discussion
                    about this course.
                  </p>
                </div>

              </div>

              <form
                className="comment-form"
                onSubmit={handleComment}
              >

                <input
                  type="text"
                  placeholder="Start a discussion..."
                  value={comment}
                  onChange={(e) =>
                    setComment(e.target.value)
                  }
                />

                <button type="submit">
                  <MdSend />
                </button>

              </form>

            </div>
          )}

          {/* PROGRESS */}

          {activeTab === "progress" && (

            <div className="progress-content">

              <h3>
                Your Course Progress
              </h3>

              <div className="progress-header">
                <strong>
                  0% Complete
                </strong>

                <span>
                  0 / 110 lessons
                </span>
              </div>

              <div className="progress-bar">
                <span
                  style={{
                    width: "0%",
                  }}
                />
              </div>

              <div className="progress-card">

                <MdBarChart />

                <div>

                  <strong>
                    Course locked
                  </strong>

                  <p>
                    Buy the course to
                    start learning.
                  </p>

                </div>

              </div>

            </div>
          )}

        </section>

        {/* RIGHT */}

        <aside className="course-purchase-card">

          {/* VIDEO */}

          <div className="course-video">

            <iframe
              src={course.video}
              title={`${course.title} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <div className="video-label">
              <MdPlayArrow />
              <span>View Demo</span>
            </div>

          </div>

          {/* PRICE */}

          <div className="price-row">

            <strong>
              ${displayPrice}
            </strong>

            <del>
              ${course.oldPrice}
            </del>

            <span className="save-badge">
              Save 50%
            </span>

          </div>

          {/* LIKE */}

          <div className="purchase-actions">

            <button
              type="button"
              className={
                isFavorite
                  ? "liked"
                  : ""
              }
              onClick={() =>
                setIsFavorite(
                  (value) => !value
                )
              }
            >
              {isFavorite ? (
                <MdFavorite />
              ) : (
                <MdFavoriteBorder />
              )}

              <span>
                {isFavorite
                  ? "Wishlisted"
                  : "Add to Wishlist"}
              </span>
            </button>

            <button
              type="button"
              className={
                isLiked
                  ? "liked"
                  : ""
              }
              onClick={() =>
                setIsLiked(
                  (value) => !value
                )
              }
            >
              <MdThumbUp />

              <span>
                {isLiked
                  ? "Liked"
                  : "Like"}
              </span>
            </button>

          </div>

          {/* LEARN */}

          <div className="learn-box">

            <h3>
              What will you learn:
            </h3>

            <div className="learn-columns">

              {course.learn.map(
                (item) => (

                  <span key={item}>

                    <MdCheckCircle />

                    {item}

                  </span>

                )
              )}

            </div>

          </div>

          {/* COUPON */}

          <div className="coupon-box">

            <div className="coupon-title">

              <MdLocalOffer />

              <span>
                Have a coupon?
              </span>

            </div>

            <div className="coupon-input">

              <input
                type="text"
                placeholder="Enter coupon"
                value={coupon}
                onChange={(e) =>
                  setCoupon(e.target.value)
                }
              />

              <button
                type="button"
                onClick={handleCoupon}
              >
                Apply
              </button>

            </div>

            <small>
              Try coupon:{" "}
              <b>MAX50</b>
            </small>

            {couponMessage && (

              <p
                className={
                  couponApplied
                    ? "coupon-success"
                    : "coupon-error"
                }
              >
                {couponMessage}
              </p>

            )}

          </div>

          {/* PURCHASE */}

          <div className="purchase-buttons">

            <button
              type="button"
              className="cart-button"
              onClick={handleAddToCart}
            >
              <MdShoppingCart />

              <span>
                {cartAdded
                  ? "Added to Cart"
                  : "Add to Cart"}
              </span>
            </button>

            <button
              type="button"
              className="buy-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

          {buyMessage && (

            <div className="buy-message">
              {buyMessage}
            </div>

          )}

        </aside>

      </div>

    </div>
  );
}