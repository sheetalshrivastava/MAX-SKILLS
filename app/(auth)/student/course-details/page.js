// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   MdArrowBack,
//   MdPlayArrow,
//   MdFavoriteBorder,
//   MdFavorite,
//   MdShoppingCart,
//   MdCheckCircle,
//   MdStar,
//   MdThumbUp,
//   MdSend,
//   MdLocalOffer,
// } from "react-icons/md";

// import "./CourseDetails.scss";

// const courses = {
//   "1": {
//     title: "Full-Stack Web Developer for Beginner",
//     author: "Ms. Samantha William",
//     price: "49.00",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "1k",
//     students: "10k",
//     video: "https://www.youtube.com/embed/nu_pCVPKzTk",
//     description:
//       "Learn full-stack web development from beginner level. Build modern websites and applications using HTML, CSS, JavaScript, React and Next.js.",
//     learn: [
//       "Basic Programming",
//       "Wireframe",
//       "Create a Website",
//       "User Interface Design",
//       "Basic HTML & CSS",
//       "Create Responsive Website",
//     ],
//   },

//   "2": {
//     title: "UI Design Beginner",
//     author: "Karen Hope",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "800",
//     students: "8k",
//     video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//     description:
//       "Learn the basics of UI design and create beautiful interfaces for websites and applications.",
//     learn: [
//       "UI Design Basics",
//       "Color Theory",
//       "Typography",
//       "Wireframing",
//       "Design Systems",
//       "Responsive Design",
//     ],
//   },

//   "3": {
//     title: "How to be Freelancer",
//     author: "Jack and Sally",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "700",
//     students: "7k",
//     video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//     description:
//       "Learn how to start freelancing, find clients and build your professional career online.",
//     learn: [
//       "Freelancing Basics",
//       "Finding Clients",
//       "Building Portfolio",
//       "Communication",
//       "Project Management",
//       "Getting Paid",
//     ],
//   },

//   "4": {
//     title: "UX Research",
//     author: "Cahaya Khairi",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "900",
//     students: "9k",
//     video: "https://www.youtube.com/embed/Ovj4hFxko7c",
//     description:
//       "Understand users and learn how to conduct professional UX research.",
//     learn: [
//       "User Research",
//       "User Interviews",
//       "Personas",
//       "User Journey",
//       "Usability Testing",
//       "UX Strategy",
//     ],
//   },

//   "5": {
//     title: "Basic Web Design",
//     author: "Johnny Ahmad",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "650",
//     students: "6k",
//     video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//     description:
//       "Learn how to create beautiful and responsive websites from scratch.",
//     learn: [
//       "HTML",
//       "CSS",
//       "Responsive Design",
//       "Flexbox",
//       "Grid",
//       "Website Layout",
//     ],
//   },

//   "6": {
//     title: "3D Character Design",
//     author: "Jordan Nico",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "500",
//     students: "5k",
//     video: "https://www.youtube.com/embed/3q3FV65ZrUs",
//     description:
//       "Learn the fundamentals of 3D character design and modelling.",
//     learn: [
//       "3D Basics",
//       "Character Modelling",
//       "Materials",
//       "Lighting",
//       "Rendering",
//       "Character Design",
//     ],
//   },

//   "7": {
//     title: "React Development",
//     author: "Alex Morgan",
//     price: "55.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "1.2k",
//     students: "12k",
//     video: "https://www.youtube.com/embed/SqcY0GlETPk",
//     description:
//       "Learn React and build modern interactive web applications.",
//     learn: [
//       "React Components",
//       "Props",
//       "State",
//       "Hooks",
//       "Forms",
//       "API Integration",
//     ],
//   },

//   "8": {
//     title: "JavaScript Masterclass",
//     author: "Robert Smith",
//     price: "45.99",
//     oldPrice: "89.00",
//     rating: "5.0",
//     reviews: "950",
//     students: "10k",
//     video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//     description:
//       "Master JavaScript fundamentals and modern JavaScript development.",
//     learn: [
//       "JavaScript Basics",
//       "Functions",
//       "Arrays",
//       "Objects",
//       "DOM",
//       "Async JavaScript",
//     ],
//   },

//   "9": {
//     title: "Next.js Beginner",
//     author: "Sarah Wilson",
//     price: "60.99",
//     oldPrice: "120.00",
//     rating: "5.0",
//     reviews: "600",
//     students: "6k",
//     video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//     description:
//       "Learn Next.js and create fast, modern full-stack applications.",
//     learn: [
//       "Next.js Basics",
//       "App Router",
//       "Layouts",
//       "Server Components",
//       "API Routes",
//       "Deployment",
//     ],
//   },
// };

