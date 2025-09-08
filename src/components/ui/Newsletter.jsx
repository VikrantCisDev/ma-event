import React, { useState } from "react";

const Newsletter = ({ className }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your subscribe logic here
  };

  return (
    <div className={`mx-auto ${className}`}>
      <div className="container">
        <div className="row align-items-center justify-content-center newsletterRow">
          <div className="col-lg-6 col-md-8 col-12">
            <h3 className="">Newsletter</h3>
            <div className="mb-3">
              Don't miss out on thousands of super cool products & promotions
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-12">
            {submitted ? (
              <div className="pink-text">Thank you for subscribing!</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 p-0">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control mb-lg-0 mb-md-3 mb-2"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="col-lg-6 p-0">
                    <button type="submit" className="btn btn-theme w-100 ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
