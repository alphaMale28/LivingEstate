import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiMapPin,
  FiHome,
  FiMaximize,
  FiCalendar,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

import "./detailsPage.scss";

const property = {
  title: "Contemporary Residence",
  location: "Kathmandu, Nepal",
  price: "$780,000",
  purpose: "For Sale",
  type: "House",
  beds: 4,
  baths: 3,
  area: "2,850 sq.ft",
  year: "2024",
  description:
    "A thoughtfully designed contemporary residence combining generous living spaces, natural materials, and modern architectural details. Designed for comfortable everyday living with an emphasis on light, openness, and connection to the surrounding space.",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
  ],
};

function PropertyDetailsPage() {
  const { id } = useParams();

  return (
    <main className="propertyDetailsPage">
      {/* TOP */}

      <div className="detailsTop">
        <Link to="/shop" className="backButton">
          <FiArrowLeft />
          Back to properties
        </Link>

        <div className="detailsActions">
          <button>
            <FiShare2 />
            Share
          </button>

          <button>
            <FiHeart />
            Save
          </button>
        </div>
      </div>

      {/* GALLERY */}

      <section className="gallery">
        <div className="mainImage">
          <img src={property.images[0]} alt={property.title} />
        </div>

        <div className="secondaryImages">
          {property.images.slice(1).map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${property.title} ${index + 2}`} />
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY HEADER */}

      <section className="propertyHeader">
        <div className="propertyHeading">
          <span className="propertyPurpose">{property.purpose}</span>

          <h1>{property.title}</h1>

          <p>
            <FiMapPin />
            {property.location}
          </p>
        </div>

        <div className="propertyPrice">
          <span>PRICE</span>
          <strong>{property.price}</strong>
        </div>
      </section>

      {/* DETAILS */}

      <section className="detailsContent">
        <div className="mainDetails">
          {/* SPECS */}

          <div className="specs">
            <div>
              <FiHome />
              <span>TYPE</span>
              <strong>{property.type}</strong>
            </div>

            <div>
              <FiHome />
              <span>BEDROOMS</span>
              <strong>{property.beds}</strong>
            </div>

            <div>
              <FiHome />
              <span>BATHROOMS</span>
              <strong>{property.baths}</strong>
            </div>

            <div>
              <FiMaximize />
              <span>AREA</span>
              <strong>{property.area}</strong>
            </div>

            <div>
              <FiCalendar />
              <span>YEAR</span>
              <strong>{property.year}</strong>
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="description">
            <span className="eyebrow">ABOUT THIS PROPERTY</span>

            <h2>
              A place designed
              <span>for living.</span>
            </h2>

            <p>{property.description}</p>

            <p>
              The property offers carefully considered spaces for everyday life,
              entertaining, and quiet moments, creating a balance between
              functionality and character.
            </p>
          </div>

          {/* AMENITIES */}

          <div className="amenities">
            <span className="eyebrow">FEATURES & AMENITIES</span>

            <div className="amenityGrid">
              <span>Modern Kitchen</span>
              <span>Private Parking</span>
              <span>Natural Light</span>
              <span>Garden</span>
              <span>Security System</span>
              <span>Large Windows</span>
              <span>Air Conditioning</span>
              <span>Storage</span>
            </div>
          </div>
        </div>

        {/* CONTACT CARD */}

        <aside className="ownerCard">
          <span className="eyebrow">PROPERTY CONTACT</span>

          <div className="owner">
            <div className="ownerAvatar">A</div>

            <div>
              <h3>Alex Morgan</h3>
              <p>Property Agent</p>
            </div>
          </div>

          <p className="ownerText">
            Interested in this property? Send a message to arrange a viewing or
            ask any questions.
          </p>

          <Link to="/messages" className="messageButton">
            <FiMessageCircle />
            Message Agent
          </Link>

          <button className="scheduleButton">
            Schedule a Viewing
            <FiArrowUpRight />
          </button>
        </aside>
      </section>
    </main>
  );
}

export default PropertyDetailsPage;