// export default function CourseDetails() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const courseId = searchParams.get("id") || "1";
//   const course = courses[courseId] || courses["1"];

//   const [isLiked, setIsLiked] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [activeTab, setActiveTab] = useState("about");

//   const [cartAdded, setCartAdded] = useState(false);
//   const [buyMessage, setBuyMessage] = useState("");

//   const [coupon, setCoupon] = useState("");
//   const [couponApplied, setCouponApplied] = useState(false);

//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([
//     {
//       name: "Karen Hope",
//       text: "Very useful course. The explanation is easy to understand.",
//       rating: "5.0",
//       time: "1 Month Ago",
//     },
//     {
//       name: "Tony Soap",
//       text: "Great course for beginners. I learned a lot from this.",
//       rating: "5.0",
//       time: "1 Month Ago",
//     },
//   ]);

//   const handleAddToCart = () => {
//     setCartAdded(true);
//   };

//   const handleBuyNow = () => {
//     setBuyMessage("Course added for checkout!");
//   };

//   const handleCoupon = () => {
//     if (coupon.trim().toUpperCase() === "MAX50") {
//       setCouponApplied(true);
//     } else {
//       setCouponApplied(false);
//     }
//   };

//   const handleComment = (e) => {
//     e.preventDefault();

//     if (!comment.trim()) return;

//     setComments([
//       ...comments,
//       {
//         name: "You",
//         text: comment,
//         rating: "5.0",
//         time: "Just Now",
//       },
//     ]);

//     setComment("");
//   };

//   return (
//     <div className="course-details-page">

//       {/* Back */}
//       <button
//         type="button"
//         className="back-button"
//         onClick={() => router.back()}
//       >
//         <MdArrowBack />
//         Back
//       </button>

//       <div className="course-details-grid">

//         {/* LEFT CONTENT */}
//         <section className="course-overview">

//           <div className="course-main-info">

//             <h1>{course.title}</h1>

//             <p className="course-description">
//               {course.description}
//             </p>

//             <div className="course-rating">

//               <strong>{course.rating}</strong>

//               <span className="stars">
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//               </span>

//               <span>|</span>

//               <span>
//                 Review ({course.reviews})
//               </span>

//               <span>|</span>

//               <span>
//                 {course.students} Students
//               </span>

//             </div>

//             <div className="instructor-info">

//               <div className="instructor-avatar">
//                 S
//               </div>

//               <span>{course.author}</span>

//             </div>

//           </div>

//           {/* Tabs */}
//           <div className="course-tabs">

//             <button
//               type="button"
//               className={activeTab === "about" ? "active" : ""}
//               onClick={() => setActiveTab("about")}
//             >
//               About
//             </button>

//             <button
//               type="button"
//               className={activeTab === "reviews" ? "active" : ""}
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews
//             </button>

//           </div>

//           {/* About */}
//           {activeTab === "about" && (
//             <div className="about-content">

//               <h3>About This Course</h3>

//               <p>
//                 {course.description}
//               </p>

//               <h3>What You Will Learn</h3>

//               <div className="learn-list">

//                 {course.learn.map((item) => (
//                   <div key={item}>
//                     <MdCheckCircle />
//                     <span>{item}</span>
//                   </div>
//                 ))}

//               </div>

//             </div>
//           )}

//           {/* Reviews */}
//           {activeTab === "reviews" && (
//             <div className="reviews-content">

//               {comments.map((item, index) => (
//                 <div className="review-item" key={index}>

//                   <div className="review-avatar">
//                     {item.name.charAt(0)}
//                   </div>

//                   <div className="review-body">

//                     <div className="review-top">

//                       <strong>{item.name}</strong>

//                       <span>
//                         {item.rating}

//                         <span className="stars">
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                         </span>
//                       </span>

//                       <small>{item.time}</small>

//                     </div>

//                     <p>{item.text}</p>

//                   </div>

//                 </div>
//               ))}

//               {/* Comment */}
//               <form
//                 className="comment-form"
//                 onSubmit={handleComment}
//               >
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={comment}
//                   onChange={(e) =>
//                     setComment(e.target.value)
//                   }
//                 />

//                 <button type="submit">
//                   <MdSend />
//                 </button>
//               </form>

//             </div>
//           )}

//         </section>

//         {/* RIGHT CARD */}
//         <aside className="course-purchase-card">

//           {/* Video */}
//           <div className="course-video">

//             <iframe
//               src={course.video}
//               title={course.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>

//             <div className="video-label">
//               <MdPlayArrow />
//               View Demo
//             </div>

//           </div>

