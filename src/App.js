import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./css/style.css";
import RootLayout from "./layout/RootLayout.js";
import Home from "./pages/Home.js";
import Error404 from "./pages/Error404.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
