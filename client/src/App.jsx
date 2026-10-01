import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import AboutPage from "./routes/aboutPage/aboutPage";
import ContactPage from "./routes/contactPage/contactPage";
import ShopPage from "./routes/properties/shopPage";
import PropertyDetailsPage from "./routes/property/detailsPage";
import ProfilePage from "./routes/profile/profilePage";
import UpdateProfilePage from "./routes/updateProfile/updateProfilePage";
import AddPostPage from "./routes/addPost/addPostPage";
import MessagePage from "./routes/message/messagePage";
import RegisterPage from "./routes/registerPage/registerPage";
import LoginPage from "./routes/loginPage/loginPage";
// import ListPage from "./routes/listPage/listPage";
// import { Layout, RequiredAuth } from "./routes/layout/layout";
// import SinglePage from "./routes/singlePage/singlePage";
// import ProfilePage from "./routes/profilePage/profilePage";
// import Register from "./routes/register/register";
// import Login from "./routes/login/login";
// import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
// import NewPostPage from "./routes/newPostPage/newPostPage";
// import {
//   ListPageLoader,
//   ProfilePageLoader,
//   SinglePageLoader,
// } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
          // loader: ListPageLoader,
        },
        {
          path: "/details",
          element: <PropertyDetailsPage />,
          // loader: SinglePageLoader,
        },
        // {
        //   path: "/:id",
        //   element: <SinglePage />,
        //   loader: SinglePageLoader,
        // },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/updateProfile",
          element: <UpdateProfilePage />,
        },
        {
          path: "/addpost",
          element: <AddPostPage />,
        },
        {
          path: "/message",
          element: <MessagePage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    // {
    //   path: "/",
    //   element: <RequiredAuth />,
    //   children: [
    //     {
    //       path: "/profile",
    //       element: <ProfilePage />,
    //       loader: ProfilePageLoader,
    //     },
    //     {
    //       path: "/profile/update",
    //       element: <ProfileUpdatePage />,
    //     },
    //     {
    //       path: "/add",
    //       element: <NewPostPage />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
