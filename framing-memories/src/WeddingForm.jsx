import { useState } from "react";
import "./WeddingForm.css";
import ServiceCard from "./Servicecard";

function WeddingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    weddingTime: "",
    albums: "50", // Default value
    services: {},
  });

  // Define packages for each service category
  const servicePackages = {
    engagement: [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
      { name: "Drone" },
      { name: "Live" },
      { name: "Led Walls (6*8) - 2" },
    ],
    "groom-making": [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
    ],
    "bride-making": [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
    ],
    "haldi-groom": [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
      { name: "Drone" },
    ],
    "haldi-bride": [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
      { name: "Drone" },
    ],
    mehndi: [
      { name: "Candid Photo" },
      { name: "Candid Video" },
    ],
    sangeet: [
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
    ],
    wedding: [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
      { name: "Drone" },
      { name: "Live" },
      { name: "Led Walls (6*8) - 2" },
    ],
    reception: [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
      { name: "Candid Photo" },
      { name: "Candid Video" },
      { name: "Drone" },
      { name: "Live" },
      { name: "Led Walls (6*8) - 2" },
    ],
    vratham: [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
    ],
    "first-night": [
      { name: "Traditional Photo" },
      { name: "Traditional Video" },
    ],
    "pre-wedding-soot": [
      { name: "Photos" },
      { name: "Video" },
      { name: "Drone" },
    ],
  };

  // Service categories
  const firstRowServices = [
    { id: "engagement", title: "Engagement", subtitle: "Engagement Services" },
    { id: "wedding", title: "Wedding", subtitle: "Wedding Services" },
    { id: "reception", title: "Reception", subtitle: "Reception Services" },
  ];

  const secondRowServices = [
    { id: "bride-making", title: "Bride Making", subtitle: "Bride Making Services" },
    { id: "groom-making", title: "Groom Making", subtitle: "Groom Making Services" },
    { id: "haldi-bride", title: "Haldi For Bride", subtitle: "Haldi For Bride Services" },
  ];

  const thirdRowServices = [
    { id: "sangeet", title: "Sangeet", subtitle: "Sangeet Services" },
    { id: "mehndi", title: "Mehndi", subtitle: "Mehndi Services" },
    { id: "vratham", title: "Vratham", subtitle: "Vratham Services" },
  ];

  const fourthRowServices = [
    { id: "haldi-groom", title: "Haldi For Groom", subtitle: "Haldi For Groom Services" },
    { id: "first-night", title: "First Night", subtitle: "First Night Services" },
    { id: "pre-wedding-soot", title: "Pre Wedding Soot", subtitle: "Pre Wedding Soot Services" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateServiceSelection = (serviceId, packages) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceId]: packages,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="wedding-form-container">
      <h1 className="form-title">Photography & Videography Requirements</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="brideName">
              Bride Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="brideName"
              name="brideName"
              placeholder="Enter bride's name"
              className="form-input"
              value={formData.brideName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="groomName">
              Groom Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="groomName"
              name="groomName"
              placeholder="Enter groom's name"
              className="form-input"
              value={formData.groomName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="weddingDate">
              Wedding Date <span className="required">*</span>
            </label>
            <div className="date-input-container">
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                className="form-input date-input"
                value={formData.weddingDate}
                onChange={handleInputChange}
                required
              />
              <span className="calendar-icon">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="albums">
              Photo Albums <span className="required">*</span>
            </label>
            <div className="select-container">
              <select
                id="albums"
                name="albums"
                className="form-input select-input"
                value={formData.albums}
                onChange={handleInputChange}
                required
              >
                <option value="30">30 Sheets</option>
                <option value="40">40 Sheets</option>
                <option value="50">50 Sheets</option>
                <option value="60">60 Sheets</option>
                <option value="70">70 Sheets</option>
                <option value="80">80 Sheets</option>
                <option value="90">90 Sheets</option>
                <option value="100">100 Sheets</option>
                <option value="110">110 Sheets</option>
                <option value="120">120 Sheets</option>
              </select>
              <span className="select-icon">📚</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="weddingTime">
              Wedding Time <span className="required">*</span>
            </label>
            <div className="time-input-container">
              <input
                type="time"
                id="weddingTime"
                name="weddingTime"
                className="form-input time-input"
                value={formData.weddingTime}
                onChange={handleInputChange}
                required
              />
              <span className="time-icon">🕒</span>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {[...firstRowServices, ...secondRowServices, ...thirdRowServices, ...fourthRowServices].map((category) => (
            <ServiceCard
              key={category.id}
              title={category.title}
              subtitle={category.subtitle}
              serviceId={category.id}
              packages={servicePackages[category.id]}
              onPackageChange={updateServiceSelection}
            />
          ))}
        </div>

        <button type="submit" className="submit-button">
          Submit Requirements
        </button>
      </form>
    </div>
  );
}

export default WeddingForm;