//           {/* Price */}
//           <div className="price-row">

//             <strong>
//               ${couponApplied ? "24.50" : course.price}
//             </strong>

//             <del>
//               ${course.oldPrice}
//             </del>

//             <span className="save-badge">
//               Save 50%
//             </span>

//           </div>

//           {/* Like */}
//           <div className="purchase-actions">

//             <button
//               type="button"
//               className={isFavorite ? "liked" : ""}
//               onClick={() =>
//                 setIsFavorite(!isFavorite)
//               }
//             >
//               {isFavorite ? (
//                 <MdFavorite />
//               ) : (
//                 <MdFavoriteBorder />
//               )}

//               {isFavorite
//                 ? "Wishlisted"
//                 : "Add to Wishlist"}
//             </button>

//             <button
//               type="button"
//               className={isLiked ? "liked" : ""}
//               onClick={() => setIsLiked(!isLiked)}
//             >
//               <MdThumbUp />

//               {isLiked ? "Liked" : "Like"}
//             </button>

//           </div>

//           {/* What you learn */}
//           <div className="learn-box">

//             <h3>What will you learn:</h3>

//             <div className="learn-columns">

//               {course.learn.map((item) => (
//                 <span key={item}>
//                   <MdCheckCircle />
//                   {item}
//                 </span>
//               ))}

//             </div>

//           </div>

//           {/* Coupon */}
//           <div className="coupon-box">

//             <div className="coupon-title">
//               <MdLocalOffer />
//               Have a coupon?
//             </div>

//             <div className="coupon-input">

//               <input
//                 type="text"
//                 placeholder="Enter coupon"
//                 value={coupon}
//                 onChange={(e) =>
//                   setCoupon(e.target.value)
//                 }
//               />

//               <button
//                 type="button"
//                 onClick={handleCoupon}
//               >
//                 Apply
//               </button>

//             </div>

//             <small>
//               Try coupon: <b>MAX50</b>
//             </small>

//             {couponApplied && (
//               <p className="coupon-success">
//                 Coupon applied successfully!
//               </p>
//             )}

//           </div>

//           {/* Cart / Buy */}
//           <div className="purchase-buttons">

//             <button
//               type="button"
//               className="cart-button"
//               onClick={handleAddToCart}
//             >
//               <MdShoppingCart />

//               {cartAdded
//                 ? "Added to Cart"
//                 : "Add to Cart"}
//             </button>

//             <button
//               type="button"
//               className="buy-button"
//               onClick={handleBuyNow}
//             >
//               Buy Now
//             </button>

//           </div>

//           {buyMessage && (
//             <div className="buy-message">
//               {buyMessage}
//             </div>
//           )}

//         </aside>

//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   MdArrowBack,
//   MdPlayArrow,
//   MdFavoriteBorder,
//   MdFavorite,
//   MdShoppingCart,
//   MdCheckCircle,
//   MdStar,
//   MdThumbUp,
//   MdSend,
//   MdLocalOffer,
// } from "react-icons/md";

// import "./CourseDetails.scss";

// const courses = {
//   "1": {
//     title: "Full-Stack Web Developer for Beginner",
//     author: "Ms. Samantha William",
//     price: "49.00",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "1k",
//     students: "10k",
//     video: "https://www.youtube.com/embed/nu_pCVPKzTk",
//     description:
//       "Learn full-stack web development from beginner level. Build modern websites and applications using HTML, CSS, JavaScript, React and Next.js.",
//     learn: [
//       "Basic Programming",
//       "Wireframe",
//       "Create a Website",
//       "User Interface Design",
//       "Basic HTML & CSS",
//       "Create Responsive Website",
//     ],
//   },

//   "2": {
//     title: "UI Design Beginner",
//     author: "Karen Hope",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "800",
//     students: "8k",
//     video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//     description:
//       "Learn the basics of UI design and create beautiful interfaces for websites and applications.",
//     learn: [
//       "UI Design Basics",
//       "Color Theory",
//       "Typography",
//       "Wireframing",
//       "Design Systems",
//       "Responsive Design",
//     ],
//   },

//   "3": {
//     title: "How to be Freelancer",
//     author: "Jack and Sally",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "700",
//     students: "7k",
//     video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//     description:
//       "Learn how to start freelancing, find clients and build your professional career online.",
//     learn: [
//       "Freelancing Basics",
//       "Finding Clients",
//       "Building Portfolio",
//       "Communication",
//       "Project Management",
//       "Getting Paid",
//     ],
//   },

