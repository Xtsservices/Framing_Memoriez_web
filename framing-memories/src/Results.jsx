import "./Results.css";
import { useRef } from "react";

function Results({ formData, setActiveSection }) {
  const printSectionRef = useRef(null);

  if (!formData) {
    return <div>No data submitted</div>;
  }

  const handleBackToHome = () => {
    setActiveSection("home");
  };

  // Enhanced print function
  const handlePrint = () => {
    const printContent = printSectionRef.current;
    const originalContents = document.body.innerHTML;
    
    // Create a styled print version
    const printStyles = `
      <style>
        @page { size: portrait; margin: 1cm; }
        body { font-family: 'Arial', sans-serif; color: #333; }
        .print-header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
        .print-title { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .print-subtitle { font-size: 16px; color: #666; }
        .print-section { margin-bottom: 20px; }
        .print-section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; border-left: 4px solid #3b82f6; padding-left: 10px; }
        .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px; }
        .info-item { padding: 10px; background-color: #f8fafc; border-radius: 5px; }
        .info-label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
        .info-value { font-size: 16px; }
        .service-group { margin-bottom: 20px; }
        .service-group-title { font-size: 16px; font-weight: bold; margin-bottom: 10px; color: #1e40af; }
        .service-row { display: flex; padding: 8px 0; border-bottom: 1px solid #eee; }
        .service-name { flex: 0 0 250px; font-weight: bold; }
        .service-packages { flex: 1; }
        .service-package { display: inline-block; background-color: #dbeafe; padding: 2px 8px; border-radius: 12px; margin-right: 5px; margin-bottom: 5px; font-size: 14px; }
        .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px; }
      </style>
    `;
    
    // Format date for better readability
    const formatDate = (dateString) => {
      if (!dateString) return "Not specified";
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };
    
    // Group services by category
    const groupServices = () => {
      const categories = {
        "Pre-Wedding": ["engagement", "pre-wedding-soot"],
        "Bride Events": ["bride-making", "haldi-bride", "mehndi"],
        "Groom Events": ["groom-making", "haldi-groom", "vratham"],
        "Main Events": ["sangeet", "wedding", "reception", "first-night"]
      };
      
      const groupedServices = {};
      
      // Initialize groups
      Object.keys(categories).forEach(group => {
        groupedServices[group] = [];
      });
      
      // Add services to appropriate groups
      Object.entries(formData.services || {}).forEach(([serviceId, packages]) => {
        if (packages && packages.length === 0) return;
        
        // Find which group this service belongs to
        let foundGroup = null;
        for (const [group, services] of Object.entries(categories)) {
          if (services.includes(serviceId)) {
            foundGroup = group;
            break;
          }
        }
        
        // Add to appropriate group
        if (foundGroup) {
          groupedServices[foundGroup].push({
            id: serviceId,
            packages
          });
        }
      });
      
      return groupedServices;
    };
    
    const groupedServices = groupServices();
    
    // Format service name
    const formatServiceName = (serviceId) => {
      return serviceId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    // Current date for the receipt
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Generate print content
    const printDocument = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Wedding Photography Requirements - ${formData.brideName} & ${formData.groomName}</title>
        ${printStyles}
      </head>
      <body>
        <div class="print-header">
          <div class="print-title">Wedding Photography & Videography Requirements</div>
          <div class="print-subtitle">Generated on ${today}</div>
        </div>
        
        <div class="print-section">
          <div class="print-section-title">Couple Information</div>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Bride:</span>
              <span class="info-value">${formData.brideName}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Groom:</span>
              <span class="info-value">${formData.groomName}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Wedding Date:</span>
              <span class="info-value">${formatDate(formData.weddingDate)}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Wedding Time:</span>
              <span class="info-value">${formData.weddingTime || "Not specified"}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Photo Album:</span>
              <span class="info-value">${formData.albums} Sheets</span>
            </div>
          </div>
        </div>
        
        <div class="print-section">
          <div class="print-section-title">Photography & Videography Services</div>
          ${Object.entries(groupedServices).map(([group, services]) => 
            services.length > 0 ? `
              <div class="service-group">
                <div class="service-group-title">${group}</div>
                ${services.map(service => `
                  <div class="service-row">
                    <div class="service-name">${formatServiceName(service.id)}</div>
                    <div class="service-packages">
                      ${service.packages.map(pkg => `
                        <span class="service-package">${pkg}</span>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''
          ).join('')}
        </div>
        
        <div class="footer">
          © ${new Date().getFullYear()} Wedding Photography Services • All Rights Reserved
        </div>
      </body>
      </html>
    `;
    
    // Open new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printDocument);
    printWindow.document.close();
    
    // Wait for resources to load then print
    printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
      printWindow.onafterprint = function() {
        printWindow.close();
      };
    };
  };

  // Format date for better readability
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Group services by category
  const groupServices = () => {
    const categories = {
      "Pre-Wedding": ["engagement", "pre-wedding-soot"],
      "Bride Events": ["bride-making", "haldi-bride", "mehndi"],
      "Groom Events": ["groom-making", "haldi-groom", "vratham"],
      "Main Events": ["sangeet", "wedding", "reception", "first-night"]
    };
    
    const groupedServices = {};
    
    // Initialize groups
    Object.keys(categories).forEach(group => {
      groupedServices[group] = [];
    });
    
    // Add services to appropriate groups
    Object.entries(formData.services || {}).forEach(([serviceId, packages]) => {
      if (packages && packages.length === 0) return;
      
      // Find which group this service belongs to
      let foundGroup = null;
      for (const [group, services] of Object.entries(categories)) {
        if (services.includes(serviceId)) {
          foundGroup = group;
          break;
        }
      }
      
      // Add to appropriate group
      if (foundGroup) {
        groupedServices[foundGroup].push({
          id: serviceId,
          packages
        });
      }
    });
    
    return groupedServices;
  };

  const groupedServices = groupServices();
  
  // Format service name
  const formatServiceName = (serviceId) => {
    return serviceId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="results-container" ref={printSectionRef}>
      <h1 className="results-title">Wedding Photography Requirements</h1>
      
      <div className="results-card">
        <div className="results-section basic-info">
          <h2>Couple Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Bride:</span>
              <span className="info-value">{formData.brideName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Groom:</span>
              <span className="info-value">{formData.groomName}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Wedding Date:</span>
              <span className="info-value">{formatDate(formData.weddingDate)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Wedding Time:</span>
              <span className="info-value">
                {formData.weddingTime || "Not specified"}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Photo Album:</span>
              <span className="info-value">{formData.albums} Sheets</span>
            </div>
          </div>
        </div>

        <div className="results-section services-info">
          <h2>Photography & Videography Services</h2>
          
          {Object.keys(groupedServices).length > 0 ? (
            Object.entries(groupedServices).map(([group, services]) => (
              services.length > 0 && (
                <div key={group} className="service-group">
                  <h3>{group}</h3>
                  <div className="services-table">
                    {services.map(service => (
                      <div key={service.id} className="service-row">
                        <div className="service-name">{formatServiceName(service.id)}</div>
                        <div className="service-packages">
                          {service.packages.map((pkg, index) => (
                            <span key={index} className="service-package">
                              {pkg}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))
          ) : (
            <p className="no-services">No services selected</p>
          )}
        </div>
      </div>

      <div className="actions">
        <button className="print-button" onClick={handlePrint}>
          Print Summary
        </button>
        <button className="back-button" onClick={handleBackToHome}>
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default Results;