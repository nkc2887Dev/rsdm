import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Admin from "./Components/Admin/Admin";
import About from "./page/AboutUs/About";
import Contact from "./page/AboutUs/Contact";
import Course from "./page/Courses/Course";
import Home from "./page/Home/Home";
import Placements from "./page/Placements/Placements";
import Layout from "./Components/Layout";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
