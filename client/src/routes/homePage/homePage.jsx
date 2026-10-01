// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   BedDouble,
//   Building2,
//   ChevronDown,
//   MapPin,
//   Search,
//   ShieldCheck,
//   Sparkles,
// } from "lucide-react";

// import "./homePage.scss";

// const featuredProperties = [
//   {
//     id: 1,
//     title: "Modern Family House",
//     location: "Kathmandu, Nepal",
//     price: "$420,000",
//     type: "House",
//     beds: 4,
//     baths: 3,
//     area: "2,450 sq.ft",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     title: "Luxury City Apartment",
//     location: "Lalitpur, Nepal",
//     price: "$280,000",
//     type: "Apartment",
//     beds: 3,
//     baths: 2,
//     area: "1,850 sq.ft",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 3,
//     title: "Contemporary Villa",
//     location: "Bhaktapur, Nepal",
//     price: "$560,000",
//     type: "Villa",
//     beds: 5,
//     baths: 4,
//     area: "3,200 sq.ft",
//     image:
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// const propertyTypes = [
//   {
//     title: "Apartments",
//     count: "124 Properties",
//     icon: Building2,
//   },
//   {
//     title: "Houses",
//     count: "86 Properties",
//     icon: BedDouble,
//   },
//   {
//     title: "Luxury Villas",
//     count: "42 Properties",
//     icon: Sparkles,
//   },
// ];

// function HomePage() {
//   return (
//     <main className="homePage">
//       {/* HERO */}
//       <section className="hero">
//         <div className="heroOverlay" />

//         <div className="heroContent">
//           <div className="heroBadge">
//             <Sparkles size={15} />
//             Find a place you'll love
//           </div>

//           <h1>
//             Find a home that
//             <span> feels like yours.</span>
//           </h1>

//           <p>
//             Discover beautiful homes, apartments and properties in the locations
//             you love.
//           </p>

//           {/* SEARCH */}
//           <div className="propertySearch">
//             <div className="searchTabs">
//               <button className="active">Buy</button>
//               <button>Rent</button>
//             </div>

//             <div className="searchFields">
//               <div className="searchField locationField">
//                 <MapPin size={19} />
//                 <div>
//                   <span>Location</span>
//                   <strong>Kathmandu</strong>
//                 </div>
//               </div>

//               <div className="searchField">
//                 <Building2 size={19} />
//                 <div>
//                   <span>Property type</span>
//                   <strong>Any property</strong>
//                 </div>
//                 <ChevronDown size={16} />
//               </div>

//               <div className="searchField">
//                 <div>
//                   <span>Price range</span>
//                   <strong>$100k - $500k</strong>
//                 </div>
//                 <ChevronDown size={16} />
//               </div>

//               <button className="searchButton">
//                 <Search size={20} />
//                 <span>Search</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="heroStats">
//           <div>
//             <strong>2,500+</strong>
//             <span>Properties</span>
//           </div>

//           <div>
//             <strong>850+</strong>
//             <span>Happy clients</span>
//           </div>

//           <div>
//             <strong>35+</strong>
//             <span>Locations</span>
//           </div>
//         </div>
//       </section>

//       {/* FEATURED */}
//       <section className="featured section">
//         <div className="sectionHeader">
//           <div>
//             <span className="eyebrow">EXPLORE PROPERTIES</span>
//             <h2>Featured properties</h2>
//             <p>
//               Handpicked properties in some of the most desirable locations.
//             </p>
//           </div>

//           <Link to="/list" className="viewAll">
//             View all
//             <ArrowRight size={18} />
//           </Link>
//         </div>

//         <div className="propertyGrid">
//           {featuredProperties.map((property) => (
//             <Link
//               to={`/list/${property.id}`}
//               className="propertyCard"
//               key={property.id}
//             >
//               <div className="propertyImage">
//                 <img src={property.image} alt={property.title} />

//                 <span className="propertyTag">{property.type}</span>

//                 <button
//                   className="favoriteButton"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   ♡
//                 </button>
//               </div>

//               <div className="propertyInfo">
//                 <div className="propertyPrice">{property.price}</div>

//                 <h3>{property.title}</h3>

//                 <div className="propertyLocation">
//                   <MapPin size={15} />
//                   {property.location}
//                 </div>

//                 <div className="propertyDetails">
//                   <span>
//                     <BedDouble size={16} />
//                     {property.beds} Beds
//                   </span>

//                   <span>{property.baths} Baths</span>

//                   <span>{property.area}</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* PROPERTY TYPES */}
//       <section className="propertyTypes section">
//         <div className="sectionHeader centered">
//           <span className="eyebrow">BROWSE BY TYPE</span>
//           <h2>Find the right property</h2>
//           <p>Explore properties based on what you're looking for.</p>
//         </div>

//         <div className="typeGrid">
//           {propertyTypes.map((type) => {
//             const Icon = type.icon;

//             return (
//               <Link to="/list" className="typeCard" key={type.title}>
//                 <div className="typeIcon">
//                   <Icon size={25} />
//                 </div>

//                 <div>
//                   <h3>{type.title}</h3>
//                   <p>{type.count}</p>
//                 </div>

//                 <ArrowRight size={19} />
//               </Link>
//             );
//           })}
//         </div>
//       </section>

//       {/* WHY US */}
//       <section className="whyUs section">
//         <div className="whyImage">
//           <img
//             src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
//             alt="Modern interior"
//           />
//         </div>

//         <div className="whyContent">
//           <span className="eyebrow">WHY CHOOSE US</span>

//           <h2>
//             Finding your next home
//             <span> shouldn't be complicated.</span>
//           </h2>

//           <p>
//             We make it easier to discover properties, compare options and
//             connect with the right people without the usual hassle.
//           </p>

