import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

import "./loginPage.scss";

function LoginPage() {
  return (
    <main className="loginPage">
      {/* HEADER */}
      <header className="loginHeader">
        <Link to="/" className="brand">
          LivingEstate
        </Link>

        <Link to="/" className="backLink">
          <FiArrowLeft />
          <span>Back to home</span>
        </Link>
      </header>

      {/* LOGIN */}
      <section className="loginSection">
        {/* IMAGE */}
        <div className="loginImage">
          <img
            src="https://images.openai.com/static-rsc-4/08q2aXyxPuq1Tov_iK_Q9-2se6KYTt4eYdi4XFrhE2_SS1fv1vMSzi568HAbiot3k9JKG1OAyQs2OwUy8B3ElzB0SD_tHVzVTLsXzUH_ShlqGOTMMaavD8GUhKJFWUjXEqXoPxiGiY01dPNticZhIPyrR3Bz1ccLThDQE1mSad4"
            alt="Modern LivingEstate property"
          />

          <div className="imageContent">
            <span>WELCOME BACK</span>

            <h2>
              Your next
              <br />
              chapter starts here.
            </h2>
          </div>
        </div>

        {/* FORM */}
        <div className="loginFormWrapper">
          <div className="formHeader">
            <span className="eyebrow">LIVINGESTATE</span>

            <h1>Welcome back</h1>

            <p>
              Sign in to continue exploring properties and manage your
              LivingEstate account.
            </p>
          </div>

          <form className="loginForm">
            <div className="field">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <div className="fieldLabel">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="submit" className="submitButton">
              <span>Sign in</span>
              <FiArrowUpRight />
            </button>
          </form>

          <div className="registerPrompt">
            <span>Don't have an account?</span>
            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
