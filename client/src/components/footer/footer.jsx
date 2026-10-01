// import { Link } from "react-router-dom";
// // import {
// //   ArrowUpRight,
// //   Facebook,
// //   Instagram,
// //   Linkedin,
// //   Mail,
// //   MapPin,
// //   Phone,
// // } from "lucide-react";

// import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import "./footer.scss";

// function Footer() {
//   return (
//     <footer className="footer">
//       {/* FOOTER TOP */}
//       <div className="footerTop">
//         <div className="footerBrand">
//           <Link to="/" className="logo">
//             Livin<span>gE</span>state
//           </Link>

//           <p>
//             Discover places you'll love. Find your next home, apartment or
//             investment property with ease.
//           </p>

//           <div className="socialLinks">
//             <a href="#" aria-label="Facebook">
//               <FaFacebookF size={17} />
//             </a>

//             <a href="#" aria-label="Instagram">
//               <FaInstagram size={17} />
//             </a>

//             <a href="#" aria-label="Twitter">
//               <FaTwitter size={17} />
//             </a>

//             <a href="#" aria-label="LinkedIn">
//               <FaLinkedinIn size={17} />
//             </a>
//           </div>
//         </div>

//         <div className="footerColumn">
//           <h3>Explore</h3>

//           <Link to="/list">Properties</Link>
//           <Link to="/list?type=rent">For Rent</Link>
//           <Link to="/list?type=sale">For Sale</Link>
//           <Link to="/list?type=apartment">Apartments</Link>
//         </div>

//         <div className="footerColumn">
//           <h3>Company</h3>

//           <Link to="/about">About us</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/terms">Terms & conditions</Link>
//           <Link to="/privacy">Privacy policy</Link>
//         </div>

//         <div className="footerContact">
//           <h3>Get in touch</h3>

//           <a href="mailto:hello@livingestate.com">
//             <Mail size={17} />
//             hello@livingestate.com
//           </a>

//           <a href="tel:+9779800000000">
//             <Phone size={17} />
//             +977 980 000 0000
//           </a>

//           <div>
//             <MapPin size={17} />
//             <span>
//               Kathmandu,
//               <br />
//               Nepal
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* NEWSLETTER */}
//       <div className="footerNewsletter">
//         <div>
//           <span>STAY UPDATED</span>
//           <h2>Find your next place.</h2>
//         </div>

//         <form className="newsletterForm">
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             aria-label="Email address"
//           />

//           <button type="submit">
//             Subscribe
//             <ArrowUpRight size={17} />
//           </button>
//         </form>
//       </div>

//       {/* FOOTER BOTTOM */}
//       <div className="footerBottom">
//         <p>© {new Date().getFullYear()} LivingEstate. All rights reserved.</p>

//         <div>
//           <span>Made for better living</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}

      <div className="footerTop">
        <div className="footerBrand">
          <Link to="/" className="brand">
            <span className="brandMark">LE</span>

            <div>
              <strong>Living</strong>
              <span>Estate</span>
            </div>
          </Link>

          <p>
            A more thoughtful way to discover, connect with, and move into
            property.
          </p>

          <Link to="/shop" className="footerExplore">
            Explore properties
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="footerLinks">
          <div className="linkColumn">
            <span>EXPLORE</span>

            <Link to="/">Home</Link>
            <Link to="/shop">Properties</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="linkColumn">
            <span>ACCOUNT</span>

            <Link to="/profile">Profile</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/message">Messages</Link>
            <Link to="/details">List Property</Link>
          </div>

          <div className="linkColumn">
            <span>FOLLOW</span>

            <a href="#" aria-label="Instagram">
              <FiInstagram />
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              <FiFacebook />
              Facebook
            </a>

            <a href="#" aria-label="Twitter">
              <FiTwitter />
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}

      <div className="newsletter">
        <div>
          <span>STAY IN THE KNOW</span>

          <h3>
            New spaces.
            <em>Fresh possibilities.</em>
          </h3>
        </div>

        <form>
          <input type="email" placeholder="Your email address" />

          <button type="submit">
            Subscribe
            <FiArrowUpRight />
          </button>
        </form>
      </div>

      {/* BOTTOM */}

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} LivingEstate. All rights reserved.</p>

        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>

        <span>Designed for better living.</span>
      </div>
    </footer>
  );
}

export default Footer;
