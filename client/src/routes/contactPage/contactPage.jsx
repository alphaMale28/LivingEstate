import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

import "./contactPage.scss";

function ContactPage() {
  return (
    <main className="contactPage">
      {/* HERO */}

      <section className="contactHero">
        <div className="contactHeroContent">
          <span className="eyebrow">GET IN TOUCH</span>

          <h1>
            Let's start a<span>conversation.</span>
          </h1>

          <p>
            Have a question about a property, need help with your listing, or
            simply want to learn more about LivingEstate? We'd love to hear from
            you.
          </p>
        </div>

        <div className="contactHeroNumber">
          <span>01</span>
          <p>
            WE'RE HERE
            <br />
            TO HELP.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="contactContent">
        <div className="contactInfo">
          <span className="eyebrow">CONTACT DETAILS</span>

          <h2>
            We're only a<span>message away.</span>
          </h2>

          <div className="contactDetails">
            <div className="contactDetail">
              <FiMail />

              <div>
                <span>EMAIL</span>
                <a href="mailto:hello@livingestate.com">
                  hello@livingestate.com
                </a>
              </div>
            </div>

            <div className="contactDetail">
              <FiPhone />

              <div>
                <span>PHONE</span>
                <a href="tel:+9779800000000">+977 980 000 0000</a>
              </div>
            </div>

            <div className="contactDetail">
              <FiMapPin />

              <div>
                <span>LOCATION</span>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contactForm">
          <div className="formRow">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
          </div>

          <label>
            Subject
            <input type="text" placeholder="How can we help?" />
          </label>

          <label>
            Message
            <textarea rows="6" placeholder="Tell us a little more..." />
          </label>

          <button type="submit">
            Send Message
            <FiArrowUpRight />
          </button>
        </form>
      </section>

      {/* CTA */}

      <section className="contactCta">
        <span className="eyebrow">LOOKING FOR A PROPERTY?</span>

        <h2>
          Your search
          <span>starts here.</span>
        </h2>

        <Link to="/shop">
          Explore Properties
          <FiArrowUpRight />
        </Link>
      </section>
    </main>
  );
}

export default ContactPage;
