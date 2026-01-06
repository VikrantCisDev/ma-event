import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "/src/assets/Images/logo.svg";
import GoogleSvg from "/src/assets/Images/google-color.svg";
import Newsletter from "../../components/ui/Newsletter";
import BottomBar from "../../components/ui/BottomBar";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    console.log({ email, password });
    setLoading(false);
  };

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
    <section className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-6 col-12 authLeft py-lg-5 py-3 px-lg-5 px-2">
            <div className="auth-left-image mb-lg-5 mb-sm-3 mb-2">
              <img className="img-fluid logo" src={Logo} alt="Ma-event"/>
            </div>
            <div className="auth-left-content">
              <h1 className=" mb-sm-2 pink-text">Welcome Back!</h1>
              <p className=" pink-text m-sm-0 mb-1">Please sign in to continue to your account.</p>
            </div>
          </div> */}
          <div className="col-lg-6 col-md-8 col-12">
            <div className="auth-card py-lg-5 py-4 px-lg-4 px-2">
              <div className="d-flex justify-content-evenly align-items-center mb-md-5 mb-4 ">
                <Link to="/login" className="h4 fw-bold tabTitle activeTab">
                  LOGIN
                </Link>
                <Link to="/signup" className="h4 fw-bold tabTitle">
                  REGISTER
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  {/* <label htmlFor="email" className="form-label">Email</label> */}
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Username or email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  {/* <label htmlFor="password" className="form-label">Password</label> */}
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" :"password"}
                      className="form-control border-end-0"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-text bg-transparent border-start-0"
                    onClick={togglePasswordVisibility}>
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye /> }</span>
                  </div> 
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="btn btn-link p-0 fw-medium">
                    Lost password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-theme w-100 mt-3"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <div className="google-btngrp">
                  <p className="text-center text-muted my-4">Or login with</p>

                  <button className="google-btn btn-white mb-3">
                    <img
                      src={GoogleSvg}
                      alt="Google"
                      className="google-logo"
                    />
                    Continue with Google
                  </button>

                  <button className="google-btn btn-black">
                    <img
                      src={GoogleSvg}
                      alt="Google"
                      className="google-logo"
                    />
                    Sign up with Google
                  </button>
                </div>
              </form>
              {/* <p className="text-center mt-3 mb-0">
                <span className="text-muted">Don't have an account? </span>
                <Link to="/signup" className="auth-link">Create one</Link>
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

export default Login;