//           <div className="benefits">
//             <div>
//               <ShieldCheck size={22} />
//               <div>
//                 <h3>Verified properties</h3>
//                 <p>Browse listings with reliable property information.</p>
//               </div>
//             </div>

//             <div>
//               <Search size={22} />
//               <div>
//                 <h3>Smart search</h3>
//                 <p>Find properties using location, price and property type.</p>
//               </div>
//             </div>
//           </div>

//           <Link to="/list" className="primaryButton">
//             Explore properties
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta section">
//         <div>
//           <span className="eyebrow">READY TO MOVE?</span>
//           <h2>Let's find your next place.</h2>
//           <p>
//             Start exploring properties and discover a place that feels right.
//           </p>
//         </div>

//         <Link to="/list" className="ctaButton">
//           Start exploring
//           <ArrowRight size={18} />
//         </Link>
//       </section>
//     </main>
//   );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiSearch,
  FiMapPin,
  FiHome,
  FiKey,
  FiPlus,
} from "react-icons/fi";

import "./homePage.scss";

function HomePage() {
  return (
    <main className="homePage">
      {/* HERO */}

      <section className="hero">
        <div className="heroContent">
          <span className="eyebrow">FIND YOUR PLACE</span>

          <h1>
            Spaces that
            <span>feel like home.</span>
          </h1>

          <p>
            Discover thoughtfully selected properties for living, investing,
            renting, and building your next chapter.
          </p>

          <div className="heroActions">
            <Link to="/shop" className="primaryButton">
              Explore Properties
              <FiArrowUpRight />
            </Link>

            <Link to="/new" className="textButton">
              List your property
            </Link>
          </div>
        </div>

        <div className="heroVisual">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
            alt="Modern luxury interior"
          />

          <div className="heroImageLabel">
            <span>01</span>
            <p>Designed for the way you live.</p>
          </div>
        </div>

        {/* SEARCH */}

        <div className="heroSearch">
          <div className="searchField">
            <FiMapPin />
            <div>
              <span>Location</span>
              <strong>Where do you want to live?</strong>
            </div>
          </div>

          <div className="searchField">
            <FiHome />
            <div>
              <span>Property type</span>
              <strong>Any property</strong>
            </div>
          </div>

          <div className="searchField">
            <FiKey />
            <div>
              <span>Purpose</span>
              <strong>Buy or Rent</strong>
            </div>
          </div>

          <Link to="/shop" className="searchButton">
            <FiSearch />
            <span>Search</span>
          </Link>
        </div>
      </section>

      {/* INTRO */}

      <section className="intro">
        <div className="sectionNumber">
          <span>01</span>
          <p>THE LIVINGESTATE APPROACH</p>
        </div>

        <div className="introContent">
          <h2>
            Real estate should be
            <span>personal.</span>
          </h2>

          <p>
            Whether you're searching for your first apartment, your next family
            home, or an investment opportunity, LivingEstate brings everything
            together in one thoughtful experience.
          </p>

          <Link to="/about" className="outlineButton">
            Discover LivingEstate
            <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* FEATURED */}

      <section className="featured">
        <div className="sectionHeader">
          <div>
            <span className="eyebrow">FEATURED PROPERTIES</span>

            <h2>
              Places worth
              <span>discovering.</span>
            </h2>
          </div>

          <Link to="/shop" className="viewAll">
            View all properties
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="propertyGrid">
          <article className="propertyCard large">
            <Link to="/shop/1" className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Modern house"
              />

              <span className="propertyType">FOR SALE</span>
            </Link>

            <div className="propertyInfo">
              <div>
                <h3>Contemporary Residence</h3>
                <p>Modern living · 4 bedrooms</p>
              </div>

              <strong>$780,000</strong>
            </div>
          </article>

          <article className="propertyCard">
            <Link to="/shop/2" className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
                alt="Elegant apartment"
              />

              <span className="propertyType">FOR RENT</span>
            </Link>

            <div className="propertyInfo">
              <div>
                <h3>City Apartment</h3>
                <p>Central location · 2 bedrooms</p>
              </div>

              <strong>$2,400/mo</strong>
            </div>
          </article>

          <article className="propertyCard">
            <Link to="/shop/3" className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
                alt="Luxury living room"
              />

              <span className="propertyType">FOR SALE</span>
            </Link>

            <div className="propertyInfo">
              <div>
                <h3>Quiet Modern Home</h3>
                <p>Suburban · 3 bedrooms</p>
              </div>

              <strong>$625,000</strong>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services">
        <div className="servicesHeading">
          <span className="eyebrow">WHAT YOU CAN DO</span>

          <h2>
            One platform.
            <span>Every move.</span>
          </h2>
        </div>

        <div className="serviceGrid">
          <Link to="/shop" className="serviceCard">
            <span>01</span>

            <div>
              <h3>Find a property</h3>
              <p>
                Search homes, apartments, and spaces based on what matters to
                you.
              </p>
            </div>

            <FiArrowUpRight />
          </Link>

          <Link to="/new" className="serviceCard">
            <span>02</span>

            <div>
              <h3>List a property</h3>
              <p>
                Showcase your property and connect with people looking for their
                next home.
              </p>
            </div>

            <FiPlus />
          </Link>

          <Link to="/messages" className="serviceCard">
            <span>03</span>

            <div>
              <h3>Connect directly</h3>
              <p>Start conversations and make the next step simple.</p>
            </div>

            <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="homeCta">
        <div>
          <span className="eyebrow">YOUR NEXT CHAPTER</span>

          <h2>
            Find somewhere
            <span>you belong.</span>
          </h2>

          <Link to="/shop" className="ctaButton">
            Explore Properties
            <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
