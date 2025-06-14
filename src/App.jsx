import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import LenisScroll from "./components/LenisScroll";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./pages/Privacy";
import Portal from "./pages/Portal";
import Lead from "./pages/Lead";

const App = () => {
  return (
    <LenisScroll>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/client-portal" element={<Portal />} />
            <Route path="/book-a-consultation" element={<Lead />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LenisScroll>
  );
};

export default App;
