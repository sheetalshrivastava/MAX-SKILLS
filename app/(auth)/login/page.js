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