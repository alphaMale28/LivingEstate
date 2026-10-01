// import { Navigate, Outlet } from "react-router-dom";

// import Navbar from "../../components/navbar/navbar";
// import "./layout.scss";
// import { useAuthStore } from "../../store/useAuthStore";
// import { Toaster } from "react-hot-toast";
// import Footer from "../../components/footer/footer";

// function Layout() {
//   return (
//     <div className="layout">
//       <Toaster />
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="content">
//         <Outlet />
//       </div>
//       <div className="footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// function RequiredAuth() {
//   const { userAuth } = useAuthStore();

//   return !userAuth ? (
//     <Navigate to="/login" />
//   ) : (
//     <div className="layout">
//       {/* <Toaster /> */}
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="content">
//         <Outlet />
//       </div>
//       <div className="footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export { Layout, RequiredAuth };

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "../../components/navbar/navbar";
import "./layout.scss";
import Footer from "../../components/footer/footer";

function Layout() {
  return (
    <div className="layout">
      <Toaster />
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export { Layout };
