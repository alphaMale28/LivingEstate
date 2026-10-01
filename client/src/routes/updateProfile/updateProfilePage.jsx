import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCamera,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";

import "./updateProfilePage.scss";

function UpdateProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex@example.com",
    phone: "+977 9800000000",
    location: "Kathmandu, Nepal",
    bio: "Property enthusiast helping people discover spaces that feel like home.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="updateProfilePage">
      {/* HEADER */}
      <section className="updateHeader">
        <Link to="/profile" className="backLink">
          <FiArrowLeft />
          Back to profile
        </Link>

        <span className="eyebrow">ACCOUNT</span>

        <h1>
          Edit your
          <span> profile.</span>
        </h1>

        <p>
          Keep your information up to date so people can connect with you
          easily.
        </p>
      </section>

      {/* FORM */}
      <section className="updateContent">
        <form onSubmit={handleSubmit}>
          {/* PROFILE PHOTO */}
          <div className="formSection">
            <div className="formSectionHeading">
              <span>01</span>
              <div>
                <span className="eyebrow">PROFILE IMAGE</span>
                <h2>Your photo</h2>
              </div>
            </div>

            <div className="avatarEditor">
              <div className="avatar">
                <img src="/images/avatar.jpg" alt="Profile" />
              </div>

              <div>
                <label htmlFor="avatar">
                  <FiCamera />
                  Change photo
                </label>

                <input id="avatar" type="file" accept="image/*" />

                <p>JPG, PNG or WEBP. Maximum 5MB.</p>
              </div>
            </div>
          </div>

          {/* PERSONAL INFORMATION */}
          <div className="formSection">
            <div className="formSectionHeading">
              <span>02</span>
              <div>
                <span className="eyebrow">PERSONAL INFORMATION</span>
                <h2>Tell us about you</h2>
              </div>
            </div>

            <div className="formGrid">
              <label>
                <span>First name</span>
                <div className="inputWrap">
                  <FiUser />
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label>
                <span>Last name</span>
                <div className="inputWrap">
                  <FiUser />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label>
                <span>Email address</span>
                <div className="inputWrap">
                  <FiMail />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label>
                <span>Phone number</span>
                <div className="inputWrap">
                  <FiPhone />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="fullWidth">
                <span>Location</span>
                <div className="inputWrap">
                  <FiMapPin />
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label className="fullWidth">
                <span>About you</span>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="6"
                />
              </label>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="formSection">
            <div className="formSectionHeading">
              <span>03</span>
              <div>
                <span className="eyebrow">SECURITY</span>
                <h2>Change password</h2>
              </div>
            </div>

            <div className="formGrid">
              <label>
                <span>Current password</span>
                <div className="inputWrap">
                  <FiLock />
                  <input type="password" />
                </div>
              </label>

              <label>
                <span>New password</span>
                <div className="inputWrap">
                  <FiLock />
                  <input type="password" />
                </div>
              </label>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="formActions">
            <Link to="/profile">Cancel</Link>

            <button type="submit">
              <FiSave />
              Save changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default UpdateProfilePage;
