import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import GitHub, { githubInfo } from "./components/GitHub/GitHub";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
createRoutesFromElements(
 <Route path="/" element ={<Layout/>}>
  <Route path="" element={<Home/>}/>
  <Route path="about" element={<About/>} />
  <Route path ="contact" element={<Contact/>}/>
  <Route path="user:userid" element={<User/>} />
  <Route path="github" loader={githubInfo} element={<GitHub/>} />
   </Route>
)
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
