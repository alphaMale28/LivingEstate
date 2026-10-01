import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiEdit3,
  FiHeart,
  FiHome,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiSettings,
} from "react-icons/fi";

import "./profilePage.scss";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    title: "Contemporary Hillside Residence",
    location: "Kathmandu, Nepal",
    price: "$780,000",
    type: "For Sale",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    title: "Modern Garden Residence",
    location: "Lalitpur, Nepal",
    price: "$2,400 / month",
    type: "For Rent",
  },
];

function ProfilePage() {
  return (
    <main className="profilePage">
      {/* PROFILE HERO */}
      <section className="profileHero">
        <div className="profileHeroInner">
          <div className="profileIdentity">
            <div className="profileAvatar">
              <img src="/Sophia.avif" alt="Profile" />
              {/* <img src="/images/avatar.jpg" alt="Profile" /> */}
            </div>

            <div className="identityContent">
              <span className="eyebrow">MEMBER PROFILE</span>

              <h1>Alex Morgan</h1>

              <div className="identityLocation">
                <FiMapPin />
                <span>Kathmandu, Nepal</span>
              </div>

              <p>
                Property enthusiast helping people discover spaces that feel
                like home.
              </p>
            </div>
          </div>

          <div className="profileActions">
            <Link to="/updateProfile" className="outlineButton">
              <FiEdit3 />
              Edit profile
            </Link>

            <Link to="/addpost" className="primaryButton">
              <FiPlus />
              Add property
            </Link>
          </div>
        </div>
      </section>

      {/* PROFILE CONTENT */}
      <section className="profileContent">
        <div className="profileMain">
          {/* ABOUT */}
          <div className="contentSection aboutSection">
            <div className="sectionHeading">
              <span className="sectionNumber">01</span>

              <div>
                <span className="eyebrow">ABOUT</span>
                <h2>A little about me</h2>
              </div>
            </div>

            <p>
              I enjoy discovering thoughtfully designed properties and helping
              people find places that match the way they want to live. I use
              LivingEstate to explore, list, and connect with people looking for
              their next home.
            </p>
          </div>

          {/* MY LISTINGS */}
          <div className="contentSection listingsSection">
            <div className="sectionTop">
              <div className="sectionHeading">
                <span className="sectionNumber">02</span>

                <div>
                  <span className="eyebrow">MY PROPERTIES</span>
                  <h2>My listings</h2>
                </div>
              </div>

              <Link to="/addpost" className="textLink">
                Add property
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="listingGrid">
              {listings.map((listing) => (
                <article className="listingCard" key={listing.id}>
                  {/* TODO */}
                  <Link to={`/property/${listing.id}`} className="listingImage">
                    <img src={listing.image} alt={listing.title} />

                    <span>{listing.type}</span>
                  </Link>

                  <div className="listingInfo">
                    <h3>{listing.title}</h3>

                    <div className="listingLocation">
                      <FiMapPin />
                      {listing.location}
                    </div>

                    <div className="listingBottom">
                      <strong>{listing.price}</strong>

                      <Link to={`/property/${listing.id}`}>
                        <FiArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="profileSidebar">
          <div className="statsCard">
            <div className="stat">
              <strong>04</strong>
              <span>Listings</span>
            </div>

            <div className="stat">
              <strong>12</strong>
              <span>Saved</span>
            </div>

            <div className="stat">
              <strong>08</strong>
              <span>Messages</span>
            </div>
          </div>

          <div className="contactCard">
            <span className="eyebrow">CONTACT</span>

            <h3>Contact information</h3>

            <div className="contactItem">
              <FiMail />
              <span>alex@example.com</span>
            </div>

            <div className="contactItem">
              <FiPhone />
              <span>+977 9800000000</span>
            </div>

            <div className="contactItem">
              <FiMapPin />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          <nav className="profileNav">
            <Link to="/favorites">
              <FiHeart />
              <span>Saved properties</span>
              <FiArrowUpRight />
            </Link>

            <Link to="/messages">
              <FiMessageCircle />
              <span>Messages</span>
              <FiArrowUpRight />
            </Link>

            <Link to="/settings">
              <FiSettings />
              <span>Account settings</span>
              <FiArrowUpRight />
            </Link>
          </nav>
        </aside>
      </section>
    </main>
  );
}

export default ProfilePage;
