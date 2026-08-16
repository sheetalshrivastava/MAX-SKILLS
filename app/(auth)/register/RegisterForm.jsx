"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import "./Register.scss";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    // Name validation
    if (!cleanName) {
      setError("Please enter your full name.");
      return;
    }

    // Email validation
    if (!cleanEmail) {
      setError("Please enter your email.");
      return;
    }

    // Password length
    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get existing users
    const savedUsers = JSON.parse(
      localStorage.getItem("maxskills_users") || "[]"
    );

    // Check duplicate email
    const existingUser = savedUsers.find(
      (user) =>
        user.email?.toLowerCase() === cleanEmail
    );

    if (existingUser) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name: cleanName,
      email: cleanEmail,
      role: role,
      password: password,
    };

    // Add new user
    const updatedUsers = [
      ...savedUsers,
      newUser,
    ];

    // Save users
    localStorage.setItem(
      "maxskills_users",
      JSON.stringify(updatedUsers)
    );

    // Clear old login data
    localStorage.removeItem("maxskills_role");
    localStorage.removeItem("maxskills_email");
    localStorage.removeItem("maxskills_user");

    // Go to login
    router.push("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Create your MaxSkills account.
        </p>

        {error && (
          <div className="register-error">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>

          {/* NAME */}

          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              required
            />
          </div>

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

          {/* ROLE */}

          <div className="form-group">
            <label htmlFor="role">
              Role
            </label>

            <select
              id="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
                setError("");
              }}
            >
              <option value="student">
                Student
              </option>

              <option value="instructor">
                Instructor
              </option>
            </select>
          </div>

          {/* PASSWORD */}

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          {/* CONFIRM PASSWORD */}

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          {/* CREATE ACCOUNT */}

          <button
            type="submit"
            className="register-button"
          >
            Create Account
          </button>

        </form>

        {/* LOGIN */}

        <p className="login-text">
          Already have an account?{" "}
          <Link href="/login">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}