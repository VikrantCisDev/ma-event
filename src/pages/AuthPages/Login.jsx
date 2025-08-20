import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    console.log({ email, password });
    setLoading(false);
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 authLeft py-5 px-lg-5 px-4">
            <div className="auth-left-image mb-5">
              <img class="img-fluid logo" src="/src/assets/Images/logo.svg" alt="Ma-event"/>
            </div>
            <div className="auth-left-content">
              <h1 className=" mb-2 fs-1 pink-text">Welcome Back!</h1>
              <p className="fs-5 pink-text">Please sign in to continue to your account.</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="auth-card ">
              <h1 className="h4 text-center mb-3 pink-text">Sign in to your account</h1>
              <form onSubmit={handleSubmit}>
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
                <div className="mb-2">
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
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                  </div>
                  <button type="button" className="btn btn-link p-0">Forgot password?</button>
                </div>
                <button type="submit" className="btn btn-theme w-100 mt-3" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </form>
              <p className="text-center mt-3 mb-0">
                <span className="text-muted">Don't have an account? </span>
                <Link to="/signup" className="auth-link">Create one</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login; 