//   "4": {
//     title: "UX Research",
//     author: "Cahaya Khairi",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "900",
//     students: "9k",
//     video: "https://www.youtube.com/embed/Ovj4hFxko7c",
//     description:
//       "Understand users and learn how to conduct professional UX research.",
//     learn: [
//       "User Research",
//       "User Interviews",
//       "Personas",
//       "User Journey",
//       "Usability Testing",
//       "UX Strategy",
//     ],
//   },

//   "5": {
//     title: "Basic Web Design",
//     author: "Johnny Ahmad",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "650",
//     students: "6k",
//     video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//     description:
//       "Learn how to create beautiful and responsive websites from scratch.",
//     learn: [
//       "HTML",
//       "CSS",
//       "Responsive Design",
//       "Flexbox",
//       "Grid",
//       "Website Layout",
//     ],
//   },

//   "6": {
//     title: "3D Character Design",
//     author: "Jordan Nico",
//     price: "50.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "500",
//     students: "5k",
//     video: "https://www.youtube.com/embed/3q3FV65ZrUs",
//     description:
//       "Learn the fundamentals of 3D character design and modelling.",
//     learn: [
//       "3D Basics",
//       "Character Modelling",
//       "Materials",
//       "Lighting",
//       "Rendering",
//       "Character Design",
//     ],
//   },

//   "7": {
//     title: "React Development",
//     author: "Alex Morgan",
//     price: "55.99",
//     oldPrice: "99.00",
//     rating: "5.0",
//     reviews: "1.2k",
//     students: "12k",
//     video: "https://www.youtube.com/embed/SqcY0GlETPk",
//     description:
//       "Learn React and build modern interactive web applications.",
//     learn: [
//       "React Components",
//       "Props",
//       "State",
//       "Hooks",
//       "Forms",
//       "API Integration",
//     ],
//   },

//   "8": {
//     title: "JavaScript Masterclass",
//     author: "Robert Smith",
//     price: "45.99",
//     oldPrice: "89.00",
//     rating: "5.0",
//     reviews: "950",
//     students: "10k",
//     video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//     description:
//       "Master JavaScript fundamentals and modern JavaScript development.",
//     learn: [
//       "JavaScript Basics",
//       "Functions",
//       "Arrays",
//       "Objects",
//       "DOM",
//       "Async JavaScript",
//     ],
//   },

//   "9": {
//     title: "Next.js Beginner",
//     author: "Sarah Wilson",
//     price: "60.99",
//     oldPrice: "120.00",
//     rating: "5.0",
//     reviews: "600",
//     students: "6k",
//     video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//     description:
//       "Learn Next.js and create fast, modern full-stack applications.",
//     learn: [
//       "Next.js Basics",
//       "App Router",
//       "Layouts",
//       "Server Components",
//       "API Routes",
//       "Deployment",
//     ],
//   },
// };

// export default function CourseDetails() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const courseId = searchParams.get("id") || "1";
//   const course = courses[courseId] || courses["1"];

//   const [activeTab, setActiveTab] = useState("about");

//   const [isLiked, setIsLiked] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const [cartAdded, setCartAdded] = useState(false);
//   const [buyMessage, setBuyMessage] = useState("");

//   const [coupon, setCoupon] = useState("");
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [couponMessage, setCouponMessage] = useState("");

//   const [comment, setComment] = useState("");

//   const [comments, setComments] = useState([
//     {
//       name: "Karen Hope",
//       text: "Very useful course. The explanation is easy to understand.",
//       rating: "5.0",
//       time: "1 Month Ago",
//     },
//     {
//       name: "Tony Soap",
//       text: "Great course for beginners. I learned a lot from this.",
//       rating: "5.0",
//       time: "1 Month Ago",
//     },
//   ]);

//   const handleAddToCart = () => {
//     setCartAdded(true);
//     setBuyMessage("");
//   };

//   const handleBuyNow = () => {
//     setBuyMessage("Course is ready for checkout!");
//     setCartAdded(true);
//   };

//   const handleCoupon = () => {
//     const value = coupon.trim().toUpperCase();

//     if (value === "MAX50") {
//       setCouponApplied(true);
//       setCouponMessage("Coupon applied successfully! 50% discount added.");
//     } else {
//       setCouponApplied(false);
//       setCouponMessage("Invalid coupon. Try MAX50.");
//     }
//   };

//   const handleComment = (e) => {
//     e.preventDefault();

//     if (!comment.trim()) return;

//     const newComment = {
//       name: "You",
//       text: comment.trim(),
//       rating: "5.0",
//       time: "Just Now",
//     };

//     setComments((previousComments) => [
//       ...previousComments,
//       newComment,
//     ]);

//     setComment("");
//   };

