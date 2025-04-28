import "./About.css"

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Our Wedding Photography Services</h2>

      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image">
            {/* Placeholder for an image */}
            <div className="placeholder-image">
              <span>Wedding Photography</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h3>Capturing Your Special Moments</h3>
          <p>
            Welcome to our premium wedding photography and videography services. With over 10 years of experience
            capturing the most beautiful moments of couples' special days, we pride ourselves on our attention to detail
            and artistic vision.
          </p>

          <p>
            Our team of professional photographers and videographers specializes in a variety of styles, from
            traditional to contemporary, ensuring that your wedding memories are preserved exactly as you envision them.
          </p>

          <h3>Our Approach</h3>
          <p>
            We believe that every wedding tells a unique story. Our approach is to work closely with you to understand
            your vision, preferences, and the special moments you want to capture. We blend into the background during
            your celebrations, capturing authentic emotions and creating a visual narrative of your special day.
          </p>

          <h3>Our Services</h3>
          <ul className="services-list">
            <li>Pre-wedding photoshoots</li>
            <li>Engagement ceremonies</li>
            <li>Traditional wedding photography</li>
            <li>Candid photography</li>
            <li>Cinematic wedding films</li>
            <li>Drone photography and videography</li>
            <li>Same-day edits</li>
            <li>Custom wedding albums</li>
          </ul>
        </div>
      </div>

      <div className="testimonials">
        <h3>What Our Clients Say</h3>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "They captured our wedding day perfectly! Every emotion, every smile, every tear - all beautifully
              preserved in our photos and videos."
            </p>
            <div className="testimonial-author">- Sarah & James</div>
          </div>

          <div className="testimonial-card">
            <p>"Professional, creative, and so easy to work with. Our wedding album exceeded all our expectations!"</p>
            <div className="testimonial-author">- Priya & Rahul</div>
          </div>

          <div className="testimonial-card">
            <p>
              "The team was incredible - they were practically invisible during the ceremony but somehow managed to
              capture every important moment."
            </p>
            <div className="testimonial-author">- Michael & David</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
