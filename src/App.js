import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./css/style.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <RouterProvider router={createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}>
          <Route index element={<Home isDarkMode={isDarkMode} />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      )
    )} />
  );
}

export default App;
