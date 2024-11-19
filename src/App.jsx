import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./components/contact"; // Ensure this path is correct
import Home from "./components/homepage";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your app with Router */}
      <div className="gap-10">
        <Navbar />
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
