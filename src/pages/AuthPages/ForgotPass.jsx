import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "/src/assets/Images/logo.svg";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setMessage("If an account with that email exists, a password reset link has been sent.");
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6 col-12 authLeft py-lg-5 py-3 px-lg-5 px-2">
            <div className="auth-left-image mb-lg-5 mb-3">
              <img className="img-fluid logo" src={Logo} alt="Ma-event" />
            </div>
            <div className="auth-left-content">
              <h1 className="mb-2 pink-text">Forgot Password?</h1>
              <p className="pink-text m-sm-0 mb-1">Enter your email to reset your password.</p>
            </div>
          </div> */}
          <div className="col-lg-6 col-12">
            <div className="auth-card py-lg-5 py-4 px-lg-4 px-2">
              <h1 className="h4 text-center mb-3 pink-text">Reset your password</h1>
              {error && (
                <div className="alert alert-danger py-2" role="alert">{error}</div>
              )}
              {message && (
                <div className="alert alert-success py-2" role="alert">{message}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-theme w-100 mt-3" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
              <p className="text-center mt-3 mb-0">
                <span className="text-muted">Remembered your password? </span>
                <Link to="/login" className="auth-link">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;