import { Link } from "react-router-dom";
import { ArrowUpRight, Bell, Menu, X } from "lucide-react";
import { useState } from "react";

// import { useAuthStore } from "../../store/useAuthStore";

import "./navbar.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const { userAuth } = useAuthStore();

  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="navbar">
      {/* DESKTOP */}
      <div className="navbarInner">
        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brandMark">LE</span>

          <span className="brandName">
            LIVING
            <span>ESTATE</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/shop">Property</Link>
          {/* <Link to="/list?type=rent">Rent</Link>
          <Link to="/list?type=sale">Buy</Link> */}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* USER */}
        <div className="navActions">
          <>
            <Link to="/profile" className="notification">
              <Bell size={17} />
              <span>3</span>
            </Link>

            <Link to="/profile" className="user">
              <div className="avatar">
                <img src="/Sophia.avif" alt="Profile" />
                {/* <img src={userAuth.avatar || "/avatar.jpg"} alt="Profile" /> */}
              </div>

              <span>"Sophia Bennett"</span>
              {/* <span>{userAuth.username}</span> */}

              <ArrowUpRight size={14} />
            </Link>
          </>
          <>
            <Link to="/login" className="login">
              Login
            </Link>

            <Link to="/register" className="register">
              Register
              <ArrowUpRight size={14} />
            </Link>
          </>
          {/* {userAuth ? (
            <>
              <Link to="/profile" className="notification">
                <Bell size={17} />
                <span>3</span>
              </Link>

              <Link to="/profile" className="user">
                <div className="avatar">
                  <img src={userAuth.avatar || "/avatar.jpg"} alt="Profile" />
                </div>

                <span>{userAuth.username}</span>

                <ArrowUpRight size={14} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="login">
                Login
              </Link>

              <Link to="/register" className="register">
                Register
                <ArrowUpRight size={14} />
              </Link>
            </>
          )} */}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="menuToggle"
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {openMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobileMenu ${openMenu ? "active" : ""}`}>
        <div className="mobileMenuInner">
          <div className="mobileTop">
            <span>MENU</span>
            <span>01 — 05</span>
          </div>

          <div className="mobileLinks">
            <Link to="/" onClick={closeMenu}>
              <span>01</span>
              Home
            </Link>

            <Link to="/list?type=rent" onClick={closeMenu}>
              <span>02</span>
              Rent
            </Link>

            <Link to="/list?type=sale" onClick={closeMenu}>
              <span>03</span>
              Buy
            </Link>

            <Link to="/about" onClick={closeMenu}>
              <span>04</span>
              About
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              <span>05</span>
              Contact
            </Link>
          </div>

          <div className="mobileBottom">
            <Link to="/profile" onClick={closeMenu}>
              <div className="avatar">
                <img src="/Sophia.avif" alt="Profile" />
                {/* <img src={userAuth.avatar || "/avatar.jpg"} alt="Profile" /> */}
              </div>

              <span>Sophia Bennett</span>
              {/* <span>{userAuth.username}</span> */}

              <ArrowUpRight size={15} />
            </Link>
            <div className="mobileAuth">
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>

              <Link to="/register" onClick={closeMenu}>
                Register
              </Link>
            </div>
            {/* {userAuth ? (
              <Link to="/profile" onClick={closeMenu}>
                <div className="avatar">
                  <img src={userAuth.avatar || "/avatar.jpg"} alt="Profile" />
                </div>

                <span>{userAuth.username}</span>

                <ArrowUpRight size={15} />
              </Link>
            ) : (
              <div className="mobileAuth">
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>

                <Link to="/register" onClick={closeMenu}>
                  Register
                </Link>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX, FiHeart, FiUser, FiPlus } from "react-icons/fi";

// import "./navbar.scss";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="navbarInner">
//         {/* LOGO */}

//         <Link to="/" className="brand">
//           <span className="brandMark">L</span>

//           <div className="brandText">
//             <strong>Living</strong>
//             <span>Estate</span>
//           </div>
//         </Link>

//         {/* DESKTOP NAVIGATION */}

//         <nav className="desktopNav">
//           <Link to="/">Home</Link>
//           <Link to="/shop">Properties</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         {/* DESKTOP ACTIONS */}

//         <div className="navbarActions">
//           <Link to="/favorites" className="iconButton">
//             <FiHeart />
//           </Link>

//           <Link to="/profile" className="profileButton">
//             <FiUser />
//             <span>Account</span>
//           </Link>

//           <Link to="/new" className="listProperty">
//             <FiPlus />
//             <span>List Property</span>
//           </Link>
//         </div>

//         {/* MOBILE MENU BUTTON */}

//         <button
//           className="menuButton"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* MOBILE NAVIGATION */}

//       <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
//         <nav>
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>

//           <Link to="/shop" onClick={() => setMenuOpen(false)}>
//             Properties
//           </Link>

//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </Link>

//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </Link>
//         </nav>

//         <div className="mobileActions">
//           <Link to="/favorites" onClick={() => setMenuOpen(false)}>
//             <FiHeart />
//             Favorites
//           </Link>

//           <Link to="/profile" onClick={() => setMenuOpen(false)}>
//             <FiUser />
//             Account
//           </Link>

//           <Link
//             to="/new"
//             className="mobileListProperty"
//             onClick={() => setMenuOpen(false)}
//           >
//             <FiPlus />
//             List Property
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