//   const displayPrice = couponApplied
//     ? (Number(course.price) / 2).toFixed(2)
//     : course.price;

//   return (
//     <div className="course-details-page">

//       {/* BACK */}
//       <button
//         type="button"
//         className="back-button"
//         onClick={() => router.back()}
//       >
//         <MdArrowBack />
//         <span>Back</span>
//       </button>

//       <div className="course-details-grid">

//         {/* ================= LEFT ================= */}
//         <section className="course-overview">

//           <div className="course-main-info">

//             <h1>{course.title}</h1>

//             <p className="course-description">
//               {course.description}
//             </p>

//             <div className="course-rating">

//               <strong>{course.rating}</strong>

//               <span className="stars">
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//                 <MdStar />
//               </span>

//               <span className="rating-separator">|</span>

//               <span>Review ({course.reviews})</span>

//               <span className="rating-separator">|</span>

//               <span>{course.students} Students</span>

//             </div>

//             <div className="instructor-info">

//               <div className="instructor-avatar">
//                 {course.author.charAt(0)}
//               </div>

//               <span>{course.author}</span>

//             </div>

//           </div>

//           {/* TABS */}
//           <div className="course-tabs">

//             <button
//               type="button"
//               className={activeTab === "about" ? "active" : ""}
//               onClick={() => setActiveTab("about")}
//             >
//               About
//             </button>

//             <button
//               type="button"
//               className={activeTab === "reviews" ? "active" : ""}
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews ({comments.length})
//             </button>

//           </div>

//           {/* ABOUT */}
//           {activeTab === "about" && (
//             <div className="about-content">

//               <h3>About This Course</h3>

//               <p>{course.description}</p>

//               <h3>What You Will Learn</h3>

//               <div className="learn-list">

//                 {course.learn.map((item) => (
//                   <div key={item}>
//                     <MdCheckCircle />
//                     <span>{item}</span>
//                   </div>
//                 ))}

//               </div>

//             </div>
//           )}

//           {/* REVIEWS */}
//           {activeTab === "reviews" && (
//             <div className="reviews-content">

//               {comments.map((item, index) => (
//                 <div className="review-item" key={index}>

//                   <div className="review-avatar">
//                     {item.name.charAt(0)}
//                   </div>

//                   <div className="review-body">

//                     <div className="review-top">

//                       <strong>{item.name}</strong>

//                       <span className="review-rating">

//                         {item.rating}

//                         <span className="stars">
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                           <MdStar />
//                         </span>

//                       </span>

//                       <small>{item.time}</small>

//                     </div>

//                     <p>{item.text}</p>

//                   </div>

//                 </div>
//               ))}

//               {/* COMMENT */}
//               <form
//                 className="comment-form"
//                 onSubmit={handleComment}
//               >

//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                 />

//                 <button type="submit">
//                   <MdSend />
//                 </button>

//               </form>

//             </div>
//           )}

//         </section>

//         {/* ================= RIGHT ================= */}
//         <aside className="course-purchase-card">

//           {/* VIDEO */}
//           <div className="course-video">

//             <iframe
//               src={course.video}
//               title={`${course.title} demo video`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />

//             <div className="video-label">
//               <MdPlayArrow />
//               <span>View Demo</span>
//             </div>

//           </div>

//           {/* PRICE */}
//           <div className="price-row">

//             <strong>${displayPrice}</strong>

//             <del>${course.oldPrice}</del>

//             <span className="save-badge">
//               Save 50%
//             </span>

//           </div>

//           {/* LIKE / WISHLIST */}
//           <div className="purchase-actions">

//             <button
//               type="button"
//               className={isFavorite ? "liked" : ""}
//               onClick={() => setIsFavorite((value) => !value)}
//             >
//               {isFavorite ? (
//                 <MdFavorite />
//               ) : (
//                 <MdFavoriteBorder />
//               )}

//               <span>
//                 {isFavorite
//                   ? "Wishlisted"
//                   : "Add to Wishlist"}
//               </span>
//             </button>

//             <button
//               type="button"
//               className={isLiked ? "liked" : ""}
//               onClick={() => setIsLiked((value) => !value)}
//             >
//               <MdThumbUp />

//               <span>
//                 {isLiked ? "Liked" : "Like"}
//               </span>
//             </button>

//           </div>

//           {/* LEARN */}
//           <div className="learn-box">

//             <h3>What will you learn:</h3>

//             <div className="learn-columns">

//               {course.learn.map((item) => (
//                 <span key={item}>
//                   <MdCheckCircle />
//                   {item}
//                 </span>
//               ))}

//             </div>

//           </div>

//           {/* COUPON */}
//           <div className="coupon-box">

