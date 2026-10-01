import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiSliders,
  FiHeart,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import "./shopPage.scss";

const properties = [
  {
    id: 1,
    title: "Contemporary Residence",
    location: "Kathmandu, Nepal",
    price: "$780,000",
    type: "House",
    purpose: "Sale",
    beds: 4,
    baths: 3,
    area: "2,850 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "City View Apartment",
    location: "Lalitpur, Nepal",
    price: "$2,400 / month",
    type: "Apartment",
    purpose: "Rent",
    beds: 2,
    baths: 2,
    area: "1,250 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Quiet Modern Home",
    location: "Bhaktapur, Nepal",
    price: "$625,000",
    type: "House",
    purpose: "Sale",
    beds: 3,
    baths: 2,
    area: "2,100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Minimal Garden Villa",
    location: "Budhanilkantha, Nepal",
    price: "$920,000",
    type: "Villa",
    purpose: "Sale",
    beds: 5,
    baths: 4,
    area: "3,400 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Urban Residence",
    location: "Kathmandu, Nepal",
    price: "$1,800 / month",
    type: "Apartment",
    purpose: "Rent",
    beds: 2,
    baths: 2,
    area: "1,100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Modern Family House",
    location: "Kirtipur, Nepal",
    price: "$540,000",
    type: "House",
    purpose: "Sale",
    beds: 4,
    baths: 3,
    area: "2,450 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
];

function ShopPage() {
  const [purpose, setPurpose] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesPurpose = purpose === "All" || property.purpose === purpose;

    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    return matchesPurpose && matchesSearch;
  });

  return (
    <main className="shopPage">
      {/* HEADER */}

      <section className="shopHeader">
        <div>
          <span className="eyebrow">EXPLORE PROPERTIES</span>

          <h1>
            Find a place
            <span>worth calling home.</span>
          </h1>
        </div>

        <p>
          Explore homes, apartments, villas, and other spaces selected for
          different ways of living.
        </p>
      </section>

      {/* SEARCH */}

      <section className="propertySearch">
        <div className="searchInput">
          <FiSearch />

          <input
            type="text"
            placeholder="Search by property or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="purposeSwitch">
          {["All", "Sale", "Rent"].map((item) => (
            <button
              key={item}
              className={purpose === item ? "active" : ""}
              onClick={() => setPurpose(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="filterButton">
          <FiSliders />
          Filters
        </button>
      </section>

      {/* RESULTS HEADER */}

      <div className="resultsHeader">
        <p>
          <strong>{filteredProperties.length}</strong> properties found
        </p>

        <button>
          Sort by <strong>Recommended</strong>
        </button>
      </div>

      {/* PROPERTY GRID */}

      <section className="propertyGrid">
        {filteredProperties.map((property) => (
          <article className="propertyCard" key={property.id}>
            <div className="propertyImage">
              <Link to={`/properties/${property.id}`}>
                <img src={property.image} alt={property.title} />
              </Link>

              <span className="propertyPurpose">
                FOR {property.purpose.toUpperCase()}
              </span>

              <button className="favoriteButton">
                <FiHeart />
              </button>
            </div>

            <div className="propertyInfo">
              <div className="propertyTitle">
                <div>
                  <h2>{property.title}</h2>

                  <p>
                    <FiMapPin />
                    {property.location}
                  </p>
                </div>

                <strong>{property.price}</strong>
              </div>

              <div className="propertyMeta">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
                <span>{property.area}</span>
              </div>

              <Link to={`/properties/${property.id}`} className="propertyLink">
                View property
                <FiArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {filteredProperties.length === 0 && (
        <div className="emptyState">
          <h2>No properties found.</h2>
          <p>Try another location or search term.</p>
        </div>
      )}
    </main>
  );
}

export default ShopPage;
