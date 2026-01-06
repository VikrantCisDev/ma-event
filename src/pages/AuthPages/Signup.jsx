import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "/src/assets/Images/logo.svg";
import GoogleSvg from "/src/assets/Images/google-color.svg";
import Newsletter from "../../components/ui/Newsletter";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import BottomBar from "../../components/ui/BottomBar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="auth-page">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-6 col-12 authLeft py-lg-5 py-3 px-lg-5 px-2">
            <div className="auth-left-image mb-lg-5 mb-3">
              <img className="img-fluid logo" src={Logo} alt="Ma-event" />
            </div>
            <div className="auth-left-content">
              <h1 className="mb-2 pink-text">Welcome!</h1>
              <p className="pink-text m-sm-0 mb-1">Create your account to get started with Ma-event.</p>
            </div>
          </div> */}
            <div className="col-lg-6  col-md-8 col-12">
              <div className="auth-card py-lg-5 py-4 px-lg-4 px-2">
                <div className="d-flex justify-content-evenly align-items-center mb-md-4 mb-3">
                  <Link to="/login" className="h4 fw-bold tabTitle ">
                    LOGIN
                  </Link>
                  <Link to="/signup" className="h4 fw-bold tabTitle activeTab">
                    REGISTER
                  </Link>
                </div>
                {error && (
                  <div className="alert alert-danger py-2" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <p className="text-center fw-semibold mb-4">
                    Enter your email and password to register
                  </p>
                  <div className="mb-3">
                    {/* <label htmlFor="name" className="form-label">Name</label> */}
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Email</label> */}
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">Password</label> */}
                    <div className="input-group">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="form-control border-end-0"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span
                        className="input-group-text bg-transparent border-start-0"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    </div>
                  </div>
                  <div className="px-md-3">
                    <p className="mb-md-2 m-0">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our&nbsp;
                      <Link to="#" className="pink-text">
                        privacy policy.
                      </Link>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-theme w-100 mt-3"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Register"}
                  </button>
                  <div className="google-btngrp">
                    <p className="text-center text-muted my-4">Or connect with</p>

                    <button className="google-btn btn-white mb-3">
                      <img src={GoogleSvg} alt="Google" className="google-logo" />
                      Continue with Google
                    </button>

                    <button className="google-btn btn-black">
                      <img src={GoogleSvg} alt="Google" className="google-logo" />
                      Sign up with Google
                    </button>
                  </div>
                </form>
                {/* <p className="text-center mt-3 mb-0">
                <span className="text-muted">Already have an account? </span>
                <Link to="/login" className="auth-link">
                  Sign in
                </Link>
              </p> */}
              </div>
            </div>
          </div>
          <Newsletter className="mt-5" />
        </div>
      </section>
      {/* <BottomBar /> */}
    </>
  );
};

export default Signup;


