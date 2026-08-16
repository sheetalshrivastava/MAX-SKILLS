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