//             <div className="coupon-title">
//               <MdLocalOffer />
//               <span>Have a coupon?</span>
//             </div>

//             <div className="coupon-input">

//               <input
//                 type="text"
//                 placeholder="Enter coupon"
//                 value={coupon}
//                 onChange={(e) => setCoupon(e.target.value)}
//               />

//               <button
//                 type="button"
//                 onClick={handleCoupon}
//               >
//                 Apply
//               </button>

//             </div>

//             <small>
//               Try coupon: <b>MAX50</b>
//             </small>

//             {couponMessage && (
//               <p
//                 className={
//                   couponApplied
//                     ? "coupon-success"
//                     : "coupon-error"
//                 }
//               >
//                 {couponMessage}
//               </p>
//             )}

//           </div>

//           {/* CART / BUY */}
//           <div className="purchase-buttons">

//             <button
//               type="button"
//               className="cart-button"
//               onClick={handleAddToCart}
//             >
//               <MdShoppingCart />

//               <span>
//                 {cartAdded
//                   ? "Added to Cart"
//                   : "Add to Cart"}
//               </span>
//             </button>

//             <button
//               type="button"
//               className="buy-button"
//               onClick={handleBuyNow}
//             >
//               Buy Now
//             </button>

//           </div>

//           {buyMessage && (
//             <div className="buy-message">
//               {buyMessage}
//             </div>
//           )}

//         </aside>

//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   MdArrowBack,
//   MdPlayArrow,
//   MdCheckCircle,
//   MdLock,
//   MdExpandMore,
//   MdExpandLess,
//   MdMoreHoriz,
//   MdVolumeUp,
//   MdMenuBook,
//   MdQuiz,
//   MdChat,
// } from "react-icons/md";

// import "./CourseDetails.scss";

// const courses = {
//   "1": {
//     title: "Full-Stack Web Developer",
//     rating: "5.0",
//     reviews: "1k",
//     students: "10k",
//     description:
//       "Learn full-stack web development from beginner level. Build modern websites and applications using HTML, CSS, JavaScript, React and Next.js.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/nu_pCVPKzTk",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "Getting Started",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/SqcY0GlETPk",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Tools",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//         locked: true,
//       },
//       {
//         id: 4,
//         title: "Install Tools",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//         locked: true,
//       },
//       {
//         id: 5,
//         title: "Plugins",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//         locked: true,
//       },
//     ],
//   },

//   "2": {
//     title: "UI Design Beginner",
//     rating: "5.0",
//     reviews: "800",
//     students: "8k",

//     description:
//       "Learn the basics of UI design and create beautiful interfaces for websites and applications.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "UI Design Basics",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Color Theory",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//         locked: true,
//       },
//       {
//         id: 4,
//         title: "Wireframing",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
//         locked: true,
//       },
//     ],
//   },

//   "3": {
//     title: "How to be Freelancer",
//     rating: "5.0",
//     reviews: "700",
//     students: "7k",

//     description:
//       "Learn how to start freelancing, find clients and build your professional career online.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "Finding Clients",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Building Portfolio",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/6h2QYq6f6n8",
//         locked: true,
//       },
//     ],
//   },

//   "4": {
//     title: "UX Research",
//     rating: "5.0",
//     reviews: "900",
//     students: "9k",

//     description:
//       "Understand users and learn how to conduct professional UX research.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/Ovj4hFxko7c",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "User Research",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/Ovj4hFxko7c",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "User Interviews",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/Ovj4hFxko7c",
//         locked: true,
//       },
//     ],
//   },

//   "5": {
//     title: "Basic Web Design",
//     rating: "5.0",
//     reviews: "650",
//     students: "6k",

//     description:
//       "Learn how to create beautiful and responsive websites from scratch.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "HTML Basics",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "CSS Basics",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/1Rs2ND1ryYc",
//         locked: true,
//       },
//     ],
//   },

//   "6": {
//     title: "3D Character Design",
//     rating: "5.0",
//     reviews: "500",
//     students: "5k",

//     description:
//       "Learn the fundamentals of 3D character design and modelling.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/3q3FV65ZrUs",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "3D Basics",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/3q3FV65ZrUs",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Character Modelling",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/3q3FV65ZrUs",
//         locked: true,
//       },
//     ],
//   },

//   "7": {
//     title: "React Development",
//     rating: "5.0",
//     reviews: "1.2k",
//     students: "12k",

//     description:
//       "Learn React and build modern interactive web applications.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/SqcY0GlETPk",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "React Components",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/SqcY0GlETPk",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Props",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/SqcY0GlETPk",
//         locked: true,
//       },
//     ],
//   },

