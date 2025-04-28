import "./ContactUs.css"

function ContactUs() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-section">
            <h3>Get In Touch</h3>
            <p>
              We'd love to hear from you! Whether you're ready to book our services or just have questions, our team is
              here to help.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">+1 (555) 123-4567</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">info@weddingphotography.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">123 Wedding Studio Lane, Photography City, PC 12345</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 4pm
                  <br />
                  Sunday: Closed
                </span>
              </div>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <span className="social-icon">📷</span>
                <span className="social-icon">👤</span>
                <span className="social-icon">🐦</span>
                <span className="social-icon">📹</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Your Name <span className="required">*</span>
              </label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" className="form-input" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label htmlFor="event-date">Event Date</label>
              <div className="date-input-container">
                <input type="text" id="event-date" className="form-input" placeholder="Select date" />
                <span className="calendar-icon">📅</span>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                Your Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                className="form-textarea"
                rows="5"
                placeholder="Tell us about your event and requirements"
              ></textarea>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
