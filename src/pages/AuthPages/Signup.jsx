import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "/src/assets/Images/logo.svg";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 authLeft py-lg-5 py-3 px-lg-5 px-2">
            <div className="auth-left-image mb-lg-5 mb-3">
              <img className="img-fluid logo" src={Logo} alt="Ma-event" />
            </div>
            <div className="auth-left-content">
              <h1 className="mb-2 pink-text">Welcome!</h1>
              <p className="pink-text m-sm-0 mb-1">Create your account to get started with Ma-event.</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="auth-card py-lg-5 py-4 px-lg-4 px-2">
              <h1 className="h4 text-center mb-3 pink-text">Create your account</h1>
              {error && (
                <div className="alert alert-danger py-2" role="alert">{error}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-theme w-100 mt-3" disabled={loading}>
                  {loading ? "Creating account..." : "Sign Up"}
                </button>
              </form>
              <p className="text-center mt-3 mb-0">
                <span className="text-muted">Already have an account? </span>
                <Link to="/login" className="auth-link">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;