//   "8": {
//     title: "JavaScript Masterclass",
//     rating: "5.0",
//     reviews: "950",
//     students: "10k",

//     description:
//       "Master JavaScript fundamentals and modern JavaScript development.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "JavaScript Basics",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Functions",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/PkZNo7MFNFg",
//         locked: true,
//       },
//     ],
//   },

//   "9": {
//     title: "Next.js Beginner",
//     rating: "5.0",
//     reviews: "600",
//     students: "6k",

//     description:
//       "Learn Next.js and create fast, modern full-stack applications.",

//     lessons: [
//       {
//         id: 1,
//         title: "Introduction",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//         locked: false,
//       },
//       {
//         id: 2,
//         title: "App Router",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//         locked: false,
//       },
//       {
//         id: 3,
//         title: "Layouts",
//         duration: "1:00",
//         video: "https://www.youtube.com/embed/ZVnjOPwW4ZA",
//         locked: true,
//       },
//     ],
//   },
// };

// export default function CourseDetails() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const courseId = searchParams.get("id") || "1";

//   const course = courses[courseId] || courses["1"];

//   const [activeLesson, setActiveLesson] = useState(
//     course.lessons[0]
//   );

//   const [openSection, setOpenSection] = useState("video");

//   const completedLessons = 1;

//   const progress = Math.round(
//     (completedLessons / course.lessons.length) * 100
//   );

//   const handleLessonClick = (lesson) => {
//     if (lesson.locked) {
//       return;
//     }

//     setActiveLesson(lesson);
//   };

//   return (
//     <div className="course-content-page">

//       {/* HEADER */}
//       <div className="content-header">

//         <div className="header-left">

//           <button
//             type="button"
//             className="back-button"
//             onClick={() => router.back()}
//           >
//             <MdArrowBack />
//           </button>

//           <div>
//             <h1>{course.title}</h1>

//             <div className="course-meta">
//               <span>{course.rating}</span>
//               <span>★</span>
//               <span>Reviews ({course.reviews})</span>
//               <span>|</span>
//               <span>{course.students} Students</span>
//             </div>
//           </div>

//         </div>

//         <div className="header-actions">
//           <MdMenuBook />
//           <MdChat />
//           <MdMoreHoriz />
//         </div>

//       </div>

//       {/* MAIN CONTENT */}
//       <div className="content-layout">

//         {/* LEFT CONTENT */}
//         <main className="main-content">

//           {/* VIDEO */}
//           <div className="lesson-video">

//             <iframe
//               key={activeLesson.video}
//               src={activeLesson.video}
//               title={activeLesson.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />

//           </div>

//           {/* CURRENT LESSON */}
//           <div className="current-lesson">

//             <div>
//               <span className="lesson-label">
//                 CURRENT LESSON
//               </span>

//               <h2>{activeLesson.title}</h2>
//             </div>

//             <span className="lesson-duration">
//               {activeLesson.duration}
//             </span>

//           </div>

//           {/* TABS */}
//           <div className="content-tabs">

//             <button className="active">
//               About
//             </button>

//             <button>
//               Reviews
//             </button>

//             <button>
//               Discussion
//             </button>

//           </div>

//           {/* ABOUT */}
//           <div className="about-course">

//             <h2>About Course</h2>

//             <p>
//               {course.description}
//             </p>

//             <p>
//               This course contains practical lessons and
//               beginner-friendly explanations. Follow each
//               lesson from the Video Courses section to
//               continue learning.
//             </p>

//           </div>

//         </main>

//         {/* RIGHT SIDEBAR */}
//         <aside className="course-sidebar">

//           {/* PROGRESS */}
//           <div className="sidebar-card progress-card">

//             <div className="card-title">

//               <strong>Progress</strong>

//               <MdMoreHoriz />

//             </div>

//             <div className="progress-course-name">
//               {course.title}
//             </div>

//             <div className="progress-bar">
//               <span
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               />
//             </div>

//             <div className="progress-info">
//               <span>
//                 {completedLessons}/{course.lessons.length}
//               </span>

//               <span>{progress}%</span>
//             </div>

//           </div>

//           {/* VIDEO COURSES */}
//           <div className="sidebar-card">

//             <button
//               type="button"
//               className="section-toggle"
//               onClick={() =>
//                 setOpenSection(
//                   openSection === "video"
//                     ? ""
//                     : "video"
//                 )
//               }
//             >
//               <strong>Video Courses</strong>

//               <span>
//                 ({completedLessons}/{course.lessons.length})
//               </span>

//               {openSection === "video" ? (
//                 <MdExpandLess />
//               ) : (
//                 <MdExpandMore />
//               )}
//             </button>

