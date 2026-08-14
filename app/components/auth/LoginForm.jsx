// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Demo login
//     if (role === "student") {
//       router.push("/student/dashboard");
//     } else {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">

//         <h1>MaxSkills</h1>
//         <p>Sign in to continue</p>

//         <form onSubmit={handleLogin}>

//           <label>Login As</label>

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="student">Student</option>
//             <option value="instructor">Instructor</option>
//           </select>

//           <label>Email</label>

//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label>Password</label>

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit">
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
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (role === "student") {
//       router.push("/student/dashboard");
//     } else {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h1>MaxSkills</h1>

//         <p>Sign in to continue</p>

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="role">Login As</label>

//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="student">Student</option>
//               <option value="instructor">Instructor</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">
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
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Login role save karenge
//     localStorage.setItem("maxskills_role", role);

//     if (role === "student") {
//       router.push("/student/dashboard");
//     } else {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h1>MaxSkills</h1>

//         <p>Sign in to continue</p>

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="role">Login As</label>

//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="student">Student</option>
//               <option value="instructor">Instructor</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit">
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
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // =========================================
//   // LOGIN CREDENTIALS
//   // =========================================

//   const credentials = {
//     student: {
//       email: "student@maxskills.com",
//       password: "student123",
//     },

//     instructor: {
//       email: "teacher@maxskills.com",
//       password: "teacher123",
//     },
//   };

//   // =========================================
//   // LOGIN
//   // =========================================

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const enteredEmail = email.trim().toLowerCase();
//     const enteredPassword = password;

//     const correctEmail = credentials[role].email;
//     const correctPassword = credentials[role].password;

//     // =========================================
//     // CHECK EMAIL + PASSWORD
//     // =========================================

//     if (
//       enteredEmail !== correctEmail ||
//       enteredPassword !== correctPassword
//     ) {
//       setError(
//         role === "student"
//           ? "Invalid student email or password."
//           : "Invalid instructor email or password."
//       );

//       return;
//     }

//     // =========================================
//     // LOGIN SUCCESS
//     // =========================================

//     localStorage.setItem("maxskills_role", role);
//     localStorage.setItem("maxskills_email", enteredEmail);

//     if (role === "student") {
//       router.push("/student/dashboard");
//     } else {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">

//         <h1>MaxSkills</h1>

//         <p>Sign in to continue</p>

//         <form onSubmit={handleLogin}>

//           {/* ROLE */}

//           <div className="form-group">
//             <label htmlFor="role">
//               Login As
//             </label>

//             <select
//               id="role"
//               value={role}
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 setError("");
//               }}
//             >
//               <option value="student">
//                 Student
//               </option>

//               <option value="instructor">
//                 Instructor
//               </option>
//             </select>
//           </div>

//           {/* EMAIL */}

//           <div className="form-group">
//             <label htmlFor="email">
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
//             />
//           </div>

//           {/* PASSWORD */}

//           <div className="form-group">
//             <label htmlFor="password">
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
//             />
//           </div>

//           {/* ERROR */}

//           {error && (
//             <p className="login-error">
//               {error}
//             </p>
//           )}

//           {/* LOGIN BUTTON */}

//           <button type="submit">
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
// import Link from "next/link";

// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     // Saved accounts get karna
//     const savedAccounts = JSON.parse(
//       localStorage.getItem("maxskills_accounts") || "[]"
//     );

//     // Email se account find karna
//     const account = savedAccounts.find(
//       (user) => user.email.toLowerCase() === enteredEmail
//     );

//     // Account nahi mila
//     if (!account) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Password check
//     if (account.password !== password) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Login information save
//     localStorage.setItem("maxskills_role", account.role);
//     localStorage.setItem("maxskills_email", account.email);
//     localStorage.setItem("maxskills_user", JSON.stringify(account));

//     // Role ke according dashboard
//     if (account.role === "student") {
//       router.push("/student/dashboard");
//     } else if (account.role === "instructor") {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h1>Sign In</h1>

//         <p className="login-subtitle">
//           Welcome back to MaxSkills.
//         </p>

//         {error && (
//           <div className="login-error">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>
//           {/* EMAIL */}

//           <div className="form-group">
//             <label htmlFor="email">
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
//             />
//           </div>

//           {/* PASSWORD */}

//           <div className="form-group">
//             <label htmlFor="password">
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
//             />
//           </div>

//           {/* SIGN IN */}

//           <button
//             type="submit"
//             className="login-button"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* REGISTER */}

//         <p className="register-text">
//           Don't have an account?{" "}
//           <Link href="/register">
//             Create Account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [role, setRole] = useState("student");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const users = JSON.parse(
//       localStorage.getItem("maxskills_users") || "[]"
//     );

//     const enteredEmail = email.trim().toLowerCase();

//     const user = users.find(
//       (item) =>
//         item.email.toLowerCase() === enteredEmail &&
//         item.password === password &&
//         item.role === role
//     );

//     if (!user) {
//       setError(
//         role === "student"
//           ? "Invalid student email or password."
//           : "Invalid instructor email or password."
//       );
//       return;
//     }

//     localStorage.setItem("maxskills_role", user.role);
//     localStorage.setItem("maxskills_email", user.email);
//     localStorage.setItem("maxskills_user", JSON.stringify(user));

//     if (user.role === "student") {
//       router.push("/student/dashboard");
//     } else {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">

//         <h1>Sign In</h1>

//         <p className="login-subtitle">
//           Welcome back to MaxSkills.
//         </p>

//         {error && (
//           <div className="login-error">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>

//           <div className="form-group">
//             <label htmlFor="role">
//               Login As
//             </label>

//             <select
//               id="role"
//               value={role}
//               onChange={(e) => {
//                 setRole(e.target.value);
//                 setError("");
//               }}
//             >
//               <option value="student">
//                 Student
//               </option>

//               <option value="instructor">
//                 Instructor
//               </option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">
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
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">
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
//             />
//           </div>

//           <button
//             type="submit"
//             className="login-button"
//           >
//             Sign In
//           </button>

//         </form>

//         <div className="register-link">
//           Don't have an account?

//           <button
//             type="button"
//             onClick={() => router.push("/register")}
//           >
//             Create Account
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import "./LoginForm.scss";

// export default function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     setError("");

//     const enteredEmail = email.trim().toLowerCase();

//     const users = JSON.parse(
//       localStorage.getItem("maxskills_users") || "[]"
//     );

//     const user = users.find(
//       (item) =>
//         item.email?.toLowerCase() === enteredEmail &&
//         item.password === password
//     );

//     if (!user) {
//       setError("Invalid email or password.");
//       return;
//     }

//     // Save logged-in user
//     localStorage.setItem("maxskills_role", user.role);
//     localStorage.setItem("maxskills_email", user.email);
//     localStorage.setItem(
//       "maxskills_user",
//       JSON.stringify(user)
//     );

//     // Open dashboard according to registered role
//     if (user.role === "student") {
//       router.push("/student/dashboard");
//     } else if (user.role === "instructor") {
//       router.push("/instructor/dashboard");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">

//         <h1>Sign In</h1>

//         <p className="login-subtitle">
//           Welcome back to MaxSkills.
//         </p>

//         {error && (
//           <div className="login-error">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin}>

//           {/* EMAIL */}

//           <div className="form-group">
//             <label htmlFor="email">
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
//             />
//           </div>

//           {/* PASSWORD */}

//           <div className="form-group">
//             <label htmlFor="password">
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
//             />
//           </div>

//           {/* SIGN IN */}

//           <button
//             type="submit"
//             className="login-button"
//           >
//             Sign In
//           </button>

//         </form>

//         {/* CREATE ACCOUNT */}

//         <div className="register-link">
//           <span>
//             Don't have an account?
//           </span>

//           <button
//             type="button"
//             onClick={() => router.push("/register")}
//           >
//             Create Account
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }










"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./LoginForm.scss";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const enteredEmail = email.trim().toLowerCase();

    // Registered accounts
    const savedUsers = JSON.parse(
      localStorage.getItem("maxskills_users") || "[]"
    );

    // Find matching email
    const user = savedUsers.find(
      (item) =>
        item.email?.toLowerCase() === enteredEmail
    );

    // Account not found
    if (!user) {
      setError(
        "Account not found. Please create an account first."
      );
      return;
    }

    // Password check
    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }

    // Save logged-in user
    localStorage.setItem(
      "maxskills_role",
      user.role
    );

    localStorage.setItem(
      "maxskills_email",
      user.email
    );

    localStorage.setItem(
      "maxskills_user",
      JSON.stringify(user)
    );

    // Role based redirect
    if (user.role === "student") {
      router.push("/student/dashboard");
      return;
    }

    if (user.role === "instructor") {
      router.push("/instructor/dashboard");
      return;
    }

    setError("Invalid account role.");
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

          {/* EMAIL */}

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

          {/* PASSWORD */}

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

          {/* SIGN IN */}

          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

        </form>

        {/* CREATE ACCOUNT */}

        <div className="register-link">
          <span>
            Don't have an account?
          </span>

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