import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCamera,
  FiCheck,
  FiHome,
  FiMapPin,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import "./addPostPage.scss";

const amenities = [
  "Parking",
  "Balcony",
  "Garden",
  "Swimming pool",
  "Furnished",
  "Security",
  "Air conditioning",
  "Gym",
];

function AddPostPage() {
  const [purpose, setPurpose] = useState("sale");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [images, setImages] = useState([]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
  };

  return (
    <main className="addPostPage">
      {/* HEADER */}
      <section className="addPostHeader">
        <Link to="/profile" className="backLink">
          <FiArrowLeft />
          Back to profile
        </Link>

        <span className="eyebrow">LIST YOUR PROPERTY</span>

        <h1>
          Give your property
          <span> a place to shine.</span>
        </h1>

        <p>
          Add the details people need to discover, understand, and fall in love
          with your property.
        </p>
      </section>

      {/* FORM */}
      <section className="addPostContent">
        <form>
          {/* BASIC INFORMATION */}
          <div className="formSection">
            <div className="sectionHeading">
              <span>01</span>

              <div>
                <span className="eyebrow">BASIC INFORMATION</span>
                <h2>Tell us about the property.</h2>
              </div>
            </div>

            <div className="formGrid">
              <label className="full">
                <span>Property title</span>
                <input
                  type="text"
                  placeholder="e.g. Contemporary Hillside Residence"
                />
              </label>

              <label>
                <span>Property type</span>
                <select>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Land</option>
                  <option>Commercial</option>
                </select>
              </label>

              <label>
                <span>Purpose</span>

                <div className="purposeSwitch">
                  <button
                    type="button"
                    className={purpose === "sale" ? "active" : ""}
                    onClick={() => setPurpose("sale")}
                  >
                    For sale
                  </button>

                  <button
                    type="button"
                    className={purpose === "rent" ? "active" : ""}
                    onClick={() => setPurpose("rent")}
                  >
                    For rent
                  </button>
                </div>
              </label>

              <label className="full">
                <span>Description</span>
                <textarea
                  rows="7"
                  placeholder="Describe the property, its character, surroundings and what makes it special..."
                />
              </label>
            </div>
          </div>

          {/* LOCATION */}
          <div className="formSection">
            <div className="sectionHeading">
              <span>02</span>

              <div>
                <span className="eyebrow">LOCATION</span>
                <h2>Where is it?</h2>
              </div>
            </div>

            <div className="formGrid">
              <label>
                <span>City</span>
                <input type="text" placeholder="Kathmandu" />
              </label>

              <label>
                <span>Neighborhood</span>
                <input type="text" placeholder="Lazimpat" />
              </label>

              <label className="full">
                <span>Address</span>

                <div className="inputIcon">
                  <FiMapPin />
                  <input type="text" placeholder="Enter the property address" />
                </div>
              </label>
            </div>
          </div>

          {/* PROPERTY DETAILS */}
          <div className="formSection">
            <div className="sectionHeading">
              <span>03</span>

              <div>
                <span className="eyebrow">PROPERTY DETAILS</span>
                <h2>The important numbers.</h2>
              </div>
            </div>

            <div className="formGrid fourColumns">
              <label>
                <span>Price</span>
                <input type="number" placeholder="780000" />
              </label>

              <label>
                <span>Bedrooms</span>
                <input type="number" placeholder="4" />
              </label>

              <label>
                <span>Bathrooms</span>
                <input type="number" placeholder="3" />
              </label>

              <label>
                <span>Area sq.ft</span>
                <input type="number" placeholder="2850" />
              </label>

              <label>
                <span>Year built</span>
                <input type="number" placeholder="2026" />
              </label>
            </div>
          </div>

          {/* AMENITIES */}
          <div className="formSection">
            <div className="sectionHeading">
              <span>04</span>

              <div>
                <span className="eyebrow">AMENITIES</span>
                <h2>What does it offer?</h2>
              </div>
            </div>

            <div className="amenities">
              {amenities.map((amenity) => (
                <button
                  type="button"
                  key={amenity}
                  className={
                    selectedAmenities.includes(amenity) ? "selected" : ""
                  }
                  onClick={() => toggleAmenity(amenity)}
                >
                  <span>
                    {selectedAmenities.includes(amenity) ? (
                      <FiCheck />
                    ) : (
                      <FiPlus />
                    )}
                  </span>

                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* IMAGES */}
          <div className="formSection">
            <div className="sectionHeading">
              <span>05</span>

              <div>
                <span className="eyebrow">PHOTOGRAPHY</span>
                <h2>Show people the space.</h2>
              </div>
            </div>

            <label className="uploadArea">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImages}
              />

              <FiCamera />

              <strong>Add property photos</strong>

              <span>
                Upload high-quality images of the exterior, interior and
                important spaces.
              </span>

              <small>PNG, JPG or WEBP</small>
            </label>

            {images.length > 0 && (
              <div className="selectedImages">
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Property ${index + 1}`}
                    />

                    <button type="button">
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PUBLISH */}
          <div className="publishArea">
            <div>
              <FiHome />

              <div>
                <strong>Ready to publish?</strong>
                <p>
                  Review your information before making your property visible.
                </p>
              </div>
            </div>

            <button type="submit">
              Publish property
              <FiArrowUpRight />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AddPostPage;