//             {openSection === "video" && (
//               <div className="lesson-list">

//                 {course.lessons.map((lesson) => {

//                   const isActive =
//                     activeLesson.id === lesson.id;

//                   return (
//                     <button
//                       type="button"
//                       key={lesson.id}
//                       className={`lesson-item ${
//                         isActive ? "active" : ""
//                       } ${
//                         lesson.locked ? "locked" : ""
//                       }`}
//                       onClick={() =>
//                         handleLessonClick(lesson)
//                       }
//                     >

//                       <span className="lesson-icon">

//                         {lesson.locked ? (
//                           <MdLock />
//                         ) : (
//                           <MdPlayArrow />
//                         )}

//                       </span>

//                       <span className="lesson-name">
//                         {lesson.title}
//                       </span>

//                       <span className="lesson-time">
//                         {lesson.duration}
//                       </span>

//                     </button>
//                   );

//                 })}

//               </div>
//             )}

//           </div>

//           {/* AUDIO */}
//           <div className="sidebar-card">

//             <button
//               type="button"
//               className="section-toggle"
//               onClick={() =>
//                 setOpenSection(
//                   openSection === "audio"
//                     ? ""
//                     : "audio"
//                 )
//               }
//             >

//               <span className="section-icon">
//                 <MdVolumeUp />
//               </span>

//               <strong>Audio</strong>

//               <span className="section-count">
//                 (1/25)
//               </span>

//               {openSection === "audio" ? (
//                 <MdExpandLess />
//               ) : (
//                 <MdExpandMore />
//               )}

//             </button>

//             {openSection === "audio" && (
//               <div className="empty-section">
//                 Audio lessons will appear here.
//               </div>
//             )}

//           </div>

//           {/* MODULE */}
//           <div className="sidebar-card">

//             <button
//               type="button"
//               className="section-toggle"
//               onClick={() =>
//                 setOpenSection(
//                   openSection === "module"
//                     ? ""
//                     : "module"
//                 )
//               }
//             >

//               <span className="section-icon">
//                 <MdMenuBook />
//               </span>

//               <strong>Module</strong>

//               <span className="section-count">
//                 (1/50)
//               </span>

//               {openSection === "module" ? (
//                 <MdExpandLess />
//               ) : (
//                 <MdExpandMore />
//               )}

//             </button>

//             {openSection === "module" && (
//               <div className="empty-section">
//                 Course modules will appear here.
//               </div>
//             )}

//           </div>

//           {/* QUIZ */}
//           <div className="sidebar-card">

//             <button
//               type="button"
//               className="section-toggle"
//               onClick={() =>
//                 setOpenSection(
//                   openSection === "quiz"
//                     ? ""
//                     : "quiz"
//                 )
//               }
//             >

//               <span className="section-icon">
//                 <MdQuiz />
//               </span>

//               <strong>Quiz</strong>

//               <span className="section-count">
//                 (1/10)
//               </span>

//               {openSection === "quiz" ? (
//                 <MdExpandLess />
//               ) : (
//                 <MdExpandMore />
//               )}

//             </button>

//             {openSection === "quiz" && (
//               <div className="empty-section">
//                 Quiz will appear here.
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
  MdArrowBack,
  MdPlayArrow,
  MdCheckCircle,
  MdLock,
  MdExpandMore,
  MdExpandLess,
  MdMenuBook,
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

export default function CourseDetails() {
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
          onClick={() => router.push(`/student/course-overview?id=${courseId}`)}
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

              <p>
                {course.description}
              </p>

              <p>
                This course covers everything you need to start
                developing modern websites and web applications.
                You will learn practical concepts step by step.
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

                      <div className="review-stars">
                        ★★★★★
                      </div>

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

                <button type="submit">
                  Send
                </button>

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
                    Ask questions and discuss this course
                    with other students.
                  </p>
                </div>
              </div>

              <div className="discussion-box">

                <div className="discussion-avatar">
                  S
                </div>

                <div>
                  <strong>Student Discussion</strong>

                  <p>
                    Have a question about this lesson?
                    Start a discussion here.
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

                <button type="submit">
                  Send
                </button>

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

              <button type="button">
                ...
              </button>
            </div>

            <div className="progress-course-name">
              {course.title}
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${Math.round(
                    ((activeVideo.id - 1) / course.videos.length) *
                      100
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

              <span>
                Video Courses
              </span>

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
                      activeVideo.id === video.id
                        ? "active"
                        : ""
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

              <span>
                Audio
              </span>

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

              <span>
                Module
              </span>

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

              <span>
                Quiz
              </span>

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