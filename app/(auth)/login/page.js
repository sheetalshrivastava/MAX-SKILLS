// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     // Student login
//     if (role === "student") {
//       if (
//         enteredEmail === "student@maxskills.com" &&
//         password === "student123"
//       ) {
//         localStorage.setItem("maxskills_role", "student");
//         localStorage.setItem("maxskills_email", enteredEmail);

//         router.push("/student/dashboard");
//         return;
//       }

//       setError("Invalid student email or password.");
//       return;
//     }

//     // Instructor login
//     if (role === "instructor") {
//       if (
//         enteredEmail === "teacher@maxskills.com" &&
//         password === "teacher123"
//       ) {
//         localStorage.setItem("maxskills_role", "instructor");
//         localStorage.setItem("maxskills_email", enteredEmail);

//         router.push("/instructor/dashboard");
//         return;
//       }

//       setError("Invalid instructor email or password.");
//       return;
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f5f7fb",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "420px",
//           background: "#ffffff",
//           padding: "40px",
//           borderRadius: "20px",
//           boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#4fd1b5",
//             marginBottom: "10px",
//           }}
//         >
//           MaxSkills
//         </h1>

//         <p
//           style={{
//             textAlign: "center",
//             color: "#777",
//             marginBottom: "30px",
//           }}
//         >
//           Sign in to continue
//         </p>

//         <form onSubmit={handleLogin}>
//           {/* ROLE */}

//           <div style={{ marginBottom: "20px" }}>
//             <label
//               htmlFor="role"
//               style={{
//                 display: "block",
//                 marginBottom: "8px",
//                 fontWeight: "600",
//               }}
//             >
//               Login As
//             </label>

//             <select
//               id="role"
//               value={role}
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 setError("");
//               }}
//               style={{
//                 width: "100%",
//                 height: "48px",
//                 border: "1px solid #ddd",
//                 borderRadius: "10px",
//                 padding: "0 15px",
//               }}
//             >
//               <option value="student">Student</option>
//               <option value="instructor">Instructor</option>
//             </select>
//           </div>

//           {/* EMAIL */}

//           <div style={{ marginBottom: "20px" }}>
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 marginBottom: "8px",
//                 fontWeight: "600",
//               }}
//             >
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setError("");
//               }}
//               required
//               style={{
//                 width: "100%",
//                 height: "48px",
//                 border: "1px solid #ddd",
//                 borderRadius: "10px",
//                 padding: "0 15px",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           {/* PASSWORD */}

//           <div style={{ marginBottom: "20px" }}>
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 marginBottom: "8px",
//                 fontWeight: "600",
//               }}
//             >
//               Password
//             </label>

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setError("");
//               }}
//               required
//               style={{
//                 width: "100%",
//                 height: "48px",
//                 border: "1px solid #ddd",
//                 borderRadius: "10px",
//                 padding: "0 15px",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           {/* ERROR */}

//           {error && (
//             <p
//               style={{
//                 color: "#e74c3c",
//                 background: "#fff1f0",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 fontSize: "14px",
//                 marginBottom: "20px",
//               }}
//             >
//               {error}
//             </p>
//           )}

//           {/* LOGIN */}

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               height: "50px",
//               background: "#4fd1b5",
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "10px",
//               cursor: "pointer",
//               fontSize: "16px",
//             }}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     // Registered users
//     const users = JSON.parse(
//       localStorage.getItem("maxskills_users") || "[]"
//     );

//     // Find account by email
//     const user = users.find(
//       (item) => item.email === enteredEmail
//     );

//     // Account does not exist
//     if (!user) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Password check
//     if (user.password !== password) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Save logged-in user information
//     localStorage.setItem("maxskills_role", user.role);
//     localStorage.setItem("maxskills_email", user.email);
//     localStorage.setItem("maxskills_user", JSON.stringify(user));

//     // Redirect according to saved role
//     if (user.role === "student") {
//       router.push("/student/dashboard");
//     } else if (user.role === "instructor") {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f5f7fb",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "690px",
//           background: "#ffffff",
//           padding: "48px 48px 42px",
//           borderRadius: "24px",
//           boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* TITLE */}

