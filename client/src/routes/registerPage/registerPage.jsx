import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

import "./registerPage.scss";

function RegisterPage() {
  return (
    <main className="registerPage">
      {/* HEADER */}
      <header className="registerHeader">
        <Link to="/" className="brand">
          LivingEstate
        </Link>

        <Link to="/" className="backLink">
          <FiArrowLeft />
          <span>Back to home</span>
        </Link>
      </header>

      {/* REGISTER */}
      <section className="registerSection">
        {/* IMAGE */}
        <div className="registerImage">
          <img
            src="https://images.openai.com/static-rsc-4/7o6Su0MwgpO1wtmnsPrbNbKCILuNAxWyHnPz12ALtiBZtG-HpIJ8yGRqZcb-H3kdFsSu0lv9xqV-lPkTcWqGfvkv44YvtG6zbCBOTvSKH98nGk5xP6mA4NBRRXTaS_060MAY2GLZybZSySCjehD2FOdUjaIB1FwV2iIgXUkpg4gbVO8qV2fd_SRVmADA2d--"
            alt="Modern home"
          />

          <div className="imageContent">
            <span>Find your place</span>

            <h2>
              A better way to
              <br />
              find where you belong.
            </h2>
          </div>
        </div>

        {/* FORM */}
        <div className="registerFormWrapper">
          <div className="formHeader">
            <span className="eyebrow">WELCOME TO LIVINGESTATE</span>

            <h1>Create your account</h1>

            <p>
              Start exploring properties, save your favourites, and connect with
              the right people.
            </p>
          </div>

          <form className="registerForm">
            <div className="nameFields">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" type="text" placeholder="First name" />
              </div>

              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
              />

              <span className="fieldHint">Use at least 8 characters.</span>
            </div>

            <label className="terms">
              <input type="checkbox" />

              <span>
                I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                <Link to="/privacy">Privacy Policy</Link>.
              </span>
            </label>

            <button type="submit" className="submitButton">
              <span>Create account</span>
              <FiArrowUpRight />
            </button>
          </form>

          <div className="loginPrompt">
            <span>Already have an account?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
