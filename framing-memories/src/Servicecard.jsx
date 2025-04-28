/* ServiceCard.jsx */
import { useState } from "react";
import "./Servicecard.css";

function ServiceCard({ title, subtitle, serviceId, packages = [], onPackageChange }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState([]);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  const handlePackageChange = (packageName) => {
    const newPackages = selectedPackages.includes(packageName)
      ? selectedPackages.filter((pkg) => pkg !== packageName)
      : [...selectedPackages, packageName];
    
    setSelectedPackages(newPackages);
    onPackageChange(serviceId, newPackages);
  };

  return (
    <div className={`service-card ${isActive ? "active" : ""}`}>
      <div className="service-header" onClick={handleCardClick}>
        <h3 className="service-title">{title}</h3>
        <p className="service-subtitle">{subtitle}</p>
      </div>

      <div className="mcq-container">
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <div key={pkg.name} className="mcq-option">
              <label>
                <input
                  type="checkbox"
                  value={pkg.name}
                  checked={selectedPackages.includes(pkg.name)}
                  onChange={() => handlePackageChange(pkg.name)}
                  disabled={!isActive}
                />
                {pkg.name}
              </label>
              {pkg.services?.length > 0 && (
                <p className="package-details">{pkg.services.join(", ")}</p>
              )}
            </div>
          ))
        ) : (
          <p>No packages available</p>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;