import { useState } from "react";
import "./App.css";
import WeddingForm from "./WeddingForm";
import About from "./About";
import ContactUs from "./ContactUs";
import Results from "./Results";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setActiveSection("results");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <button
              className={`navbar-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`navbar-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => setActiveSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`navbar-link ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => setActiveSection("contact")}
            >
              Contact Us
            </button>
          </li>
          {formData && (
            <li>
              <button
                className={`navbar-link ${activeSection === "results" ? "active" : ""}`}
                onClick={() => setActiveSection("results")}
              >
                Results
              </button>
            </li>
          )}
        </ul>
      </nav>

      <div className="content">
        {activeSection === "home" && <WeddingForm onSubmit={handleFormSubmit} />}
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <ContactUs />}
        {activeSection === "results" && (
          <Results formData={formData} setActiveSection={setActiveSection} />
        )}
      </div>
    </div>
  );
}

export default App;