export default function ForgotPassword() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1
          style={{
            color: "#4cc4a8",
            marginBottom: "10px",
          }}
        >
          Forgot Password
        </h1>

        <p
          style={{
            color: "#777",
            marginBottom: "25px",
          }}
        >
          Enter your email to reset your password.
        </p>

        <form>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
            style={{
              width: "100%",
              height: "48px",
              padding: "0 14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              outline: "none",
              marginBottom: "18px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              height: "48px",
              border: "none",
              borderRadius: "8px",
              background: "#4cc4a8",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}