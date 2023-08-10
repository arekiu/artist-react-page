import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