//         <h1
//           style={{
//             margin: "0 0 12px",
//             color: "#33465c",
//             fontSize: "48px",
//             lineHeight: "1.1",
//             fontWeight: "700",
//           }}
//         >
//           Sign In
//         </h1>

//         <p
//           style={{
//             margin: "0 0 38px",
//             color: "#9292a8",
//             fontSize: "24px",
//           }}
//         >
//           Welcome back to MaxSkills.
//         </p>

//         <form onSubmit={handleLogin}>
//           {/* ERROR */}

//           {error && (
//             <div
//               style={{
//                 width: "100%",
//                 background: "#f8d7da",
//                 border: "1px solid #f5aeb5",
//                 color: "#5b1519",
//                 padding: "28px 24px",
//                 borderRadius: "8px",
//                 fontSize: "23px",
//                 marginBottom: "28px",
//                 boxSizing: "border-box",
//               }}
//             >
//               {error}
//             </div>
//           )}

//           {/* EMAIL */}

//           <div style={{ marginBottom: "28px" }}>
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 color: "#33465c",
//                 fontSize: "24px",
//                 fontWeight: "600",
//                 marginBottom: "14px",
//               }}
//             >
//               Email
//             </label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setError("");
//               }}
//               required
//               style={{
//                 width: "100%",
//                 height: "72px",
//                 border: "1px solid #d9d9d9",
//                 borderRadius: "16px",
//                 padding: "0 20px",
//                 fontSize: "22px",
//                 boxSizing: "border-box",
//                 outline: "none",
//               }}
//             />
//           </div>

//           {/* PASSWORD */}

//           <div style={{ marginBottom: "36px" }}>
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 color: "#33465c",
//                 fontSize: "24px",
//                 fontWeight: "600",
//                 marginBottom: "14px",
//               }}
//             >
//               Password
//             </label>

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setError("");
//               }}
//               required
//               style={{
//                 width: "100%",
//                 height: "72px",
//                 border: "1px solid #d9d9d9",
//                 borderRadius: "16px",
//                 padding: "0 20px",
//                 fontSize: "22px",
//                 boxSizing: "border-box",
//                 outline: "none",
//               }}
//             />
//           </div>

//           {/* SIGN IN */}

//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               height: "72px",
//               background: "#4fbf9f",
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "10px",
//               cursor: "pointer",
//               fontSize: "24px",
//               fontWeight: "500",
//             }}
//           >
//             Sign In
//           </button>
//         </form>

//         {/* CREATE ACCOUNT */}

//         <div
//           style={{
//             textAlign: "center",
//             marginTop: "30px",
//             color: "#555",
//             fontSize: "21px",
//           }}
//         >
//           Don't have an account?{" "}
//           <button
//             type="button"
//             onClick={() => router.push("/register")}
//             style={{
//               border: "none",
//               background: "transparent",
//               color: "#006cff",
//               fontSize: "21px",
//               cursor: "pointer",
//               padding: 0,
//             }}
//           >
//             Create Account
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import LoginForm from "./LoginForm";

// export default function LoginPage() {
//   return <LoginForm />;
// }




"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const enteredEmail = email.trim().toLowerCase();

    const users = JSON.parse(
      localStorage.getItem("maxskills_users") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email?.toLowerCase() === enteredEmail &&
        item.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("maxskills_role", user.role);
    localStorage.setItem("maxskills_email", user.email);
    localStorage.setItem(
      "maxskills_user",
      JSON.stringify(user)
    );

    if (user.role === "student") {
      router.push("/student/dashboard");
    } else if (user.role === "instructor") {
      router.push("/instructor/dashboard");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Sign In</h1>

        <p className="login-subtitle">
          Welcome back to MaxSkills.
        </p>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>

        <div className="register-link">
          <span>Don't have an account?</span>

          <button
            type="button"
            onClick={() => router.push("/register")}
          >
            Create Account
          </button>
        </div>

      </div>
    </div>
  );
}